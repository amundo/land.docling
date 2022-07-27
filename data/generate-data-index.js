import { walkSync } from "https://deno.land/std@0.148.0/fs/mod.ts";


let readJSONfiles =  () => Array.from(
   walkSync(".", { 
    exts: ["json"],
    skip: ['deno.json', 'data-index.json']
  })
)


let parseIndex = async index => {
  let urls = index
  .trim()
  .split(/\n/g)
  .map(chunk => chunk.trim())
  
  let summaries = []
  
  for await(let url of urls){
    let json = await Deno.readTextFile(`./${url}`)
    let data = JSON.parse(json)
    let summary = {} 
    summary.type = url.split('-')[1].split('.')[0].trim()
    
    let metadata = data.metadata 
    
    summary.title = metadata.title || "Untitled"
    summary.languages = metadata.languages || []
    summary.description = metadata.description
    summary.file = url.split('/').pop()
    summaries.push(summary)
  }
  
  let metadata = {
    title: "Sample data for docling.land",
    generatedBy: "generate-data-index.js"
  }


  return {metadata, summaries}
}

let index = Deno.readTextFileSync('data-index.txt')
let result = await parseIndex(index)

let json = JSON.stringify(result, null, 2)

Deno.writeTextFileSync('data-index.json', json)
// console.table(await readJSONfiles())
