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

// const gesture = (() => {
//   const on = () => {
//
//   };
//   // 这里的on方法会比较复杂，所以要拆分函数来完成
//   // 为了不影响全局作用域，我们使用立即执行函数，然后将需要的值进行返回
//   return { on };
// })();
type EventTypes = 'tap' | 'doubleTap' | 'swipe' | 'touchstart' | 'touchend' | 'touchmove';

// @see: https://www.tslang.cn/docs/handbook/advanced-types.html
// 映射类型： 这里为什么要使用类型别名，而不能使用接口
type EventMap = {
  [K in EventTypes]: ((e: Event) => void) []
}
class Gesture {
  dom: HTMLElement;
  eventMap: EventMap = {
    tap: [],
    doubleTap: [],
    swipe: [],
    touchstart: [],
    touchend: [],
    touchmove: []
  };

  constructor (selector: string) {
    this.dom = this.$(selector);
  }

  $ (selector: string): HTMLElement {
    const element = document.querySelector<HTMLElement>(selector);
    if (element) {
      return element;
    }
    throw 'selector of element not exist';
  }

  on (eventType: string, handler: (e: Event) => void): void {

  }
}
