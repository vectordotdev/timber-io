---
category: Timber for Everything Else
category_order: 5
title: HTTP
page_order: 7
toc: true
---

Sending your logs to Timber over HTTP is accomplished with our
[`POST https://logs.timber.io/frames` Ingestion API endpoint](https://api-docs.timber.io/#eaf-2643-c422-7ae9-d39c4b4c4b0e).
A few examples:

## Authentication

Once you've [obtained your API key]({% link _docs/app/advanced/api-keys.md %}), you'll need to
add it add in the `Authorization` header like so:

```
Authorization: Basic base64(api_key)
```

Where `base64` represents the resulting output after Base64 encoding your key. For example,
if your key is `abcd1234` then the header value should be:

```
Authorization: Basic YWJjZDEyMzQ=
```


## Examples

### text/plain

```
POST /frames HTTP/1.1
Host: logs.timber.io
Authorization: Bearer {base64(api_key)} (see above)
Content-Type: text/plain

[2016-03-02T00:01:02.112234Z] log line 1
[2016-03-02T00:01:02.112234Z] log line 2
```

### application/json

```
POST /frames HTTP/1.1
Host: logs.timber.io
Authorization: Bearer {base64(api_key)} (see above)
Content-Type: application/json

{"dt": "2017-03-01T00:00:00.000000Z", "message": "log line 1"}
{"dt": "2017-03-01T00:00:00.000000Z", "message": "log line 2"}
```

Please see the [log line JSON schema doc]({% link _docs/app/advanced/the-log-line-json-schema.md %})
for more info on our JSON schema, as well as the fields and requirements.


## Other Supported Media Types

1. `application/msgpack` - the same as json, just [msgpack encoded / compressed](http://msgpack.org).
