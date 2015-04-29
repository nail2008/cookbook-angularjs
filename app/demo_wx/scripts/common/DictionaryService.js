"use strict";
/**
 * 钢管字典服务
 * Created by Neil on 2015-4-29.
 */

app.factory('DictionaryService', function ($http) {
    return new DictionaryService($http);
});

function DictionaryService(http) {
    /**
     * 查询钢管数据字典
     * @param str   查询关键词（钢管编号）
     * @param scope
     */
    this.queryPipeDictByStr = function (str, scope) {
        var params = {
            DICT_ID: 'CPDCP_PIPE',
            _extWhere: " and TUBE_NO like '%" + str + "%'"
        };
        http.get('/SY_COMM_INFO.dict.do', {params: params})
            .success(function (data) {
                scope.CPDCP_PIPE = data.CHILD;
            }).error(function(data){
                scope.setError('服务器返回错误，请重试');
            });;
    };

    /**
     * 查询桩数据字典
     * @param str   查询关键词（桩号）
     * @param scope
     */
    this.queryPegDictByStr = function (str, scope) {
        var params = {
            DICT_ID: 'CPDCP_XL_PEG',
            _extWhere: " and PEG_NO like '%" + str + "%'"
        };
        http.get('/SY_COMM_INFO.dict.do', {params: params})
            .success(function (data) {
                scope.CPDCP_XL_PEG = data.CHILD;
            }).error(function(data){
                scope.setError('服务器返回错误，请重试');
            });;
    };

}