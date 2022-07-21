# Valid `HTML`

Let's talk about validity in the next skill.

So the next skill is validate your html lest you be thinking that we're going to be writing massive amounts of html ourselves.  That's not the case.

We're just gonna get to know the basic system.

But I think that at least familiarizing ourselves with the notion of a valid document is a useful exercise.

So a valid document is one that obeys the rules of the specification that it's attempting to use.

`HTML` is a quite a complicated specification.

There's a a website that you can look at that has the gruesome details and it is pretty gruesome.
It's quite an old language at this point.
It's very powerful and it has evolved a lot and been standardized a lot.
So the specification is not intended for new learners.

It's for people who want to create a new browser,
which is an incredibly difficult undertaking.
But it's out there and you can look at it if you are curious.

But a more realistic way to interact with the definition of html is just see if you can make a valid page.
So if we take our document and we go to this validator,
we'll see that there's more than one way to use it.
You can either upload a file or you can just paste the content of the file into this little text box here and we'll do that.
The third way is to pass A URL.

And then this validator will go off and get that content and check it that way.
So if we paste are very simple.
one Tag page into this validator,
we're going to see that there's an error.
So the error is here.
It says no doc type declared.
So this is kind of a an odd tag and it's kind of odd that it comes up so quickly.
But this particular tag is it has a long and sort of squirrely history and that it doesn't look like other html tags.
But you have to begin your html file with this little thing which is called the doc type declaration.
So there are other doc types in the world that are also like html.
The most familiar is xml.
Xml also has a doc type declaration,
which is more complicated.
The html one thankfully is quite short nowadays.
So all you have to do is it doesn't have a closing tag and it has a very curious exclamation point after the inside the opening tag.
So it looks like this says doc type and then html.
So this needs to be the beginning of our html file.
And I think you know,
what I usually do is I have a little boilerplate basic html which I'll share with you and you should just start your html pages.
That way.
V.
S code can actually help you to do this.
So I'll show you that later.
But so if we add this doc type declaration,
we see that the error goes away.
However,
we do have a warning.
So however,
the this page is in fact valid even though it has nothing no content just to a doc type in a title.
So there you go.
You've created a valid html page.

