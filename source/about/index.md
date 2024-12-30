---
title: 关于我们
date: 2024-03-21
type: "about"
---

<div class="about-wrapper">

## 🎯 关于小鱼技术栈

> *生活明朗，万物可爱*

### 👨‍💻 我们是谁

我们是一群热爱技术、追求卓越的IT从业者。专注于运维自动化、云原生技术、DevOps实践等领域，致力于分享实用的技术经验和最佳实践。

### 🚀 技术栈

<div class="tech-stack">

#### 💻 运维自动化
- Linux 系统管理
- Shell/Python 脚本开发
- 自动化运维工具

#### 🌐 云原生技术
- Docker 容器化
- Kubernetes 编排
- 服务网格 (Service Mesh)

#### 🛠 DevOps工具链
- CI/CD Pipeline
- 监控告警
- 日志管理

#### 🔒 安全运维
- 系统安全
- 网络安全
- 数据安全

</div>

### 🎯 我们的愿景

- 分享优质的技术内容
- 构建活跃的技术社区
- 推动技术创新与进步

### 🤝 联系我们
- 📧 Email: [2544510910@qq.com](mailto:2544510910@qq.com)
- 🐧 QQ: 2544510910

### 🌟 加入我们

如果你也热爱技术，欢迎：
- 在文章下方评论交流
- 通过社交媒体联系我们
- 投稿分享你的技术经验

</div>

<!-- 图片放大模态框 -->
<div id="imageModal" class="modal" onclick="hideModal()">
  <img id="modalImage" class="modal-content" />
</div>

<style>
.about-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    line-height: 1.6;
}

.about-wrapper h2 {
    border-bottom: 2px solid #49B1F5;
    padding-bottom: 10px;
    margin-bottom: 30px;
}

.about-wrapper h3 {
    color: #49B1F5;
    margin-top: 40px;
}

.tech-stack {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.tech-stack h4 {
    color: #666;
    margin-bottom: 10px;
}

.tech-stack ul {
    list-style: none;
    padding-left: 0;
}

blockquote {
    border-left: 4px solid #49B1F5;
    padding-left: 20px;
    color: #666;
    font-style: italic;
    margin: 20px 0;
}

.about-wrapper a {
    color: #49B1F5;
    text-decoration: none;
    transition: color 0.3s ease;
}

.about-wrapper a:hover {
    color: #FF7242;
}

/* 联系信息布局 */
.contact-info {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    margin: 20px 0;
}

.qr-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.qr-text {
    font-size: 14px;
    color: #666;
    margin-top: 5px;
}

/* 微信二维码样式 */
.wechat-qr {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
}

.wechat-qr:hover {
    transform: scale(1.05);
}

/* 模态框样式 */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    cursor: pointer;
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 80%;
    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
}

@media screen and (max-width: 768px) {
    .contact-info {
        flex-direction: column;
        align-items: center;
    }
    
    .contact-details {
        text-align: center;
    }
}
</style>

<script>
function showImage(src) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = src;
}

function hideModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
</script>

