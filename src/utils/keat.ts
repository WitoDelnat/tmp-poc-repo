import { keatReact, audience, remoteConfig, rollouts } from "keat-react";

const { useKeat, FeatureBoundary } = keat({
  features: {
    redesign: false,
    demo: false,
    foo: false,
    bar: true,
    kloshHarah: false
  },
  plugins: [
    remoteConfig("https://example.io/slowConfig", { interval: 300 }),
    audience("staff", (user) => user.email?.endsWith("example.io")),
    audience("preview", (user) => user.settings.previewEnabled),
    rollouts(),
  ],
});
