var getFirstSelector = function(selector){
  document.querySelector('h1')
}


var nestedTarget = function(){
 document.querySelector("div #nested .target ")
}


var increaseRankBy = function(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (i = 0; i < lis.length; i++){
    lis[i].innerHtml = (i + 1)
  }
}

