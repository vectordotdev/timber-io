---
breadcrumbs: Timber App / Advanced
title: The Log Line JSON Schema
toc: true
---

In Timber, every log line becomes a JSON object with various attributes. It is designed to be
public, open, and used outside of Timber. As such, we've formally defined this schema on our
[JSON schema specification](https://github.com/timberio/log-event-json-schema). Defining the
JSON structure in this way has multiple benefits:

1. The structure and it's limitations are public and not mysterious.
2. All changes to the structure are tracked and versioned. There will be no surprised changes.
3. Since it's versioned, it dramatically improves any kind of downstream consumption.


## Versioning

As mentioned above, our schema is formally defined by our
[log event JSON schema](https://github.com/timberio/log-event-json-schema).
Schema versions are
[released within Github](https://github.com/timberio/log-event-json-schema/releases)
and follow the [semver specification](http://semver.org/). We take versioning and maintenance
of this schema very serious due to implications changes can have to downstream consumers.


## Example payload

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

## Top-level Field Descriptions

Name | Type | Description
-----|------|------------
`message` | `string` | The raw message for the log line. We keep this to preserve the essence of logging and not sacrifice human readability. `optional` `max-length: 50,000`
`dt` | `string` | The date / time the log line was written in ISO8601 format.
`level` | `string` |  The level the log line was written: `debug`, `info`, `warn`, `error`, `fatal`
`id` | `string` | A unique ID assigned by Timber during ingestion. `required`
`application_id` | `number` | The ID of the association application in Timber. `required`
`event` | `object` | Each log line represents an individual event. This key contains this data. Event data is directly related to the log line itself. See below for field descriptions. `optional`
`context` | `object` | Contextual data when the log line was written. It's not directly related to the line but serves to relate log lines. Think of it almost like log line join data. See below for field descriptions. `optional`


## Event & Context Field Descriptions

These are described within the section that provides the context or event. See:

* [Timber for Heroku events & context]({% link _docs/heroku/events-and-context.md %})
* [Timber for Ruby events & context]({% link _docs/ruby/events-and-context.md %})
* [Timber for Elixir events & context]({% link _docs/elixir/events-and-context.md %})


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>