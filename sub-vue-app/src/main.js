import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export async function bootstrap() {
    console.log('react app bootstraped');
}

export async function mount(props) {
    // console.log(props);
    // let dom = document.querySelector('#qiankun-content')
    // let id = `randomId-${Math.random().toString(16).slice(6)}`
    // dom.innerHTML = `<div id="${id}"></div>`
    new Vue({
        render: h => h(App),
    }).$mount(`#qiankun-content`)
}

export async function unmount() {
}

export async function update(props) {
    console.log('update props', props);
}
