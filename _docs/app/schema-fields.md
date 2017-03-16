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

The Timber libraries augment your logs with context. Context is additional data shared across
log lines. Think of it like log join data. For example, it's what enables you to trace a request
using a request ID.

### HTTP

| Field                   | Type                      | Description
|-------------------------|---------------------------|-------------------------------------------------------------------
| context.http.request_id | `string`                  | The unique request ID

### User

| Field                   | Type                      | Description
|-------------------------|---------------------------|-------------------------------------------------------------------
| context.http.request_id | `string`                  | The unique request ID


## Event Fields

Each log line represents a single event. Event fields are structured data _directly_ related to
that event. And, it can represent additional data that is not in the log message itself.


### Controller Calls

| Field                       | Type                      | Description
|-----------------------------|---------------------------|-------------------------------------------------------------------
| controller_call.action      | `string`                  | The action name of the controller call
| controller_call.controller  | `string`                  | The action name of the controller call


### HTTP Server Requests

| Field                       | Type                      | Description
|-----------------------------|---------------------------|-------------------------------------------------------------------
| controller_call.action      | `string`                  | The action name of the controller call
| controller_call.controller  | `string`                  | The action name of the controller call

