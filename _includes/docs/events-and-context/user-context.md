The user context adds critical user data to your logs. It allows you to tail a user and
relate log lines to users within your application.


### Example JSON Structure

```json
{
  "context": {
    "user": {
      "id": "23",
      "name": "Ben Johnson",
      "email": "hi@timber.io"
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`id` | `string` | The unique identifier of the current user. `optional`, `max-length: 255`
`name` | `string` | The name of the current user. `optional`, `max-length: 255`
`email` | `string` | The email of the current user. `optional`, `max-length: 255`


### Using this data

Example queries:

* Full path: `context.user.id:23`
* Short path: `user.id:23` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `has:user`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).