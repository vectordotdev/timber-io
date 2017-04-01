---
title: Quit using ActiveSupport::TaggedLogging!
date: 2017-03-22 00:00:00
image: '/assets/img/blog/ruby.png'
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
It basically allowed you to add context to your logs. Such as the `request_id`, `user_id`,
`request_path`, and anything else you wanted. When it came time to search your logs, you thanked
all things good that these tags were in your logs.


## The problem

While `ActiveSupport::TaggedLogging` is great on the surface, in practice your logs start to
look like this:

```
[c6034478-4026-4ded-9e3c-088c76d056f1] [72.48.77.213] [f75f36519c5c55021708b88ad6dad68fedf5d] [2322] Started GET "/" for 72.48.77.213 at 2016-01-06 20:30:21 +0000
[c6034478-4026-4ded-9e3c-088c76d056f1] [72.48.77.213] [f75f36519c5c55021708b88ad6dad68fedf5d] [2322] Rendered welcome/index.html.erb within layouts/application (0.1ms)
[abuqw781-5026-6ded-7e2v-788c7md0L6fQ] [232.232.11.32] [2bcae52e00cfe3d279bc073eac2799d0ad857a72f6] [32] Started GET "/" for 232.232.11.32 at 2016-01-06 20:30:22 +0000
[acfab2a7-f1b7-4e15-8bf6-cdaa008d102c] [235.235.12.57] [0beec7b5ea3f0fdbc95d0dd47f3c5bc2] [432] Started GET "/" for 235.235.12.57 at 2016-01-06 20:30:23 +0000
```

Almost every production system I've seen dipped their toes in with the `request_id` tag,
realizing how helpful this was, and added the `session_id`, `remote_addr`, and `user_id` tags.
I've some applications add as many as 15 tags! Why is this bad? So many reasons!

1. **Your logs are no longer human readable.**
2. **Your logs are exceptionally noisy.**
3. **Your tag data is ambiguous.** It requires preconceived knowledge of how your tags are ordered.
   Anyone not in-the-know has no idea which one is the `request_id` or the `session_id`.
4. **It's brittle, inconsistent, there's no contract.** It is highly likely these tags will change,
   as well as the order. Anyone relying on this data for alerts, graphs, etc, will constantly be
   reacting to any change you make.
5. **It's still a pain in the ass to search.**
6. **Parsing this line is exceptionally difficult.**
7. I could keep going.


## A better way

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

Notice how this is oh-so-much-better. Let's address the same issues above:

1. **It's human readable**. The log message is at the front, like you'd expect, and the structured
   data is delimited by a very clear delimiter. Lastlty, the metadata is human readable in logfmt.
2. **Your logs are no longer noisy.**
3. **Your data is no longer ambiguous.** The `request_id` and `session_id` are keyed and clearly
   identified.
4. **Your logs are consistent and reliable.** The data is structured, easy to parse, and the order
   does not matter. Adding more data will not affect downstream consumers (alerts, graphs, etc).
5. **This is much easier to search.** You have real structured data to search on.
6. **Parsing ia dead simple.** Logfmt is an open standard, there are parsers for virtually every
   language.


## Taking this further. A console designed specifically for this data.

That's exactly what Timber is.


## Get this in under 5 minutes

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

