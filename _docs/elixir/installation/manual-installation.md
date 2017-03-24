---
category: Timber for Elixir
category_order: 4
sub_category: Installation
sub_category_order: 1
title: Manual Installation
page_order: -1
---

This page contains the manual Timber for Elixir install instructions. We _highly_ recommend
[using the installer]({% link _docs/elixir/installation.md %}) if possible. As it streamlines
the entire process and runs tests to ensure communication with the Timber service is working.

**Prefer examples?** Checkout out the [Timber install example pull requsts](https://github.com/timberio/elixir-phoenix-example-app/pulls).
These demonstrate the changes below in a git-pull style format.

---


1. Add `timber` and `hackney` as a dependency in `mix.exs`:

    ```elixir
    # Mix.exs

    def application do
      [applications: [:hackney, :timber]]
    end

    def deps do
      [
        {:hackney, "~> 1.6"},
        {:timber, "~> 1.0"}
      ]
    end
    ```

2. Create a new file in `config/timber.exs`:

    Replace `[timber-api-key]` with your actual Timber API key. Notice you can also
    pass the `{:system, "TIMBER_LOGS_KEY"}` notation for using an environment variable.
    You can [obtain a Timber API key by creating an app or clicking 'settings' on an
    existing app]({% link _docs/app/obtain-api-key.md %}).

    ```elixir
    # config/timber.exs

    use Mix.Config

    # Update the instrumenters so that we can structure Phoenix logs
    config :elixir_phoenix_example_app, ElixirPhoenixExampleApp.Endpoint,
      instrumenters: [Timber.Integrations.PhoenixInstrumenter]

    # Structure Ecto logs
    config :elixir_phoenix_example_app, ElixirPhoenixExampleApp.Repo,
      loggers: [{Timber.Integrations.EctoLogger, :log, [:info]}]

    # Use Timber as the logger backend
    # Feel free to add additional backends if you want to send you logs to multiple devices.
    config :logger,
      backends: [Timber.LoggerBackend]

    # Direct logs to STDOUT for Heroku. We'll use Heroku drains to deliver logs.
    config :timber,
      transport: Timber.Transports.HTTP,
      api_key: "[timber-api-key]", # <--- REPLACE ME. You can also use {:system, "TIMBER_API_KEY"}
      http_client: Timber.Transports.HTTP.HackneyClient

    # For dev / test environments, always log to STDOUt and format the logs properly
    if Mix.env() == :dev || Mix.env() == :test do
      config :timber, transport: Timber.Transports.IODevice

      config :timber, :io_device,
        colorize: true,
        format: :logfmt,
        print_timestamps: true,
        print_log_level: true,
        print_metadata: false # turn this on to view the additiional metadata
    end

    # Need help?
    # Email us: support@timber.io
    # File an issue: https://github.com/timberio/timber-elixir/issues
    ```

3. In `config/config.exs` link `config/timber.exs` at the **very bottom**:

    ```elixir
    # config/config.exs

    # ...

    # Add this to the *very bottom* of this file.
    import_config "timber.exs"
    ```

4. In `lib/my_app/endpoint.ex` add the Timber plugs:

    ```elixir
    # lib/my_app/endpoint.ex

    # ...

    # Add Timber plugs for capturing HTTP context and events
    plug Timber.Integrations.ContextPlug
    plug Timber.Integrations.EventPlug

    plug MyApp.Router

    # ...
    ```

5. In `web/web.ex` disable the default Phoenix logging:

    ```elixir
    # web/web.ex

    # ...

    use Phoenix.Controller, log: false # <--- add log: false

    # ...
    ```

6. Commit your change and deploy 🚀