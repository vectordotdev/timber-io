---
title: Timber for Elixir v2 Released
date: 2017-03-31 00:00:00
image: '/assets/img/changelog/elixir.png'
author: david_antaramian
tags: [app, console, searching]
---

Hot and fresh! V2 of [our Elixir library](https://github.com/timberio/timber-elixir) is
now available. V2 includes a variety of improvements, notable changes are listed below.

## Notable changes

1. Anyone logging to `STDOUT` will be pleased to know that v2 now uses the `:console` `Logger`
   backend included with Elixir. Functionally this performs exactly the same, but the benefits
   of using a standard library include: improved stability, better performance,
   active ongoing maintenance, etc.

2. The installer has been vastly improved:

    1. It now recognizes umbrella applications, handling them accordingly.
    2. A bug was squashed for Phoenix versions 1.3, the installer should work great there as well.
    3. The whole flow has been refined to use better messaging, formatting, and pauses
       that make it more apparent when user action is needed.


## Upgrading

We've placed an [`UPGRADING.md`](https://github.com/timberio/timber-elixir/blob/master/UPGRADING.md)
file in our repo. The process is very simple:

1. Delete `config/timber.exs`

2. Re-run the single command installer (`mix timber.install`). This commend, with your API-key,
   is located in the settings of your application. Here's a guide on locating your
   installation instructions:
   https://timber.io/docs/app/advanced/installation-instructions/


Eenjoy! Happy logging.