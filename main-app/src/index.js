import {
    loadMicroApp
} from 'qiankun';

window.reactClick = function () {
    console.log('点击按钮react')
    loadMicroApp({
        name: 'reactApp', // app name registered
        entry: '//localhost:10081',
        container: '#qiankun-content',
    })
}
window.vueClick = function () {
    console.log('点击按钮vue')
    loadMicroApp({
        name: 'vueApp', // app name registered
        entry: {
            scripts: [
                'vue-static/js/chunk-vendors.js',
                'vue-static/js/app.js'
            ]
        },
        container: '#qiankun-content',
    })
}