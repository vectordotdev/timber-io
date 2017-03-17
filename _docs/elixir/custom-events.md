---
category: Timber for Elixir
category_order: 2
title: Custom Events
page_order: 3
sections: manual configuration
---

Custom events allow you to extend beyond events already defined in
the [`Timber.Events`](https://github.com/timberio/timber-elixir/tree/master/lib/timber/events) namespace:

```elixir
event_data = %{customer_id: "xiaus1934", amount: 1900, currency: "USD"}
Logger.info("Payment rejected", event: %{payment_rejected: event_data})

# => Payment rejected @metadata {"level": "warn", "event": {"payment_rejected": {"customer_id": "xiaus1934", "amount": 100, "reason": "Card expired"}}, "context": {...}}
```

* Notice the `:payment_rejected` root key. Timber will classify this event as such.
* In the Timber console use the query: `type:payment_rejected` or `payment_rejected.amount:>100`.
* Looking for metrics? Checkout the [metrics doc]({% link _docs/elixir/metrics.md %}).