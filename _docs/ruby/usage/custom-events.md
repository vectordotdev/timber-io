---
breadcrumbs: Timber for Ruby / Usage
title: Custom Events
toc: true
---

Custom events allow you to extend beyond events already defined in
the [`Timber::Events`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/events) namespace.

Looking for metrics? Checkout the [metrics doc]({% link _docs/ruby/usage/metrics.md %}).


## Implementation

```ruby
Logger.warn "Payment rejected", payment_rejected: {customer_id: "abcd1234", amount: 100, reason: "Card expired"}

# => Payment rejected @metadata {"level": "warn", "event": {"payment_rejected": {"customer_id": "abcd1234", "amount": 100, "reason": "Card expired"}}, "context": {...}}
```

* Notice the `:payment_rejected` root key. Timber will classify this event as such.


## What you can do

1. Use this data for [querying your logs]({% link _docs/app/basics/search-syntax.md %}). Ex: `type:payment_rejected` or `payment_rejected.amount:>100`.
2. View this custom event when inspecting log lines:

   ![Event panels]({% link assets/img/docs/event-panel.png %})

   Or view it in the raw JSON payload:

   ![Event raw]({% link assets/img/docs/event-raw.png %})


## Limits

* There are *no limits* to the depth of fields you can nest. As long as the resulting field path is less than `128` characters.
* There are *no limits* to the number of custom fields you can send. As long as the result payload size is less than `2mb`.


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>