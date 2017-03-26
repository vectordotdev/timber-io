The `system` context adds operating system context, such as the hostname and current process ID.


### Example JSON Structure

```json
{
  "context": {
    "system": {
      "hostname": "hostname.timber.io",
      "pid": "123"
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`hostname` | `string` | The hostname of the server, `required`, `max-length: 2000`
`pid` | `string` | The unique ID of the current process. `required`, `max-length: 255`


### Using this data

Example queries:

* Full path: `context.system.hostname:hostname.timber.io`
* Short path: `system.hostname:timber.io` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `has:system`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>