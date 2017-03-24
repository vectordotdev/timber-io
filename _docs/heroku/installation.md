---
breadcrumbs: Timber for Heroku
title: Installation
toc: true
---

In your `shell` run the following command, subbing `{timber_api_key}` with
[your API key]({% link _docs/app/obtain-api-key.md %})

```shell
heroku drains:add https://{timber_api_key}@logs.timber.io/frames
```

### Optionally enable log-runtime-metrics

This following adds samples of your server's memory and CPU usage. You can read more about it
[here](https://devcenter.heroku.com/articles/log-runtime-metrics). We highly recommend
enabling this:

```shell
heroku labs:enable log-runtime-metrics
```

<div class="additions">
<h3>You'll get...</h3>

* [Server CPU sample event]({% link _docs/heroku/events-and-context/server-cpu-sample-event.md %})
* [Server memory sample event]({% link _docs/heroku/events-and-context/server-memory-sample-event.md %})
</div>


### Optionally enable runtime-dyno-metadata

This adds helpful environment variables to your runtime. You can read more about it
[here](https://devcenter.heroku.com/articles/dyno-metadata), We highly recommend enabling this:

```shell
heroku labs:enable runtime-dyno-metadata
```

<div class="additions">
<h3>You'll get...</h3>

* [Release context]({% link _docs/heroku/events-and-context/release-context.md %})
</div>