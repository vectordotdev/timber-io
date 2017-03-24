---
breadcrumbs: Timber for Heroku / Events & Context
title: <i class="fa fa-plus-circle" aria-hidden="true"></i> Release Context
toc: true
---

Through the use of Heroku's dyno metadata labs feature you get some
[great attributes](https://devcenter.heroku.com/articles/dyno-metadata#attributes) added to
your environment. If you've installed any of the Timber libraries, we'll automatically capture
this data and add it to your context under `context.release`.

### Example JSON Structure

```json
{
  "context": {
    "release": {
      "commit_hash": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0",
      "created_at": "2015-04-02T18:00:42Z",
      "version": "v42"
    }
  }
}
```

### Field descriptions

Name | Type | Description
-----|------|------------
`context.release.commit_hash` | `string` | The git commit hash of the current release.
`context.release.created_at` | `string` | When the release was created in ISO8601 format.
`context.release.version` | `string` | The version number of the release.


### Using this data

See our doc on [using context & event data]({% link _docs/app/events-and-context.md %}#what-can-i-do-with-this-data).