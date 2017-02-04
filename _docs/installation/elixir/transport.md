---
title: Sending Logs
category: Elixir
order: 3
sections: stdout, file, http
---

## Transport Installation

The last step is getting your logs to the Timber service. We *highly* recmmend that you
[create an app within your Timber account](https://app.timber.io/organizations/timber/apps/new)
and follow the instructions that proceed. Based on your app details we'll provide you with simple,
straight-forward instructions that get you up and running quickly.

### STDOUT ###

Do nothing! This is the default transport strategy.

### File ###

1. Configure the Timber transport strategy:

  ```elixir
    config :timber, :transport, Timber.Transports.IODevice
    config :timber, :io_device,
      file: "path/to/file",
  ```

* Note, this requires our agent to send the file contents to Timber.

### HTTP

Coming soon!


## Development environment?

Bonus points! Use Timber in your development environment so you can see context locally:

```elixir
  # config/dev.exs

  config :timber, :io_device,
    colorize: true,
    format: :logfmt,
    print_timestamps: true
    print_log_level: true
```