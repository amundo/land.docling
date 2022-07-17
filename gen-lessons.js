import { ensureFile, ensureDir } from "https://deno.land/std/fs/mod.ts";

let data = Deno.readTextFileSync('lessons.json')
let lessons = JSON.parse(data)


for await (let lesson of lessons){
  let lessonDir = `./lessons/${lesson.id}`
  let slidesDir = `./lessons/${lesson.id}/slides`
  ensureDir(lessonDir)
  ensureDir(slidesDir)

  let lessonMarkdown = `${lessonDir}/${lesson.id}.md`
  let lessonHTML = `${lessonDir}/${lesson.id}.html`


  ensureFile(lessonMarkdown)
  ensureFile(lessonHTML)
}
