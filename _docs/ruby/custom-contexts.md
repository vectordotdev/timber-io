---
category: Timber for Ruby
category_order: 2
title: Custom Contexts
page_order: 2
sections: manual configuration
---

Context is additional data shared across log lines. Think of it like log join data.
Custom contexts allow you to extend beyond contexts already defined in
the [`Timber::Contexts`](https://github.com/timberio/timber-ruby/tree/master/lib/timber/contexts) namespace.

Add a Hash as context

    {% highlight ruby %}
    Timber::CurrentContext.with({build: {version: "1.0.0"}}) do
      logger.info("My log message")
    end

    # My log message @metadata {"level": "info", "context": {"build": {"version": "1.0.0"}}}{% endhighlight %}

Or, add a Struct as context

    {% highlight ruby %}
    BuildContext = Struct.new(:version) do
      def type; :build; end
    end
    build_context = BuildContext.new("1.0.0")
    Timber::CurrentContext.with(build_context) do
      logger.info("My log message")
    end

    # My log message @metadata {"level": "info", "context": {"build": {"version": "1.0.0"}}}{% endhighlight %}