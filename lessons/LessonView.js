
export class LessonView extends HTMLElement {
  constructor(){
    super()
  }

  connectedCallback(){

  }

  set data(lesson){
    this.lesson = lesson
    this.render()
  }

  get data(){
    return this.lesson
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
    let lesson = await response.json()
    this.data = lesson
  }

  render(){
    let {title, id, prerequisites, skills, description} = this.data

    this.innerHTML = `
      <h2>${title}</h2>
      <p class=lesson-description>${description}</p>
      <ul class=lesson-prerequisites>
      ${prerequisites
        .map(prerequisite => `<li>${prerequisite}</li>`)
        .join('\n')
      }
      </ul>
      <ul class=skills>
      ${skills
        .map(skill => `<li class=skill><a href="skills/${skill}/${skill}.html">${skill}</a></li>`)
        .join('\n')
      }
      </ul>
    `
  }

  listen(){

  }
}

customElements.define('lesson-view', LessonView)