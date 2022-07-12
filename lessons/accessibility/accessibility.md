
[2114] So in a which brings us to the topic of accessibility,
[2142] which is the next skill in this skill,
[2146] we're gonna talk a little bit about the notion of accessibility,
[2149] which is an area where the web actually excels compared to other platforms.
[2154] Um the web is meant to be a universal information system and it should be usable by people who access it in a whole variety of modalities,
[2168] including the non visual modality.
[2170] So many people make use of the web with audio interface.
[2177] Blind users,
[2178] people with vision difficulties.
[2181] And I think it's really one of the coolest features about the web is that this is possible.
[2195] Accessibility is not just a matter of equality,
[2211] although it is that it's also a kind of ideal for making digital content as flexible as possible and as usable in as many different contexts as possible.
[2239] So,
[2240] in this section we're going to just think a little bit about how our page will behave in an audio medium.
[2256] So I think that it's important for us to try this early on and I will also add that I'm not an expert in accessibility,
[2268] I've done what I can to learn and it's an ongoing process,
[2274] it is the kind of thing that it pays to investigate early because once you've created a lot of content,
[2281] it can be difficult to go back and make it more accessible if it has a lot of problems embedded in it.
[2292] But I'm happily that most important thing that you can do for accessibility,
[2302] it's just to use good html to mark up your content in a very meaningful away as possible.
[2309] So,
[2310] as I mentioned last time,
[2312] we're going to have a discussion of the so called semantics of a Chanel tags in a later skill.
[2332] But I think it's important to bear in mind you'll remember that we talked about that pre tag early on as an example of a way to sort of use white space to encode seemingly encode visual structure.
[2349] And I think you'll agree that that was not terribly,
[2458] I think that you can at least uh appreciate the idea that there's no way that the computer would know that any particular line in this sort of visual arrangement has any internal structure.
[2475] We haven't actually said anything beyond laying this out in a visual way,
[2482] if you see what I mean.
[2482] So um so we could,
[2490] for instance,
[2491] make a pronoun table and line things up visually in our pro down table and display it in a web page using a pre tag.
[2546] And I think you'll agree that this um content doesn't help the computer to I guess know about the content of this tag,
[2566] right?
[2567] It doesn't have any kind of we can say that it's not granular.
[2573] The parts of this data are not labeled in this All right encoding of the content.
[2582] This representation of the content.
[2584] So what's the alternative?
[2597] Well,
[2598] as we saw in the last skill about block level and in line level elements,
[2607] it's possible to nest tags inside of other tags.
[2611] And so this is a really crucial feature of html.
[2617] Is that you can build these kind of tree structures and then display them in a way that's legible in the visual medium,
[2626] but also navigable in a non visual medium.
[2632] That's what accessibility is.
[2633] You can access the content without In more than one way.
[2639] Right.
[2640] And what that boils down to saying is that the structure of the content as it's encoded for the computer to parse and to render is a tree.
[2654] It has internal structure.
[2659] So you could say that in this p tag here that it contains two other tags.
[2666] It contains a strong tag and an emphasis tags.
[2670] So that might seem sort of trivial.
[2677] But that basic concept is really quite important for the notion of accessibility and for the whole model of the web platform,
[2689] is this idea that we can create these nested structures that look like the kinds of documents that we're familiar with but which also encode a granular representation.
[2702] That is to say um hierarchical representation of information and that we can later refer to different parts of that document in useful ways.
[2716] So this is the notion of granularity and it's going to be an important one,
[2723] not just an html,
[2724] but also in Jason and in CSS.
[2782] So granularity and um hierarchy,
[2788] nesting,
[2789] whatever call it.
[2825] So that's accessibility.
[2826] A little bit about accessibility.
[2835] Then I guess at this point you want to get to like um the dom right document object model.
[2849] So the document.


## ARIA

> The first rule of ARIA use in HTML states that you should avoid using ARIA if there is a native HTML element with the semantics of behavior that you require already built in. If such an element exists, you should reach for that element instead.

## Resources

* <a title="Using ARIA" href="https://www.w3.org/TR/aria-in-html/">Using ARIA</a> 
* <a title="What a Year of Learning and Teaching Accessibility Taught Me" href="https://www.sarasoueidan.com/blog/what-accessibility-taught-me/">What a Year of Learning and Teaching Accessibility Taught Me</a> 