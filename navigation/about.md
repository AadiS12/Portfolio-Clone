---
layout: post
title: About
permalink: /about/
comments: true
---

## As a conversation Starter

Here are some of the places that I relate to and my favorite fruits.

<!-- Images are made using Wikipedia images -->

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.grid-item {
  text-align: center;
}

.grid-item img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}

.grid-item p {
  margin: 5px 0;
}

.image-gallery {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
}

.image-gallery img {
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px;
}
</style>

## 🌎 Places that are important to me

<div class="grid-container" id="places_container"></div>

## 🍓 Favorite Fruits

<div class="grid-container" id="fruits_container"></div>

<noscript>
<div class="grid-container">
  <div class="grid-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" alt="Strawberries" loading="lazy">
    <p><b>Strawberries</b></p>
    <p>Sweet and juicy.</p>
  </div>

  <div class="grid-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" alt="Oranges" loading="lazy">
    <p><b>Oranges</b></p>
    <p>Great for juice.</p>
  </div>

  <div class="grid-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Close_up_grapes.jpg" alt="Grapes" loading="lazy">
    <p><b>Grapes</b></p>
    <p>Perfect for snacking.</p>
  </div>

  <div class="grid-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" alt="Bananas" loading="lazy">
    <p><b>Bananas</b></p>
    <p>Great source of energy before physical activity.</p>
  </div>
</div>
</noscript>

<script>
document.addEventListener("DOMContentLoaded", function () {

  var places = [
    {
      name: "California",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
      description: "Been here all my life and love it."
    },
    {
      name: "India",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
      description: "Originally where my parents were from and where most of my family lives."
    }
  ];

  var fruits = [
    {
      name: "Strawberries",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
      description: "Sweet and juicy."
    },
    {
      name: "Oranges",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
      description: "Great for juice."
    },
    {
      name: "Grapes",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Close_up_grapes.jpg",
      description: "Perfect for snacking."
    },
    {
      name: "Bananas",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
      description: "Great source of energy before physical activity."
    }
  ];

  function buildGrid(data, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
      var item = data[i];

      var gridItem = document.createElement("div");
      gridItem.className = "grid-item";

      var img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.loading = "lazy";

      var name = document.createElement("p");
      name.innerHTML = "<b>" + item.name + "</b>";

      var desc = document.createElement("p");
      desc.textContent = item.description;

      gridItem.appendChild(img);
      gridItem.appendChild(name);
      gridItem.appendChild(desc);

      container.appendChild(gridItem);
    }
  }

  buildGrid(places, "places_container");
  buildGrid(fruits, "fruits_container");

});
</script>

---

### Journey through Life So Far

Here is what I did at those places

- 🏫 Went to Design 39 from TK to 5th Grade  
- 🏫 Moved to Oak Valley for middle school and stayed all three years  
- 🏫 Started high school at Del Norte this year (2025)  
- ⚽ I love playing soccer and have played since I was little  
- 💻🛡️ I'm in a cybersecurity club called cyberaegis since 7th grade  

### Culture, Family, and Fun

My life revolves around family, sports and friends.

- My family that I live with consists of a little sister in 5th grade, and then my mom and dad.  
- Me and my sister were born here but my parents originate from India.

<!-- Gallery of Pictures -->
<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/aadi_dog.jpg" alt="Golden Retriever">
  <img src="{{site.baseurl}}/images/about/aadi_laptop.jpg" alt="Aadi with Laptop and Dog">
  <img src="{{site.baseurl}}/images/about/aadi_outdoor.png" alt="Aadi Outdoors">
  <img src="{{site.baseurl}}/images/about/aadi_cooking.png" alt="Mom Cooking">
</div>
