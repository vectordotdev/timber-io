---
title: Inspect HTTP Requests
date: 2017-03-20 00:00:00
image: '/assets/img/docs/http-inspect.gif'
author: ben_johnson
tags: [app, console, data]
---

One of the top requests we've been getting from users is a more detailed look into HTTP
requests that are coming into their application. This is _extremely_ advantageous when
you locate an error or performance issue. Nothing is more frustrating than identifying
an issue only to lack the data you need to properly solve it.

We've also created a [docs page]({% link _docs/app/tutorials/inspect-http-requests.md %}).

## Demo

![HTTP inspection]({% link assets/img/docs/http-inspect.gif %})


## Using it

1. Update your `timber` dependency. We've updated all of our libraries to start collecting this
   data properly.

    * Ruby: `bundle update timber`
    * Elixir: `mix deps.update timber`

2. Commit and deploy.
3. Execute any of these queries: `is:http_server_request` or `is:controller_call`
4. Click the line to view the HTTP data. That's it!

## Notable data changes

1. [`controller_call` events]({% link _docs/ruby/events-and-context/controller-call-event.md %})
   now include a `params_json` field that you can see. This is the parsed parameters that are
   sent to your controller.
2. [`http_server_request` events]({% link _docs/ruby/events-and-context/http-server-request-event.md %})
   now includes _all_ headers sent, not just select headers.
2. [`http_server_response` events]({% link _docs/ruby/events-and-context/http-server-response-event.md %})
   now includes _all_ headers sent, not just select headers.