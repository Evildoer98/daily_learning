#

## 下载资源或资源加载失败 - “Mixed Content” 问题

1. 在 http 网站中发起的 http 请求被禁止
2. 最新的 chrome 提高了安全策略，保护用户免受不安全下载的侵害
3. 注意
   1. https 协议网站不允许存在 http 协议的请求
   2. http 协议的网站中允许访问 https 协议的资源

## 浏览器提示网站不安全 记住的账户密码不能自动填充 - 证书错误问题

1. 检查当前网站协议是否为 https
2. 如果是 https，则可能是当前网站被标记为不安全，另一种是 https 证书无效，过期了
3. 如果是 http，则升级当前网站协议为 https

## 常见错误

1. Mixed Content 错误：
  当网站同时使用 HTTPS 和 HTTP 的资源时，例如在 HTTPS 的网站中引入 HTTP 的图片、CSS、JavaScript 等文件，浏览器会提示“Mixed Content”错误，这是因为 HTTP 的资源容易被恶意攻击者利用。解决方法是将所有资源都使用 HTTPS 进行加载。

2. 证书错误：
在使用 HTTPS 时，需要使用 SSL 证书来验证网站的身份。如果证书无效、已过期或不受信任，浏览器会提示证书错误。解决方法是获取有效的 SSL 证书，并将其安装到 Web 服务器中。

3. HSTS：
HSTS（HTTP Strict Transport Security）是一种安全机制，可以强制浏览器只使用 HTTPS 连接访问网站。如果网站启用了 HSTS，浏览器会自动将 HTTP 请求重定向到 HTTPS。在开发过程中，需要注意是否启用了 HSTS，以避免由于 HSTS 导致的连接问题。
