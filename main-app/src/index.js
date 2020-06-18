import {loadMicroApp} from 'qiankun';
//
// registerMicroApps([
//     {
//         name: 'react app', // app name registered
//         entry: {
//             scripts: [
//                 '//localhost:10081/static/js/bundle.js',
//                 '//localhost:10081/static/js/0.chunk.js',
//                 '//localhost:10081/static/js/main.chunk.js'
//             ]
//         },
//         container: '#sub-react',
//         activeRule: '/sub_react',
//     }
// ]);
// start();

function reactClick() {
    console.log('点击按钮react')
    loadMicroApp({
        name: 'react app', // app name registered
        entry: {
            scripts: [
                '//localhost:10081/static/js/bundle.js',
                '//localhost:10081/static/js/0.chunk.js',
                '//localhost:10081/static/js/main.chunk.js'
            ]
        },
        container: '#qiankun-content',
    })
}

window.reactClick = reactClick

function vueClick() {
    console.log('点击按钮vue')
    loadMicroApp({
        name: 'vue app', // app name registered
        entry: {
            scripts: [
                '//localhost:10082/js/chunk-vendors.c9f25e13.js',
                '//localhost:10082/js/app.0b1df353.js'
            ]
        },
        container: '#qiankun-content',
    })
}

window.vueClick = vueClick