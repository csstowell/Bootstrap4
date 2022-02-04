$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});


// Reserve Button
$(document).ready(function () {
    $(".btn").click(function () {
        $("#myModal").modal("show");
    });

    $("#modalClose").click(function () {
        $("#myModal").modal("hide");
    })
});


// Login Modal
$(document).ready(function () {
    $(".navbar-text").click(function () {
        $("#loginModal").modal("show");
    });

    $("#loginClose").click(function () {
        $("#loginModal").modal("hide");
    });
});