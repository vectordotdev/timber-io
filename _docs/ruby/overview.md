---
category: Timber for Ruby
category_order: 4
title: Overview
page_order: 1
---

The Timber Ruby library automatically turns your Ruby application logs into rich structured
events. It's at the heart of improving your log data quality.

For example, Timber turns this familiar log line:

```
Sent 200 in 45.ms
```

Into this:

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1, "name": "Ben Johnson"}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_server_response": {"status": 200, "time_ms": 45.2}}}
```


## Frameworks, 3rd party libraries, and integration

Out of the box, Timber works with a variety of frameworks and third-party libraries to
augment your existing logs:

* Rails
* ActiveRecord
* ActiveController
* ActionView
* Rack
* A complete list can be found [in the Timber::Probes module](https://github.com/timberio/timber-ruby/tree/master/lib/timber/probes)


## Contexts

Timber adds context to each of your log lines. Think of this like shared join data for your logs.
A great example is the HTTP `request_id`. Timber automatically adds this to the context, allowing
you to [trace requests]({% link _docs/app/trace-request.md %}).

Out of the box, Timber gives you the following contexts:

* `http` - The current HTTP request being served (`method`, `path`, `request_id`)
* `runtime` - Runtime data (the current `file`, `module`, `function`, `line`, and `app`)
* `system` - System data (`hostname` and `pid`)
* `user` - The current logged in user (`id`, `name`, `email`)
* For a complete list, checkout [`Timber::Contexts`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/contexts)
* For more detailed field explanations, see [schema & fields]({% link _docs/app/schema-fields.md %})


## Events

Timber transforms your existing log lines into rich structured events. Each log line represents a
single event. Keep in mind, all of these events will also have the context above attached.

Out of the box, Timber gives you the following events:

* `controller_call` - When a controller is invoked by a HTTP request (`controller` and `action`)
* `exception` - Detailed data about any excetions raised (`name`, `message`, `backtrace`)
* `http_server_request` - Incoming HTTP request (`body`, `host`, `headers`, `method`, `path`, `port`, `query_string`, `request_id`, `scheme`)
* `http_server_response` - Incoming HTTP request (`body`, `headers`, `request_id`, `status`)
* `sql_query` - Incoming HTTP request (`sql`, `time_ms`)
* `template_render` - Incoming HTTP request (`name`, `time_ms`)
* For a complete list, checkout [`Timber::Events`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/events)
* For more detailed field explanations, see [schema & fields]({% link _docs/app/schema-fields.md %})