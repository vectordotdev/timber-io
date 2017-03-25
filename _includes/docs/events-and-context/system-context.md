
The HTTP context adds critical HTTP data within the context of a HTTP request. For example,
takes these familiar lines:

```
Started Get "/"
Processing by WelcomeController#index as html
Rendered welcome/index.html.erb within layouts/application (0.2ms)
Completed 200 OK in 2.46ms
```

They would all share the same HTTP context since they are logged within a single HTTP request.


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