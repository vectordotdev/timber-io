---
breadcrumbs: Timber for Heroku / Events & Context
title: Server CPU Sample Event
formatted_title: <i class="fa fa-cube" aria-hidden="true"></i> Server CPU Sample Event
toc: true
---

By enabling Heroku's [log runtime labs feature](https://devcenter.heroku.com/articles/log-runtime-metrics)
CPU samples will be periodically dumped into your logs. Timber recognizes and parses these events
as `event.server.cpu_sample`.

```
source=web.1 dyno=heroku.2808254.d97d0ea7-cf3d-411b-b453-d2943a50b456 sample#load_avg_1m=2.46 sample#load_avg_5m=1.06 sample#load_avg_15m=0.99
```

### Example JSON Structure

```json
{
  "event": {
    "server": {
      "cpu_sample": {
        "load_avg_10m": 2.4,
        "load_avg_5m": 1.2,
        "load_avg_1m": 3.1
      }
    }
  }
}
```

### Field descriptions

Name | Type | Description
-----|------|------------
`load_avg_10m` | `number` | The load average for the processor in the last 10 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). `minimum: 0`
`load_avg_1m` | `number` | The load average for the processor in the last 1 minute. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). `minimum: 0`
`load_avg_5m` | `number` | The load average for the processor in the last 5 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). `minimum: 0`


### Using this data

Example queries:

* Full path: `event.server.cpu_sample.load_avg_1m:>100`
* Short path: `cpu_sample.load_avg_1m:>100` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `has:cpu_sample`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>