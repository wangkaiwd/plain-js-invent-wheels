import Mock from 'mockjs';
import axios from 'axios';
import qs from 'qs';

// console.log(qs.stringify({a:'b'}));

// mockjs进行数据的模拟
// mockjs是对请求的拦截，所以并不能在浏览器network处进行响应与请求的调试
// 参数：请求地址，请求方式，请求返回数据模板
Mock.mock('http://www.myshop.com/api/123', 'post', {
    "list|5-10": [
        {
            "paragraph": "@ctitle",
            "id|+1": 1,
        }
    ],

    "goods|4-10": [
        {
            "id|+1": 1,
            "name": "@ctitle(3)",
        }
    ]
});
// 通过为函数的参数来获取前端传递的参数，data为一个对象，data.body为前端传递的参数
// Mock.mock('http://www.myshop.com/api/123', 'post', function (data) {
//     qs.stringify(data.body);
//     console.log(data);
// });
// axios发送ajax请求成功后返回的内容
// console.log(res);
// const res = {
//     // 服务器返回的数据
//     data: {},
//     // HTTP状态码
//     status: 200,
//     // 服务器返回的消息
//     statusText: 'OK',
//     // 返回头
//     headers: {},
//     // 返回我们的配置
//     config: {}
// }


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
// 对请求做出统一处理
axios.interceptors.request.use(
    config => {
        // post传参序列化
        if (config.method === 'post') {
            // 讲json格式的字符串进行key=value,key1=value2...的格式（序列化）
            config.data = qs.stringify(config.data);
            // console.log(config.data);
            // name=%E5%B0%8F%E6%98%8E&age=18
        }
        // 可以在发请求之前对请求进行配置
        return config;
    },
    err => {
        alert('错误的传参');
        return Promise.reject(err);
    }
)

// 对响应做出统一处理
axios.interceptors.response.use(
    res => {
        // 这里的200是字符串（如果响应状态码不是为200）
        if (res.status != '200') {
            // 提示错误信息
            // return alert(res.data.msg);
            // 执行请求失败时的回调，支持promise API
            return Promise.reject(res);
        }
        return res;
    },
    err => {
        alert('网络异常');
        return Promise.reject(err);
    }
)
axios.post('/123', { name: '小明', age: 18 }).then(
    ({ data }) => {
        console.log(data);
    }
)
