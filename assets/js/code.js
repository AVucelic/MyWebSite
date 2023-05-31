function validateForm(){
    var inputs = document.querySelectorAll('input[name^="q"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == null) {
          alert('Please answer all the questions before submitting the quiz.');
          return false; // Prevent the form from being submitted
        }
      }
      
    // If all questions have been answered, allow the form to be submitted
    return true;
}

function openSubMenu(index){
    var subMenu = document.getElementsByClassName("sub-menu")[index];
    if(subMenu.style.display == 'block'){
      subMenu.style.display = 'none';
    }else{
      subMenu.style.display = 'block';
    }

}
function openingMenu(){
  var menu = document.getElementById("nav-menu");
  console.log(menu);
  if(menu.style.display == 'block'){
      menu.style.display = 'none';
  }else{
      menu.style.display = 'block';
  }


}

var scroll = window.requestAnimationFrame ||
            function(callback){window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){
  elementsToShow.forEach(function(element){
    if(isElementInViewport(element)){
      element.classList.add('is-visible');
    } else{
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
loop();

function isElementInViewport(el){
  if(typeof jQuery === "function" && el instanceof jQuery){
    el = el[0];
  }
  var rect = el.getBoundingClientReact();
  return((rect.top<=0 && rect.bottom >=0) ||
  (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.top <= (window.innerHeight || document.documentElement.clientHeight))
  ||
  (rect.top>=0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight))
  );
}





