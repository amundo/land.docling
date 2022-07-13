let lessons = Deno.readTextFileSync('lessons.txt')

let stanzas = lessons
  .trim()
  .split(/\n\n+/g)
  .map(chunk => chunk.trim())
  .map(chunk => chunk.split(/\n/g).map(line => line.trim()))

let headers = `title description`.split` `

lessons = stanzas.map(stanza => headers.reduce((lesson, header, i) => {
  lesson[header] = stanza[i] || ""
  lesson.number = i + 1
  if(header == "title"){
    lesson.id = lesson.title
      .split(/[,:]+/g)[0]
      .toLowerCase()
      .replaceAll(' ', '-')
  }
  return lesson
}, {}))



Deno.writeTextFileSync('lessons.json', JSON.stringify(lessons,null, 2))