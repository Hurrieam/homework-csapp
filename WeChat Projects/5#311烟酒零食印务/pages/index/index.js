// index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '5#311解忧杂货铺',
      // path: '/page/user?id=123'
    }
  },

  moshahou: function () {
    this.setData({
      text: "磨砂猴"
    });
  },

  cuchangle: function () {
    this.setData({
      text: "粗长乐"
    });
  },

  changbaishan: function () {
    this.setData({
      text: "长白山"
    });
  },

  liqun: function () {
    this.setData({
      text: "利群"
    });
  },

  xuanhemen: function () {
    this.setData({
      text: "炫赫门"
    });
  },

  furongwang: function () {
    this.setData({
      text: "芙蓉王"
    });
  },

  dayin: function () {
    this.setData({
      text: "打印"
    });
  },

  fuyin: function () {
    this.setData({
      text: "复印"
    });
  },

  saomiao: function () {
    this.setData({
      text: "扫描"
    });
  },


})