export class DataIndex extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `<table>
    </table>`
    this.listen()
  }

  connectedCallback(){

  }

  sortBy(field){
    let files = this.files.slice()
    files.sort((a,b) => a[field] < b[field] ? -1 : 1)
    this.files = files
    this.render()
  }

  set data({metadata, files}){
    Object.assign(this, {metadata, files})
    this.render()
  }

  get data(){
    return {
      metadata: this.metadata, 
      files: this.files
    }
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
    let {metadata, files} = await response.json()
    this.data = { metadata, files }
  }

  render(){
    let table = this.querySelector('table')
    table.innerHTML = `<thead></thead>
    <tbody></tbody>`
    table.querySelector('thead').innerHTML = `
      <tr>
      ${this.metadata.fields.map(field => `<th>${field}</th>`).join('')}
      </tr>
    </thead>
    `

    this.files.forEach(file => {
      let tr = document.createElement('tr')
    
      this.metadata.fields.forEach(field => {
        let td = document.createElement('td')

        console.log(field)
        if(field == 'name'){
          td.innerHTML = `<a href="./data/${file[field]}">${file[field]}</a>`
        } else {
          td.innerHTML = file[field]
        }
        tr.append(td)
      })

      table.querySelector('tbody').append(tr)
    })

    this.append(table)
  }

  listen(){
    this.addEventListener('click', clickEvent => {
      if(clickEvent.target.matches('th')){
        let field = clickEvent.target.textContent
        this.sortBy(field)
      }
    })
  }
}

customElements.define('data-index', DataIndex)