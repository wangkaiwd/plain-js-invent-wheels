import Mock from 'mockjs';
import axios from 'axios';
import qs from 'qs';

// console.log(qs.stringify({a:'b'}));


// 参数，请求地址，请求方式，请求返回数据模板
Mock.mock('http://www.myshop.com/api/123', 'post', {
    "list|5-10": [
        {
            "paragraph": "@ctitle",
            "id|+1": 1,
        }
    ],

    "goods|1-10": [
        {
            "id|+1": 1,
            "name": "@cname",
        }
    ]


});
// axios发送ajax请求成功后返回的内容

const res = {
    // 服务器返回的数据
    data: {},
    // HTTP状态码
    status: 200,
    // 服务器返回的消息
    statusText: 'OK',
    // 返回头
    headers: {},
    // 返回我们的配置
    config: {}
}


// 统一config配置

// 请求的超时时间是5秒
axios.defaults.timeout = 5000;
// 所有的请求都通过这个url走
// 可以更换线上环境和测试环境
axios.defaults.baseURL = "http://www.myshop.com/api";
// axios.defaults.baseURL = "http://192.168.1.129:8383";
// 设置post请求方式的请求头;
axios.defaults.headers.post['Content-Type'] = "'application/x-www-form-urlencoded;charset=UTF-8'";

// interceptor：发起大量请求时，通过拦截器对请求和响应做统一处理
// 配置拦截器
// 队请求做出统一处理
axios.interceptors.request.use(
    config => {
        // post传参序列化
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
            console.log(config.data);
        }
        // 可以在发请求之前
        return config;
    },
    err => {
        alert('错误的传参');
        return Promise.reject(error);
    }
)


axios.post('/123', {}).then(
    res => {
        if (res.status == 200) {
            // console.log(res);
            const info = qs.parse(res);
            console.log(info);
        }
    }
)
