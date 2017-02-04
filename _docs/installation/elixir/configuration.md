---
title: Configuration
category: Elixir
order: 2
sections: general, phoenix, ecto
---

2. Configure Timber in `config/config.exs`:

```elixir
# config/config.exs

config :logger,
  backends: [Timber.LoggerBackend],
  handle_otp_reports: false # Timber handles this and adds additional metadata

config :timber, :capture_errors, true
```

3. Install the Timber plugs:

1. Remove the existing `Plug.Logger` in `lib/my_app/endpoint.ex`:

```elixir
# lib/my_app/endpoint.ex

plug Plug.Logger # <--- REMOVE ME
```

2. Add the Timber plugs in `web/router.ex`:

```elixir
# web/router.ex

defmodule MyApp.Router do
  use MyApp.Web, :router

  pipeline :logging do
    plug Timber.Integrations.ContextPlug
    plug Timber.Integrations.EventPlug
  end

  scope "/api", MyApp do
    pipe_through :logging
  end
end
```

* To learn more about what each of these plugs are doing, checkout the docs:
  [Timber.Integrations.ContextPlug](lib/timber/integrations/context_plug.ex) and
  [Timber.Integrations.EventPlug](lib/timber/integrations/event_plug.ex)

4. Add Phoenix instrumentation in `config/config.exs`:

Skip if you are not using `Phoenix`.

```elixir
# config/config.exs

config :my_app, MyApp.Endpoint,
  http: [port: 4001],
  root: Path.dirname(__DIR__),
  instrumenters: [Timber.Integrations.PhoenixInstrumenter], # <------ add this line
  pubsub: [name: MyApp.PubSub,
            adapter: Pheonix.PubSub.PG2]
```

5. Add the Ecto logger in `config/config.exs`:

Skip if you are not using `Ecto`.

```elixir
# config/config.exs

config :my_app, MyApp.Repo,
  loggers: [{Timber.Integrations.EctoLogger, :log, [:info]}] # Bumped to info to gain more insight
```

6. Whew! Done! You've now got a fully managed structured logging solution.
