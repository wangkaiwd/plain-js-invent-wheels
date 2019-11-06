// 几种常用的用法

// 用法一：
// const gesture = new Gesture('.box');
// gesture.on('touchstart',(e) => {console.log(e)})

// 用法二
// gesture.init('.box')
// document.querySelectorAll('.touch').forEach((node) => {
//   node.addEventListener('touchstart',(e) => {
//      console.log(4)
//   })
// })

// 用法三
// gesture.on('touchstart','.box',(e) => {console.log(e)})
