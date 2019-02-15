---
templateKey: blog-post
title: Set Status Bar Color in Swift
date: 2015-01-14T15:42:19.385Z
description: Where you put it
tags:
  - workplace-guide
  - ios
---
<p>Within your <code>AppDelegate.swift</code>, in <code>didFinishLaunchingWithOptions</code>:</p>

<pre><code>UINavigationbar.appearance().barTintColor = UIColor.greenColor() language-UINavigationbar.appearance().barTintColor = UIColor.greenColor()></code></pre>

<p>Optionally, if you need a specific color, how you do it with RGB:</p>

<pre><code>UINavigationBar.appearance().barTintColor = UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)</pre></code>
