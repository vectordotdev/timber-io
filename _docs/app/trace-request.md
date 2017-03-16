---
category: Timber App
category_order: 5
title: Trace a request
page_order: 7
sections: text, attributes
---

Because Timber add's context with our libraries, you can quickly filter your logs by user.
There are 2 ways to accomplish this:

1. Click the user tag on the log line itself (see below).

2. Query directly for the user via `context.user.id:1234`, `context.user.name:"Ben Johnson"`,
   or `context.user.email:hi@timber.io`.

![Tail a user](/assets/img/docs/tail-a-user.gif){:class="img-responsive"}

