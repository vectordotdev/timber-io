---
category: Timber for Ruby
category_order: 2
title: Metrics
page_order: 4
sections: manual configuration
---

Logging metrics is accomplished by [logging custom events]({% link _docs/ruby/custom-events.md %}). Let's take a look at a couple of examples:


## Example 1: Tracking credit card charge volume

Instead of focusing on the individual "volume" metric, Timber allows you to log the credit card
charge event as a whole. This way if you discover anomalies, you'll have the data you need to
resolve the issue:

    {% highlight ruby %}
    result = CreditCrardProcessor.charge(credit_card, amount)
    logger.info(
      "Credit card #{result.success? ? "successfully" : "unsuccessfully"} charged",
      cc_charge_attempt: {cc_token: credit_card.token, success: result.success?, amount: amount, currency: "USD"}
    )
    {% endhighlight %}

In the timber console you can run queries like:

* `cc_charge_attempt.success:false`
* `cc_charge_attempt.cc_token:abcd1234`
* `cc_charge_attempt.amount:>100`


## Example 2: Timing a batch processing job

In some cases, volume is high enough that logging individual events is not feasible. In these
situations, we recommend logging summary events.

    {% highlight ruby %}
    100_000.times do
      # batch processing task
    end
    logger.info(
      "Batch processing job complete",
      batch_job_summary: {task_count: 100_000, success_count: 90_000, failed_count: 10_000, time_ms: 2000}
    )
    {% endhighlight %}

Notice we classify this as an event and attached additional data beyond just the timing.

In the timber console you can run queries like:

* `batch_job_summary.time_ms:>50`
* `batch_job_summary.failed_count:>0`