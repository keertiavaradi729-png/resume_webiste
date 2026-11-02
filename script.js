

$(document).ready(function() {

    // Welcome page animation
    $(".welcome").hide().fadeIn(1500);

    // Highlight navigation links
    $("nav a").hover(
        function() {
            $(this).css("color", "#ffd166");
        },
        function() {
            $(this).css("color", "white");
        }
    );

    console.log("Personal Website Loaded Successfully!");

});
