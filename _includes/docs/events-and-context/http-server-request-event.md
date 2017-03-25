The HTTP server request event reprsents an _incoming_ HTTP request _to_ your application.
This is different from the `HTTP Client Request Event` in that it is an _incoming_ request
that your appication serves.


### Example JSON Structure

```json
{
  "event": {
    "server_side_app": {
      "http_server_request": {
        "headers": {
          "content-type": "application/json",
          "x-request-id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0"
        },
        "host": "api.timber.io",
        "method": "POST",
        "path": "/applications",
        "port": 443,
        "query_string": null,
        "request_id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0",
        "scheme": "https"
      }
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`headers` | `map` | A map of raw header names and values. `optional`
`host` | `string` | The host of the destination URL. `required`, `max-length: 255`
`method` | `string` | The method of the request normalized to uppercase, ex: `GET`, `POST`, etc. `required`
`path` | `string` | The path of the destination URL. `required`, `max-length: 5000`
`port` | `number` | The port of the destination URL. `optional`
`query_string` | `string` | The query string of the destination URL. `optional`, `max-length: 5000`
`request_id` | `string` | The unique ID for this outgoing request, useful for request tracing. `optional`, `max-length: 255`
`scheme` | `string` | The scheme of the destination URL, ex: `http` or `https`. `required`


### Using this data

Example queries:

* Full path: `event.server_side_app.http_server_request.host:api.timber.io`
* Short path: `http_server_request.host:api.timber.io` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `is:http_server_request`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>