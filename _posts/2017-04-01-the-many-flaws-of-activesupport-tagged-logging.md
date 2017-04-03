---
title: The Many Flaws Of ActiveSupport::TaggedLogging, And What You Can Do
date: 2017-04-01 00:00:00
image: '/assets/img/blog/rails-log-tags.png'
author: ben_johnson
tags: [ruby, rails]
---

One of my favorite Rails features, when it was released in 2011, was
[`ActiveSupport::TaggedLogging`](http://api.rubyonrails.org/classes/ActiveSupport/TaggedLogging.html).
For those of you that aren't aware, this feature allows you to prepend your logs with tags.
For example, by doing this:

```ruby
Rails.logger.tagged('MY TAG') do
  Rails.logger.info('Log message')
end
```

Your log messages will look like this:

```
[MY TAG] Log message
```

For anyone that's managed Rails logs in a production environment, this was a _very_ welcome change.
It basically allowed you to add context to your logs. When it came time to resolve an issue and
search your logs, you thanked all things good that these tags were in your logs.


## The problem

While `ActiveSupport::TaggedLogging` is great on the surface, in practice it has flaws. To start,
your logs start to look like this:

```
[c6034478-4026-4ded-9e3c-088c76d056f1] [72.48.77.213] [f75f36519c5c55021708b88ad6dad68fedf5d] [2322] Started GET "/" for 72.48.77.213 at 2016-01-06 20:30:21 +0000
[c6034478-4026-4ded-9e3c-088c76d056f1] [72.48.77.213] [f75f36519c5c55021708b88ad6dad68fedf5d] [2322] Rendered welcome/index.html.erb within layouts/application (0.1ms)
[abuqw781-5026-6ded-7e2v-788c7md0L6fQ] [232.232.11.32] [2bcae52e00cfe3d279bc073eac2799d0ad857a72f6] [32] Started GET "/" for 232.232.11.32 at 2016-01-06 20:30:22 +0000
[acfab2a7-f1b7-4e15-8bf6-cdaa008d102c] [235.235.12.57] [0beec7b5ea3f0fdbc95d0dd47f3c5bc2] [432] Started GET "/" for 235.235.12.57 at 2016-01-06 20:30:23 +0000
```

Almost every production system I've seen expanded beyond just the `request_id` tag, and added
the `session_id`, `remote_addr`, and `user_id` tags. Some as many as 15 tags! And, why not? It's
useful, critical, data that you need to analyze your logs. Why is this bad?

1. **Your logs are no longer human readable.**<br />They are noisy, full of long hashes, and the
   start of the log message is no longer aligned.
2. **Your tag data is ambiguous.**<br />It requires preconceived knowledge of how your tags are ordered.
   Anyone not in-the-know has no idea which one is the `request_id` or the `session_id`.
3. **It's brittle, inconsistent, there's no contract.**<br />It is highly likely these tags will change,
   as well as the order. Anyone relying on this data for alerts, graphs, etc, will be
   reacting changes _after_ things break.
4. **It's still a pain to search.**
5. **Parsing this line is difficult and requires regex.**


## The solution

So how do you resolve every issue above? By adding proper _structured_ context:

```ruby
context = {
  http: {request_id: requst_id, remote_addr: remote_addr},
  session: {id: session_id},
  user: {id: user_id}
}
# The timber gem adds the with_context method
Rails.logger.with_context(context) do
  Rails.logger.info('Log message')
end
```

This produces a log line like:

```
Log message @metadata context.http.request_id=c6034478-4026-4ded-9e3c-088c76d056f1 context.http.remote_add="72.48.77.213" session.id=f75f36519c5c55021708b88ad6dad68fedf5d user.id=1
```

Notice how this is oh-so-much-better. This isn't a new concept either:

* [Go has built-in support for logging context](https://godoc.org/github.com/go-kit/kit/log#hdr-Contextual_Loggers)
* [Elixir has built-in support for logging context](https://hexdocs.pm/logger/Logger.html#metadata/1)
* [Winston, node's most popular logging library, supports context](https://github.com/winstonjs/winston#logging-with-metadata)
* [Log4j, java's most popular loggling library, supports context](https://logging.apache.org/log4j/2.x/manual/thread-context.html)
* And many more

Given this new approach, let's address the same issues above:

1. **Your logs are human readable**.<br />The log message is at the front, like you'd expect, and the structured
   data is clearly delimited. Plus, the metadata is in a human readable format ([logfmt](https://brandur.org/logfmt)).
2. **Your data is no longer ambiguous.**<br />The `request_id` and `session_id` are keyed and clearly
   identified.
3. **Your logs are consistent and reliable.**<br />The data is structured, easy to parse, and the order
   does not matter. Adding more data will not affect downstream consumers (alerts, graphs, etc).
4. **your logs are much easier to search.**<br />You have real structured data to search on.
5. **Parsing is dead simple.**<br />Logfmt is an open standard, there are parsers for virtually every
   language.


## Putting it into action

The strategy above is certainly a step up, but there are still some issues: What is the best way
to structure this data? How do you handle changes to this structure? What about getting logging
systems to parse this format? And won't the metadata still make my logs noisy?

Solving the above issues could take many hours, or days, and is most likely well outside the
scope of your core-competencies. This is exactly why we created Timber. Timber is this strategy,
formalized, maintained, and used by hundreds of other companies. And it takes less than a minute
to setup.

**[Try it out and get setup in minutes →](https://app.timber.io)**
