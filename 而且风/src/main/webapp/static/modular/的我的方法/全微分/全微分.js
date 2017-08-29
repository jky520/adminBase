/**
 * 得到管理初始化
 */
var 全微分 = {
    id: "全微分Table",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
全微分.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
全微分.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        全微分.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加得到
 */
全微分.openAdd全微分 = function () {
    var index = layer.open({
        type: 2,
        title: '添加得到',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/全微分/全微分_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看得到详情
 */
全微分.open全微分Detail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '得到详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/全微分/全微分_update/' + 全微分.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除得到
 */
全微分.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/全微分/delete", function (data) {
            Feng.success("删除成功!");
            全微分.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("全微分Id",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询得到列表
 */
全微分.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    全微分.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = 全微分.initColumn();
    var table = new BSTable(全微分.id, "/全微分/list", defaultColunms);
    table.setPaginationType("client");
    全微分.table = table.init();
});
