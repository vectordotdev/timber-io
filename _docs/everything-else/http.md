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

Once you've [obtained your API key]({% link _docs/app/obtain-api-key.md %}), you'll need to
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

### Plain HTTP

```
POST /frames HTTP/1.1
Host: logs.timber.io
Authorization: Bearer {base64(api_key)}
Content-Type: text/plain

[2016-03-02T00:01:02.112234Z] log line 1
[2016-03-02T00:01:02.112234Z] log line 2
```

### Curl

```shell
curl -X POST -H "Authorization: Bearer {base64(api_token)}" \
  -H "Content-Type: text/plain" \
  -H "Cache-Control: no-cache" \
  -H "Postman-Token: 0fe1a806-97e6-213b-0b1f-acb9c697d26b" \
  -d '[2016-03-02T00:01:02.112234Z] log line 1\n[2016-03-02T00:01:02.112234Z] log line 2' \
  "https://logs.timber.io/frames"
```

## Supported Media Types

1. `application/json` - used in the examples above.
2. `application/msgpack` - the same as json, just [msgpack encoded](http://msgpack.org).
3. `text/plain` - lines are separated by new line (`\n`) characters.

---

**Related documents**

* [Schema & Fields]({% link _docs/app/tail-a-user.md %}) - Tailing a user using attribute search.
