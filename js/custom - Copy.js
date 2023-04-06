/*=============================================
                SERVICES
==============================================*/

$(function () {
   
    // animate on scroll (initilize wow plugin
    new WOW().init();
});

/*=============================================
                WORK
==============================================*/

// $(function (){
    
//     // Select HTML element with id=work    
//     $("#work").magnificPopup({      
//         //child item selector, by clicking on it, popup will open
//         delegate: 'a', 
//         type: 'image',       
//         gallery:{
//             enabled: true
//         }
//     });

// });
    
/*=============================================
                TEAM
==============================================*/
$(function() {    
    $("#team-members").owlCarousel({        
        items: 3,
        autoplay: true,
        smartSpeed: 700,             // move slower when changing
        loop: true,
        autoplayHoverPause: true,
         responsive : 
        {
            // breakpoint from 0 up
            0 : {

                items: 1
            },
            // breakpoint from 480 up
            480 : {

                items: 2
            },
            // breakpoint from 768 up
            768 : {

                items: 3

            }            
        }
    });
    
});

/*=============================================
                TESTIMONIALS
==============================================*/
$(function() {
    
    $("#customers-testimonials").owlCarousel({
        
        items: 1,
        autoplay: true,
        smartSpeed: 700,             // move slower when changing
        loop: true,
        autoplayHoverPause: true
    });
    
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

//Smooth Scrolling

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
