---
category: Getting Started
category_order: 1
title: How It Works
page_order: 2
sections: how timber is organized, log enrichment, log delivery, log ingestion, log retention, log querying
---

Timber works by ingesting logs from multiple servers, centralizing the data, and making it
available for use. There is no limit to the amount of data you can send Timber, as long as
your plan allows for it. To best describe how Timber works, let's walk through the basic
flow logs take:


# How Timber is organized

Timber is organized by organization and application. Each organization contains applications,
team members, and billing. An application represents a single source of logs for a specific
environment.

After you [sign up](https://app.timber.io), you'll go through a simple process of setting up
your first organization and creating your first application.


# 1. Log enrichment

The usefulness of your logs starts with data quality. Timber is unique in that it provides
[libraries](https://github.com/timberio) that enrich and augment your logs. These libraries
install within your application, collecting data that couldn't be obtained through parsing,
and finally augmenting your logs with this data.

For example, our libraries turns this:

```
Sent 200 in 45.ms
```

Into this:

```
Sent 200 in 45.2ms @metadata {"dt": "2017-02-02T01:33:21.154345Z", "level": "info", "context": {"user": {"id": 1}, "http": {"method": "GET", "host": "timber.io", "path": "/path", "request_id": "abcd1234"}}, "event": {"http_response": {"status": 200, "time_ms": 45.2}}}
```

Notice the `@metadata` call out. The Timber service will notice this and parse it out,
detaching it from the message. When presented in the [Timber console](https://app.timber.io)
the message is displayed cleanly with the ability to click the link and view the attached
metadata. There is no need to sacrifice human readability for data quality.

More details on our libraries can be found in the navigation to your left for each language.


# 2. Log delivery

Depending on your language and platform, log delivery can be accomplished a number of ways.
Timber simplifies this process by asking for these details during app created. After wich,
Timber displays simple copy/paste install instructions to setup your app.

Generally speaking, log delivery is accomplished 2 ways:

1. Directly from your platform.
  1. For example, Heroku offers [log drains](https://devcenter.heroku.com/articles/log-drains),
     taking care of log delivery entirely. Your app simply writes logs to `STDOUT`.

2. Directly from your application via HTTP.
  1. All of the Timber libraries ship with an HTTP client to deliver your logs. Each of these
     are very well thought out incorporating buffering, batching, compression, keep-alive
     connections, and intelligent retries.

Regardless of the method, all logs are delivered to `https://logs.timber.io/farmes` for ingestion.


# 3. Log ingestion

Once logs are delivered we guarantee 11-9s of durability during our ingestion process. Generally,
logs are ingested and available within 5 seconds of receiving them.


# 4. Log retention

All logs rest on durable storage, providing 11-9s of durability; the data is encrypted at rest.
By default, all paid plans comes with 6 months retention, far exceeding the industry norm of
2 - 4 weeks.


# 5. Log querying

Now that you have rich logs it's time for the fun part! Timber takes care to provide rich,
unrestricted access to your logs. Please see:

1. [Search syntax]({% link _docs/app/search-syntax.md %})
2. [SQL query your logs]({% link _docs/app/sql-query.md %})