---
breadcrumbs: Timber for Heroku / Events & Context
title: <i class="fa fa-plus-circle" aria-hidden="true"></i> Server CPU Sample Event
toc: true
---

By enabling Heroku's [log runtime labs feature](https://devcenter.heroku.com/articles/log-runtime-metrics)
CPU samples will be periodically dumped into your logs. Timber recognizes and parses these events
as `event.server.cpu_sample`.

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
`server.cpu_sample.load_avg_10m` | `number` | The load average for the processor in the last 10 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). `minimum: 0`
`server.cpu_sample.load_avg_1m` | `number` | The load average for the processor in the last 1 minute. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). `minimum: 0`
`server.cpu_sample.load_avg_5m` | `number` | The load average for the processor in the last 5 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). `minimum: 0`


### Using this data

See our doc on [using context & event data]({% link _docs/app/events-and-context.md %}#what-can-i-do-with-this-data).