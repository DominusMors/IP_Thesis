/*=============================================
                SERVICES
==============================================*/

$(function () {
   
    // animate on scroll (initilize wow plugin)
    new WOW().init();
});

/*=============================================
                NAVIGATION
==============================================*/
//Show/Hide transparent black navigation

$(function() {
    
    $(window).scroll(function() {
                     
        if($(this).scrollTop() <50 ) {
            //Hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
            
        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
            
        }
        
    });

});

/*=============================================
                SMOOTH SCROLLING
==============================================*/

$(function() {
    
    $("a.smooth-scroll").click(function(event){
        
        //prevent link opening url
        event.preventDefault();
        
        
        // get/return id like #about, #work etc..
        var section = $(this).attr("href");
        
        $('html, body').animate({
            
            scrollTop: $(section).offset().top -64
        }, 1250, "easeInOutExpo");
        
    });


});

// Close mobile menu on item click 
$(function() {

    $(".navbar-collapse ul li a").on("click touch", function(){
        
        $(".navbar-toggle").click();
        
    });
    
});


/*==================================================================================
                                RESPONSIVE IMAGE GALLERY
==================================================================================*/

$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  $("video").click(function(){
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
    $("#myModal").modal();  
  });
  });//EOF Document.ready


/*==================================================================================
                                Roxy Effect
==================================================================================*/


// This Script makes the images on index_sights popup 

function showImage(src) {
  var modal = document.getElementById("image-modal");
  var modalContent = document.getElementById("image-modal-content");
  modalContent.src = src;
  modal.style.display = "block";
  
  
  var closeModal = document.getElementsByClassName("close-modal")[0];
  closeModal.onclick = function() {
    modal.style.display = "none";
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    var blurBackground = document.getElementById("blur-background");
    blurBackground.parentNode.removeChild(blurBackground);
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
        
      var blurBackground = document.getElementById("blur-background");
      blurBackground.parentNode.removeChild(blurBackground);
    }
  }
}
const showDialog = () => {
    document.getElementById('image-modal').classList.add('image-modal-content')
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };
  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('image-modal').classList.remove('image-modal-content');
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });$



/*
 onclick="openImage('img/sights/blue_marble.jpg')"
<script>
function openImage(imageUrl) {
window.open(imageUrl, '_blank', 'height=750,width=800');
} */
