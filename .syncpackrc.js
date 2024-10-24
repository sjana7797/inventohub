/** @type {import("syncpack").RcFile} */
const config = {
  $schema: "https://unpkg.com/syncpack@11.2.1/dist/schema.json",
  versionGroups: [
    {
      packages: [
        "@repo/db",
        "@repo/ui",
        "@repo/eslint-config",
        "@repo/common",
        "@repo/typescript-config",
      ],
      dependencies: ["**"],
      isIgnored: true,
    },
  ],
};

module.exports = config;
