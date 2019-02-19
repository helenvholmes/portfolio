---
templateKey: blog-post
title: Reset SSH Keys for Github
date: 2015-02-25T15:44:27.338Z
description: 'When you reset your password, do this'
---
<p>To access stuff within our VPN at work we have to reset our passwords every 90 days, which often messes me up for a few hours. One such instance is with Github.</p>

<p>Ugh, god damn it.</p>

<p>Easiest way to deal with this is by just deleting your old SSH keys instead of doing anything fancy. You can do this with Mac's Keychain Access.</p>

<p>Delete the appropriate key, and then next you try to push it will ask you for your username and password, and generate a new key for you until you have to reset your password again.</p>
