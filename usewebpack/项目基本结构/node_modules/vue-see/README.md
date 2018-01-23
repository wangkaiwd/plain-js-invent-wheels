# vue-see
> Picture preview plugin for Vue.js2.0

## 简介
vue-see is an image preview plugin for vue2.x that looks like a WeChat image preview and relies on Photoswipe implementation.

vue-see是一个适用于Vue2.x的图片预览插件，效果类似微信的图片预览，依赖Photoswipe实现。
## 更新
- 20170720 [支持自定义PhotoSwipe参数](https://github.com/zhaohaodang/vue-see/releases/tag/1.2.0)
## Demo/演示
[Live Demo](https://zhaohaodang.github.io/demo/vue-see/#/)
## 安装

⚠️ 插件中使用了ES6的语法，可能需要如下配置`babel-loader`

```javascript
{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('test')]
}
```

```bash
npm install vue-see
```
## 使用
main.js
```javascript
import VueSee from 'vue-see'
var options={}
Vue.use(VueSee,options)
```
[查看参数列表](http://photoswipe.com/documentation/options.html)

demo.vue
```html
<template>
    <div>
        <see-box>
            <see-item v-for="(item,index) in imgList" :key="index" :url="item.u" :width="item.w" :height="item.h" :caption="item.c"></see-item>
        </see-box>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [{
                u: 'http://blogfile.ifeng.com/uploadfiles/blog_attachment/1308/75/10103075_13773099904967.jpg',
                w: 500,
                h: 365,
                c:'img1'
            }, {
                u: 'http://img.mp.itc.cn/upload/20170526/c6ae4bb96b3043be9d45fa5402a7f96c_th.jpg',
                w: 600,
                h: 336,
                c:'img2'
            }]
        }
    }
}
</script>
```
## 文档
组件

* see-box：多个图片的包裹层，必须

* see-item：图片列表渲染，必须

API

* imgList：图片列表数组，可以是服务器端返回的数据，必需
  
* key：推荐使用的列表key，非必需
  
* url：图片url，string类型，必需
  
* width：图片宽度，number类型，默认300像素，非必需
  
* height：图片高度，number类型，默认300像素，非必需
  
* caption：图片描述，string类型，默认空，非必需
  
> 建议正确设置图片宽高，达到图片的最佳预览效果

## Other/其他

* [基于Vue2.0高仿微信App的单页应用](https://github.com/zhaohaodang/vue-WeChat)


