---
breadcrumbs: Timber for Heroku / Events & Context
title: <i class="fa fa-plus-circle" aria-hidden="true"></i> Server Memory Sample Event
toc: true
---

By enabling Heroku's [log runtime labs feature](https://devcenter.heroku.com/articles/log-runtime-metrics)
memory samples will be periodically dumped into your logs. Timber recognizes and parses these events
as `event.server.cpu_sample`.

### Example JSON Structure

```json
{
  "event": {
    "server": {
      "memory_sample": {
        "cache_mb": 100,
        "limit_mb": 512,
        "pgpin": 200,
        "pgpout": 150,
        "rss_mb": 100,
        "swap_mb": 100,
        "totla_mb": 100
      }
    }
  }
}
```

### Field descriptions

Name | Type | Description
-----|------|------------
`server.memory_sample.cache_mb` | `number` | The portion of the memory used for disk cache. `minimum: 0`
`server.memory_sample.limit_mb` | `number` | The maximum amount of memory, limit, that can be used before swap is used. `minimum: 0`
`server.memory_sample.pgpgin` | `number` | The cumulative total of the pages read from disk. Sudden high variations on this number can indicate short duration spikes in swap usage. The other memory related metrics are point in time snapshots and can miss short spikes. `minimum: 0`
`server.memory_sample.pgpgout` | `number` | The cumulative total of the pages written to disk. Sudden high variations on this number can indicate short duration spikes in swap usage. The other memory related metrics are point in time snapshots and can miss short spikes. `minimum: 0`
`server.memory_sample.rss_mb` | `number` | The portion of the memory being used by the target application. `minimum: 0`
`server.memory_sample.swap_mb` | `number` | The portion of the memory stored on disk. Swap usually indicates a shortage of memory. `minimum: 0`
`server.memory_sample.total_mb` | `number` | The sum of the rss, cache, and swap that equals the total memory being used. `minimum: 0`

### Using this data

See our doc on [using context & event data]({% link _docs/app/events-and-context.md %}#what-can-i-do-with-this-data).