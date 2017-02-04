---
title: Installation
category: Elixir
order: 1
---

#### Add Timber as a dependency in `Mix.exs`: ####

```elixir
# Mix.exs

def application do
  [applications: [:timber]]
end

def deps do
  [{:timber, "~> 1.0"}]
end
```