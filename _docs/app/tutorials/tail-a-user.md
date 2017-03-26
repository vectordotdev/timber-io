---
breadcrumbs: Timber App / Tutorials
title: Tail a User
---

Because Timber add's context with our libraries, you can quickly filter your logs by user.
There are 2 ways to accomplish this:


## Steps

1. Click the user tag on the log line itself (see below).

2. Query directly for the user via `context.user.id:1234`, `context.user.name:"Ben Johnson"`,
   or `context.user.email:hi@timber.io`.


## Interface Example

![Tail a user]({% link assets/img/docs/tail-a-user.gif %})


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>