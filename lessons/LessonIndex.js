export class LessonIndex extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `<header>
    <h1>Lessons</h1>
  </header>
  <main>
  </main>
`
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

  async fetch(url){
    let response = await fetch(url)
    let lessons = await response.json()
    this.data = lessons
  }

  renderDate(timestamp){
    let date = new Date(timestamp)
    console.log(date)
    let day = new Intl.DateTimeFormat('en-US', { day: 'numeric' })
      .format(date)
    let month = new Intl.DateTimeFormat('en-US', { month: 'long' })
      .format(date)
    let mo = new Intl.DateTimeFormat('en-US', { month: 'short' })
      .format(date).toUpperCase()

    let time = document.createElement('time')
    time.datetime = timestamp
    time.innerHTML = `<abbr title="${month}">${mo}</abbr> <span class="day">${day}</span>`

    return time
  }

  renderLesson(lesson){
    let time = this.renderDate(lesson.date)

    let div = document.createElement('div')
    div.classList.add("lesson")
    div.innerHTML = `${time.outerHTML}
    <h3>${lesson.title}</h3>
    `
    return div
  }

  render(){
    document.title = this.data.title
    this.innerHTML = `
      <header>
        <h1>${this.data.title}</h1>
      </header>
      <main>
      ${
        this.data.map(lesson => {
          let div = this.renderLesson(lesson)
          return div.outerHTML
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