import PreviewButton from "./extensions/components/PreviewButton";
import TweetButton from "./extensions/components/TweetButton";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    head: {
      favicon: favicon,
    },

    locales: ["fr"],
    translations: {
      fr: {
        "components.PreviewButton.button": "Prévisualiser",
        "components.TweetButton.button": "Partager sur Twitter",
      },
      en: {
        "components.PreviewButton.button": "Preview",
        "components.TweetButton.button": "Share on Twitter",
        "Auth.form.welcome.title": "Welcome to Only Education!",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "OE Dashboard",
      },
    },
  },
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PreviewButton",
      Component: PreviewButton,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "TweetButton",
      Component: TweetButton,
    });
  },
};
