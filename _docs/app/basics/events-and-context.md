---
breadcrumbs: Timber App / The Basics
title: Events & Context
toc: true
---

As you may have noticed, Timber fully embraces structured data in your logs. So much so
that we designed Timber with that as it's core premise. You'll notice every integration, and
library we offer, enhances your logs with context and metadata. With Timber, this is not
left as an open-ended exercise. We've [defined](https://github.com/timberio/log-event-json-schema)
and provided an entire structured logging strategy that you can start using in minutes.


## What does "event" and "context" mean?

Every log line can optionally contain `event` and `context` data. We define each as:

1. `event` - This is data directly related to the line. In Timber each log log represents an
   individual event. The `event` data represents this event in a structured format and can
   contain additional data not already in the log line itself.
2. `context` - Context represents the state of the environment when the log line was written.
   It is shared across your log lines. Think of it like join data for your logs.
   For example, by installing any of our libraries, you can capture `user` context. This context
   represents the currently logged in user and adds fields like `context.user.id`,
   `context.user.email`, and `context.user.name` to your log's metadata.


## How It Works

It's pretty simple actually. Take this familiar log line:

```
Sent 200 in 45.ms
```

Timber augments this log with metadata:

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1, "name": "Ben Johnson"}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_server_response": {"status": 200, "time_ms": 45.2}}}
```

Once received by the Timber API, we go to work on parsing it. And
[accessing this metadata is as simple as clicking the line]({% link _docs/app/tutorials/view-metadata.md %}.


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

Instead of allowing arbitrary JSON structures for this metadata, we've formally defined the schema
with our [JSON schema definition](https://github.com/timberio/log-event-json-schema). This
ensures data is consistent and normalized across all of your applications; dramatically
improving the reliability of downstream consumption (our interface, graphs, alerts, etc).

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