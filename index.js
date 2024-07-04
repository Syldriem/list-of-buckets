const item = document.createElement("p");
item.innerText = "Travel to _";
document.body.appendChild(item);
const item2 = document.createElement("p");
item2.innerText = "Do _";
document.body.insertAdjacentElement("beforeend", item2);
const list = document.querySelector(".list");
console.log(list.innerHTML);
const newItem = "<div>Eat _</div>";
//document.querySelector(".list").innerHTML = newItem;
list.insertAdjacentHTML("afterbegin", newItem);
const childlist = list.children;
const item3 = document.createElement("p");

for (i = 0; i < 3; i++) {
	list.insertAdjacentHTML("beforeend", newItem);
}

console.log(list.children.length)
