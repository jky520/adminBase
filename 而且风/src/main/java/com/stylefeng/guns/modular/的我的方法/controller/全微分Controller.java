package com.stylefeng.guns.modular.的我的方法.controller;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 得到控制器
 *
 * @author fengshuonan
 * @Date 2017-08-23 16:45:56
 */
@Controller
@RequestMapping("/全微分")
public class 全微分Controller extends BaseController {

    private String PREFIX = "/的我的方法/全微分/";

    /**
     * 跳转到得到首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "全微分.html";
    }

    /**
     * 跳转到添加得到
     */
    @RequestMapping("/全微分_add")
    public String 全微分Add() {
        return PREFIX + "全微分_add.html";
    }

    /**
     * 跳转到修改得到
     */
    @RequestMapping("/全微分_update/{全微分Id}")
    public String 全微分Update(@PathVariable Integer 全微分Id, Model model) {
        return PREFIX + "全微分_edit.html";
    }

    /**
     * 获取得到列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增得到
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除得到
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改得到
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 得到详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
