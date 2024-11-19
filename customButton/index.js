/*
 * @Author: yutaiqi
 * @Date: 2024-11-19 19:20:09
 * @LastEditTime: 2024-11-19 19:30:09
 * @LastEditors: yutaiqi
 * @Description: webcomponent,基于原有的button元素，改造自己独有的属性和方法
 * @FilePath: /micro-app-template/customButton/index.js
 */
// 基于HTMLButtonElement自定义元素，创建一个类
class MyButton extends HTMLButtonElement{
  constructor(){
    // 继承父类的构造函数，如果不添加 this无法指向当前实例 button
    super()
    this.addEventListener('click',()=>{
      console.log('click')
    })
  }
}

// 参数1:自定义元素的名称
// 参数2:自定义元素的类
// 参数3:【继承元素】
window.customElements.define('my-button',MyButton,{extends:'button'}) 