---
category: Timber for Everything Else
category_order: 4
title: Heroku
page_order: 6
toc: true
---

Sending your logs from Heroku is accomplished by using the
[Heroku log drains](https://devcenter.heroku.com/articles/log-drains).


## Installation

In your `shell` run the following command, subbing `{timber_api_key}` with
[your API key]({% link _docs/app/obtain-api-key.md %})

```shell
heroku drains:add https://{timber_api_key}@logs.timber.io/frames
```

### Additional Insight

If you'd like server data, such as CPU and memory usage, run:

```shell
heroku labs:enable log-runtime-metrics
```

If you'd like additional context data, such as the release version, run:

```shell
heroku labs:enable runtime-dyno-metadata
```


## Fields Automatically Captured

By installing Timber into your application, you'll automatically get the following `context`
and `event` data in your logs:

* `platform.error` - All Heroku platform errors and fields.
* `server.cpu_sample` - Enabled by Heroku's [log runtime metrics](https://devcenter.heroku.com/articles/log-runtime-metrics). This captures fields `load_avg` fields.
* `server.memory_sample` - Enabled by Heroku's [log runtime metrics](https://devcenter.heroku.com/articles/log-runtime-metrics). This captures data around memory usage.
* `web_server.routing` - All heroku routing events and fields.

For a complete list, checkout the [schema & fields doc]({% link _docs/app/schema-fields.md %})