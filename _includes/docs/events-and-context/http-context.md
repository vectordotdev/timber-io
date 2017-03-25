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
    "http": {
      "method: "GET",
      "path": "/welcome",
      "remote_addr": "123.34.32.123",
      "request_id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0"
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`method` | `string` | The request method normalized to uppercase, ex: `GET`, `POST`, `PUT`, `DELETE`, etc. `required`
`path` | `string` | The request path. `required`, `max-length: 5000`
`remote_address` | `string` | The ipv4 or ipv6 address of the original requestor. `optional`
`request_id` | `string` | The unique ID of this request, useful for request tracing. `optional`, `max-length: 255`


### Using this data

Example queries:

* Full path: `context.http.request_id:2c3a0b24069af49b3de35b8e8c26765c1dba9ff0`
* Short path: `http.request_id:2c3a0b24069af49b3de35b8e8c26765c1dba9ff0` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `has:http`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).