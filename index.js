function getFirstSelector(selector) {
  var apples = document.querySelector(selector)
  return apples
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
 const bananas = document.querySelectorAll('ul.ranked-list li')
 for (let i = 0; i < bananas.length; i++) {
   var lemons = parseInt(bananas[i].innerHTML)
   bananas[i].innerHTML = (lemons + n)
 }
}

function deepestChild() {
 const cherries = document.querySelector('#grand-node')
 var mango = cherries.children[0]
 var onion;
 while (mango) {
   onion = mango
   mango = mango.children[0]
 }
 return onion
}
