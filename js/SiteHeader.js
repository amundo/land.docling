export class SiteHeader extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
    <h1>
      <a href="/index.html">
        <span class="handwritten">docling</span><span class="digitized">.land</span>
      </a>
    </h1>
    <h2></h2>
    <site-nav></site-nav>
    `
    
    this.render()
  }
  
  render(){
    document.title = this.dataset.title
    this.querySelector("h2").textContent = this.dataset.title
  }
}

customElements.define('site-header', SiteHeader)