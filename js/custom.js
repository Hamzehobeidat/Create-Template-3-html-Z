/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    //trigger nice scroll plgin
    
    $('html').niceScroll();
    
    //change header height
    
    $('.header').height($(window).height());
    
    //scroll to Features 
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            
            scrollTop : $('.features').offset().top
            
        }, 1000);
        
    });
    
    $("#btnmore").click(function () {
        
        $(".hidden").toggle(600, function () {
            
        });
        
        if ($(this).html() === "Show More")
            
          $(this).text("Show Less");
        
       else 
           
         $(this).text("Show More");
        

    });
    
    
    // check testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
        
        } else {
            
            leftArrow.fadeIn();
            
        }
        
         if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
        
        } else {
            
            rightArrow.fadeIn();
            
        }
        
    } 
    
    checkClients();
    
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                                        
    });
            
    }
    
   });

});