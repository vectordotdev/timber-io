The `session` context adds critical session data to your logs. A session if defined by your
application. In most applications this is stored in a cookies and expires after a given
amount of time. It allows you to identify users regardless if they explicitly authenticate
or not.


### Example JSON Structure

```json
{
  "context": {
    "session": {
      "id": "abcd1234"
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`id` | `string` | The unique identifier of the current session. `required`, `max-length: 255`


### Using this data

Example queries:

* Full path: `context.session.id:abcd1234`
* Short path: `session.id:abcd1234` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `has:session`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>