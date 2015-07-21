// console.log("sanity check!");

var firstParagraph = document.getElementById('main');
// console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
// console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
// console.log(getSingleElement);

var getFirstLiElement = document.getElementsByTagName('li')[0];

var allListItems = document.getElementsByTagName('li');
// console.log(allListItems);

for (var i = 0; i < allListItems.length; i++) {
  // console.log(allListItems[i].innerText);
}
// console.log(allListItems);

var li = document.createElement('li');
// console.log(li);

var newElement = li.innerText = "another list item";
// console.log(newElement);
// console.log(li);

getSingleElement.appendChild(li);
// console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
// console.log(anotherListElement);

getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
// console.log(allListItems);

var yetAnotherListElement = document.createElement('li');
yetAnotherListElement.innerText = "another prepended li element";
getSingleElement.insertBefore(yetAnotherListElement, getSingleElement.firstChild);
// console.log(allListItems);

var secondElement = document.getElementsByTagName('li')[1];
console.log(secondElement);
var theNewestElement = document.createElement('li');
theNewestElement.innerText = "The Newest Element";
secondElement.appendChild(theNewestElement);
