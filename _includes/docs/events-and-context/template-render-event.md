The `template_render` event represents the rendering of a template within your application.

```
Rendered welcome/index.html.erb within layouts/application (0.2ms)
```


### Example JSON Structure

```json
{
  "event": {
    "server_side_app": {
      "template_render": {
        "name": "welcome/index.html.erb",
        "time_ms": 0.2
      }
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`name` | `string` | The name / path of the templat being rendered. `required` `max-length: 1000`
`time_ms` | `number` | The time taken to render the template in milliseconds. `required`


### Using this data

Example queries:

* Full path: `event.server_side_app.controller_call.controller:WeclomeController`
* Short path: `controller_call.controller:WelcomeController` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `is:controller_call`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>