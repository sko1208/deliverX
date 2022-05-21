// scrip fot burger menu
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
    
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});



// slider
var slider = tns ({
    
    
        "container": "#vertical",
        "items": 3,
        "axis": "vertical",
        "swipeAngle": false,
        "speed": 400,
        "gutter": 30,
        "controls": false,
        "nav": false,
        "autoplay": true,
        "autoplayButtonOutput": false,
        "mouseDrag": true,
        "autoplayTimeout": 5000,
        "speed": 2000,

});

  var slider = tns ({
    
    
    "container": "#vertica",
    "items": 3,
    "axis": "vertical",
    "swipeAngle": false,
    "speed": 400,
    "gutter": 30,
    "controls": false,
    "nav": false,
    "autoplay": true,
    "autoplayButtonOutput": false,
    "mouseDrag": true,
    "autoplayTimeout": 3000,
    "speed": 2000,
    "autoplayDirection": 'backward'


    
  
});

var slider = tns ({
    
    
    "container": "#mobile-slider",
    "items": 3,
    "axis": "horizontal",
    "swipeAngle": false,
    "speed": 400,
    "gutter": 30,
    "controls": false,
    "nav": false,
    "autoplay": true,
    "autoplayButtonOutput": false,
    "mouseDrag": true,
    "autoplayTimeout": 3000,
    "speed": 2000,
    "autoHeight": true,
    "autoplayDirection": 'backward',
    "responsive": {
        320: {
          "items": 1
        },
        577: {
            "items": 3
          }
    }
});




  