/*
 * @Author: yutaiqi
 * @Date: 2024-11-19 19:30:29
 * @LastEditTime: 2024-11-19 20:25:18
 * @LastEditors: yutaiqi
 * @Description: webcomponent 自定义元素
 * @FilePath: /micro-app-template/customElement/index.js
 */

// 自定义元素，基于html创建自己的元素标签
class customButton extends HTMLElement {
    constructor() {
        super();
        let value = this.getAttribute("value");

        let templateEle = document.getElementById("add-template");
        let cloneEle = templateEle.content.cloneNode(true);
        cloneEle.querySelector("input[type='text']").value = `${value}`;

        let btn = document.createElement("button");
        btn.innerHTML = `custom-button ${value}`;
        btn.addEventListener('click', () => {
            this.setAttribute("name", "test");
            this.setAttribute("value", 89);
        })

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
      <style>
        button {
          color: red;
        }
      </style>

    `;
        this.shadowRoot.appendChild(btn);

        this.shadowRoot.appendChild(cloneEle);
    }
}

window.customElements.define('custom-button', customButton)