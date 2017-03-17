---
category: Timber App
category_order: 5
title: Schema / Fields
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
`http.path` | `string` | The path of the HTTP request.
`http.remote_addr` | `string` | The IP address of the computer that issued the request.
`http.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests.
`organization.id` | `string` | A unique identifier for the organization
`organization.name` | `string` | A display name for the organization
`platform.heroku.dyno_id` | `integer` | The dyno ID for the process.
`platform.heroku.dyno_type` | `string` | The dyno type for the process (web, worker, router, etc)
`platform.heroku.source` | `string` | The source of the log message. For example, Heroku can send log messages for the web.1 dyno from both within the app and Heroku itself.
`release.commit_hash` | `string` | The git commit sha for the deploy
`release.created_at` | `string` | When the release was created, ISO8601 date time.
`release.version` | `string` | Deploy version, can be an unique string. Ex: 1.1.2 or a43fdw
`runtime.application` | `string` | The current application name
`runtime.class_name` | `string` | The current class name, if applicable.
`runtime.file` | `string` | The current file path from the root of the project.
`runtime.function` | `string` | The current function name, if applicable.
`runtime.line` | `integer` | The current line number with in the file.
`runtime.module_name` | `string` | The current module name, if applicable.
`runtime.vm_pid` | `string` | The logical process ID as defined by the current language, if applicable.
`system.hostname` | `string` | The server hostname.
`system.pid` | `string` | The current operating system process ID as defined by the `pid` command in Unix.
`user.email` | `string` | An email address for the user. This need not be unique to the user. Note that no validation is performed on this field.
`user.id` | `string` | A unique identifier for the user.
`user.name` | `string` | A display name for the user.


## Event Fields

A controlled representation of the event this log line represents.

Name | Type | Description
-----|------|------------
`controller_call.action` | `string` | The name of the controller action being called.
`controller_call.controller` | `string` | The name of the controller being called.
`exception.backtrace` | `array` | An array of lines, representing the call stack, leading up to the exception.
`exception.message` | `string` | The message describing the exception.
`exception.name` | `string` | The name of the exception.
`http_client_request.body` | `string` | The body of the HTTP request / response.
`http_client_request.host` | `string` | The target host of the HTTP request. This may not be the same as the real hostname of the server.
`http_client_request.method` | `string` | The HTTP method for the request.
`http_client_request.path` | `string` | The path of the HTTP request.
`http_client_request.port` | `integer` | The target port of the HTTP request. This may be different than the port the server is listening on.
`http_client_request.query_string` | `string` | The query parameters present on the URL.
`http_client_request.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests.
`http_client_request.scheme` | `string` | The HTTP request scheme.
`http_client_request.service_name` | `string` | A short label / name for the service you are sending the request to, ex: elasticsearch
`http_client_response.body` | `string` | The body of the HTTP request / response.
`http_client_response.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests.
`http_client_response.service_name` | `string` | A short label / name for the service you are sending the request to, ex: elasticsearch
`http_client_response.status` | `integer` | The status as defined by the HTTP status codes.
`http_client_response.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event.
`http_server_request.body` | `string` | The body of the HTTP request / response.
`http_server_request.host` | `string` | The target host of the HTTP request. This may not be the same as the real hostname of the server.
`http_server_request.method` | `string` | The HTTP method for the request.
`http_server_request.path` | `string` | The path of the HTTP request.
`http_server_request.port` | `integer` | The target port of the HTTP request. This may be different than the port the server is listening on.
`http_server_request.query_string` | `string` | The query parameters present on the URL.
`http_server_request.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests.
`http_server_request.scheme` | `string` | The HTTP request scheme.
`http_server_response.body` | `string` | The body of the HTTP request / response.
`http_server_response.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests.
`http_server_response.status` | `integer` | The status as defined by the HTTP status codes.
`http_server_response.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event.
`platform.error.code` | `string` | Unique error code
`platform.error.description` | `string` | Human friendly description of the error.
`server.cpu_sample.load_avg_10m` | `number` | The load average for the processor in the last 10 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed).
`server.cpu_sample.load_avg_1m` | `number` | The load average for the processor in the last 1 minute. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed).
`server.cpu_sample.load_avg_5m` | `number` | The load average for the processor in the last 5 minutes. This reflects the number of CPU tasks that are in the ready queue (i.e. waiting to be processed).
`server.memory_sample.cache_mb` | `number` | The portion of the memory used for disk cache.
`server.memory_sample.limit_mb` | `number` | The maximum amount of memory, limit, that can be used before swap is used.
`server.memory_sample.pgpgin` | `number` | The cumulative total of the pages read from disk. Sudden high variations on this number can indicate short duration spikes in swap usage. The other memory related metrics are point in time snapshots and can miss short spikes.
`server.memory_sample.pgpgout` | `number` | The cumulative total of the pages written to disk. Sudden high variations on this number can indicate short duration spikes in swap usage. The other memory related metrics are point in time snapshots and can miss short spikes.
`server.memory_sample.rss_mb` | `number` | The portion of the memory being used by the target application.
`server.memory_sample.swap_mb` | `number` | The portion of the memory stored on disk. Swap usually indicates a shortage of memory.
`server.memory_sample.total_mb` | `number` | The sum of the rss, cache, and swap that equals the total memory being used.
`sql_query.sql` | `string` | The actual SQL statement sent.
`sql_query.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event.
`template_render.name` | `string` | The unique name of the template. This generally includes the path.
`template_render.time_ms` | `number` | The duration, in fractional milliseconds, that it took to complete this event.
`web_server.routing.bytes` | `integer` | The size of the response, in bytes, sent back to the requestor.
`web_server.routing.connect_ms` | `number` | The time, in fractional milliseconds, it took to connect to the down stream service for processing.
`web_server.routing.fwd` | `string` | The IP address of the requestor.
`web_server.routing.host` | `string` | The target host of the HTTP request. This may not be the same as the real hostname of the server.
`web_server.routing.method` | `string` | The HTTP method for the request.
`web_server.routing.path` | `string` | The path of the HTTP request.
`web_server.routing.request_id` | `string` | An ID that uniquely identifies the request and can be used to trace requests.
`web_server.routing.service_ms` | `number` | The time, in fractional milliseconds, it took for the downstream service to process and respond to the request.
`web_server.routing.status` | `integer` | The status as defined by the HTTP status codes.