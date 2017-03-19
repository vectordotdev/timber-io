---
category: Getting Started
category_order: 1
title: How It Works
page_order: 2
---

The high-level explanation of how Timber works:

1. [Install the Timber library in your app.](#1-install-the-timber-library-in-your-app)
2. [The Timber library automatically turns your logs into rich structured events.](#2-the-timber-library-automatically-turns-your-logs-into-rich-structured-events)
3. [Send your log data to the Timber service.](#3-send-your-log-data-to-the-timber-service)
4. [Use the Timber console to query, graph, and alert on your new log data.](#4-use-the-timber-console-to-query-graph-and-alert-on-your-new-log-data)


## 1. Install the timber library in your app

The Timber libraries are at the core of improving your log data quality. To your left
you'll see the various Timber libraries for each language. Each library comes with
a single installer command that makes set-up dead simple.

* [Ruby installation](%{ link _docs/ruby/installation.md %})
* [Elixir installation](%{ link _docs/elixir/installation.md %})


## 2. The Timber library automatically turns your logs into rich structured events.

Once the library is installed in your application, Timber goes to work by augmenting
your logs with rich data.

For example, our libraries turns this:

```
Sent 200 in 45.ms
```

Into this:

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_response": {"status": 200, "time_ms": 45.2}}}
```

For a full list of data we collect, checkout the [schema & fields doc]({% link _docs/app/schema-fields.md %}).


## 3. Send your log data to the Timber service

Depending on your platform, delivering log data to the Timber service can vary. In fact, the
variety of options can be overwhelming. Instead of throwing a ton of articles at you and
requiring your to figure it out, Timber asks for these details when you create your app.
After app creation, we'll give you a simple, single set of instructions to follow.

Note: there is no limit to the number of servers that can send us data, we do not
rate limit. Limits are based on the plan data allowance.


## 4. Use the Timber console to query, graph, and alert on your new log data.

Now that you have rich structured log data, it's time to actually put it to use!

Checkout out the `Timber App` seciton to your left for all of the glorious ways you
can use your new log data.