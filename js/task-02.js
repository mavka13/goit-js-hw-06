const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

console.log(ingredientsEl)

const ingrListItems = ingredients.map((ingredient) => {
  
  const ingrListItem = document.createElement("li");
  
  ingrListItem.textContent = ingredient;
  ingrListItem.classList.add("item");
  return ingrListItem;
})
console.log(ingredients);
ingredientsEl.append(...listRefs);
