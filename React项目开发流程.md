# React项目开发流程
1. 构建项目托管平台： gitee/gitlab 
2. 构建项目开发环境
   1. 安装脚手架： dva-cli / umi 
      1. 终端： cnpm i dva-cli -g  / yarn create umi 

   2. 创建项目
      1. 终端： dva new 项目名称
   3. 目录解读
      1. mock数据写在mock文件在
      2. redux流程 model
      3. 路由配置  router.js 
      4. 路由对应的组件  routes
      5. 数据请求  services 
      6. 公共函数 utils
      7. components 公共组件
      8. 全局样式 assets
   4. 走一遍数据操作流程
      1. dva文档： https://dvajs.com/
   5. 构建项目环境
      1. 配置好ts
      2. 组件库
      3. 将hash路由改成了history模式的路由
      4. roadhog  https://github.com/sorrycc/roadhog 
         1. 将.webpackrc 改名为 .webpackrc.js
         2. 路径别名
            1. alias
         3. 反向代理
            1. proxy
         4. css模块化 + less 
            1. 内部直接支持的
      5. dva中如何进行mock数据
         1. 配置 .roadhogrc.mock.js 文件
         2. 项目： 第三方mock数据的网站
            1. https://www.fastmock.site/#/projects
      6. ts引入以及使用
         1. cookie.ts
         2. request.ts