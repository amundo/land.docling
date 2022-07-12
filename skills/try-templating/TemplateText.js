import {kashaya,takelma,lingala,mende} from './templates.js'


export class TemplateText extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
<aside>
  <nav class=choose-template>    
    <label><input type="radio" value="kashaya" name="layout" > Kashaya</label>
    <label><input type="radio" value="takelma" name="layout" checked> Takelma</label>
    <label><input type="radio" value="lingala" name="layout"> Lingala</label>
    <label><input type="radio" value="mende" name="layout"> Mende</label></div>
  </nav>
</aside>
<main>
  <output>
  </output>
</main>
    `
    this.templates = {kashaya,takelma,lingala,mende}

    this.listen()
  }

  connectedCallback(){

  }

  set data(text){
    this.text = text
    this.render('takelma')
  }

  get data(){
    return this.text
  }

  static get observedAttributes(){
    return ['src', 'templates']
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == 'src'){
      this.fetch(newValue)
    }
  }

  async fetch(url){
    let response = await fetch(url)
    let text = await response.json()
    this.data = text
  }

  render(templateName){
    this.dataset.layout = templateName
    let template = this.templates[templateName]
    this.querySelector('output').innerHTML = template(this.text)
  }

  listen(){
    this.addEventListener('change', changeEvent => {
      if(changeEvent.target.matches('[type=radio]')){
        let templateName = changeEvent.target.value
        this.render(templateName)
      }
    })
  }
}

customElements.define('template-text', TemplateText)  

