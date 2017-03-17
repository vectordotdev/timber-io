---
category: Timber App
category_order: 5
title: Schema & Fields
page_order: 3
sections: text, attributes
---

The Timber schema represents all of the of fields you can search on. This is the data that our
libraries collect for you. It's what makes Timber so powerful. A defined normalizes schema allows
consumers (such as our interface) to make assumptions about your data and dramatically increase
the utility of your logs.

To use these fields in a search, please see our [attribute search guide]({% link _docs/app/schema-fields.md %}#attribute-search).


## Versioning and Releases

Our schema is formally defined by our [log event JSON schema](https://github.com/timberio/log-event-json-schema).
Schema versions are [released within Github](https://github.com/timberio/log-event-json-schema/releases)
and follow the [semver specification](http://semver.org/).


## Context Fields

Contextual metadata about the environment the event takes place in

Name | Type | Description
-----|------|------------
`http.method` | `string` | The HTTP method for the request.
`http.path` | `string` | The path of the HTTP request. max-length: `5000`
`http.remote_addr` | `string` | The IP address of the computer that issued the request. max-length: `255`
`http.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests. max-length: `255`
`organization.id` | `string` | A unique identifier for the organization max-length: `255`
`organization.name` | `string` | A display name for the organization max-length: `255`
`platform.heroku.dyno_id` | `integer` | The dyno ID for the process. minimum: `1`
`platform.heroku.dyno_type` | `string` | The dyno type for the process (web, worker, router, etc) max-length: `255`
`platform.heroku.source` | `string` | The source of the log message. For example, Heroku can send log messages for the web.1 dyno from both within the app and Heroku itself.
`release.commit_hash` | `string` | The git commit sha for the deploy max-length: `255`
`release.created_at` | `string` | When the release was created, ISO8601 date time.
`release.version` | `string` | Deploy version, can be an unique string. Ex: 1.1.2 or a43fdw max-length: `255`
`runtime.application` | `string` | The current application name max-length: `255`
`runtime.class_name` | `string` | The current class name, if applicable. max-length: `255`
`runtime.file` | `string` | The current file path from the root of the project. max-length: `1000`
`runtime.function` | `string` | The current function name, if applicable. max-length: `255`
`runtime.line` | `integer` | The current line number with in the file. minimum: `1`
`runtime.module_name` | `string` | The current module name, if applicable. max-length: `255`
`runtime.vm_pid` | `string` | The logical process ID as defined by the current language, if applicable. max-length: `255`
`system.hostname` | `string` | The server hostname. max-length: `2000`
`system.pid` | `string` | The current operating system process ID as defined by the `pid` command in Unix. max-length: `255`
`user.email` | `string` | An email address for the user. This need not be unique to the user. Note that no validation is performed on this field. max-length: `255`
`user.id` | `string` | A unique identifier for the user. max-length: `255`
`user.name` | `string` | A display name for the user. max-length: `255`


## Event Fields

A controlled representation of the event this log line represents.

Name | Type | Description
-----|------|------------
`controller_call.action` | `string` | The name of the controller action being called. max-length: `255`
`controller_call.controller` | `string` | The name of the controller being called. max-length: `255`
`exception.backtrace` | `array` | An array of lines, representing the call stack, leading up to the exception.
`exception.message` | `string` | The message describing the exception. max-length: `10000`
`exception.name` | `string` | The name of the exception. max-length: `255`
`http_client_request.body` | `string` | The body of the HTTP request / response. max-length: `10000`
`http_client_request.host` | `string` | The target host of the HTTP request. This may not be the same as the real hostname of the server. max-length: `255`
`http_client_request.method` | `string` | The HTTP method for the request.
`http_client_request.path` | `string` | The path of the HTTP request. max-length: `5000`
`http_client_request.port` | `integer` | The target port of the HTTP request. This may be different than the port the server is listening on. minimum: `0`
`http_client_request.query_string` | `string` | The query parameters present on the URL. max-length: `10000`
`http_client_request.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests. max-length: `255`
`http_client_request.scheme` | `string` | The HTTP request scheme.
`http_client_request.service_name` | `string` | A short label / name for the service you are sending the request to, ex: elasticsearch max-length: `255`
`http_client_response.body` | `string` | The body of the HTTP request / response. max-length: `10000`
`http_client_response.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests. max-length: `255`
`http_client_response.service_name` | `string` | A short label / name for the service you are sending the request to, ex: elasticsearch max-length: `255`
`http_client_response.status` | `integer` | The status as defined by the HTTP status codes. minimum: `100`, maximum: `599`
`http_client_response.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event. minimum: `0`
`http_server_request.body` | `string` | The body of the HTTP request / response. max-length: `10000`
`http_server_request.host` | `string` | The target host of the HTTP request. This may not be the same as the real hostname of the server. max-length: `255`
`http_server_request.method` | `string` | The HTTP method for the request.
`http_server_request.path` | `string` | The path of the HTTP request. max-length: `5000`
`http_server_request.port` | `integer` | The target port of the HTTP request. This may be different than the port the server is listening on. minimum: `0`
`http_server_request.query_string` | `string` | The query parameters present on the URL. max-length: `10000`
`http_server_request.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests. max-length: `255`
`http_server_request.scheme` | `string` | The HTTP request scheme.
`http_server_response.body` | `string` | The body of the HTTP request / response. max-length: `10000`
`http_server_response.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests. max-length: `255`
`http_server_response.status` | `integer` | The status as defined by the HTTP status codes. minimum: `100`, maximum: `599`
`http_server_response.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event. minimum: `0`
`platform.error.code` | `string` | Unique error code max-length: `255`
`platform.error.description` | `string` | Human friendly description of the error. max-length: `1000`
`server.cpu_sample.load_avg_10m` | `number` | The load average for the processor in the last 10 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). minimum: `0`
`server.cpu_sample.load_avg_1m` | `number` | The load average for the processor in the last 1 minute. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). minimum: `0`
`server.cpu_sample.load_avg_5m` | `number` | The load average for the processor in the last 5 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed). minimum: `0`
`server.memory_sample.cache_mb` | `number` | The portion of the memory used for disk cache. minimum: `0`
`server.memory_sample.limit_mb` | `number` | The maximum amount of memory, limit, that can be used before swap is used. minimum: `0`
`server.memory_sample.pgpgin` | `number` | The cumulative total of the pages read from disk. Sudden high variations on this number can indicate short duration spikes in swap usage. The other memory related metrics are point in time snapshots and can miss short spikes. minimum: `0`
`server.memory_sample.pgpgout` | `number` | The cumulative total of the pages written to disk. Sudden high variations on this number can indicate short duration spikes in swap usage. The other memory related metrics are point in time snapshots and can miss short spikes. minimum: `0`
`server.memory_sample.rss_mb` | `number` | The portion of the memory being used by the target application. minimum: `0`
`server.memory_sample.swap_mb` | `number` | The portion of the memory stored on disk. Swap usually indicates a shortage of memory. minimum: `0`
`server.memory_sample.total_mb` | `number` | The sum of the rss, cache, and swap that equals the total memory being used. minimum: `0`
`sql_query.sql` | `string` | The actual SQL statement sent. max-length: `5000`
`sql_query.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event. minimum: `0`
`template_render.name` | `string` | The unique name of the template. This generally includes the path. max-length: `1000`
`template_render.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event. minimum: `0`
`web_server.routing.bytes` | `integer` | The size of the response, in bytes, sent back to the requestor. minimum: `0`
`web_server.routing.connect_ms` | `number` | The time, in fractional milliseconds, it took to connect to the down stream service for processing. minimum: `0`
`web_server.routing.fwd` | `string` | The IP address of the requestor. max-length: `255`
`web_server.routing.host` | `string` | The target host of the HTTP request. This may not be the same as the real hostname of the server. max-length: `255`
`web_server.routing.method` | `string` | The HTTP method for the request.
`web_server.routing.path` | `string` | The path of the HTTP request. max-length: `5000`
`web_server.routing.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests. max-length: `255`
`web_server.routing.service_ms` | `number` | The time, in fractional milliseconds, it took for the downstream service to process and respond to the request. minimum: `0`
`web_server.routing.status` | `integer` | The status as defined by the HTTP status codes. minimum: `100`, maximum: `599`