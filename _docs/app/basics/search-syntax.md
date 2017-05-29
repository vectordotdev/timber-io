---
category: Timber App / The Basics
title: Search Syntax
toc: true
---

The Timber search syntax follows familiar standards set by other popular services and websites.
This documentation outlines the various syntax options when executing a search.
The purpose is to enable you to utilize the full power of the Timber search feature.


## Demo

![Search / Query example]({% link assets/img/docs/app/query-example.gif %})


## Syntax Rules

| Condition                | Example                             | Description
|--------------------------|-------------------------------------|-------------------------------------------------------------------
| Contains                 | `paul bunyan`                       | Any line that contains the phrase `paul bunyan`. Case insensitive.
| Intersection             | `paul AND bunyan`                   | Any line that contains `paul` _and_ `bunyan`, _separately_. Case insensitive.
| Either / Or              | `paul OR bunyan`                    | Any line that contains `paul` _or_ `bunyan`. Case insensitive.
| Literal phrases `"`      | `"paul:bunyan"`                     | Allows you to treat special characters literally. Any line that contains `paul:bunyan`, (: included). Case insensitive.
| Literal phrases `'`      | `'paul bunyan'`                     | Allows you to treat special characters literally. Any line that contains `paul bunyan`, (space included). Case insensitive.
| Negation (exclusion)     | `-(paul bunyan)`                    | Any line that does _not_ contain `paul bunyan`. Case insensitive.
| Wildcards `*`            | `pau*unyan`                         | Regex equivalent: `/paul.*unyan/`. Case insensitive.
| Grouping                 | `(paul OR bunyan) AND ox`           | Any line that contains (`paul` _or_ `bunyan`) _and_ `ox`.
| Grouping w/ negation     | `-(paul bunyan)`                    | Any line that does _not_ contain `paul` _and_ does not contain `bunyan`.
| Has (exists)             | `has:context.user.id`               | Any line that _has_ a value for `context.user.id` field.
| Is                       | `is:sql_query`                      | Any line that is the specified event type. In this example, any line that has `event.sql_query`.
| Missing (does not exist) | `missing:context.user.id`           | Any line _missing_ a value for `context.user.id` field.
| Equals                   | `context.user.name:Paul`            | Any line where the `context.user.name` field _equals_ `Paul`. Case insensitive.
| Does not equal           | `context.user.name:-Paul`           | Any line where the `context.user.name` field does _not_ equal `Paul`. Case insensitive.
| Contains                 | `context.user.name:*Paul*`          | Any line where the `context.user.name` field _contains_ `Paul`. Case insensitive.
| Begins with              | `context.user.name:Paul*`           | Any line where the `context.user.name` field _begins with_ `Paul`. Case insensitive.
| Ends with                | `context.user.name:*Bunyan`         | Any line where the `context.user.name` field _ends with_ `Bunyan`. Case insensitive.
| Literal phrases w/ `"`   | `context.user.name:"Paul Bunyan"`   | Any line where the `context.user.name` field equals `Paul Bunyan`. Case insensitive.
| Literal phrases w/ `'`   | `context.user.name:'Paul Bunyan'`   | Any line where the `context.user.name` field equals `Paul Bunyan`. Case insensitive.
| Greater than             | `http_server_response.time_ms:>50`  | Any line where the `http_server_response.time_ms` field is _greater than_ `50`.
| Greater than or equal to | `http_server_response.time_ms:>=50` | Any line where the `http_server_response.time_ms` field is _greater than or equal to_ `50`.
| Less than                | `http_server_response.time_ms:<50`  | Any line where the `http_server_response.time_ms` field is _less than_ `50`.
| Less than or equal to    | `http_server_response.time_ms:<=50` | Any line where the`http_server_response.time_ms` field is _less than or equal to_ `50`.


### Phrases and keywords

Timber defaults to phrases instead of keywords when terms are separate by a space. This is ideal
for log searching because most of the time you're searching for phrases. More terms equals greater
specificity. To give you examples:

1. `my search phrase` - Will find all logs where `my search phrase`, as a whole, is present.
   (case insensitive).
2. `my OR search OR phrase` - This functions more like a keyword search. It will find all logs
   where `my`, `search`, or `phrase` are present. (case insensitive).


### Negation

Negation will give you the opposite if whatever succeeds it, even attribute conditions. For example:

1. `-term` - Any line that does _not_ contain `term`.
2. `-(my search phrase)` - Any line that does not contain the phrase `my search phrase`, as a whole.
   (case insensitive).
3. `-http_server_response.time_ms:>50` - Is equivalent to: `http_server_response.time_ms:<=50`
4. `-(-http_server_response.time_ms:>50 my search phrase)` - Allows you negate groups of conditions.
   This will match any line where `http_server_response.time_ms:<=50` and does _not_ contain
   `my search phrase`. (case insensitive).


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
4. `Controller -(Sent 200)` - View all lines that contain `Controller` and do _not_ contain `Sent 200`.
5. `sent 200 OR 192.138*` - View all lines that contain `sent 200` or just simply contain a word that begins with `192.138`.
6. `Started OR GET OR "/path" - View all lines that contain `Started` _or_ GET` _or_ `/path`.


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>