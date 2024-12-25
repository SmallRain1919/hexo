---
title: 自动化部署hexo博客（二） #文章标题
date: 2024-12-25 20:26:00 #发布时间
tags: hexo博客 #标签
description: 从入门到精通部署hexo个人博客 #文章描述
cover: https://blog-1310550159.cos.ap-nanjing.myqcloud.com/acg/images/58681464_p0.png #文章封面图片
---


> 因为方便测试使用，我是直接在D盘下创建的一个demo目录，然后使用npm部署hexo项目
- 推荐使用windows环境使用
	- [nodejs](https://nodejs.org)
	- [git工具](https://git-scm.com/)
	- [hexo工具](https://hexo.io)
	- [buttfly主题](https://github.com/jerryc127/hexo-theme-butterfly.git)
	

### 创建hexo项目

> 需要打开命令终端并且创建demo目录生成hexo项目
```
// 创建demo目录
md demo

// 安装hexo-cli
cd demo
npm install -g hexo-cli

// 生成hexo项目
hexo init hexo

// 安装依赖
cd hexo
npm install
```
### 测试hexo项目

```
// 清除缓存
hexo clean

// 运行hexo
npm server
```
> 然后使用浏览器访问地址，如果出现页面就是测试成功


#### 配置`_config.yml`文件
> 需要在根目录下编辑`_config.yml`文件中添加以下配置
```
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repository: git@blog.smallrains.com:/home/git/repo/hexo.git
  branch: master
```

#### 发布项目
```
// 安装hexo-deployer-git插件
npm install hexo-deployer-git --save
hexo g -d
```
 ![alt text](https://blog-1310550159.cos.ap-nanjing.myqcloud.com/images/1735135985093.jpg)