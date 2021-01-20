# Relay wasted rerender

This is a repo with minimal code to showcase an issue within Relay.

## What issue

During pagination the whole list is rerendered even though most of the
list has not been changed.

## How to run this

```bash
  npm install
  npm run start
```

Open the console and click on `Load More` to paginate. See console
logs to find out how much was rerendered.
