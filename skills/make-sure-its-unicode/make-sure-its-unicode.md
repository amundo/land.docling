# Make sure it’s Unicode

In Lesson 1, you were asked to load a `.txt` file called `sample_esperanto.txt`. 

That content should look like this:

<figure>
<img src=esperanto_sample-lexicon.txt-screenshot.png>
<figcaption>A screenshot of the file esperanto_sample-lexicon.txt, showing correctly rendered text.</figcaption>
</figure>

Is that what you saw? Depending on a variety of circumstances (including the browser you’re using, its configuration, and the configuration of the server which is serving the content), you may see a display that looks more like this:

<figure>
<img src=esperanto_sample-lexicon.txt-screenshot-misrendered.png>
<figcaption>A screenshot of the file esperanto_sample-lexicon.txt, showing misencoded data.</figcaption>
</figure>

Note that the problem here is _not_ a corrupted file; what is happening is that the browser is “decoding” the content of the file incorrectly.

<a download=esperanto_sample-lexicon.txt href=/data/esperanto_sample-lexicon.txt>/data/esperanto_sample-lexicon.txt</a>


## Ensuring Unicode in `HTML` files

Text files are not the “native” format for web browsers — `HTML` is. There is a `<meta>` tag which you will want to think of as part of your “blank page boilerplate” that will ensure that the browser knows to decode your content as Unicode — more specifically, as the `UTF-8` “flavor” of Unicode. That tag, which should be placed as a child of the `<head>` tag at the top of every `HTML` document, looks like this:


> <code>  &lt;meta charset="UTF-8"> </code>




## Further resources

* <a title="Encoding settings for garbled text - Google Merchant Center Help" href="https://support.google.com/merchants/answer/6293594?hl=en">Encoding settings for garbled text - Google Merchant Center Help</a> — Curiously, Chrome has no solution comparable to Firefox for this problem.