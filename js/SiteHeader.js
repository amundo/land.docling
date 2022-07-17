export class SiteHeader extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
    <h1>
      <a href="lessons.html">
        <span class="handwritten">docling</span><span class="digitized">.land</span>
      </a>
    </h1>
    <h2></h2>
    `
    
    this.render()
  }

  render(){
    this.querySelector("h2").textContent = this.dataset.title

  }
}

customElements.define('site-header', SiteHeader)