# 小鱼技术栈博客

> 基于 Hexo + Butterfly 主题的个人技术博客

## 🚀 特性

- 💡 清晰的技术分类
- 🎨 优雅的界面设计
- 📱 完美的响应式布局
- 🔍 支持文章搜索
- 🌙 支持深色模式
- 💻 代码高亮显示
- 📊 文章阅读统计
- 🔐 安全的评论系统

## 实例代码
```bash
[root@localhost data]#  mkdir -p hexo
[root@localhost data]# git clone https://github.com/smallrain1919/hexo.git ./hexo/

[root@localhost data]# cd hexo/
[root@localhost hexo]# rm -rf node_modules/ db.json public/
[root@localhost hexo]# npm install


## 查看hexo路径
[root@localhost hexo]# cd /data/hexo/node_modules/hexo-cli/bin
[root@localhost bin]# pwd
/data/hexo/node_modules/hexo-cli/bin
## 编辑/etc/profile,需要在底部追加以下内容然后保存
[root@localhost hexo]#  cd
[root@localhost ~]# vim /etc/profile
export    HEXO_PATH=/data/hexo/node_modules/hexo-cli/bin
export    PATH=$HEXO_PATH:$PATH    
[root@localhost ~]#  source /etc/profile

## 更改可执行权限
[root@localhost ~]# chmod +x /data/hexo/node_modules/hexo-cli/bin/hexo

## 测试
[root@localhost ~]# cd /data/hexo
[root@localhost hexo]# hexo clean && hexo g && hexo s
##然后使用浏览器打开访问http://localhost:4000/，如果报错请检查主题butterfly依赖问题
```
## 🛠 技术栈

- Hexo v5.2.2
- Butterfly 主题
- Node.js
- Git

## 📦 安装

1. 克隆项目
```bash
git clone https://github.com/SmallRain1919/hexo.git
cd hexo
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
hexo clean   # 清理缓存
hexo server  # 启动服务
```

## 🎯 使用指南

### 创建新文章
```bash
hexo new post "文章标题"
```

### 创建新页面
```bash
hexo new page "页面名称"
```

### 生成静态文件
```bash
hexo generate
```

### 部署网站
```bash
hexo deploy
```

## 📂 目录结构

```
hexo/
├── _config.yml          # 网站配置文件
├── _config.butterfly.yml # 主题配置文件
├── package.json        # 项目依赖
├── scaffolds/         # 模板文件夹
├── source/           # 资源文件夹
│   ├── _posts/      # 文章
│   ├── categories/  # 分类
│   ├── tags/        # 标签
│   └── about/       # 关于页面
└── themes/          # 主题文件夹
```

## 📝 写作规范

### 文章前置信息
```yaml
---
title: 文章标题
date: 2024-03-21
categories:
  - 分类名称
tags:
  - 标签1
  - 标签2
description: 文章描述
---
```

### 文章分类
- 技术 (tech)
- 运维 (ops)
- 随笔 (essay)

## 🔧 主题配置

主要配置文件：`_config.butterfly.yml`

### 关键配置项
- 导航栏设置
- 侧边栏配置
- 文章样式
- 评论系统
- 社交链接

## 🌟 功能特点

1. 文章展示
   - 卡片式布局
   - 文章目录
   - 代码高亮
   - 图片放大

2. 页面功能
   - 响应式设计
   - 深色模式
   - 返回顶部
   - 阅读进度

3. 交互体验
   - 平滑滚动
   - 图片懒加载
   - 动画效果
   - 搜索功能

## 🤝 贡献指南

1. Fork 本项目
2. 创建新分支
3. 提交更改
4. 发起 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 
