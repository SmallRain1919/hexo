---
title: 自动化部署hexo博客（一） #文章标题
date: 2024-12-25 20:26:00 #发布时间
tags: hexo博客 #标签
description: 从入门到精通部署hexo个人博客 #文章描述
cover: https://blog-1310550159.cos.ap-nanjing.myqcloud.com/acg/images/58681464_p0.png #文章封面图片
---


### 一、部署git私有仓库
> 注意：推荐Centos或Uuntu系统，目前我用的是CentOS系统作为服务器
#### 1.1 安装git工具
```bash
[root@localhost ~]# yum -y install git
```
#### 1.2 创建git新用户并且设置密码
```bash
[root@localhost ~]# useradd git && echo git |passwd --stdin git
```
#### 1.3 创建git私有仓库
```bash
// 注意：先切换git用户在创建
[root@localhost ~]# su - git
[git@localhost ~]$ mkdir repo
[git@localhost ~]$ cd repo/
[git@localhost repo]$ git init --bare hexo.git
初始化空的 Git 版本库于 /home/git/repo/hexo.git/
[git@localhost repo]$ ls
hexo.git
[git@localhost repo]$ cd hexo.git/
[git@localhost hexo.git]$ ls
branches  config  description  HEAD  hooks  info  objects  refs
git@localhost hexo.git]$ cd
```
#### 1.4 创建git私有仓库钩子
```bash
[git@localhost ~]$ cd /home/git/repo/hexo.git/
[git@localhost hexo.git]$ vim hooks/post-receive
[git@localhost hexo.git]$ cat hooks/post-receive
#!/bin/bash
repo_path=/home/git/repo/hexo.git
hexo_path=/var/www/hexo
git --work-tree=$hexo_path --git-dir=$repo_path checkout -f

[git@localhost hexo.git]$ chmod +x hooks/post-receive
[git@localhost hexo.git]$ chown -R git:git hooks/post-receive
```
### 二、部署Nginx站点
#### 2.1 安装nginx服务

```bash
[root@localhost ~]# yum -y install nginx
```
#### 2.2 查看用户id

```bash
[root@localhost ~]# id nginx
uid=996(nginx) gid=994(nginx) 组=994(nginx)
```
#### 2.3 备份nginx.conf文件

```bash
[root@localhost ~]# ls /etc/nginx/
conf.d     fastcgi.conf          fastcgi_params          koi-utf  mime.types          nginx.conf          scgi_params          uwsgi_params          win-utf
default.d  fastcgi.conf.default  fastcgi_params.default  koi-win  mime.types.default  nginx.conf.default  scgi_params.default  uwsgi_params.default
[root@localhost ~]# cp -r /etc/nginx/nginx.conf{,.bak}
[root@localhost ~]# ls /etc/nginx/
conf.d     fastcgi.conf          fastcgi_params          koi-utf  mime.types          nginx.conf      nginx.conf.default  scgi_params.default  uwsgi_params.default
default.d  fastcgi.conf.default  fastcgi_params.default  koi-win  mime.types.default  nginx.conf.bak  scgi_params         uwsgi_params         win-utf
```
#### 2.4 编辑nginx.conf文件，并且修改内容

```bash
// 找到以下内容并且编辑

    server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        root         /var/www/hexo;
		index        index.html index.php index.htm;
        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
```
#### 2.5 创建nginx站点和index.html文件

```bash
[root@localhost ~]# mkdir /var/www/hexo
[root@localhost ~]# chown -R git:git /var/www/hexo/
[root@localhost ~]# echo "hexo server myblog" >> /var/www/hexo/index.html
```
#### 2.6 nginx验证

```bash
[root@localhost ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
[root@localhost ~]# systemctl start nginx
[root@localhost ~]# systemctl enable nginx
Created symlink from /etc/systemd/system/multi-user.target.wants/nginx.service to /usr/lib/systemd/system/nginx.service.
```
> 注意：nginx服务启动后需要在浏览器上访问测试是否是显示index.html文件内容
