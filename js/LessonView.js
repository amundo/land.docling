export class LessonView extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `

    `
    
    this.render()
  }

  render(){
    this.querySelector("h2").textContent = this.dataset.title

  }
}

customElements.define('lesson-view', LessonView)