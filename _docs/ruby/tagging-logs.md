---
category: Timber for Ruby
category_order: 2
title: Tagging Logs
page_order: 4
sections: manual configuration
---

Tags provide a quick way to categorize logs and make them easier to search:

{% highlight ruby %}
logger.info("My log message", tag: "tag")

# My log message @metadata {"level": "info", "tags": ["tag"], "context": {...}}{% endhighlight %}

Multiple tags:

{% highlight ruby %}
logger.info("My log message", tags: ["tag1", "tag2"])

# My log message @metadata {"level": "info", "tags": ["tag1", "tag2"], "context": {...}}{% endhighlight %}

Using `ActiveSupport::TaggedLogging`? It works with that as well:

{% highlight ruby %}
logger.tagged("tag") do
  logger.info("My log message", tags: ["important", "slow"])
end

# My log message @metadata {"level": "info", "tags": ["tag"], "context": {...}}{% endhighlight %}

* In the Timber console use the query: `tags:tag`.