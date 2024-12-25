## 自动化部署hexo博客（二）
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