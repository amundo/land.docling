import {LessonView} from './LessonView.js'

export class LessonIndex extends HTMLElement {
  constructor(){
    super()
  }

  connectedCallback(){

  }

  set data(links){
    this.links = links
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

  async fetch(url){
    let response = await fetch(url)
    let data = await response.json()

    let links = data.lessons.map(link => {
      let metaUrl = import.meta.url
      let path = metaUrl.slice(0,metaUrl.lastIndexOf('/')+1)
      let url = new URL(`${link}/${link}-index.json`, path).href
      return url
    })

    let responses = await Promise.all(links.map(link => fetch(link)))

    let lessons = await Promise.all(responses.map(response => response.json()))

    lessons.forEach(lesson => {
      let lessonView = new LessonView()
      lessonView.data = lesson
      this.append(lessonView)
    })


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