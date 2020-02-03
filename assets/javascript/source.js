// var instance = M.Carousel.getInstance(elem);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
        numVisible: 3,
        indicators: true,
        padding: 0,
    });
  });
      
//   const mobile_nav = document.querySelectorAll(".sidenav");
//   M.Sidenav.init(mobile_nav,{});