---
category: Timber for Elixir
category_order: 4
title: Overview
page_order: 1
toc: true
---

[Timber for Elixir](https://github.com/timberio/timber-elixir) is an optional upgrade you can
install for your Elixir apps. It turns your once raw text logs into
[rich JSON events]({% link _docs/elixir/events-and-context.md %}) that contain critical
context and event data. It significantly improves the quality of your logs, allowing you to filter
out the noise and solve problems faster.


## How it works

This is accomplished by installing our [Timber Hex package](https://hex.pm/packages/timber) into
your application.

Once installed, it turns this familiar log line:

```
Sent 200 in 45.ms
```

Into this:

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1, "name": "Ben Johnson"}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_server_response": {"status": 200, "time_ms": 45.2}}}
```

[Read more about all of the context and fields this library captures]({% link _docs/elixir/events-and-context.md %}).