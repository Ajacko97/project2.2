// JavaScript Document
$(document).ready(
        function () {

//         --------------------------title animation for homepage----------------------------  

            setInterval(function () {
                $(".welcome h1").fadeOut(function () {
                    if (!($(this).html === "Plan your dream wedding with us !")) {
                        $(this).html("Plan your dream wedding with us !");
                        $(this).fadeIn();
                    } else if (!($(this).html === "Plan your dream wedding with us !")) {
                        $(this).html("Plan your dream wedding with us !");
                        $(this).fadeIn();
                    }
                });
            }, 3000);

        }
);