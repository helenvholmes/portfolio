---
templateKey: blog-post
title: Infinite CSS Animations
date: 2013-11-12T15:00:09.060Z
description: 'Hello, hi'
tags:
  - learning
---
<p>You may have seen my <a href="/writing/ampersand-conf">other article about Ampersand Conference</a>, which really just goes to show that I learned a lot. In any case, <a href="http://trentwalton.com/" target="_blank">Trent Walton</a>’s talk on various CSS tricks was very informative and I wanted to try out some of the things he went over right away.</p>


<h2>Icon Fonts</h2>

<p>You’ve probably already heard all about how icon fonts are amazing, but what I hadn't understood was how to make one or how they worked. Turns how it’s fairly simple. Here’s how <a href="http://fontawesome.io/" target="_blank">Font Awesome</a>, an open-source icon font from Twitter, structures their font.</p>

<p>First, they link up their files with the expected <code>@font-face</code> stuff:</p>



```
@font-face {
  font-family: 'FontAwesome';
  src: url('@{fa-font-path}/fontawesome-webfont.eot?v=@{fa-version}');
  src: url('@{fa-font-path}/fontawesome-webfont.eot?#iefix&v=@{fa-version}') format('embedded-opentype'), url('@{fa-font-path}/fontawesome-webfont.woff?v=@{fa-version}') format('woff'), url('@{fa-font-path}/fontawesome-webfont.ttf?v=@{fa-version}') format('truetype'), url('@{fa-font-path}/fontawesome-webfont.svg?v=@{fa-version}#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

<p>The <code>.fa</code> class is where they make the font declaration:</p>

```
.fa {
  font-family: ’font-awesome’;
}
```
<p>Finally, a few of the icons themselves: </p>

```
.fa-camera:before {
  content: "\f030";
}

.fa-headphones:before {
  content: "\f025";
}

.fa-search:before {
  content: "\f002";
}
```
<p>The logic here is that you can hide the weird, unicode strings that don't really map to anything in more semantic classes (e.g., <code>.fa-headphones</code>). Neat! Using this, we have a basis for our glowing lightning bolt.</p>
<p>When I set out to make this, I knew I wanted it to glow forever, to use the icon font jazz I'd just learned about, and for it to me scalable. (If it's not scalable, what's the point). </p>
<p>I decided to make the lightning bolt glow using Trent Walton's <a href="https://dl.dropboxusercontent.com/u/3648990/Ampersand-Demo/stroke.html" target="_blank">fake stroke effect</a>, which essentially is just a text-shadow on all sides of the bolt:</p>


```
text-shadow: 5px 5px 10px darken($secondary-color,10%),
            -5px -5px 10px darken($secondary-color,10%),
             5px -4px 10px darken($secondary-color,10%),
            -5px 5px 10px darken($secondary-color,10%);
```

<p>To make the bolt scalable, I used percentages, although there's a hearty debate on what the best practice for setting type size is (check the comments in <a href="http://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/" target="_blank">this blog post</a> for a taste). Seems like the verdict in 2013 is that pixels are global while ems and percentages are local. I went with percentages since the bolt is relative to the viewport anyway:</p>

```
// Sizing
$base-font: 3500%;
```
<p>To then make our lightning bolt glow and pulse, we define the animation and then apply it:</p>

```
@-webkit-keyframes pulse {
// Fake stroke with text shadows code
0% { text-shadow: 5px 5px 10px darken($secondary-color,10%),
               -5px -5px 10px darken($secondary-color,10%),
                5px -4px 10px darken($secondary-color,10%),
               -5px 5px 10px darken($secondary-color,10%); }
50% { text-shadow: none; }
100% { text-shadow: 5px 5px 10px darken($secondary-color,10%),
                 -5px -5px 10px darken($secondary-color,10%),
                  5px -4px 10px darken($secondary-color,10%),
                 -5px 5px 10px darken($secondary-color,10%); }
}
```

<p>Here's where I set the icon (<code>:after</code>) and then called the animation:</p>

```
i {
// Positioning
position: absolute;
top: 50%;
left: 50%;
margin-left: -0.25em;
margin-top: -0.51em;
    &:after {
        content: '\f0e7';

        // Position it
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }

// Transitions
transition: text-shadow 0.7s ease;
-webkit-transition: text-shadow 0.7s ease;

// Handles the pulse
-webkit-animation-name: pulse;
-webkit-animation-duration: 1.2s;
-webkit-transform-origin: 50% 50%;
-webkit-animation-iteration-count: infinite;
-webkit-animation-timing-function: linear;
}
```

<p>Obviously I don't have all of the browser prefixes in there, which you'd need if you were being serious about implementing something like this.</p>

<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@helenvholmes" />
<meta name="twitter:title" content="{{ title }}" />
<meta name="twitter:description" content="{{ description }}" />
<meta name="twitter:image" content="http://helenvholmes.com/images/partials/writing/orb.jpg" />
