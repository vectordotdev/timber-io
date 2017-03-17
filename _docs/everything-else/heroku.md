---
category: Timber for Everything Else
category_order: 4
title: Heroku
page_order: 1
---

Sending your logs from Heroku is accomplished by using the
[Heroku log drains](https://devcenter.heroku.com/articles/log-drains). The command looks like:

```
heroku drains:add https://{timber_api_key}@logs.timber.io/frames
```

You can obtain your API key by clicking `settings` for the app in question. Also note,
if you specified that your app is on Heroku, we'll display the above command, with your
API key, so that you can copy/paste/execute it.