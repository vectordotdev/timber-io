---
breadcrumbs: Timber App / Tutorials
title: View in Request Context
---

Have you ever searched for a line and wanted to see it in the context of the HTTP request.
Timber makes this easy with the `http` context:


## Steps

1. Execute the query: `http.request_id:my-request-id`
2. Or, click the `req: #abcd1234` tag on the log line itself.


## Interface example

![View in request context]({% link assets/img/docs/view-in-request-context.gif %})


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>