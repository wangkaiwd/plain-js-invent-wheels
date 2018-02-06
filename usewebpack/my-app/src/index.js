const appState = {
    title: {
        text: 'React.js 标题',
        color: 'red',
    },
    content: {
        text: 'React.js 内容',
        color: 'blue'
    }
}

// 全局变量可能会被任意修改
// 但是全局变量在任何地方被访问到，实现数据共享

function renderApp(appState) {
    renderTitle(appState.title)
    // renderContent(appState.content)
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent(content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

// 所有对数据的操作只能通过dispatch函数
// function dispatch(action) { // 参数：对象
//     // action中除了type字段是必须的，其它字段都可以自定义
//     // type字段用来定义要修改什么
// switch (action.type) { // 利用switch,case语法，根据不同的做法，执行不同的逻辑
//     case 'UPDATE_TITLE_TEXT':
//         appState.title.text = action.text;
//         break;
//     case 'UPDATE_TITLE_COLOR':
//         appState.title.color = action.color;
//         break;
//     default:
//         break;
// }
// }

// 在调试的时候，只要在dispatch函数中对应的type后面debugger就可以了
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'hello' }); // 修改标题文字
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'hotpink' }); // 修改标题颜色
// renderApp(appState);

function createStore(state, stateChanger) {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        stateChanger(state, action);
        listeners.forEach((listener) => listener());
    }
    return { subscribe, getState, dispatch };
}

function stateChanger(state, action) {
    // 根据action来修改state
    switch (action.type) { // 利用switch,case语法，根据不同的做法，执行不同的逻辑
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break;
    }
}

// 传入初始的数据：appStore  描述数据变化的函数：stateChanger
// 然后生成一个store

// 获取数据：store.getState();
// 修改数据：store.dispatch();
const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState()));
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'hello' }); // 修改标题文字
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'hotpink' }); // 修改标题颜色