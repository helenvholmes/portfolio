---
templateKey: blog-post
title: Angular Animations
date: 2014-10-22T20:13:35.688Z
description: I've typed ng-something enough times to make me want to blow my brains out.
tags:
  - learning
---
<p>Couldn't get Angular animations working. Why? Because I hadn't defined <code>'ngAnimate'</code> in my app module.</p>

<p>I wanted the receipt to animate in, a simple slide-down-and-in type thing. Most of the angular tutorials look god awful, so this is how you want to do it ifyou're not writing plain CSS:</p>

```
.receipt {
// Animations
&.ng-hide-remove {
  @include animation(fade-in-and-down .35s ease-in);
  // @include animation-fill-mode(forwards);
    }
  }
}
```

<p>Angular works by applying <code>.ng-hide-remove</code>, or <code>.ng-hide-add</code> for when you're toggling a box. (Seems like a roundabout naming schema, but whatever).</p>

<p>Unfortunately applying Bourbon's <code>@include animation-fill-mode(forwards)</code> didn't work in the way I was expecting it to. However, applying a <code>transform: translateY(10px);</code> in the base class did. Meh.</p>
