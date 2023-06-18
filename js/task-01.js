const itemsCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsCategories.length}`);

itemsCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
