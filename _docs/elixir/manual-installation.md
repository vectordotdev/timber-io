---
category: Timber for Elixir
category_order: 3
title: Manual Installation
page_order: -1
sections: installer, manual configuration
---

1. Add `timber` as a dependency in `mix.exs`:

    ```elixir
    # Mix.exs

    def application do
      [applications: [:timber]]
    end

    def deps do
      [{:timber, "~> 1.0"}]
    end
    ```

2. In your shell, run `mix deps.get`.

3. In your sheel, run `mix timber.install your-timber-app-api-key`.

    * You can obtain your API key by [adding your application within Timber](https://app.timber.io). Each app has it's own unique API key.
