---
breadcrumbs: Timber App / The Basics
title: Events & Context
toc: true
---

Timber fully embraces structured data in your logs. So much so that we designed an entire
structured logging strategy that you can adopt. To make it simple, our libraries adopt this
strategy automatically for you.


## What does "event" and "context" mean?

Take these familiar log lines:

```
Started Get "/"
Processing by WelcomeController#index as html
Rendered welcome/index.html.erb (0.2ms)
Completed 200 OK in 2.46ms
```

With the Timber libraries, these become

```
Started Get "/" @metadata { "event": { "http_server_request": {...}, "context": {...} } }
Processing by WelcomeController#index as html @metadata { "event": { "controller_call": {...}, "context": {...} } }
Rendered welcome/index.html.erb (0.2ms) @metadata { "event": { "template_render": {...}, "context": {...} } }
Completed 200 OK in 2.46ms  @metadata { "event": { "http_server_response": {...}, "context": {...} } }
```

Notice the `context` key. Here's an example of what that might look like:

```json
{
  "context": {
    "http": {"method": "GET", "path": "/", "remote_addr": "123.23.21.213", "request_id": "abcd1234"},
    "user": {"id": "1", "name": "Ben Johnson", "email": "hi@timber.io"},
    "server": {"hostname": "server.hostname.com", "pid": "1234322"}
  }
}
```

To provide definitions:

1. `event` - each log line represents an individual event, event data directly describes the line.
2. `context` - is shared data representing state when the log line was written. Think of it like
   join data for your logs.


## How It Works

It's pretty simple actually. Let's take this log line from above:

```
Sent 200 in 45.ms
```

When you install any of the Timber libraries, it will automatically augment the log line with metadata:

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1, "name": "Ben Johnson"}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_server_response": {"status": 200, "time_ms": 45.2}}}
```

Notice it the `context` _and_ `event` data. Once received by the Timber API, we go to
work on parsing it.
[Accessing this metadata is as simple as clicking the line]({% link _docs/app/tutorials/view-metadata.md %}.


## What can I do with this data?

So many great things! Checkout these articles:

1. [Attribute searching]({% link _docs/app/basics/search-syntax.md %}#attribute-search)
2. [Graphing]({% link _docs/app/tutorials/graphing.md %})
3. [Alerting]({% link _docs/app/tutorials/alerting.md %})
4. [Integrations]({% link _docs/app/integrations.md %})


## Versioning and Releases

Our schema is formally defined by our
[log event JSON schema](https://github.com/timberio/log-event-json-schema).
Schema versions are
[released within Github](https://github.com/timberio/log-event-json-schema/releases)
and follow the [semver specification](http://semver.org/). We take versioning and maintenance
of this schema very serious due to implications changes can have to downstream consumers.


## JSON Structure

We've formally defined this schema in our
[JSON schema definition](https://github.com/timberio/log-event-json-schema). This
sets a firm foundation for a data structure you can rely on. It ensures consistentcy and
normalization across all of your applications. This makes downstream consumption reliable

Here's an example payload:

```json
{
  "message": "Sent 200 in 115.67ms",
  "dt": "2017-03-19T13:58:44.706231Z",
  "level": "info",
  "id": "2ca8161e-0cac-11e7-b762-12626c3a2376",
  "application_id": 1,
  "event": {
    "server_side_app": {
      "http_server_response": {
        "time_ms": 115.673509,
        "status": 200,
        "request_id": "6446bd7c-65ce-47f3-99a7-9b69d4c7a15f",
        "headers": {
          "x-request-id": "6446bd7c-65ce-47f3-99a7-9b69d4c7a15f",
          "content-type": "application/json; charset=utf-8",
          "content-length": "21852",
          "cache-control": "max-age=0, private, must-revalidate"
        },
        "body": "{\"key\":\"value\"}"
      }
    }
  },
  "context": {
    "user": {
      "name": "Ben Johnson",
      "id": "abcd1234",
      "email": "ben@timber.io"
    },
    "system": {
      "hostname": "my.hostname.com",
      "pid": "4"
    },
    "runtime": {
      "module_name": "MyApp.MyModule",
      "line": 160,
      "function": "my_function/1",
      "file": "/path/to/event_plug.ex",
      "application": "my_app"
    },
    "platform": {
      "heroku": {
        "source": "app",
        "dyno_type": "web",
        "dyno_id": 1
      }
    },
    "http": {
      "request_id": "6446bd7c-65ce-47f3-99a7-9b69d4c7a15f",
      "remote_addr": "10.93.232.18",
      "path": "/path",
      "method": "GET"
    }
  }
}
```

### Top-level Field Descriptions

Name | Type | Description
-----|------|------------
`message` | `string` | The raw message for the log line. We keep this to preserve the essence of logging and not sacrifice human readability. `optional` `max-length: 50,000`
`dt` | `string` | The date / time the log line was written in ISO8601 format.
`level` | `string` |  The level the log line was written: `debug`, `info`, `warn`, `error`, `fatal`
`id` | `string` | A unique ID assigned by Timber during ingestion. `required`
`application_id` | `number` | The ID of the association application in Timber. `required`
`event` | `object` | Each log line represents an individual event. This key contains this data. Event data is directly related to the log line itself. See below for field descriptions. `optional`
`context` | `object` | Contextual data when the log line was written. It's not directly related to the line but serves to relate log lines. Think of it almost like log line join data. See below for field descriptions. `optional`


### Event & Context Field Descriptions

These are described within the section that provides the context or event. See:

* [Timber for Heroku events & context]({% link _docs/heroku/events-and-context.md %})
* [Timber for Ruby events & context]({% link _docs/ruby/events-and-context.md %})
* [Timber for Elixir events & context]({% link _docs/elixir/events-and-context.md %})


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>