import { walkSync } from "https://deno.land/std@0.148.0/fs/mod.ts";


let readJSONfiles =  () => Array.from(
   walkSync(".", { 
    exts: ["json"],
  })
)

let index = Deno.readTextFileSync('data-index.txt')

let parseIndex = index => {
  let chunks = index.trim().split(/\n\n+/g)
    .map(chunk => chunk.trim())
    .map(chunk => chunk.split(/\n/g))

    let headers = chunks.shift() 

  let files = chunks.map(chunk => {
    return headers.reduce((file, header, i) => {
      file[header] = chunk[i]
      return file
    }, {})
  })

  let metadata = {
    title: "Sample data for docling.land",
    fields:[ "name", "languages", "type", "description" ]
  }

  return {metadata, files}
}

let result = parseIndex(index)


let json = JSON.stringify(result, null, 2)


Deno.writeTextFileSync('data-index.json', json)
// console.table(await readJSONfiles())
