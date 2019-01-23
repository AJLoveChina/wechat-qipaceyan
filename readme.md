### 奇葩小测验
微信小程序源代码, 只需要修改`src/data/`下面的数据就可以创建你自己的小程序.


#### 如何开发
```text
# 启动wepy
wepy build --watch

# 启动data数据实时生成
# 生成的json的数据会在  dist-data目录下面
npm run data

# 修改home.wpy loadDataJson方法的url值
# 将url改成本地`dist-data/data.json`的地址, 使用http协议
# 建议使用http-server创建一个开发环境的http服务
```


#### 微信开发者工具设置
- [ ] ES6 转 ES5
- [x] 上传代码时样式自动补全
- [ ] 上传代码时自动压缩混淆
- [ ] 上传时进行代码保护
- [ ] 使用 npm 模块
- [ ] 自动运行体验评分
- [ ] 启用自定义处理命令
- [x] 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书
- [x] 启动多核心编译


#### 体验
![ScreenShot](https://github.com/AJLoveChina/wechat-qipaceyan/blob/master/xiaochenxu.jpg)

#### License
MIT
