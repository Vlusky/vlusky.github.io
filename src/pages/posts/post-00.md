---
layout: ../../layouts/PostLayout.astro
title: 'New site!'
pubDate: 2023-04-01
thumbnail: url('https://cdn.discordapp.com/attachments/1027882514548789279/1091565946319151134/image.png')
description: 'This is the first post of my new Astro blog.'
author: 'Vlusky'
tags:
  - programming
  - technical
---

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

...That's what the first line in the [Astro Blog Tutorial](https://docs.astro.build/en/tutorial/0-introduction/) is at least.

Yeah, this site is completely rewritten from the ground up using Astro.
I've looked through many combinations of JS Frameworks (like your average web dev) and settled on this Svelte + Astro + TypeScript combo.
The biggest addition to this site is, of course, the blog page.
Which is heavily borrowed from the aformentioned Blog Tutorial in their documentation.

Second biggest change for this site is how the [Works page](/works) no longer requires 50mb worth of data to load.
Thanks to Svelte's {if} block and _the discord embed view resolution url parameter_ I was able to just...
Trim a bit of data required for the initial load.
Also a custom Youtube view component that I made in Svelte.
Really helps with the load times I think...
We'll see once this site is actually deployed.

Also yes I used Discord to host my images. God knows if it will collapse any time soon,
but for now it's the most convenient way for me to just put up an image here.

One final obligatory disclaimer, this site is written by me, an idiot.
Please excuse the bugs.
If you do find them though contact me on [Twitter](https://twitter.com/vlusky_husky).
Happy painting and God bless!

![hifumi cry](https://media.tenor.com/ZFirpbIhO_8AAAAC/crying-hifumi.gif)
please forgive me