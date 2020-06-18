import {
    loadMicroApp
} from 'qiankun';

window.reactClick = function () {
    console.log('点击按钮react')
    loadMicroApp({
        name: 'reactApp', // app name registered
        entry: {
            scripts: [
                'react-static/js/bundle.js',
                'react-static/js/0.chunk.js',
                'react-static/js/main.chunk.js'
            ]
        },
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