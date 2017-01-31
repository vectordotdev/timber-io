---
title: "Why We're Building Timber"
date: 2016-07-20 00:00:00
image: 'https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/3003711/projects.png'
author: zach_sherman
tags:
---


In the last decade, the way that we've built applications and services has changed dramatically. Unfortunately, the way that we debug and monitor them hasn't changed nearly as much. Once monolithic behemoths have splintered into lean microservices with single responsibilities, written in different languages and with different frameworks that are carefully chosen for the tasks at hand.

[Many]() [many](link) engineers and organizations have to come to realize the benefits of architecting systems in this manner, but like anything, it's not without its downsides. With so many different tools running on so many different platforms, the task of reliably debugging and monitoring them can become sisyphean.

In this wild west of microservices, serverless apps, workers, and 3rd party services one thing remains universal: the log is the single, reliable, immutable source of truth. Or as Jay Kreps [so thoughtfully puts it](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying):

&gt; The log is the record of what happened.... Since the log is immediately persisted it is used as the authoritative source in restoring all other persistent structures...

The idea behind Timber starts with this one basic tenant.

### So What's the Problem?

Anyone who's attempted to use logs in production can probably tell you what a harrowing experience that can be. It's easy to find yourself lost in a sea of text, unable to tell where you are or what you're looking at. Sometimes you can forget who \*you\* are.

\*\*1. Finding what you need in the logs is often really hard.\*\*

Most logging platforms ingest and display only raw text in a view that can make you feel like you're in the matrix.

You might say "sure, but I can always search for what I'm looking for, right?" Well, what happens if what you want to find isn't in the message string? What if your microservices are all logging different information in different formats with different log levels? The problem here is that there is \*\*no context\*\*.

\*\*2. Log based alerting is inconsistent and relies on fragile regexes\*\*

It's common practice to set up alerts based on your logs, which can be incredibly useful. The problem is that these are generally done with simple regexes that are fragile, and will break with even the simplest changes to the log format.

\*\*3. Logging is expensive\*\*

The sheer amount of data that gets recorded can be [incredibly expensive](https://www.dropbox.com/s/zb0h8lrt7vuu262/Screenshot%202017-01-31%2013.29.19.png?dl=0) to process and store, and it's not uncommon to spend more on collecting and gathering your logs than on any other service at your company, particulary as you scale up services and machines.

\*\*4. Retention is poor\*\*

Since logs are the direct record of what happens in your applications, they contain incredibly valuable data that can be utilized data science teams to find trends, patterns, behaviors, and more. The industry standard is to store that data for a few days and then destroy it, making any kind of valuable analysis impossible.

\*\*5. Logging is difficult to set up and maintain\*\*

Let's face it, logging is not your core competency. You have many more important things to focus on than setting up and maintaining a system that can process your log data. We've seen large companies take hundreds of development hours to set up logigng systems that are still expensive and prone to issues.

\*\*6. Can't see trends or high level overviews\*\*

Since most log data is just raw text with timestamps, zooming out to see any real trends or being able to get a feel for how your app is performing just isn't possible. Many developers will resort to installing heavy server or application monitoring agents to get this data, but it should've been in your logs the whole time.

<br>### So what is Timber?

So glad you asked, to put it simply: Timber transforms your log lines into a standardized JSON structure and adds important application context along the way.

For you visual people, we turn this:

```Completed 200 OK in 117ms (Views: 85.2ms | ActiveRecord: 25.3ms)``` (ಥ_ಥ)

into this:

```
<br>{
<br>&nbsp; "dt": "2016-12-01T02:23:12.236543Z",
<br>&nbsp; "level": "info",
<br>&nbsp; "message": "Completed 200 OK in 117ms (Views: 85.2ms | ActiveRecord: 25.3ms)",
<br>&nbsp; "context": {
<br>&nbsp; &nbsp; "http": {
<br>&nbsp; &nbsp; &nbsp; "method": "GET",
<br>&nbsp; &nbsp; &nbsp; "path": "/checkout",
<br>&nbsp; &nbsp; &nbsp; "remote_addr": "123.456.789.10",
<br>&nbsp; &nbsp; &nbsp; "request_id": "abcd1234"
<br>&nbsp; &nbsp; },
<br>&nbsp; &nbsp; "user": { &nbsp;// &lt;---- http://i.giphy.com/EldfH1VJdbrwY.gif
<br>&nbsp; &nbsp; &nbsp; "id": 2,
<br>&nbsp; &nbsp; &nbsp; "name": "Ben Johnson",
<br>&nbsp; &nbsp; &nbsp; "email": "ben@johnson.com"
<br>&nbsp; &nbsp; }
<br>&nbsp; },
<br>&nbsp; "event": {
<br>&nbsp; &nbsp; "http_response": {
<br>&nbsp; &nbsp; &nbsp; "status": 200,
<br>&nbsp; &nbsp; &nbsp; "time_ms": 117
<br>&nbsp; &nbsp; }
<br>&nbsp; }
<br>}
<br>```

That's it, it's dead simple.

Our lightweight packages ([ruby](github.com/timberio/timber-ruby) or [elixir](github.com/timberio/timber-elixir) for example) sit directly inside your application to ensure this structure, and augment your logs with context that was previously never included.

### Why is this a big deal?

With structured logs and more context, your logs become \*\*consistent\*\* and \*\*useful\*\*.

\*\*1. Find and solve issues more easily.\*\*

Let's say a user reported that they were unable to check out, you can now simple run the following query:

`user.email:zach@timber.io http.path:checkout`

and see exactly what went wrong.

Or if you wanted to find out which endpoints were timing out:

`http_response.time_ms &gt; 5000`

The possibilities here are endless.

\*\*2. Save devleopers time\*\*

The Timber console is specifically built to take advantage of this log structure (although it will also work with standard log formats), which means searching, graphing and investigating are easier and much faster.

\*\*3. Reliable alerting\*\*

No more of those fragile regexes, alerts can now be configured around \*\*actual data\*\*. For example instead of matching on `/(500|503|504)/g` you can simply look for `http.response.code:5\*` or just `level:error`.

\*\*4. No operations overhead\*\*

Forget about storing and processing the data yourself, Timber offers a completely managed platform to handle all of this for you.

\*\*5. Better customer experiences & faster response times\*\*

Since user data is automatically added to the logs context, narrowing down to a specific user's session is seamless and powerful.

\*\*6. Longer retention\*\*

Timber offers retention up to 6 months, far exceeding the industry standard. This means you can use that data for analytical purposes without issue.