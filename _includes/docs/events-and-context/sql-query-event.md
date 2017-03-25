The SQL query event resresents a SQL query being issued from within your application.

```
SELECT * FROM users (0.5ms)
```


### Example JSON Structure

```json
{
  "event": {
    "server_side_app": {
      "sql_query": {
        "sql": "SELECT * FROM users",
        "time_ms": 0.2
      }
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`sql` | `string` | The raw SQL of the query. `required` `max-length: 5000`
`time_ms` | `number` | The time taken to execute the query in milliseconds. `required`


### Using this data

Example queries:

* Full path: `event.server_side_app.sql_query.time_ms:>50`
* Short path: `sql_query.time_ms:>50` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `is:sql_query`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>