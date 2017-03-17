---
category: Timber for Ruby
category_order: 2
title: Custom Events
page_order: 3
sections: manual configuration
---

Custom events allow you to extend beyond events already defined in
the [`Timber::Events`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/events) namespace.

Log a Hash as an event

    {% highlight ruby %}
    # Notice the :payment_rejected root key. If you supply a single root key, Timber will
    # automatically classify it as that event type.
    Logger.warn "Payment rejected", payment_rejected: {customer_id: "abcd1234", amount: 100, reason: "Card expired"}

    # Payment rejected @metadata {"level": "warn", "event": {"payment_rejected": {"customer_id": "abcd1234", "amount": 100, "reason": "Card expired"}}, "context": {...}}{% endhighlight %}

Or, log a Struct as an event

    {% highlight ruby %}
    PaymentRejectedEvent = Struct.new(:customer_id, :amount, :reason) do
      def message; "Payment rejected for #{customer_id}"; end
      def type; :payment_rejected; end
    end
    Logger.warn PaymentRejectedEvent.new("abcd1234", 100, "Card expired")

    # Payment rejected @metadata {"level": "warn", "event": {"payment_rejected": {"customer_id": "abcd1234", "amount": 100, "reason": "Card expired"}}, "context": {...}}{% endhighlight %}
