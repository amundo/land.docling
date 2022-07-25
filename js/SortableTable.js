export class SortableTable extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `<table></table>`
    this.listen()
  }

  connectedCallback(){

  }

  set data(data){

    let [name, array] = Object.entries(data)
      .find(([key, value]) => Array.isArray(value))

    this.name = name

    this[this.name] = array

    this.metadata = data.metadata
    this.sort()
    this.render()
  }

  get data(){
    return {
      metadata: this.metadata,
      [this.name]: this[this.name]
    }
  }

  static get observedAttributes(){
    return ['headers', 'src', 'sort-by']
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == 'src'){
      this.fetch(newValue.trim())
    }

    if(attribute == 'headers'){
      this.headers = newValue.split(/[, ]+/g)
    }  
  }

  async fetch(url){ 
    let response = await fetch(url)
    let data = await response.json()
    this.data = data
  }  

  sort(header){
    if(!header){
      header = this.headers[0] || this.getAttribute('sort-by') || Object.keys(this[this.name][0])[0]
    }
    let items = this[this.name].slice()

    let compare = new Intl.Collator('en', {sensitivity: "base"}).compare

    items.sort((a,b) => compare(a[header], b[header]))
    this[this.name] = items

    this.render()
  }

  isProbablyAPath(path){
    return `.txt .json .html .css`.split` `.some(suffix => path.endsWith(suffix)) ||
      path.startsWith('http:') ||
      path.startsWith('/') ||
      path.startsWith('./')
  }

  render(){
    let table = this.querySelector('table')

    if(!this.headers){
      this.headers = Object.keys(this[this.name][0])
    }

    table.innerHTML = `<thead></thead>
    <tbody></tbody>`

    table.querySelector('thead').innerHTML = `
      <tr>
      ${this.headers.map(header => `<th>${header}</th>`).join('')}
      </tr>
    </thead>
    `

    let items = this[this.name]


    items.forEach(item => { 
      let tr = document.createElement('tr')
    
      this.headers.forEach(header => {
        let td = document.createElement('td')

        let value = item[header]

        if(this.isProbablyAPath(value)){
          td.innerHTML = `<a href="/data/${item[header]}">${item[header]}</a>`
        } else {
          td.innerHTML = item[header]
        }
        td.dataset.header = header
        tr.append(td)
      })

      table.querySelector('tbody').append(tr)
    })

    this.append(table)
  }

  listen(){
    this.addEventListener('click', clickEvent => {
      if(clickEvent.target.matches('th')){
        let header = clickEvent.target.textContent
        this.sort(header)
      }
    })
  }
}

customElements.define('sortable-table', SortableTable)