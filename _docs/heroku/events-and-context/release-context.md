---
breadcrumbs: Timber for Heroku / Events & Context
title: Release Context
formatted_title: <i class="fa fa-plus-circle" aria-hidden="true"></i> Release Context
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
`commit_hash` | `string` | The git commit hash of the current release.
`created_at` | `string` | When the release was created in ISO8601 format.
`version` | `string` | The version number of the release.


### Using this data

Example queries:

* Full path: `context.release.version:v42`
* Short path: `release.version:v42` - Short paths are aliases allowing for simpler access to these fields.


See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>