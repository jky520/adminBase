/**
 * 初始化得到详情对话框
 */
var 全微分InfoDlg = {
    全微分InfoData : {}
};

/**
 * 清除数据
 */
全微分InfoDlg.clearData = function() {
    this.全微分InfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
全微分InfoDlg.set = function(key, val) {
    this.全微分InfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
全微分InfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
全微分InfoDlg.close = function() {
    parent.layer.close(window.parent.全微分.layerIndex);
}

/**
 * 收集数据
 */
全微分InfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
全微分InfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/全微分/add", function(data){
        Feng.success("添加成功!");
        window.parent.全微分.table.refresh();
        全微分InfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.全微分InfoData);
    ajax.start();
}

/**
 * 提交修改
 */
全微分InfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/全微分/update", function(data){
        Feng.success("修改成功!");
        window.parent.全微分.table.refresh();
        全微分InfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.全微分InfoData);
    ajax.start();
}

$(function() {

});
