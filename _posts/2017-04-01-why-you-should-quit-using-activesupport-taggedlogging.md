---
title: Why You Should Quit Using ActiveSupport::TaggedLogging
date: 2017-03-22 00:00:00
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
useful, critical, data that you need to analyze your logs. Why is this bad? So many reasons!

1. **Your logs are no longer human readable.** They are noisy and full of long hashes, and the
   start of the log message is no longer aligned.
2. **Your tag data is ambiguous.** It requires preconceived knowledge of how your tags are ordered.
   Anyone not in-the-know has no idea which one is the `request_id` or the `session_id`.
3. **It's brittle, inconsistent, there's no contract.** It is highly likely these tags will change,
   as well as the order. Anyone relying on this data for alerts, graphs, etc, will be
   reacting changes _after_ things break.
4. **It's still a pain to search.**
5. **Parsing this line is difficult and requires regex.**

## The solution

So how do you resolve every issue above? By adding proper _structured_ context:

```ruby
context = {
  http: {request_id: requst_id, remote_addr},
  session: {id: session_id},
  user: {id: user_id}
}
Rails.logger.with_context(context) do
  Rails.logger.info('Log message')
end
```

This produces a log line like:

```
Log message @metadata context.http.request_id=c6034478-4026-4ded-9e3c-088c76d056f1 context.http.remote_add="72.48.77.213" session.id=f75f36519c5c55021708b88ad6dad68fedf5d user.id=1
```

Notice how this is oh-so-much-better. This isn't a new concept either:

* [Go has built-in context support]()
* [Elixir has built-in content support]()
* [Winston, node's most popular logging library supports context]()
* [Log4j, java's most popular loggling library supports context]()
* And many more

Let's address the same issues above:

1. **It's human readable**. The log message is at the front, like you'd expect, and the structured
   data is clearly delimited. Plus, the metadata is in a human readable format ([logfmt](https://brandur.org/logfmt)).
2. **Your data is no longer ambiguous.** The `request_id` and `session_id` are keyed and clearly
   identified.
3. **Your logs are consistent and reliable.** The data is structured, easy to parse, and the order
   does not matter. Adding more data will not affect downstream consumers (alerts, graphs, etc).
4. **This is much easier to search.** You have real structured data to search on.
5. **Parsing ia dead simple.** Logfmt is an open standard, there are parsers for virtually every
   language.


## Taking it further

The strategy above is certainly a step up, but there are still some issues: What if
the structured data changes? And, none of the logging platforms will recognize this format and
parse it.

Welcome to Timber :). Timber formalizes this strategy, parses this data, and provides the best
(I'm biased of course) console for accessing this data. How does it work?

1. Timber parses the attached metadata, [showing you only the log message in our console]({% link _docs/app/tutorials/view-metadata.md %}).
   Accessing the metadata is as simple as [clicking the line]({% link _docs/app/tutorials/view-metadata.md %}).
2. All of this data is accessible as
   [real fields you can search on]({% link _docs/app/basics/search-syntax.md %}).
   Ex: `http.request_id:abcd1234`.
3. We've defined a [versioned JSON schema]({% link _docs/app/advanced/the-log-line-json-schema.md %})
   that creates a strict contract with downstream consumers (alerts, graphs, etc). It also means
   you don't have to spend days deciding on a flexible structure for this data. It took us many
   weeks.


## Try it out today

You can follow our [installation guide]({% link _docs/ruby/installation.md %}), but it's very simple:

Add our gem to your `Gemfile`:

```ruby
# Gemfile
gem 'timber'
```

Run these commands in your `console`:

```console
bundle install timber
bundle exec timber install
```

And get this:

![Viewing context]({% link assets/img/docs/viewing-context.gif %})

Notice the metadata is hidden and available by clicking the line. Moreover, this data is
still available for searching, graphing, and alerting.

