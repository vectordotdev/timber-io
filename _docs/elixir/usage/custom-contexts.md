---
breadcrumbs: Timber for Elixir / Usage
title: Custom Contexts
toc: true
---

Timber for Elixir allows you to add custom context to your apps. Context is additional data
that is added to every log line within that context. Think of it like shared / join data
for your logs.

Before adding a custom context, checkout the [events & context]() to make sure Timber isn't
already capturing it.


## Implementation

Adding a context is just a simple Map:

```elixir
Timber.add_context(%{build: %{version: "1.0.0"}})
Logger.info("My log message")

# => My log message @metadata {"level": "info", "context": {"build": {"version": "1.0.0"}}}
```

* Notice the `:build` root key. Timber will classify this context as such.


## What you can do

Check out our [doc on what you can do with events & context]().


## Limits

* There are *no limits* to the depth of fields you can nest. As long as the resulting field path is less than `128` characters.
* There are *no limits* to the number of custom fields you can send. As long as the result payload size is less than `2mb`.