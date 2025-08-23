const li = document.querySelectorAll(".item");
console.log(`Number of categories:${li.length}`);
li.forEach((item) => {
  const category = item.querySelector("h2");
  const elements = item.querySelectorAll("li");
  console.log(`Elements:${elements.length}`);
  console.log(`Category: ${category.textContent}`);
});
