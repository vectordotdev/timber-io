---
category: Timber for Ruby
category_order: 4
title: Overview
page_order: 1
toc: true
---

Timber for Ruby is designed to enhance your Ruby application logs; turning your once
raw text logs into rich JSON events. This improves log data quality at the source, so you can
cut out the noise and solve problems faster.


## How it works

This is accomplished by installing our [Timber Ruby gem](https://rubygems.org/gems/timber) into
your application.

For example, it turns this familiar log line:

```
Sent 200 in 45.ms
```

Into this:

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1, "name": "Ben Johnson"}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_server_response": {"status": 200, "time_ms": 45.2}}}
```

It does so by integrating with popular frameswork and third-party libraries. Such as `Rails`,
`ActiveRecord`, `Rack`, `ActionController`, etc.


## Fields Automatically Captured

By installing Timber into your application, you'll automatically get the following `context`
and `event` data in your logs:

* `context.http` - The current HTTP request being served (`method`, `path`, `request_id`)
* `context.runtime` - Runtime data (the current `file`, `module`, `function`, `line`, and `app`)
* `context.system` - System data (`hostname` and `pid`)
* `context.user` - The current logged in user (`id`, `name`, `email`)
* `event.controller_call` - When a controller is invoked by a HTTP request (`controller` and `action`)
* `event.exception` - Detailed data about any excetions raised (`name`, `message`, `backtrace`)
* `event.http_server_request` - Incoming HTTP request (`body`, `host`, `headers`, `method`, `path`, `port`, `query_string`, `request_id`, `scheme`)
* `event.http_server_response` - Incoming HTTP request (`body`, `headers`, `request_id`, `status`)
* `event.sql_query` - Incoming HTTP request (`sql`, `time_ms`)
* `event.template_render` - Incoming HTTP request (`name`, `time_ms`)

For a complete list, checkout..

1. [`Timber::Contexts`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/contexts)
2. [`Timber::Events`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/events)
3. The [schema & fields doc]({% link _docs/app/schema-fields.md %})