---
title: "Why We're Building Timber"
date: 2016-07-20 00:00:00
image: 'https://res.cloudinary.com/timber/image/upload/v1485983608/pricing/why-we-are-building-timber.png'
author: zach_sherman
tags: [company]
---

In the last decade, the way that we've built applications and services has changed dramatically. Unfortunately, the way that we debug and monitor them hasn't changed nearly as much. Applications that were once structured as monolithic architectures have been splintered into lean microservices, each with their own responsibility. Each microservice may be written in a different language with a different framework that is carefully chosen for the service's responsibility.

[Many](link) [many](link) engineers and organizations have realized the benefits of architecting systems in this manner, but, like anything, it has downsides. With so many different tools running on so many different platforms, the task of reliably debugging and monitoring them becomes Sisyphean.

In this wild west of microservices, serverless apps, workers, and 3rd party services one thing remains universal: the log is the single, reliable, immutable source of truth. Or as Jay Kreps [so thoughtfully puts it](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying):

> The log is the record of what happened.... Since the log is immediately persisted it is used as the authoritative source in restoring all other persistent structures...

The idea behind Timber starts with this one basic tenant.

### So What's the Problem?

Anyone who's attempted to use logs in production can probably tell you what a harrowing experience that can be. It's easy to find yourself lost in a sea of text, unable to tell where you are or what you're looking at. Sometimes you can forget who *you* are.

**1. Finding what you need in the logs is often really hard.**

Most logging platforms ingest and display only raw text in a view that can make you feel like you're in The Matrix. Some logs are designed for humans, some for machines, some for both.

You might say "sure, but I can always search for what I'm looking for, right?" Well, what happens if what you want to find isn't in the message string? What if your microservices are all logging in different formats with different log levels? The problem here is that there is **no consistent structure** and **no context**.

**2. Log-based alerting is inconsistent and relies on fragile regexes**

It's common practice to set up alerts based on your logs, which can be incredibly useful. The problem is that these are generally done with simple regexes that are fragile and will break with even the simplest changes to the log format.

**3. Logging is expensive**

The sheer amount of data that gets recorded can be [incredibly expensive](https://www.dropbox.com/s/zb0h8lrt7vuu262/Screenshot%202017-01-31%2013.29.19.png?dl=0) to process and store, and it's not uncommon to spend more on collecting and gathering your logs than on any other service at your company, particularly as you scale up services and machines.

**4. Retention is poor**

Since logs are the direct record of what happens in your applications, they contain incredibly valuable data that can be utilized by data science teams to find trends, patterns, behaviors, and more. The industry standard is to store that data for a few days and then destroy it, making any kind of valuable analysis impossible.

**5. Logging is difficult to set up and maintain**

Let's face it, logging is not your core competency. You have many more important things to focus on than setting up and maintaining a system that can process your log data. We've seen large companies take hundreds of development hours to set up logging systems that are still expensive and prone to issues.

**6. Can't see trends or high-level overviews**

Since most log data is just raw text with timestamps, zooming out to see any real trends or being able to get a feel for how your app is performing just isn't possible. Many developers will resort to installing heavy server or application monitoring agents to get this data, but it should've been in your logs the whole time.

### So what is Timber?

We're glad you asked! To put it simply: Timber transforms your log lines into a [shared normalized json schema](https://github.com/timberio/log-event-json-schema) and adds important application context along the way.

For you visual people, we turn this:

```Completed 200 OK in 117ms (Views: 85.2ms | ActiveRecord: 25.3ms)``` (ಥ_ಥ)

into this:

```
{
  "dt": "2016-12-01T02:23:12.236543Z",
  "level": "info",
  "message": "Completed 200 OK in 117ms (Views: 85.2ms | ActiveRecord: 25.3ms)",
  "context": {
    "http": {
      "method": "GET",
      "path": "/checkout",
      "remote_addr": "123.456.789.10",
      "request_id": "abcd1234"
    },
    "user": {  // <---- http://i.giphy.com/EldfH1VJdbrwY.gif
      "id": 2,
      "name": "Ben Johnson",
      "email": "ben@johnson.com"
    }
  },
  "event": {
    "http_response": {
      "status": 200,
      "time_ms": 117
    }
  }
}
```

That's it! It's dead simple.

Our lightweight packages ([ruby](github.com/timberio/timber-ruby (http://github.com/timberio/timber-ruby)) or [elixir](github.com/timberio/timber-elixir (http://github.com/timberio/timber-elixir)) for example) sit directly inside your application to ensure this structure and augment your logs with context that was previously inaccessible.

### Why is this a big deal?

With structured logs and more context, your logs become **consistent** and **useful**.

**1. Find and solve issues more easily.**

Let's say a user reported that they were unable to check out. You can now run the following query:

`user.email:zach@timber.io http.path:/checkout`

and see exactly what went wrong.

Or if you wanted to find out which endpoints were performing slowly:

`http_response.time_ms > 5000`

The possibilities here are endless.

**2. Save developers time**


1. The Timber console is specifically built to take advantage of this log structure (although it will also work with standard log formats), which means searching, graphing and investigating are easier and much faster.
2. Our libraries automatically structure your logs and give you a framework to work in. This burden is removed and developers can spend more time focusing on their application.

**3. Reliable alerting**

No more of those fragile regexes: alerts can now be configured around **actual data**. For example instead of matching on `/(500|503|504)/g` you can simply look for `http.response.code>=500` or just `level:error`.

**4. No operations overhead**

Forget about storing and processing the data yourself. Timber offers a completely managed platform to handle all of this for you.

**5. Better customer experiences & faster response times**

Since user data is automatically added to the log's context, narrowing down to a specific user's session is seamless and powerful.

**6. Cheaper**

Timber doesn't break the bank. It's designed with cost in mind. And in most cases, it's even cheaper than hosting an open-source logging solution yourself.

**7. Longer retention**

By default, Timber offers 6 months retention,  far exceeding the industry standard (1 week - 1 month). This means you can use that data for analytical purposes without issue. Need your data longer? Retention can be extended per your request.

**7. Trace requests through your stack**

Because Timber sits in your app, it can assign each request a unique id and relate them. This means you can see how a request travels through your entire system and at which point the issue arose.

**8.  Less time configuring.**

Since Timber doesn't have to account for arbitrary log structures, it can make assumptions about your log data which makes it incredibly useful out of the box. Since we automatically recognize log level, status and context data things just work.

**9. We're here to help******

The Timber team is here to help you and that if you have custom requirements you should reach out to see if we can meet them.

We hope that you enjoy using Timber as much as we enjoy building it. If you'd like to learn more head over to our [docs](/docs) or feel free to ping us at [hi@timber.io](mailto://hi@timber.io).
