export class SiteNav extends HTMLElement {
  constructor(){
    super()
    this.sites = [
      ["Lessons", "/_index.html"],
      ["Skills", "/skills.html"],
      // ["Background", "background.html"],
      ["Data", "/data.html"],
      ["References", "/references.html"],

    ]
    this.innerHTML = `<ol></ol>`
    this.render()
  }

  set data(sites){
    this.sites = sites
    this.render()
  }

  render(){
    this.sites.forEach(([label, url]) => {
      let a = document.createElement('a')

      a.href = url
      a.textContent = label
      let li = document.createElement('li')
      li.append(a)
      this.querySelector('ol').append(li)
    })
    this.querySelectorAll('a')
      .forEach(a => {
        if(document.location.href.endsWith(a.href)){
          a.removeAttribute('href')
        }
      })
  }
}

customElements.define('site-nav', SiteNav)


 