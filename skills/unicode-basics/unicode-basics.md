[664] So the next skill,
[668] add unicode content to your valid page.
[673] So you'll remember that we started off with an H T M over the plain text file called Hello World.
[678] Now we're going to take that content and we're going to add it to an html page and re linguists.
[685] So we want to be able to support arbitrary writing systems right away and we'll run into a bug.
[691] So we're gonna catch that bug and then figure out how to fix it.
[696] And along the way,
[697] we're going to learn a little bit about how unicode works on the web.
[700] Happily it's not too complicated.
[702] So we're just going to learn another special tag which will allow us to to use unicode encoded content.
[712] So open up the file that says in the start directory that says add unicode dot html or actually that it says empty dot html.
[737] And empty dot html will contain the doc type and the title that we saw before.
[742] And all we're gonna do is we're gonna take one line from this Hello World file,
[746] take your pick.
[748] And except for the first line.
[751] Actually no,
[752] take your pick any line.
[755] And then we're going to cut and paste that file into this empty file and you might want to save it with a new name if you overwrite the empty file,
[767] that's fine too.
[768] But it might be helpful to keep things distinct so you can save this as a file.
[775] So what I'm gonna do is I'm gonna take this line here with some tie in it.
[779] I think thai is quite pretty and I'm going to cut and paste this into my empty that html and then I'm going to go to file save as and I'll just save it as tied at html and then I will minimize V.
[795] S.
[795] Code and then I'll go to my browser here,
[797] firefox file,
[799] open tie dot html and take a look now what happens?
[811] There are some parameters here.
[812] You might actually see the text render okay.
[839] Um but you also might see gobbledygook,
[843] there's a name for this which is really quite charming called emoji back.
[850] This is a japanese word and it means text which is not rendered correctly.
[854] Emoji is a character and back a I guess it's something like garbage or something.
[860] Um anybody speak japanese so mo jie back means that the browser doesn't know what encoding the file is in.
[871] We're still in the tail end of a long process of converting everything to unicode.
[877] So unfortunately we still have to tell the web browser that our page is in unicode.
[883] We don't normally have to do any special tricks to save files because unicode is the default.
[889] For instance when V.
[890] S code saves a file.
[892] When you hit file,
[893] save it will encode it as as unicode unless you tell it otherwise.
[898] And there's Really zero reason to ever not use unicode when you save a file,
[903] there's a couple of details like unicode can be stored in different ways,
[909] The one that we are going to be using and by far the most common It's called UFF eight.
[916] That's unicode transformation format eight.
[919] Um it has to do with the way that the actual numbers are stored on the computer.
[923] You don't have to worry about that too much except to know that UFF eight is the is the default and if you're curious we can talk about it more but we have to put some instructions in the in the web page that tell the browser.
[942] Hey,
[943] when you read this,
[945] you should know that all of the characters in my text file are encoded in unicode.
[951] So the way that you do that is you use this thing called a meta tag.
[954] So this is our second tag now and we're going to put that right below the title.
[964] And this meta tag takes what we call uh an attribute.
[968] So it's not just an opening tag by the way,
[970] this is this is a self closing tag.
[972] So there's no closing meta um but what we're gonna do here.
[978] So it says meta and then it has its there's various kinds of meta tags that do different things and they're sort of,
[985] you know,
[985] they're like metadata there,
[986] the instructions to the browser that don't really show up in the content of the page that the user will read but it does affect the way that that content is displayed and how it works.
[997] So the meta tag is in this case will be a car set,
[1004] char set character set Attribution and we're gonna set it to UFF-8.
[1013] So we do that here under the title tag and now we have our thai text content and we save it and then we open it again in the browser and now we see that that ty has rendered correctly.
[1033] So the browser now knows that this now knows that this is unicode text content.
[1039] So that's a victory.

