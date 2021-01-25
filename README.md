# CloudBase Templates

云开发应用模板仓库，可通过 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 一键创建和部署。

你可以安装 CloudBase CLI **最新版本（1.0.3+）**：`npm i -g @cloudbase/cli`，并使用下面模板中的命令初始化应用。

## CloudBase Framework 介绍

?? CloudBase Framework 是云开发开源的云原生前后端一体化部署工具，支持主流前后端框架，前后端一键托管部署在云端一体化平台，支持支持小程序、Web、Flutter、后端服务等多个平台。

Github 开源地址：[https://github.com/TencentCloudBase/cloudbase-framework](https://github.com/TencentCloudBase/cloudbase-framework)

欢迎给 CloudBase Framework 一个 ?? star

## <a name="templates"></a>应用模板示例

欢迎大家贡献应用模板：[https://github.com/TencentCloudBase/cloudbase-framework/blob/master/doc/app.md](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/doc/app.md)

Tip：你可以通过 `-e` 参数直接指定应用所使用的环境 Id，如 `cloudbase new vue-app vue -e testEnvId`。

|                                                                                                                                                                                                                                                    | 名称                              | 应用示例介绍                         | 基于模板创建项目                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------ | ------------------------------------------- |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/vue"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/9892a3212a49bdd65ba499f2da62ac23.png"></a>                                          | Vue 应用                          | Vue + 云函数 + 静态网站部署          | `cloudbase new vue-app vue`                 |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/react-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/d94d993269048beb4827b2612ed53692.png"></a>                                | React 应用                        | React + 云函数 + 静态网站部署        | `cloudbase new react-app react-starter`     |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/react-custom"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/dbc204f8fc25387645aea9282c6d1b99.png"></a>                                 | React Custom CRA                  | React + 云函数 + 静态网站部署        | `cloudbase new react-app react-custom`      |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/nuxt-spa"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/4a2bb546f6d59133976dccd1ac962378.png"></a>                                     | Nuxt SPA 应用                     | Nuxt SPA + 云函数 + 静态网站部署     | `cloudbase new nuxt-app nuxt-spa`           |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/nuxt-ssr"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/338ce75aaf22e407a02d8b5f096212d0.png"></a>                                     | Nuxt SSR 应用                     | Nuxt SSR + 服务端部署 + 静态网站部署 | `cloudbase new nuxt-app nuxt-ssr`           |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/koa-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/bc7e3f2989fcf65b2fe8ad37ea3f69a9.png"></a>                                  | Koa 应用                          | Koa + 服务端部署                     | `cloudbase new koa-app koa-starter`         |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/express-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/ce7fa0617399ac5e7f7bdbef5efb29d9.png"></a>                              | Express 应用                      | Express + 服务端部署                 | `cloudbase new express-app express-starter` |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/nest-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/79fdd61df8b2154ccaa479301fcc57a6.png">                                     | Nest 应用                         | Nest + 服务端部署                    | `cloudbase new nest-app nest-starter`       |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/egg-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/9b26c345d8180b1003954d5a7b28f41f.png">                                      | Egg 应用                          | Egg + 服务端部署                     | `cloudbase new egg-app egg-starter`         |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/node-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/7b50431d8cef29d9ebb82c4ff2e6032c.png"></a>                                 | Node.js 云函数示例                | Node.js 云函数                       | `cloudbase new node-app node-starter`       |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/php-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/63782b30178cf5666fdd1e15501aba9b.png"></a>                                  | PHP 云函数示例                    | PHP 云函数                           | `cloudbase new php-app php-starter`         |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/java-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/20510a20be999a59458204afcf0fe205.png"></a>                                 | Java 云函数示例                   | Java 云函数                          | `cloudbase new java-app java-starter`       |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/vuepress"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/230c115bee4300384fa557710daa2928.jpg"></a>                                     | VuePresss 网站应用                | VuePresss + 静态网站部署             | `cloudbase new vuepress-app vuepress`       |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/node"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/82da2591cd2aed610d7f91f9dd881930.png"></a>                                         | Node.js 云托管应用                | Node.js + 云托管部署                 | `cloudbase new node-app node`               |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/dart"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/2d1c438165480b9a7937e3b81c4873e3.jpg"></a>                                         | Aqueduct (Dart Server) 云托管应用 | Aqueduct (Dart Server) + 云托管部署  | `cloudbase new dart-app dart`               |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/omi-starter"><img width="200" style="max-width:none;" src="https://user-images.githubusercontent.com/11473889/88882843-4f2b7780-d265-11ea-8fcf-49cb297240c7.png"></a> | Omi 应用                          | Omi + 云函数 + 静态网站部署          | `cloudbase new omi-app omi-starter`         |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/taro-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/625bbdc0b37744aae33aff46b8aeeeb8.png"></a>                                 | taro 应用                         | taro + 云函数 + 静态网站部署         | `cloudbase new taro-app taro-starter`       |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/deno"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/408157ecaba08c2594dc953b4c690aec.jpg"></a>                                         | deno 云托管应用                   | deno + 云托管部署                    | `cloudbase new deno-app deno`               |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/next-ssr"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/918830a5ad3321fd0524eaef4c0e4c1e.png"></a>                                     | Next SSR 应用                     | Next SSR + 服务端部署 + 静态网站部署 | `cloudbase new next-app next-ssr`           |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/go-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/10dd8964ac25c3f40dc229a00664d914.jpg"></a>                                   | Go 云函数                         | Go + 云函数                          | `cloudbase new go-app go-starter`           |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/thinkjs-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/994de73cc1fc9fcae6355879306e2b63.png"></a>                              | ThinkJS 应用                      | thinkjs + 云函数                     | `cloudbase new thinkjs-app thinkjs-starter` |
| <a href="https://github.com/TencentCloudBase/cloudbase-templates/tree/master/daruk-starter"><img width="200" style="max-width:none;" src="https://main.qcloudimg.com/raw/5a262026a0daf33f6e6b934b50d73d20.jpg"></a>                              | DarukJS 应用                      | darukjs + 云函数                     | `cloudbase new daruk-app daruk-starter` |

## CloudBase Framework 核心贡献者计划

欢迎大家参与 CloudBase Framework 的开发工作，成为我们的贡献者，我们将会在云开发社区展示贡献者的作品和信息，同时也会有惊喜奖励。

您可以选择如下的贡献方式：

- 贡献技术文章：[https://github.com/TencentCloudBase/cloudbase-framework/tree/master/community/posts](https://github.com/TencentCloudBase/cloudbase-framework/tree/master/community/posts)
- 贡献应用模板：[https://github.com/TencentCloudBase/cloudbase-framework/blob/master/doc/app.md](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/doc/app.md)
- 贡献代码，提交 Pull Request
- 反馈 bug，提交 Issue
- 在技术会议上发表技术演讲

CloudBase Framework 的发展离不开社区的积极贡献，这是我们的核心贡献者列表，再次感谢大家的贡献：[https://github.com/TencentCloudBase/cloudbase-framework#contributors-](https://github.com/TencentCloudBase/cloudbase-framework#contributors-)
