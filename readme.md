View at https://timber.io

1. Ensure you have ruby installed if not check out rvm.io
2. Make sure you have bundler: `gem install bundler`
3. Grab node/npm from https://nodejs.org/en/download/ (optional)
4. Install browser-sync globally with `npm install -g browser-sync` (optional)

### Development

1. `jekyll server`
2. browser-sync start --files "_site" --proxy "localhost:4000" --reloadDelay "1000"

### Deploying

1. `git push origin master` – then let siteleaf take care of the rest

### Add Posts

1. Either use the siteleaf admin or directly drop markdown files into the `_posts` folder in the format `2016-06-10-title-of-post.md`