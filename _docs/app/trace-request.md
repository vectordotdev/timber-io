---
category: Timber App
category_order: 5
sub_category: Tutorials
title: Trace a request
page_order: 15
---

Because Timber add's _normalized_ context with our libraries, you can quickly trace requests using their
request ID.

Example query: `http.request_id:abcd1234`

![Trace a request](/assets/img/docs/trace-a-request.gif)

---

**Related documents**

* [Timber for Ruby installation]({% link _docs/app/search-syntax.md %}) - Capture this data in your ruby app.
* [Timber for Elixir installation]({% link _docs/app/search-syntax.md %}) - Capture this data in your Elixir app.
* [Attribute search]({% link _docs/app/search-syntax.md %}#attribute-search) - Use this data when searching.
