---
templateKey: blog-post
title: Creating New Jekyll Posts with Bash
date: 2014-12-02T14:40:54.919Z
description: Executables are nifty
tags:
  - workplace-guides
  - jekyll
---
<p><a href="http://jekyllrb.com/">Jekyll's</a> pretty damn sweet, but I found myself hating this part of the blogging process:</p>

<p><code>touch 2014-12-01-my-cool-blog-title.md</code></p>

<p>Since I'm normally on the command line anyway for my blog posts, this seemed like a good opportunity to create an executable:</p>

<script src="https://gist.github.com/helenvholmes/04a8c2bc909ffcd8334b.js"></script>

<p>A few things here should be customized for your needs:</p>

<p><code>blogFolder</code> should be the path to your own Jekyll blog.</p>

<p><code>YAML</code> should be the YAML matter you want at the top of your blog posts.</p>

<p><code>vim</code> can be interchanged with whatever symlink you have to your favorite editor. I'm currently digging Vim for blogging, but Sublime's pretty great too!</p>

<p>In order to make it executable so you can access it from anywhere on the command line, throw the script into <code>/usr/local/bin/new-post</code> and make it executable with the command <code>chmod 755 new-post</code>.</p>
