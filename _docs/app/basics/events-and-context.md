---
breadcrumbs: Timber App / The Basics
title: Events & Context
toc: true
---

Timber fully embraces, and encourages, structured data in your logs. So much so that we designed
a system to transparently attach metadata without changing the original log line. This allows
you to attach rich data to your logs without sacrificing readability. To make this easy and
automatic, we've designed
[libraries]({% link _docs/getting-started/the-timber-libraries.md %}) that handle this for you.
The end result is higher quality logs and faster problem solving.


## How it works

Take these familiar log lines:

```
Started Get "/"
Processing by WelcomeController#index as html
Rendered welcome/index.html.erb (0.2ms)
Completed 200 OK in 2.46ms
```

With [the Timber libraries]({% link _docs/getting-started/the-timber-libraries.md %}), these become:

```
Started Get "/" @metadata { "event": { "http_server_request": {...}, "context": {...} } }
Processing by WelcomeController#index as html @metadata { "event": { "controller_call": {...}, "context": {...} } }
Rendered welcome/index.html.erb (0.2ms) @metadata { "event": { "template_render": {...}, "context": {...} } }
Completed 200 OK in 2.46ms  @metadata { "event": { "http_server_response": {...}, "context": {...} } }
```

Notice each line is delimited by a `@metadata` callout. This separates the original log message
from the metadata. The metadata is simply a JSON document. If you haven't, check out our
[log line JSON schema doc]({% link _docs/app/advanced/the-log-line-json-schema.md %}).

Also, notice each line is assigned an event type: `http_server_request`, `controller_call`,
`template_render`, and `http_server_response` (respectively). And, all of the lines share
`context`. An example of what `context` might look like:

```json
{
  "context": {
    "http": {"method": "GET", "path": "/", "remote_addr": "123.23.21.213", "request_id": "abcd1234"},
    "user": {"id": "1", "name": "Ben Johnson", "email": "hi@timber.io"},
    "server": {"hostname": "server.hostname.com", "pid": "1234322"}
  }
}
```

Finally, to define each of these:

1. `event` - Is data directly related to the respective event.
2. `context` - Represents the current state of the environment when the log line was written.
   Think of it like join data for your logs.


## What can I do with this data?

So many great things! Checkout these articles:

1. [Attribute searching]({% link _docs/app/basics/search-syntax.md %}#attribute-search)
2. [Graphing]({% link _docs/app/tutorials/graphing.md %})
3. [Alerting]({% link _docs/app/tutorials/alerting.md %})
4. [Integrations]({% link _docs/app/integrations.md %})


## How do I get this data?

Simply pick your language and follow the installation instructions:

* [Timber for Ruby]({% link _docs/ruby/overview.md %})
* [Timber for Elixir]({% link _docs/elixir/overview.md %})


## Full list of events and contexts

These are described within the section that provides the context or event. See:

* [Timber for Heroku events & context]({% link _docs/heroku/events-and-context.md %})
* [Timber for Ruby events & context]({% link _docs/ruby/events-and-context.md %})
* [Timber for Elixir events & context]({% link _docs/elixir/events-and-context.md %})


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>