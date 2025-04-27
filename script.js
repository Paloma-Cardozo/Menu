const menuDatabase = [
    [
      "Papadum",
      20,
      "vegetarian",
      "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg",
    ],
    [
      "Pakora",
      50,
      "meat",
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
    ],
    [
      "Tandoori Chicken",
      60,
      "meat",
      "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
    ],
    [
      "Samosa",
      50,
      "vegetarian",
      "https://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg",    ],
  ];  
  
const ul = document.getElementById("menu-list");

function renderMenu(menuArray) {
    ul.innerHTML =  "";

    for (let item of menuArray) {
        const [name, price, type, imageURL] = item;
        
        const li = document.createElement("li");
        
        if (type === "vegetarian") {
          li.classList.add("vegetarian"); 
        } else if (type === "meat") {
          li.classList.add("meat"); 
        }

        const img = document.createElement("img");
        img.src = imageURL;
        img.alt = name;

        const pName = document.createElement("p");
        pName.textContent = `Name: ${name}`;
        
        const pPrice = document.createElement("p");
        pPrice.textContent = `Price: ${price} kr`;
        
        const pType = document.createElement("p");
        pType.textContent = `Type: ${type}`;

        li.appendChild(img);
        li.appendChild(pName);
        li.appendChild(pPrice);
        li.appendChild(pType);
        
        ul.appendChild(li);
}}

renderMenu(menuDatabase);

document.getElementById("Vegetarian").addEventListener("click", function() {
    const vegetarianMenu = menuDatabase.filter(item => item[2] === "vegetarian");
    renderMenu(vegetarianMenu);
});

document.getElementById("Meat").addEventListener("click", function() {
    const meatMenu = menuDatabase.filter(item => item[2] === "meat");
    renderMenu(meatMenu);
});

document.getElementById("All").addEventListener("click", function() {
    renderMenu(menuDatabase);
});



 