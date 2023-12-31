#来源 https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/js/Mine/aDriveCheckIn/aDriveCheckIn_token.qxrewrite

# 阿里云盘token获取 @zqzess
hostname = auth.alipan.com, auth.aliyundrive.com

^https:\/\/(auth|aliyundrive)\.alipan\.com\/v2\/account\/token url script-request-body https://raw.githubusercontent.com/zqzess/rule_for_quantumultX/master/js/Mine/aDriveCheckIn/aDriveCheckIn.js


#boxjs   
#来源   https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.quanx.conf

hostname = boxjs.com, boxjs.net, *.boxjs.com, *.boxjs.net

^https?:\/\/(.+\.)?boxjs\.(com|net) url script-analyze-echo-response https://raw.githubusercontent.com/chavyleung/scripts/master/box/chavy.boxjs.js


#sub-store
#来源-https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/config/QX.snippet

hostname=sub.store

^https?:\/\/sub\.store\/((download)|api\/(preview|sync|(utils\/node-info))) url script-analyze-echo-response https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-1.min.js
^https?:\/\/sub\.store url script-analyze-echo-response https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-0.min.js

#google自动翻页
hostname = www.google.*,

^https?:\/\/www\.google\..*\/search url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/endlessgoogle.js

#重写跳转

# 浏览器google搜索重写 跳转到圈X重写合集

^https?://www\.google\.com/search\?q=%E9%87%8D%E5%86%99.*$ url 302 https://yfamily.vercel.app/quantumultx.html


##跳过中间界面，支付宝链接、被封禁链接进行通知弹窗跳转，在微信中用快照显示被封禁的链接（可选），在微信中进行强制重定向（可选），群聊 / 扫码均可使用，可选项可在脚本 2、3 行更改，也可在 BoxJs 中更改。
hostname = weixin110.qq.com, security.wechat.com,

^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? url script-response-body https://raw.githubusercontent.com/zZPiglet/Task/master/asset/UnblockURLinWeChat.js


#京东比价

hostname = api.m.jd.com

# 京东比价
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/shufflewzc/faker/main/Script/JD/JdPrice.js






