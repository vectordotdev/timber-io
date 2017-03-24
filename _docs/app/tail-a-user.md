---
category: Timber App
category_order: 6
sub_category: Tutorials
title: Tail a user
page_order: 13
---

Because Timber add's context with our libraries, you can quickly filter your logs by user.
There are 2 ways to accomplish this:

1. Click the user tag on the log line itself (see below).

2. Query directly for the user via `context.user.id:1234`, `context.user.name:"Ben Johnson"`,
   or `context.user.email:hi@timber.io`.

![Tail a user](/assets/img/docs/tail-a-user.gif)

---

**Related documents**

* [Timber for Ruby installation]({% link _docs/app/search-syntax.md %}) - Capture this data in your ruby app.
* [Timber for Elixir installation]({% link _docs/app/search-syntax.md %}) - Capture this data in your Elixir app.
* [Attribute search]({% link _docs/app/search-syntax.md %}#attribute-search) - Use this data when searching.

