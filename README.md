# pika-plugin-unpkg-field

[`pika` build plugin](https://github.com/pikapkg/builders) which adds an `unpkg` field to `pkg/package.json`.

This requires `@pika/plugin-build-web` in your build pipeline to actually build the module for the web. Example `package.json` configuration

```json
{
  ...
  "@pika/pack": {
    "pipeline": [
      [
        "@pika/plugin-build-web"
      ],
      [
        "pika-plugin-unpkg-field"
      ]
    ]
  }
}
```

Setting the `unpkg` field in your `package.json` makes [https://unpkg.com/](https://unpkg.com/) return that file by default when requested without a path.

## LICENSE

[ISC]