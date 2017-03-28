---
breadcrumbs: Timber App / Tutorials
title: Tail a User
---

Tailing a user allows you to filter the logs to a specific user. It has multiple applications:

1. Find user reported issues easily and quickly.
2. Verify user reported performance issues. Finally answer "why is the site slow?".
3. Tail yourself while you run integration tests.

## Steps

1. Issue any of the following queries `context.user.id:1234`, `context.user.name:"Ben Johnson"`,
   or `context.user.email:hi@timber.io`.

Tip: you can also click the user tag directly on the line (see example below).


## Interface Example

![Tail a user]({% link assets/img/docs/tail-a-user.gif %})


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>