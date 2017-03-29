---
category: Timber App / The Basics
title: Search Syntax
toc: true
---

The Timber search syntax follows familiar standards set by other popular services and websites.
This documentation outlines the various syntax options when executing a search.
The purpose is to ensure you utilize the full power of the Timber search feature.


## Demo

![Search / Query example]({% link assets/img/docs/app/query-example.gif %})


## Syntax Rules

| Condition                | Example                      | Description
|--------------------------|------------------------------|-------------------------------------------------------------------
| Contains                 | `paul`                       | Any line that contains `paul`. Case insensitive.
| Intersection             | `paul bunyan`                | Any line that contains `paul` _and_ `bunyan`, _separately_. Case insensitive.
| Literal phrases `"`      | `"paul bunyan"`              | Any line that contains `paul bunyan`, (space included). Case insensitive.
| Literal phrases `'`      | `'paul bunyan'`              | Any line that contains `paul bunyan`, (space included). Case insensitive.
| Negation (exclusion)     | `-paul`                      | Any line that does _not_ contain `paul`. Case insensitive.
| Wildcards `*`            | `pau*unyan`                  | Regex equivalent: `/paul.*unyan/`. Case insensitive.
| Grouping                 | `(paul OR bunyan) AND ox`    | Any line that contains (`paul` _or_ `bunyan`) _and_ `ox`.
| Grouping w/ negation     | `-(paul bunyan)`             | Any line that does _not_ contain `paul` _and_ does not contain `bunyan`.
| Has (exists)             | `has:context.user.id`               | Any line that _has_ a value for `context.user.id` field.
| Is                       | `is:sql_query`                      | Any line that is the specified event type. In this example, any line that has `event.sql_query`.
| Missing (does not exist) | `missing:context.user.id`           | Any line _missing_ a value for `context.user.id` field.
| Equals                   | `context.user.name:Paul`            | Any line where the `context.user.name` field _equals_ `Paul`. Case insensitive.
| Contains                 | `context.user.name:*Paul*`          | Any line where the `context.user.name` field _contains_ `Paul`. Case insensitive.
| Begins with              | `context.user.name:Paul*`           | Any line where the `context.user.name` field _begins with_ `Paul`. Case insensitive.
| Ends with                | `context.user.name:*Bunyan`         | Any line where the `context.user.name` field _ends with_ `Bunyan`. Case insensitive.
| Literal phrases w/ `"`   | `context.user.name:"Paul Bunyan"`   | Any line where the `context.user.name` field equals `Paul Bunyan`. Case insensitive.
| Literal phrases w/ `'`   | `context.user.name:'Paul Bunyan'`   | Any line where the `context.user.name` field equals `Paul Bunyan`. Case insensitive.
| Greater than             | `http_server_response.time_ms:>50`  | Any line where the `http_server_response.time_ms` field is _greater than_ `50`.
| Greater than or equal to | `http_server_response.time_ms:>=50` | Any line where the `http_server_response.time_ms` field is _greater than or equal to_ `50`.
| Less than                | `http_server_response.time_ms:<50`  | Any line where the `http_server_response.time_ms` field is _less than_ `50`.
| Less than or equal to    | `http_server_response.time_ms:<=50` | Any line where the`http_server_response.time_ms` field is _less than or equal to_ `50`.

### Aliases

To support other familiar syntaxes, Timber implements various aliases for the above conditions:

| Condition         | Alias for
|---------------------------------
| `_exists_`        | `has`
| `_missing_`       | `missing`

### Schema & Fields

See [the log line JSON schema]({% link _docs/app/advanced/the-log-line-json-schema.md %}) for a
comprehensive list of fields.


## Real-world examples

1. `is:exception` - Find all exceptions
2. `level:error` - View all logs on the `error` level.
3. `user.id:1234 level:error` - View logs for a specific user
4. `Controller -(Products Login)` - View all lines that contain `Controller` and do _not_ contain `Products` or `Login`.
5. `(myhost posfix) OR 192.138*` - View all lines that contain `myhost` _and_ `posfix` or just simply contain a word that begins with `192.138`.
6. `"Started GET" OR "/path" - View all lines that have the exact phrase `Started GET` _or_ contain `/path`.


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>