"use strict";
/**
 * 填报表单服务
 * Created by Neil on 2015-4-20.
 */

app.factory('FormService', function($http) {
    return new FormService($http);
});

function FormService(http) {

    /**
     * 通过id查询业务实体数据，如果oid为null，返回新增数据
     * @param sid 服务code 例如：CPDCP_PREHEAT_WELD_GROUP
     * @param oid 业务对象id
     * */
    this.findById = function (sid, oid,scope) {
        if(!sid){
            scope.setError('服务编码为null，请刷新后重试');
            return;
        }
        var params = {
            _PK_: oid
        };
        http.get('/' + sid + '.byid.do', {params: params})
            .success(function (data) {
                scope.data = data;
            }).error(function(data){
                scope.setError('服务器返回错误，请重试');
            });
    };

};