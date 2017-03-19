---
category: Timber for Ruby
category_order: 2
title: Custom Contexts
page_order: 3
toc: true
---

Context is additional data shared across log lines. Think of it like log join data.
Custom contexts allow you to extend beyond contexts already defined in
the [`Timber::Contexts`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/contexts) namespace.

## Implementation

```ruby
Timber::CurrentContext.with({build: {version: "1.0.0"}}) do
  logger.info("My log message")
end

# => My log message @metadata {"level": "info", "context": {"build": {"version": "1.0.0"}}}
```

* Notice the `:build` root key. Timber will classify this context as such.


## What you can do

1. Use this data for [querying your logs](% link _docs/apps/search-syntax.md %}). Ex: `build.version:1.0.0`.
2. View this custom context when inspecting log lines:

   ![Context panels](/assets/img/docs/context-panel.png)

   Or view it in the raw JSON payload:

   ![Context raw](/assets/img/docs/context-raw.png)



## Limits

* There are *no limits* to the depth of fields you can nest. As long as the resulting field path is less than `128` characters.
* There are *no limits* to the number of custom fields you can send. As long as the result payload size is less than `2mb`.