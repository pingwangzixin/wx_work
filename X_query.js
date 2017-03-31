
(function ($) {
    var opt,color= {}
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
        , "Whover": function(color) {
            $(document).on("mouseover mouseout",color.obj,function(event){
                if(event.type=="mouseover"){
                    $(this).attr("style", color.state + ":" + color.color);
                }else{
                    $(this).attr("style", color.state + ":" + color.colorn);
                }
            })
        },
        "tcwin": function (tc){
            $(document).on("click",tc.obj,function(){
                for(var i=0;i<tc.hide.length;i++){
                    $(tc.hide[i]).hide();
                }
                for(var i=0;i<tc.show.length;i++){
                    $(tc.show[i]).show();
                }
                $(tc.tcele).html(tc.html)
                setTimeout(function(){
                    for(var i=0;i<tc.show.length;i++){
                        $(tc.show[i]).hide();
                    }
                },tc.time)
            })
        }
    })
})(jQuery)