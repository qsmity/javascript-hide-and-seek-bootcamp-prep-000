var getFirstSelector = function(selector){
 return  document.querySelector(selector)
}


var nestedTarget = function(){
 return document.getElementById("nested").querySelector(".target")
}


var increaseRankBy = function(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHtml = parseInt(lis[i].innerHtml) + n
  }
}

var deepestChild = function(){
 var childList = document.querySelector('div#grand-node')
 var current = []
 
 while(childList.querySelector('div')){
   childList = childList.querySelector('div')
   current.push(childList)
 }
 
 return current.pop()
}
deepestChild()