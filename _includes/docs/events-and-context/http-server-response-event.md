The HTTP server response event represnts the response of an _incoming_ HTTP request to your
application. This is different from the `HTTP Client Response Event` in that it is a
response to an _incoming_ request.

```
Sent 200 in 52.2ms
```

### Example JSON Structure

```json
{
  "event": {
    "server_side_app": {
      "http_server_response": {
        "headers": {
          "content-type": "application/json",
          "x-request-id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0"
        },
        "status": 200,
        "request_id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0",
        "time_ms": 52.2
      }
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`headers` | `map` | A map of raw header names and values. `optional`
`status` | `number` | The status code of the response. `required`
`request_id` | `string` | The unique ID for this outgoing request, useful for request tracing. `optional`, `max-length: 255`
`time_ms` | `number` | The time taken to respond to the request in milliseconds. `required`


### Using this data

Example queries:

* Full path: `event.server_side_app.http_server_response.status:200`
* Short path: `http_server_response.status:200` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `is:http_server_response`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>