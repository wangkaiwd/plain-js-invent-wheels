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

type Handler = (e?: Event) => void

// @see: https://www.tslang.cn/docs/handbook/advanced-types.html
// 映射类型： 这里为什么要使用类型别名，而不能使用接口
type EventMap = {
  [K in EventTypes]: Handler []
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
    this.bind();
  }

  $ (selector: string): HTMLElement {
    const element = document.querySelector<HTMLElement>(selector);
    if (element) {
      return element;
    }
    throw 'selector of element not exist';
  }

  bind (): void {
    this.dom.addEventListener('touchstart', this.touchStart.bind(this));
    this.dom.addEventListener('touchend', this.touchEnd.bind(this));
    this.dom.addEventListener('touchmove', this.touchMove.bind(this));
  }

  touchStart (e: Event): void {
    this.emit('touchstart', e);
  }

  touchEnd (e: Event): void {
    this.emit('touchend', e);
  }

  touchMove (e: Event): void {
    this.emit('touchmove', e);
  }

  emit (eventType: EventTypes, e?: Event) {
    this.eventMap[eventType].forEach(handler => {
      handler(e);
    });
  }

  on (eventType: EventTypes, handler: Handler): void {
    this.eventMap[eventType].push(handler);
  }
}
const gesture = new Gesture('.touch');

gesture.on('touchstart', (e) => {
  console.log(e);
});
