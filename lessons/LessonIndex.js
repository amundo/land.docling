import {LessonView} from './LessonView.js'

export class LessonIndex extends HTMLElement {
  constructor(){
    super()
  }

  connectedCallback(){

  }

  set data(lessons){
    this.lessons = lessons
    this.render()
  }

  get data(){
    return this.lessons
  }

  static get observedAttributes(){
    return ['src']
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == 'src'){
      this.fetch(newValue)
    }
  }

  renderTimedate({timedate, month, day}){
    return `<time datetime="${timedate}"></time>`
  }

  renderLesson(lesson){
    let time = `<time datetime=""><abbr title="September">SEP</abbr> <span class="day">1</span></time>`
  }

  render(){
    document.title = this.data.title
    this.innerHTML = `
      <header>
        <h1>${this.data.title}</h1>
      </header>
      <main>
      ${
        this.data.lessons.map(lesson => {
          let lessonView = new LessonView()
          lessonView.data = lesson
          this.append(lessonView)
        })
        .join('\n')
      }
      </main>

    
    `
  }

  listen(){

  }
}

customElements.define('lesson-index', LessonIndex)  