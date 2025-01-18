# deploy-git

命令行提交對應配置文件夾下的文件至github/gitcafe指定分支

用於將ghost生成的static文件夾提交到gh-pages做博客使用，或者其他靜態文件；

>1. 全局npm安裝

```
$ (sudo) npm install deploy-git -g

```

>2.在package.json添加配置

```
"deploy": {
    "type": "git",
    "repo": "https://github.com/liubiao0810/test.git", // 需要push的地址
    "branch": "master", // push分支
    "dir": "static" // 需要push的目錄
  }
  
```

>2.命令執行即可

```
$ gitweb

```