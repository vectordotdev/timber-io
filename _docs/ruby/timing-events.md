---
category: Timber for Ruby
category_order: 2
title: Timing Events
page_order: 5
sections: manual configuration
---

Timing events allow you to include code execution times in your logs:

    {% highlight ruby %}
    start = Time.now

    # ...my code to time...

    time_ms = (Time.now - start) * 1000
    logger.info("Task complete", tag: "my_task", time_ms: time_ms)

    # => My log message @metadata {"level": "info", tags: ["my_task"], "time_ms": 54.2132, "context": {...}}
    {% endhighlight %}

* In the Timber console use the query: `tags:my_task time_ms>500`
