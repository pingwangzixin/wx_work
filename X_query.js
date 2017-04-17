(function ($) {
    var opt, color = {}
    $.fn.extend({
        //弹窗显示或隐藏
        "Shwindow":function(opt) {
            $(document).on("click",opt.obj,function(){
                if (opt.state=="show"){
                    for(var i=0;i<opt.ele.length;i++){
                        $(opt.ele[i]).show(opt.time);
                    }
                };
                if (opt.state=="hide"){
                    for (var i=0;i<opt.ele.length;i++) {
                        $(opt.ele[i]).hide(opt.time);
                    }
                };
            })
        }
        //hover变色
        , "Whover": function (color){
            $(document).on("mouseover mouseout", color.obj, function (event) {
                if (event.type=="mouseover") {
                    $(this).attr("style",color.state+":"+ color.color);
                }
                else {
                    $(this).attr("style", color.state+":"+color.colorn);
                }
            })
        }
        //弹窗显示，超过时间自动隐藏
        , "tcwin": function (tc) {
            $(document).on("click",tc.obj,function () {
                for (var i = 0;i<tc.hide.length; i++) {
                    $(tc.hide[i]).hide();
                }
                for (var i = 0; i < tc.show.length; i++) {
                    $(tc.show[i]).show();
                }
                $(tc.tcele).html(tc.html)
                setTimeout(function () {
                    for (var i = 0; i < tc.show.length; i++) {
                        $(tc.show[i]).hide();
                    }
                }, tc.time)
            })
        },
        //数组去重
        "arrdelrepeat":function(arr,call){ 
            var result=[];
            for(var i=0;i<arr.length;i++){
                if(result.indexOf(arr[i])==-1){
                    result.push(arr[i])
                }
            }
            call(result);//把新的去重的数组通过回调函数传递出去
        },
    })
})(jQuery)