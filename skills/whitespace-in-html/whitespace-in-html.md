
* A bit tricky to understand the association 

[1058] This seems like a very obscure topic but pretty important when it if you want to understand how this system works.
[1068] So let's take our page now.
[1071] It's saved as in the starting files,
[1075] it's saved as hello world dot html.
[1091] And this time we've added a single tag to the content of the page and it doesn't actually change much except that it makes the font size larger.
[1101] So The tag that we're using here is H1 that stands for first level heading.
[1110] We're heading level one that's the biggest font size,
[1113] our biggest heading level.
[1116] It's not unlike headings in uh like software or other word processing programs.
[1124] So it so happens for kind of weird historical reasons.
[1128] There are six levels of headings and then stops.
[1131] So you've got a church one H two H three up to age six and those are each slightly smaller.
[1137] We'll try those out in a minute.
[1139] But the basic idea is that on an html page you should only have one H one per page.
[1145] That's the Nothing's stopping you from adding more than one.
[1148] But that's the idea is that every page should have one each one.
[1155] So we put our thai text inside of this H one.
[1158] If we save it and then reload it,
[1160] you'll see that the text is now larger,
[1162] right?
[1163] Um hardly surprising,
[1167] but now I want to show you something which is kind of interesting if we take this content and we go inside of this tag and then we add a bunch of white space around the content and save that,
[1183] like so,
[1186] and then we open it again curiously.
[1189] Nothing changes.
[1192] Now,
[1192] if you were to go into at least visually,
[1194] if you were to go into Microsoft word and start banging on your enter key on either side of a heading.
[1201] Well,
[1202] Microsoft word is a so called Wysiwyg file editor with the wig standing for what you see is what you get.
[1212] Um it's going to interpret those.
[1221] That white space is meaningful.
[1224] Html is a little bit different in that regard.
[1227] So the actual rules for determining how this stuff happens is are pretty complicated,
[1236] But they're also weirdly enough,
[1238] they're pretty intuitive and I've never I've been doing this since I was 17 and I've never really,
[1243] I was kind of surprised when I learned that this was actually a a thing that had rules.
[1249] Um but it is interesting to know that that white space actually is there and you can control whether or not it appears or not,
[1261] and we can prove that by using another tag.
[1264] And this tag is called pre tag P.
[1267] R.
[1267] E.
[1268] And that stands for preformatted text.
[1271] So if we put this pre tag underneath our tie heading and then we copy the content of that heading into the pre tag and we display it,
[1285] we'll see that the space actually renders the white space renders.
[1294] So why this is has to do with rules about defaults for different tags.
[1301] So different tags have different behaviors.
[1304] Um We don't usually actually want this behavior,
[1308] we don't we actually believe or not collapsing whitespace As we saw in the H one is a good thing because you don't want to have to have this kind of maniacal um attention to white space when you're actually composing an html file and typing an html file.
[1338] So let's Add one more tag.
[1342] This will be our fourth tag.
[1344] This is the p tag for a paragraph.
[1347] And if we take our Hello world text file and this time we just copy all of it clunk right into that tag and save that and open it up.
[1363] What do we see?
[1365] Yeah.
[1366] Everything just runs together into a wall of text.
[1371] So it looks like an 1800s German tom like Von humboldt wrote this or something.
[1379] Um So you might ask yourself.
[1386] Well that's weird how it's how am I supposed to make things appear on their own line?
[1393] And this actually enters into one of the most interesting things about html in my opinion, which is the box model.