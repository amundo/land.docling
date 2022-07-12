
let mende = ({sentences, metadata}) => `

<table>
<thead>
<caption>${metadata.title}</caption>
</thead>
<tbody>
${sentences
  .map(sentence => `<tr><td>${sentence.transcription}</td><td>${sentence.translation}</td></tr>`)
  .join('\n')
}
</tbody>
</table>

`

let lingala = ({metadata, sentences}) => `
  <h1>${metadata.title}</h1>

  <div class=transcriptions>
  ${
    sentences.map(({transcription}) => 
      `<span class=transcription>${transcription}</span>`
    )
    .join(' ')
  }
  </div>

  <div class=translations>
  ${
    sentences.map(({translation}) => 
      `<span class=translation>${translation}</span>`
    )
    .join(' ')
  }
  </div>

`

let takelma = ({metadata, sentences}) => `
  <h1>${metadata.title}</h1>

  <div class=words>
  ${
    sentences.map(({words}) => words.map(({form,gloss}) => 
      `
        <div class=word>
          <span class=form>${form}</span>
          <span class=gloss>${gloss}</span>
        </div>
       `
    )
    .join('\n')
    ).join("\n")
  }
  </div>

  <div class=translation>
  ${
    sentences.map(({translation}) => 
      `<span class=translation>${translation}</span>`
    )
    .join(' ')
  }
  </div>

`

let kashaya = ({metadata, sentences}) => `
  <h1>${metadata.title}</h1>

  <div class=transcriptions>
  ${
    sentences.map(({transcription}, i) => 
      `<span class=transcription-number>${i+1}.</span> <span class=transcription>${transcription}</span>`
    )
    .join(' ')
  }
  </div>

  <div class=translations>
  ${
    sentences.map(({translation}, i) => 
      `<span class=translation-number>${i+1}.</span> <span class=translation>${translation}</span>`
    )
    .join(' ')
  }
  </div>

`

export { mende, takelma, lingala, kashaya }
