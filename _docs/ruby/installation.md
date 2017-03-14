---
title: Installation
category: Timber for Ruby
order: 1
sections: manual configuration
---

1. In your `Gemfile`, add the `timber` gem:

  ```ruby
  gem "timber"
  ```

2. In `config/environments/production.rb`, install the `Timber::Logger`:

  ```ruby
  # config/environments/production.rb

  # Remove *any* existing `config.logger =` and `config.log_formatter` calls!
  # config.log_formatter = ... # <--------------------------------- REMOVE ME
  # config.logger = ... # <---------------------------------------- REMOVE ME

  # Install the Timber logger
  config.logger = ActiveSupport::TaggedLogging.new(Timber::Logger.new(STDOUT))
  ```

3. Commit changes and deploy. 🚀