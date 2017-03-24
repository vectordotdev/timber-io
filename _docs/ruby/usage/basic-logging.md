---
breadcrumbs: Timber for Ruby / Usage
title: Basic Logging
toc: true
---

Timber for Ruby is just simple logging. Use it like you would your previous logger:

```ruby
logger.info("my message")

=> my message @metadata {...}
```

Timber fully embraces the original log interface; not everything needs to be a structured event.
In fact, we encourage this for simple / debug events. Note also that the metdata is still
attached.