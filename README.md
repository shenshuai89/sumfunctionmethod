## 规范化开发并发布前端npm包
该包只有一个sum函数，用于测试流程
> 开发前端使用的包，主要的逻辑代码只包含js，所以选用rollup做打包工具。
webpack适合开发项目，项目中会包含图片/视频/css等多种资源，更适合使用webpack。
### 开发流程
- 初始化项目，创建合理的目录结构
- 设置基于编辑器的代码统一规范 .editorconfig [vscode的配置](https://docs.microsoft.com/zh-cn/visualstudio/ide/create-portable-custom-editor-options?view=vs-2022)
- 配置 eslint 和 pretter 统一代码风格
- 配置 babel，处理新语法兼容型
- 配置 git 提交的校验钩子
- 规范化提交代码到 git 仓库
- 设置开发和打包脚本
- 添加单元测试jest，编写测试示例
- 完善 package.json 必要字段
- 配置合适的 npm script
- 本地测试开发的 npm 包，使用yalc
- 发布包到 npm