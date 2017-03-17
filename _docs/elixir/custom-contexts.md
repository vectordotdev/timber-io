---
category: Timber for Elixir
category_order: 2
title: Custom Contexts
page_order: 2
sections: manual configuration
---

Context is additional data shared across log lines. Think of it like log join data.
Custom contexts allow you to extend beyond contexts already defined in
the [`Timber.Contexts`](https://github.com/timberio/timber-elixir/tree/master/lib/timber/contexts) namespace.

```elixir
Timber.add_context(%{build: %{version: "1.0.0"}})
Logger.info("My log message")

# => My log message @metadata {"level": "info", "context": {"build": {"version": "1.0.0"}}}
```

* Notice the `:build` root key. Timber will classify this context as such.
* In the [Timber console](https://app.timber.io) use queries like: `build.version:1.0.0`.