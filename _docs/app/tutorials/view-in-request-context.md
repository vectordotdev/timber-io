---
breadcrumbs: Timber App / Tutorials
title: View in Request Context
---

All too common developers will find a log line but need to view it in context to solve the
issue at hand. Timber's `http` context allows you to do exactly that. Instead of backing out
to the raw unfiltered timeline, Timber allows you to see the line in the context of it's
specific HTTP request. Here's how it works:


## Steps

1. Execute the query: `http.request_id:my-request-id`
2. Or, click the `req: #abcd1234` tag on the log line itself.


## Demo

![View in request context]({% link assets/img/docs/view-in-request-context.gif %})


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>