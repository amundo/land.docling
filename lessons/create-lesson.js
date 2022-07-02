let id = Deno.args[0]

await Deno.mkdir(`./${id}`)

let lessonData = JSON.parse(await Deno.readTextFile('sample-lesson.json'))

lessonData.id = id

await Deno.writeTextFile(`./${id}/${id}.md`, '')
await Deno.writeTextFile(`./${id}/${id}.html`, '')
await Deno.writeTextFile(`./${id}/${id}.json`, JSON.stringify(lessonData,null,2))

await Deno.mkdir(`./${id}/exercises`)
await Deno.mkdir(`./${id}/starting-files`)
await Deno.mkdir(`./${id}/slides`)

let lessonIndex = JSON.parse(await Deno.readTextFile('lesson-index.json'))

lessonIndex.lessons.push(id)

await Deno.writeTextFile('lesson-index.json', JSON.stringify(lessonIndex, null, 2))


console.log(`lesson scaffold created in  ${id}/.`)
