'use strict'
window.addEventListener('DOMContentLoaded',() =>{
    //convert img to svg
    $("img.img-svg").each(function () {
        let $img = $(this);
        let imgClass = $img.attr("class");
        let imgURL = $img.attr("src");
        $.get(imgURL, function (data) {
            let $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
                $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
            }
            $img.replaceWith($svg);
        }, "xml");
    });

});