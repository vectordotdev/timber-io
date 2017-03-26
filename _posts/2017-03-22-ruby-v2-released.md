---
title: Timber for Ruby v2 released
date: 2017-03-22 00:00:00
image: '/assets/img/blog/ruby.png'
author: ben_johnson
tags: [product, ruby]
---

Hot and fresh, v2 of the Timber ruby gem has just been released! v2 is the culmination
of many hours of testing, talking to users, and learning. It packages a variety of enhancements,
bug fixes, and performance improvements.


## Enhancements

1. Timber can now be installed with a simple command: `bundle exec timber install`. ([learn more]({% link _docs/ruby/installation.md %}))
2. Timber now captures _all_ HTTP request / response headers. This allows you to see a complete
   list of headers when inspecting requests and responses. ([learn more]({% link _docs/app/tutorials/inspect-http-requests.md %}))
3. `params` for controller call events are now being captured. This allows you to inspect the
   parsed paramteres being sent to your controller. (learn more)
4. Session IDs (`context.session.id`) are now being captured as part of the context. (learn more)
5. A number of the Timber integrations were previously using various Rails classes, these have
   been moved to simple Rack middlewares. This is a cleaner more generic approach.


## Bug fixes

1. User context is now properly captured. In some cases this would not be included on the initial
   request log line, or captured at all.
2. Test and development environments will remain untouched and display the plain text logs you're
   accustomed to. In some cases Timber metadata was seen in these environments. This has been
   resolved.
3. Checks for the existence of `lograge` and resolves the conflict if that gem is installed.


## Roadmap

1. Capturing and logging all outgoing HTTP requests and responses. Helping you track and insepct
   outgoing HTTP activity. This is something we use internally at Timber that has been immensely
   helpful, as it simplifies monitoring and debugging communication with external APIs.
2. Anything you'd like to see? Let us know! Just start a chat below. We love feedback and feature
   requests.


## Upgrading

1. Bump `timber` to `~> 2.0` in your `Gemfile`

    ```ruby
    # Gemfile

    gem 'timber', '~> 2.0'
    ```

2. In your `shell`, run `bundle update timber`.

3. In your `shell`, run `bundle exec timber install your-api-key`.

    * [Here's a guide on locating your API key]({% link _docs/app/basics/api-key.md %})

4. Remove any code you had in place to capture user contexts. As noted above, this issue has
   been fixed.

5. Remove the `config.logger =` call in your `config/environments/production.rb`. This is
   now handled in `config/initializers/timber.rb`.