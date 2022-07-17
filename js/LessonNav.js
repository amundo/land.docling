export class LessonNav extends HTMLElement {
  constructor(){
    super()
    
  }

  connectedCallback(){

  }

  set data(lessons){
    this.lessons = lessons
  }

  get data(){
    return this.lessons
  }

  static get observedAttributes(){
    return []
  }

  attributeChangedCallback(attribute, oldValue, newValue){

  }

  render(){

  }

  listen(){

  }
}

customElements.define('lesson-nav', LessonNav)