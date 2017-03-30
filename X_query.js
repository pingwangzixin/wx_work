(function ($) {
    var opt, color = {}
    $.fn.extend({
        "Shwindow": function (opt) {
            $(document).on("click", opt.obj, function () {
                if (opt.state == "show") {
                    for (var i = 0; i < opt.ele.length; i++) {
                        $(opt.ele[i]).show(opt.time);
                    }
                };
                if (opt.state == "hide") {
                    for (var i = 0; i < opt.ele.length; i++) {
                        $(opt.ele[i]).hide(opt.time);
                    }
                };
            })
        }
        , "Whover": function hover(color) {
            this.hover(function () {
                $(this).attr("style", color.state + ":" + color.color);
            }, function () {
                $(this).attr("style", color.state + ":" + color.colorn);
            })
        }
    , })
})(jQuery)