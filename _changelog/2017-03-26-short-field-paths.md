---
title: Shorter, easier field paths
date: 2017-03-26 00:00:00
image: '/assets/img/changelog/short-paths.gif'
author: ben_johnson
tags: [app, console, searching]
---

We're always looking for small subtle changes that could improve the UX of Timber.
Today we released what we're calling "short paths." Here's a simple example:

Instead of issuing a query like:

```
event.server_side_app.exception.name:RuntimeError
```

You can now do:

```
exception.name:RuntimeError
```

Here are a few more examples:

| Long field path | Short field path |
|-----------------|------------------|
| `context.http.request_id` | `http.request_id` |
| `context.user.id` | `user.id` |
| `event.server_side_app.http_server_request` | `http_server_request` |
| `event.server_side_app.sql_query` | `sql_query` |

Give it a try!