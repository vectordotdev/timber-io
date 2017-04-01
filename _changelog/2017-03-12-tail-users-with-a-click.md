---
title: Tail users with a click
date: 2017-03-12 00:00:00
image: '/assets/img/changelog/user-tag.png'
author: zach_sherman
changelog_tags: [app, console]
---

Today we added a subtle tag to your logs:

![User tag]({% link assets/img/changelog/user-tag.png %})

This makes it dead simple to tail a user. A few use cases we've seen from our customers:

1. Tail yourself.

   Have you ever wanted to test something in staging or production, but there was too much
   noise in your logs? This gives that "development" like experience in these environments,
   narrowing the logs you see to _just_ the ones you're generating.

2. Watch a custom reproduce an issue.

   We recently had a customer unable to identify an issue with one of their clients. They were
   able to easily narrow down to that specific user and identify a bad header they were sending.
   A problem that would have taken hours, took < 15 minutes to resolve.

You can read more on tailing user in the [tail a user docs page]({% link _docs/app/tutorials/tail-a-user.md %}).

Enjoy!