"use strict";
/**
 * 表单控件指令
 * Created by Neil on 2015-5-8.
 */

/**
 *
 */
app.directive('myFormField', function ($drag, $parse, $timeout) {
    return {
        restrict: 'A',//E表示elemnent，A表示attribute，C表示class，M表示comment
        replace:true,
        template: function (tElemnet, tAttrs) {     //template属性不仅可以直接返回模板，也可以指定一个函数来处理返回
            return '<a href="http://www.baidu.com">Click me to go to Baidu</a>';
        }
    };
});


app.directive('myFormFieldTest', function ($drag, $parse, $timeout) {
    return {
        restrict: 'A',
        replace:true,
        template: function (tElemnet, tAttrs) {     //template属性不仅可以直接返回模板，也可以指定一个函数来处理返回
            return '<a href="http://www.baidu.com">Click me to go to Baidu</a>';
        }
    };
});