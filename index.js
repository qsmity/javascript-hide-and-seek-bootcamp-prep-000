var getFirstSelector = function(selector){
  document.querySelector('h1')
}


var nestedTarget = function(){
 document.querySelector("div#nested").getElementByClassName("target")
}


var increaseRankBy = function(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (i = 0; i < lis.length; i++){
    lis[i].innerHtml = (i + parseInt(n)).toString()
  }
}

var deepestChild = function(){
 const childList = document.querySelector('div#grand-node')
 
 for (i = 0; i < lis.length; i++){
   
   if (lis[i].innerHtml === "boo!"){
     return lis[i]
   }
   
   
 }
 
 return null
}
