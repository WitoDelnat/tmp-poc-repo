import { keatReact, audience, remoteConfig, rollouts } from "keat";

const { useKeat, FeatureBoundary } = keatReact({
  features: {
    search: false,
    redesign: false,
    hello: true,
    sortAlgorithm: true,
  },
  plugins: [
    remoteConfig("https://example.io/slowConfig", { interval: 300 }),
    audience("staff", (user) => user.email?.endsWith("example.io")),
    audience("preview", (user) => user.settings.previewEnabled),
    rollouts(),
  ],
});
