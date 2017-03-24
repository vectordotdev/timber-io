---
category: Timber for Elixir
category_order: 4
title: Events & Context
page_order: 3
toc: true
---

By [installing the Timber for Elixr library]() your application will automatically start collecting
the below fields in your logs. You can read more here about the benefits of having real structured
data in your logs.


## HTTP Context

The HTTP context contains critical HTTP context within the lifecycle of a request.
This is shared across logs lines, allowing you to relate them. For example, the
`context.http.request_id` field allows you to view _all_ logs for that request, not just
the initial request log line:

### JSON Example

```javascript
{
  // ...
  context: {
    http: {
      method: "GET"
    }
  }
  // ...
}
```

### Field Definitions

Name | Type | Description
-----|------|------------
`context.http.method` | `string` | The HTTP method for the request.
`context.http.path` | `string` | The path of the HTTP request. `max-length: 5000`
`context.http.remote_addr` | `string` | The IP address of the computer that issued the request. `max-length: 255`
`context.http.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests. `max-length: 255`


## Runtime Context

The runtime context contains critical runtime context about the origin of the log line. This
actually powered by the [standard Elixir Logger](https://hexdocs.pm/logger/Logger.html#module-backends).
Notice this data is included in the Logger metadata for all Elixir application. Timber simply
captures and formalizes it into the following fields for each log line:

Name | Type | Description
-----|------|------------
`context.runtime.application` | `string` | The current application name `max-length: 255`
`context.runtime.class_name` | `string` | The current class name, if applicable. `max-length: 255`
`context.runtime.file` | `string` | The current file path from the root of the project. `max-length: 1000`
`context.runtime.function` | `string` | The current function name, if applicable. `max-length: 255`
`context.runtime.line` | `integer` | The current line number with in the file. `minimum: 1`
`context.runtime.module_name` | `string` | The current module name, if applicable. `max-length: 255`
`context.runtime.vm_pid` | `string` | The logical process ID as defined by the current language, if applicable. `max-length: 255`


## User Context

The user context capture crtitical user context about the currently authenticated user.