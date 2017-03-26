---
title: Console performance improvements
date: 2017-03-06 00:00:00
image: '/assets/img/changelog/running-lumber-jack.png'
author: zach_sherman
tags: [app, console]
---

Today we did some general benchmarking of our console. While performance overall been
pretty good, we identified 2 issues that will improve it further:

1. You'll notice a new loading screen in-between searches. It's a simple overlay. This eliminates
   re-drawing in the browser, making the experience between searches much more fluid:

   ![Console loader]({% link assets/img/changelog/console-loader.png %})

2. We re-factored the log line rendering logic and reduced the number of rendering iterations
   that are performed as new lines show up.

The net result is ~60% reduction in load and rendering time based on benchmarks. We'll continue
to look for ways to push performance even further.