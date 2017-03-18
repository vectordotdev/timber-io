---
category: Timber for Elixir
category_order: 3
title: Installation
page_order: 2
---

Installation of Timber for Elixir is accomplished with the [timber hex package](https://hex.pm/packages/timber):

1. In `mix.exs`, add `timber` as a dependency:

    ```elixir
    # Mix.exs

    def application do
      [applications: [:timber]]
    end

    def deps do
      [{:timber, "~> 1.0"}]
    end
    ```

2. In your `shell`, run `mix deps.get`.

3. In your `shell`, run `mix timber.install` or follow the [manual install instructions]({% link _docs/elixir/manual-installation.md %}).

---

### Preview

![Timber elixir install](/assets/img/docs/timber-elixir-install.gif)
