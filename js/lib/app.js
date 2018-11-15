require.config({
    //基准路径   默认  '/
    // baseUrl: "baseUrl",
    //paths配置路径
    paths: {
        //自定义模块可以直接调用
       "modul":'./js/lib/modul',
       //配置jQuery路径
       "$":'./js/lib/jquery'
    },
    // shim 引入非遵循AMD模块 
    shim: {
        //例如:jQuery
        '$': {
            //数组里是非定义模块所要依赖的模块(插件)
            deps: [],
            //exports抛出到公共域方便引用  抛出插件中的全局变量
            exports: '$'
        }
    }
});