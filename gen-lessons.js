let lessons = Deno.readTextFileSync('lessons.txt')

let stanzas = lessons
  .trim()
  .split(/\n\n+/g)
  .map(chunk => chunk.trim())
  .map(chunk => chunk.split(/\n/g).map(line => line.trim()))

let headers = `title description`.split` `

let months = [
  `AUG August`,
  `SEP September`,
  `OCT October`,
  `NOV November`,
  `DEC December`
].map(x => ({  let [mo, month] = x.split` ` }))

let dates = [
  {
    "timedate": "2022-09-01",
    "month": "September",
    "mo": "SEP",
    "day": "1"
  },
  {
    "timedate": "2022-09-08",
    "month": "September",
    "mo": "SEP",
    "day": "8"
  },
  {
    "timedate": "2022-09-15",
    "month": "September",
    "mo": "SEP",
    "day": "15"
  },
  {
    "timedate": "2022-09-29",
    "month": "September",
    "mo": "SEP",
    "day": "29"
  },
  {
    "timedate": "2022-10-06",
    "month": "September",
    "mo": "OCT",
    "day": "6"
  },
  {
    "timedate": "2022-10-13",
    "month": "September",
    "mo": "OCT",
    "day": "13"
  },
  {
    "timedate": "2022-08-20",
    "month": "August",
    "mo": "AUG",
    "day": "20"
  },
  {
    "timedate": "2022-08-31",
    "month": "August",
    "mo": "AUG",
    "day": "31"
  },
  {
    "timedate": "2022-08-31",
    "month": "August",
    "mo": "AUG",
    "day": "31"
  },
  {
    "timedate": "2022-08-31",
    "month": "August",
    "mo": "AUG",
    "day": "31"
  }
]

lessons = stanzas.map(stanza => headers.reduce((lesson, header, i) => {
  lesson.time = dates[i]
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