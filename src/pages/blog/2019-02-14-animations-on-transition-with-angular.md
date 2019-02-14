---
templateKey: blog-post
title: Animations on Transition with Angular
date: 2014-10-29T20:14:33.776Z
description: tl;dr won't work on init.
---
<p>Most Angular animations work by appending and removing CSS classes, which means that <code>transitions</code> don't work for shit. (Not entirely true; they'll work, but only on second fire. Annoying.) According to some SO it might be because the browser doesn't have the chance to render it fast enough, as if it isn't aware of its initial state beforehand. Idk, friends.</p>

<p>If you need/want to have a nice fade in on enter, you need to do it with keyframes. Always, essentially.</p>
