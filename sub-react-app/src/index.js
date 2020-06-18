import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

if(document.querySelector('#root')){
    console.log('独立模式')
    ReactDOM.render(<App/>, document.querySelector('#root'))
}else{
    console.log('集成模式')
}

export async function bootstrap() {
    console.log('react app bootstraped');
}

export async function mount(props) {
    console.log(props);
    ReactDOM.render(<App/>, document.querySelector('#qiankun-content'));
}

export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.querySelector('#qiankun-content'));
}

export async function update(props) {
    console.log('update props', props);
}

