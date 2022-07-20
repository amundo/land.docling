export class IncludePRE extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `<pre></pre>`    
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
    this.data = await response.text()
  }

  set data(plaintext){
    this.plaintext = plaintext
    this.render() 
  }

  render(){
    this.querySelector("pre")
      .textContent = this.plaintext
  }

  listen(){

  }
}

customElements.define('include-pre', IncludePRE)  