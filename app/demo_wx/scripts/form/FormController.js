"use strict";
/**
 * 填报表单控制器
 * Created by Neil on 2015-4-20.
 */
app.controller('FormController',  function (FormService,DictionaryService,$scope, $routeParams) {

    /**
     * 重置错误信息
     */
    $scope.resetError = function() {
        $scope.error = false;
        $scope.errorMessage = '';
    };

    /**
     *  设置错误信息
     *  @param message
     */
    $scope.setError = function(message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };

    //桩下拉列表
    $scope.CPDCP_XL_PEG = [];
    $scope.refreshPegSelect = function (str) {
        DictionaryService.queryPegDictByStr(str,$scope);
    };

    //钢管下拉列表
    $scope.CPDCP_PIPE = [];
    $scope.refreshPipeSelect = function (str) {
        DictionaryService.queryPipeDictByStr(str,$scope);
    };



    //表单数据
    $scope.data = {};
    $scope.editMode = false;
    //$scope.findById('CPDCP_PREHEAT_WELD_GROUP', '');
    FormService.findById('CPDCP_PREHEAT_WELD_GROUP', '0KMBu6XYResVgEYZT8vNh9',$scope);
    //FormService.findById('CPDCP_PREHEAT_WELD_GROUP', $routeParams.id,$scope);
    $scope.resetError();

});