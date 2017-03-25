---
breadcrumbs: Timber for Elixir / Usage
title: Basic Logging
toc: true
---

Timber for Elixir is just simple logging. Use it like you would your previous logger:

```ruby
Logger.info("my message")

=> my message @metadata {...}
```

Timber fully embraces the original log interface; not everything needs to be a structured event.
In fact, we encourage this for simple / debug events. Note also that the metdata is still
attached.


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>