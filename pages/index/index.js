/** index.js **/

Page({
  data: {
    workyear: new Date().getFullYear() - 2017,
    workmonth: new Date().getMonth() - 6,

    phone: '13824339381',
    mail: '13824339381@139.com',
    github: 'www.github.com / huangjingxin',
  },

  actionSheetTap() {
    wx.showActionSheet({
      itemList: ['呼叫', '复制'],
      success(e) {
        console.log(e.tapIndex)
        if (e.tapIndex===0){
            wx.makePhoneCall({
              phoneNumber: '13824339381',
              success() {
                console.log('成功拨打电话')
              }
            })
        }
        else if (e.tapIndex === 1){
          wx.setClipboardData({
            data: '13824339381',
            success() {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 1000,
              })
            }
          })
        }
      }
    })
  },

  copyMail() {
    wx.setClipboardData({
      data: this.data.mail,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },

  copyGithub() {
    wx.setClipboardData({
      data: this.data.github,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },






})