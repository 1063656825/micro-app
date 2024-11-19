/*
 * @Author: yutaiqi
 * @Date: 2024-11-19 20:22:45
 * @LastEditTime: 2024-11-19 20:22:45
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /micro-app-template/customElement/index copy.js
 */
/*
 * @Author: yutaiqi
 * @Date: 2024-11-19 19:30:29
 * @LastEditTime: 2024-11-19 20:17:11
 * @LastEditors: yutaiqi
 * @Description: webcomponent 自定义元素
 * @FilePath: /micro-app-template/customElement/index.js
 */

// 自定义元素，基于html创建自己的元素标签
class customButton extends HTMLElement {
    constructor() {
        super()
        console.log(this.attributeStyleMap, 'attributeStyleMap', this.textContent);
        const button = document.createElement('button')
        button.textContent = this.textContent
        // 开启 shadow dom
        this.attachShadow({ mode: 'open' })
        // 样式隔离
        this.shadowRoot.innerHTML = `
        <style>
            button{
                color:red;
            }
        </style>
        `
        // 将元素挂在到 shadow dom中
        this.shadowRoot.appendChild(button)

        // template 模板
        const  template = document.querySelector('#custom-template')
        const clone = template.content.cloneNode(true)
        this.shadowRoot.appendChild(clone)
        

        this.innerHTML = `<button>${this.textContent}</button>`
        this.addEventListener('click', () => {
            console.log('click')
        })

    }

    connectedCallback() {
        console.log("自定义元素添加至页面。");
    }

    disconnectedCallback() {
        console.log("自定义元素从页面中移除。");
    }

    adoptedCallback() {
        console.log("自定义元素移动至新页面。");
    }

    //   监听属性变化,返回新旧值
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`属性 ${name} 已变更。`);
    }

    // 监听哪些属性发生变化，需要触发attributeChangedCallback
    static get observedAttributes() {
        return ['name'];
    }
}

window.customElements.define('custom-button', customButton)