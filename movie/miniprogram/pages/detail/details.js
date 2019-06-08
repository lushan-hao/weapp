// pages/detail/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // videoId: ''
      videoInfo: null,
      otherList: [],
      commentsList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getVideoById(videoId);
    this.getOtherList(videoId);
    this.getCommentList(videoId);
  },


  getCommentList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + videoId,
      success: (res)=>{
        // console.log(res);
        if(res.data.code === 0){
          that.setData({
            commentsList: res.data.data.commentData
          })
        }
      },
    });
  },



  getOtherList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoId,
      success: (res)=>{
        // console.log(res);
        if(res.data.code === 0){
          that.setData({
            otherList: res.data.data.othersList,
          })
        }
      },
    });
  },


  getVideoById(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + videoId,
      success: (res)=>{
        // console.log(res);
        if(res.data.code === 0){
          that.setData({
            videoInfo: res.data.data.videoInfo,
          })
        }
      },
    });
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
  onShareAppMessage: function () {

  }
})