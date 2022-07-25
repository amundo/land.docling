let content = Deno.readTextFileSync('glossary.txt')

let [metadata, ...chunks] = content.split('\n\n')

metadata = metadata.split`\n`
  .reduce((metadata, line) => {
    let [key,value] = line.split(":", 2)
    metadata[key] = value
    return metadata
  }, {})


let parseChunk = chunk => {
  let [term, definition] = chunk.trim()
    .split(`\n`)
    .map(x => x.trim())

  return {term, definition}
}

let terms = chunks
  .map(parseChunk)
  .filter(({term,definition}) => term && definition)

let collator = new Intl.Collator('en', {sensitivity: 'base' })

terms = terms.sort((a,b) => collator.compare(a.term, b.term))

Deno.writeTextFileSync('glossary.json', JSON.stringify({ metadata, terms},null,2))

