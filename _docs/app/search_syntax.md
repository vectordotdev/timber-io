---
title: Search Syntax
category: Timber App
order: 1
sections: test attributes
---

# Reference

## Text

| Action                 | Example                      | Description
|------------------------|------------------------------|-------------------------------------------------------------------
| Contains               | `paul`                       | Any line that contains `paul`. Case insensitive.
| Intersection           | `paul bunyan`                | Any line that contains `paul` _and_ `bunyan`, _separately_. Case insensitive.
| Literal phrases w/ `"` | `"paul bunyan"      `        | Any line that contains `paul bunyan`, _together_ (space included). Case insensitive.
| Literal phrases w/ `'` | `'paul bunyan'      `        | Any line that contains `paul bunyan`, _together_ (space included). Case insensitive.
| Negation (exclusion)   | `-paul`                      | Any line that does _not_ contain `paul`. Case insensitive.
| Wildcards              | `pau*unyan`                  | Regex equivalent: `/paul.*unyan/`. Case insensitive.
| Grouping               | `(paul OR bunyan) AND ox`    | Any line that contains (`paul` _or_ `bunyan`) _and_ `ox`.
| Grouping w/ negation   | `-(paul bunyan)`             | Any line that does _not_ contain `paul` _and_ does not contain `bunyan`.

## Attributes

A full list of the available fields can be found in our log event JSON schema.

| Action                   | Example                             | Description
|--------------------------|-------------------------------------|-------------------------------------------------------------------
| Has (exists)             | `has:context.user.id`               | Any line that _has_ a value for `context.user.id` field.
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


# Real world examples

1. Find all exceptions:
  * `has:exception`

2. Find all error level logs:
  * `level:error`

3. Find all exceptions for a user:
  * `user.id:1234 has:exception`

4. Find all 500 responses:
  * `http_server_response.stats:500`

5. Find all platform errors:
  * `has:platform.error`