---
breadcrumbs: Timber for Elixir
title: Installation
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

3. In your `shell`, run `mix timber.install` or follow the [manual install instructions]({% link _docs/elixir/installation/manual-installation.md %}).

---

### Preview

![Timber elixir install](/assets/img/docs/timber-elixir-install.gif)



<div class="next">
  Next: [Events & context <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({% link _docs/elixir/events-and-context.md %})
</div>