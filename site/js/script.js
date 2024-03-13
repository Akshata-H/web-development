$(function (){ //same as document.addEventListener("DOMContentLoade"...)
    // same as document.querySelector("#navbarToggle").addEventListner("blur"...)
    $("#navbarToggle") .blur(function(event){
        var screenWidth =winodw.innerWidth;
        if (screenWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});