---
templateKey: blog-post
title: Git Subtrees
date: 2014-01-09T15:25:52.253Z
description: HellO! Hi!
tags:
  - learning
---
<p>I've been trying for a while to figure out how it was best to deploy to Github pages. I'd refactored my portfolio probably over a month ago to have a <a href="https://github.com/greypants/gulp-starter" target="_blank">nice Gulp setup</a> and use Angular but I'd grounded to a halt with <a href="https://github.com/rowoot/gulp-gh-pages/issues" target="_blank">gulp-gh-pages</a> - either I would run the command and nothing would happen or I'd run into memory issues set in place by Node. Ultimately I found a more elegant solution from <a href="https://gist.github.com/cobyism/4730490" target="_blank">cobyism</a> that used Git. Enter <a href="https://www.npmjs.com/package/gulp-shell" target="_blank">gulp-shell</a> and we're off to the races!</p>

```
var gulp        = require('gulp');
var shell       = require('gulp-shell');

gulp.task('deploy', shell.task([
  'git subtree push --prefix build origin master'
]));
```

<p>The Gulp Starter I referenced above splits all of its tasks into separate files which is why I only have one thing in here and I'm requiring gulp again.</p>

<p>After we require gulp we require gulp-shell, which lets us enter bash commands into our task declarations. We then specify the subfolder we want to push (<code>build</code>), the remote (<code>origin</code>), and then the branch (<code>master</code>). I'm defining master, not gh-pages, because the <code>yourUserName.github.io</code> repo works off of master instead of gh-pages.</p>
