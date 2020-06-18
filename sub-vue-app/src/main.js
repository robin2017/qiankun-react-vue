import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

if (document.querySelector('#app')) {
    console.log('独立模式')
    new Vue({
        render: h => h(App),
    }).$mount(`#app`)
} else {
    console.log('集成模式')
}

export async function bootstrap() {
    console.log('vue app bootstraped');
}

export async function mount(props) {
    let dom = document.querySelector('#qiankun-content')
    let id = `randomId-${Math.random().toString(16).slice(6)}`
    const ele = document.createElement('div')
    ele.setAttribute('id', id)
    dom.appendChild(ele)
    new Vue({
        render: h => h(App),
    }).$mount(`#${id}`)
}

export async function unmount() {}

export async function update(props) {
    console.log('update props', props);
}