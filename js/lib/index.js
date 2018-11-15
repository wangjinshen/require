//['./app']引用app 定义模块
require(["./js/lib/app",'require'], function(app,require) {

    require(["$","modul"], function($,modul) {
        console.log($)
        console.log(modul)
    }); 
}); 