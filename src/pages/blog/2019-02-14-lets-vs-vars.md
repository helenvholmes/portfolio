---
templateKey: blog-post
title: Lets vs Vars
date: 2014-03-12T14:29:52.831Z
description: HellO! Hi!
tags:
  - learning
---
<p>Recently while trying to figure out the difference between <code>var</code>s and <code>let</code>s in Swift Google autocomplete offered up 'javascript' as a suggestion. Surprisingly, javascript also has lets and vars! The difference between them comes down to <em>scope</em>.</p>

<p><a href="http://stackoverflow.com/questions/762011/javascript-let-keyword-vs-var-keyword">@ThinkingStiff</a> did a great job of explaining it on Stack Overflow:</p>
<h2>Globally:</h2>

```
let me = 'go'; //globally scoped
var i = 'able'; //globally scoped
```

<h2>Function:</h2>

```
function ingWithinEstablishedParameters() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
};
```

<h2>Block:</h2>

```
function allyIlliterate() {
    //tuce is *not* visible out here
    for( let tuce = 0; tuce &amp;amp;lt; 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
    };
    //tuce is *not* visible out here
};

function byE40() {
    //nish *is* visible out here
    for( var nish = 0; nish &amp;amp;lt; 5; nish++ ) {
        //nish is visible to the whole function
    };
    //nish *is* visible out here
};
```
