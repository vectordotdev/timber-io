---
title: Search Syntax Improvements
date: 2017-04-02 00:00:00
image: '/assets/img/changelog/search-updates.gif'
author: ben_johnson
tags: [searching]
---

We're always looking for ways to make our search feel effortless. Today we released a few welcome
changes to our search syntax:

1. `hello world` - Now defaults to a phrase match, where the phrase `hello world` must appear
   within the log line (case insensitive). Previously, this would perform an intersection of
   `hello` and `world`, and acheiving a phrase match required quotes. After collecting feedback
   for a few months this continually came up. We hope this makes searching a little more effortless.
2. `MyModule::MySubModule` - Is now treated as a literal text search. Searching for ruby module
   names is a very common task. Previously, because `:` is a special character for attribute search,
   this would throw an error saying the `MyModule:` attribute does not exist.
3. `debug`, `info`, `warn`, `error, and `fatal` - Now search the repsecitve log level as well as
   the log line message. Previously, this required an attribute search like `level:warn`. Because
   level is displayed on the screen, we've seen a lot of users type levels expecting it to work.
   Now it does!

Is there anything else we're missing? Let us know by clicking the chat button below. Searching
is something we want to perfect. If anything is off, please be sure to tell us about it.

Enjoy!