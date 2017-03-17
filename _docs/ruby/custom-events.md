---
category: Timber for Ruby
category_order: 2
title: Custom Events
page_order: 3
sections: manual configuration
---

Custom events allow you to extend beyond events already defined in
the [`Timber::Events`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/events) namespace:

```ruby
Logger.warn "Payment rejected", payment_rejected: {customer_id: "abcd1234", amount: 100, reason: "Card expired"}

# => Payment rejected @metadata {"level": "warn", "event": {"payment_rejected": {"customer_id": "abcd1234", "amount": 100, "reason": "Card expired"}}, "context": {...}}
```

* Notice the `:payment_rejected` root key. Timber will classify this event as such.
* In the Timber console use the query: `type:payment_rejected` or `payment_rejected.amount:>100`.
* Looking for metrics? Checkout the [metrics doc]({% link _docs/ruby/metrics.md %}).