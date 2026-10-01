export class UiExecutor {
  constructor({ editor, outputElement, mode = 'javascript' } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
    this.mode = mode;
    this.currentExecution = null;
  }

  stop() {
    if (this.outputElement) {
      this.outputElement.innerHTML = '';
    }

    if (this.currentExecution && typeof this.currentExecution.stop === 'function') {
      this.currentExecution.stop();
    }

    this.currentExecution = null;
  }

  run() {
    const code = this.editor?.getValue?.() || '';
    this.stop();

    if (this.mode === 'html') {
      this.runHtml(code);
      return;
    }

    try {
      const outputElement = this.outputElement;
      const userFunction = new Function('outputElement', `
        'use strict';
        ${code}
      `);

      this.currentExecution = userFunction(outputElement);
    } catch (err) {
      if (this.outputElement) {
        this.outputElement.innerHTML = `<div style="color: red; padding: 1rem;">Error: ${err.message}</div>`;
      }
    }
  }
}

// HTML mode: render the markup, then run any <script> blocks with outputElement available.
UiExecutor.prototype.runHtml = function runHtml(code) {
  const outputElement = this.outputElement;
  if (!outputElement) return;

  outputElement.innerHTML = code;
  const scripts = Array.from(outputElement.querySelectorAll('script'));
  for (const script of scripts) {
    const source = script.textContent;
    script.remove();
    try {
      new Function('outputElement', source)(outputElement);
    } catch (err) {
      const message = document.createElement('div');
      message.style.cssText = 'color: red; padding: 1rem;';
      message.textContent = 'Error: ' + err.message;
      outputElement.appendChild(message);
    }
  }
};

export default UiExecutor;
