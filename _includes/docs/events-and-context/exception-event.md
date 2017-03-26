The `exception` event formally tracks exceptions in your application. Instead of exceptions
being a blob of text in your logs, Timber parses them and classifies it as a single event
proper event.

```
RuntimeError: Failed to decode header from JSON
  lib/json_web_token/jws.ex:96 (JsonWebToken.Jws.header_map/1)
  lib/json_web_token/jws.ex:82 (JsonWebToken.Jws.validate_alg_matched/2)
  lib/json_web_token/jws.ex:77 (JsonWebToken.Jws.verify/3)
  lib/json_web_token/jws.ex:89 (JsonWebToken.Jwt.verify/2)
  lib/odin_auth/bearer_user.ex (Odin.Auth.BearerUser.jwt_decode/1)
```


### Example JSON Structure

```json
{
"event": {
  "server_side_app": {
     "exception": {
        "name":"RuntimeError",
        "message":"Failed to decode header from JSON",
        "backtrace": [
           {
              "line":96,
              "function": "JsonWebToken.Jws.header_map/1",
              "file": "lib/json_web_token/jws.ex",
              "app_name": "json_web_token"
           },
           {
              "line":82,
              "function": "JsonWebToken.Jws.validate_alg_matched/2",
              "file": "lib/json_web_token/jws.ex",
              "app_name": "json_web_token"
           },
           {
              "line":77,
              "function": "JsonWebToken.Jws.verify/3",
              "file": "lib/json_web_token/jws.ex",
              "app_name": "json_web_token"
           },
           {
              "line":89,
              "function": "JsonWebToken.Jwt.verify/2",
              "file": "lib/json_web_token/jwt.ex",
              "app_name": "json_web_token"
           },
           {
              "line":43,
              "function": "Odin.Auth.BearerUser.jwt_decode/1",
              "file": "lib/odin_auth/bearer_user.ex",
              "app_name": "odin_auth"
           },
           {
              "line": 34,
              "function": "Odin.Auth.BearerUser.decode/1",
              "file": "lib/odin_auth/bearer_user.ex",
              "app_name": "odin_auth"
           },
           {
              "line":26,
              "function":"Odin.ClientAPI.Plug.BearerUserAuth.call/2",
              "file":"lib/odin_client_api/plug/bearer_user_auth.ex",
              "app_name":"odin_client_api"
           },
           {
              "line":28,
              "function":"Odin.ClientAPI.Router.bearer_user_auth/2",
              "file":"web/router.ex",
              "app_name":"odin_client_api"
           }
        ]
     }
  }
},
```


### Field descriptions

Name | Type | Description
-----|------|------------
`name` | `string` | The class or module name of the exception. `required`, `max-length: 255`
`message` | `string` | The message included with the exception. `required`, `max-length: 10,000`
`backtrace` | `array` | An array of backtrace objects (see below). `required`

#### Backtrace line

Name | Type | Description
-----|------|------------
`file` | `string` | The path of the file. `required`, `max-length: 1000`
`function` | `string` | The message included with the exception. `required`, `max-length: 255`
`line` | `number` | An array of backtrace objects (see below). `required`
`app_name` | `string` | The app name, if applicable. This is generally used for elixir umbrella apps. `optional`, `max-length: 255`


### Using this data

Example queries:

* Full path: `event.server_side_app.exception.name:RuntimeError`
* Short path: `exception.name:RuntimeError` - Short paths are aliases allowing for simpler access to these fields.
* Only this event: `is:exception`

See our doc on [using context & event data]({% link _docs/app/basics/events-and-context.md %}#what-can-i-do-with-this-data).


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>