---
breadcrumbs: Timber for Ruby
title: Overview
---

[Timber for Ruby](https://github.com/timberio/timber-ruby) is an optional upgrade you can
install for your Ruby apps. Instead of completely replacing your log messages, this library
automatically augments your logs with JSON metadata. Essentially turning them into
[rich JSON events with context]({% link _docs/ruby/events-and-context.md %}). This preserves the
readability of your logs while still dramatically improving the quality of your data.
The end result: better logging and faster problem solving.


## How it works

This is accomplished by [installing]({% link _docs/ruby/installation.md %}) our
[Timber Ruby gem](https://rubygems.org/gems/timber) into your application.

For example, it turns this familiar raw text log line:

```
Sent 200 in 45.ms
```

Into a [`http_server_response` JSON event]({% link _docs/ruby/events-and-context/controller-call-event.md %}).

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1, "name": "Ben Johnson"}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_server_response": {"status": 200, "time_ms": 45.2}}}
```

For a complete list of events, see the [events and context section]({% link _docs/ruby/events-and-context.md %}).


<div class="next">
  Next: [Installation <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({% link _docs/ruby/installation.md %})
</div>