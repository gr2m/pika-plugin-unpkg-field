const { existsSync } = require("fs");

exports.manifest = function manifest(manifest) {
  if (existsSync("pkg/dist-web/index.bundled.js")) {
    manifest.unpkg = "dist-web/index.bundled.js";
    return;
  }

  if (existsSync("pkg/dist-web/index.js")) {
    manifest.unpkg = "dist-web/index.js";
    return;
  }

  throw new Error(
    "[pika-plugin-unpkg-field] pkg/dist-web/index(.bundled).js does not exist"
  );
};
