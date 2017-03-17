$("#site-nav").hide();
$("#hamburger.disabled").click(function() {
    $("#site-nav").slideToggle("slow", function() {
        $("#hamburger").addClass("enabled").removeClass("disabled");
    });
});
$("#hamburger.enabled").click(function() {
    $("#site-nav").slideToggle("slow", function() {
        $("#hamburger").removeClass("enabled").addClass("disabled");
    });
});
