---
breadcrumbs: Timber for Heroku / Events & Context
title: Platform Error Event
formatted_title: <i class="fa fa-plus-circle" aria-hidden="true"></i> Platform Error Event
toc: true
---

Heroku [documents a number of platform errors](https://devcenter.heroku.com/articles/error-codes).
When an error occurs, they will appear in your logs. Timber parses and normalizes these events
as `event.platform.error` types.

```
Error R14 (Memory quota exceeded)
```

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
`code` | `string` | The official error code. See [this heroku doc](https://devcenter.heroku.com/articles/error-codes) for a complete list. `required`, `max-length: 255`
`description` | `string` | Description of the error. `required`, `max-length: 1000`


### Using this data

Example queries:

* Full path: `event.platform.error.code:R14`
* Short path: `platform.error.code:R14` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `is:platform.error`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>