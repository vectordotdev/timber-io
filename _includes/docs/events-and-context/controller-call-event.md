The controller call event represents an invocation of your controller within the HTTP
request cycle. The order of events generally looks like:

```
Started Get "/"
Processing by WelcomeController#index as html <-------------------------
Rendered welcome/index.html.erb within layouts/application (0.2ms)
Completed 200 OK in 2.46ms
```


### Example JSON Structure

```json
{
  "event": {
    "server_side_app": {
      "controller_call": {
        "controller": "WelcomeController",
        "action": "index",
        "params_json": "{\"id\": 2, \"type\": \"user\"}"
      }
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`controller` | `string` | The class name of the controller called.
`action` | `string` | The action name of the controller action called.
`params_json` | `string` | A JSON representation of the parsed parameters sent to the controller. This is great for request inspect to ensure the data being sent to your controllers is correct.


### Using this data

Example queries:

* Full path: `event.server_side_app.controller_call.controller:WeclomeController`
* Short path: `controller_call.controller:WelcomeController` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `is:controller_call`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>