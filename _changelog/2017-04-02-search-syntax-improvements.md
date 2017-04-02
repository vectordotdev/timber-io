---
title: Search Syntax Improvements
date: 2017-04-02 00:00:00
image: '/assets/img/changelog/search-updates.gif'
author: ben_johnson
tags: [searching]
---

We're always looking for ways to make our search feel effortless. Today we released a few welcome
changes to our search syntax:

1. `hello world` - Now defaults to a phrase match, where the words `hello` and `world` must appear
   together (successively) within the log line. Previously, this would perform an intersection of
   the 2 terms. After watching our users for a few months, we quickly realized this was not the
   assumption.
2. `MyModule::MySubModule` - Is now treated as a literal text search. Searching for ruby module
   names is a very common task. Previously, because `:` is a special character for attribute search,
   this would throw an error saying the `MyModule:` attribute does not exist.
3. `warn` - Now searches for the `warn` log level as well as the log line. Previously, this
   required `level:warn`. Because level is displayed on the screen we've seen a lot of users
   type levels expecting it to work. Now it does!

Is there anything else we're missing? Let us know by clicking the chat button below. Searching
is something we want to perfect. If anything is off, please be sure to tell us about it.

Enjoy!