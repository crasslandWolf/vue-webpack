import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
// 引入路由配置文件
import { configRouter } from "./router.js"
// 引入自定义的过滤器文件
import { setFilter } from "./js/filter.js"
// 引入自定义的指令文件
import { setDirective } from "./js/directive.js"


// 引入本地自己写的 css 单独打包为一个文件, webpack 会帮你用 link 标签插入到index.html中
import css from "./css/app.css"

// 引入第三方 打包  这样会将第三方的 css 文件和本地自己编写的 app.css 打在一起, 应该在 config 中配置单独打包第三方文件
// 在 config 中配置时会打包出一个 js 文件  还没有弄明白
// import lzxCommon from "./vendor/lzx/lzx.common-0.1.0.css"
// import bootstrap from "./vendor/bootstrap/bootstrap-2.0.2-min.css"

//  引入  vue-router
Vue.use(VueRouter);
//  引入  vue-resource
Vue.use(VueResource);

//开启debug模式  便于看错
Vue.config.debug = true;

// new Vue(app);//新建一个vue实例，现在使用vue-router就不需要了。

// 正式开始
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制
var router = new VueRouter({
    history: true,
    saveScrollPosition: true
});

// 注入路由
configRouter(router);
// 注入自定义过滤器
setFilter(Vue);
// 注入自定义指令
setDirective(Vue);

// 路由器需要一个根组件。
const App = Vue.extend(require('./components/app.vue'));


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');