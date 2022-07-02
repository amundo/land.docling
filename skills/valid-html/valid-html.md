
[378] so but let's talk about validity in the next skill.
[393] So the next skill is validate your html lest you be thinking that we're going to be writing massive amounts of html ourselves.
[402] That's not the case.
[403] We're just gonna get to know the basic system.
[407] But I think that at least familiarizing ourselves with the notion of a valid document is a useful exercise.
[428] So a valid document is one that obeys the rules of the specification that it's attempting to use.
[434] So html is a quite a complicated specification.
[439] There's a a website that you can look at that has the gruesome details and it is pretty gruesome.
[450] It's quite an old language at this point.
[452] It's very powerful and it has evolved a lot and been standardized a lot.
[457] So the specification is not intended for new learners.
[463] It's for people who want to create a new browser,
[465] which is an incredibly difficult undertaking.
[469] But it's out there and you can look at it if you are curious.
[476] But a more realistic way to interact with the definition of html is just see if you can make a valid page.
[485] So if we take our document and we go to this validator,
[491] we'll see that there's more than one way to use it.
[493] You can either upload a file or you can just paste the content of the file into this little text box here and we'll do that.
[502] The third way is to pass A U.
[503] R.
[503] L.
[504] And then this validator will go off and get that content and check it that way.
[521] So if we paste are very simple.
[524] one Tag page into this validator,
[528] we're going to see that there's an error.
[531] So the error is here.
[534] It says no doc type declared.
[537] So this is kind of a an odd tag and it's kind of odd that it comes up so quickly.
[555] But this particular tag is it has a long and sort of squirrely history and that it doesn't look like other html tags.
[567] But you have to begin your html file with this little thing which is called the doc type declaration.
[574] So there are other doc types in the world that are also like html.
[580] The most familiar is xml.
[582] Xml also has a doc type declaration,
[584] which is more complicated.
[585] The html one thankfully is quite short nowadays.
[589] So all you have to do is it doesn't have a closing tag and it has a very curious exclamation point after the inside the opening tag.
[602] So it looks like this says doc type and then html.
[606] So this needs to be the beginning of our html file.
[609] And I think you know,
[610] what I usually do is I have a little boilerplate basic html which I'll share with you and you should just start your html pages.
[618] That way.
[619] V.
[619] S code can actually help you to do this.
[627] So I'll show you that later.
[629] But so if we add this doc type declaration,
[633] we see that the error goes away.
[635] However,
[636] we do have a warning.
[638] So however,
[640] the this page is in fact valid even though it has nothing no content just to a doc type in a title.
[648] So there you go.
[649] You've created a valid html page.

