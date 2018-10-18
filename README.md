# 微信小程序

记录学习网址和一些掉过的坑

## 学习网址

[腾讯小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html)  学习小程序的官方教程，有它一个就够了。

[腾讯示例源码](https://github.com/wechat-miniprogram/miniprogram-demo.git)     上面教程有提到，可以优先体验后再学习。

[阿里矢量图库](http://iconfont.cn/)     非常好看的图标库，可以下载到本地再引入小程序。

## 前方有坑

（1）没有 p、span 标签，也不用想去找类似的标签代替，基本上有文字的地方都用 view 标签
view 是块级标签，text 是行级标签

（2）莫名其妙的报错，data里面的数据都添加分号，**默认为字符串**

（3）所有句末都加一个分号，避免忘记添加的情况

（4）个人小程序不支持外部网页跳转

