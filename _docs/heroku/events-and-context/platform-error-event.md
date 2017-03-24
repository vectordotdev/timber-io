---
breadcrumbs: Timber for Heroku / Events & Context
title: <i class="fa fa-plus-circle" aria-hidden="true"></i> Platform Error Event
toc: true
---

Heroku [documents a number of platform errors](https://devcenter.heroku.com/articles/error-codes).
When an error occurs, they will appear in your logs. Timber parses and normalizes these events
as `event.platform.error` types.

### Example JSON Structure

```json
{
  "event": {
    "platform": {
      "error": {
        "code": "R14",
        "description": "Memory quota exceeded"
      }
    }
  }
}
```

### Field descriptions

Name | Type | Description
-----|------|------------
`event.platform.error.code` | `string` | The official error code. See [this heroku doc](https://devcenter.heroku.com/articles/error-codes) for a complete list. `required`, `max-length: 255`
`event.platform.error.description` | `string` | Description of the error. `required`, `max-length: 1000`


### Using this data

See our doc on [using context & event data]({% link _docs/app/events-and-context.md %}#what-can-i-do-with-this-data).