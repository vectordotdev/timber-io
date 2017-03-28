---
breadcrumbs: Getting Started
title: The Timber Libraries
toc: true
---

The Timber libraries are _optional_ upgrades you can install within your application. They work
by enhancing your log lines. Instead of completely replacing your log messages, they automatically
augment your logs with JSON metadata.

For example, they turn this familiar raw text log line:

```
Sent 200 in 45.ms
```

Into a [`http_server_response` JSON event]({% link _docs/ruby/events-and-context/http-server-response-event.md %}).

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1, "name": "Ben Johnson"}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_server_response": {"status": 200, "time_ms": 45.2}}}
```

For a deeper understanding around how this works, see our
[events and context section]({% link _docs/app/basics/events-and-context.md %}).