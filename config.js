System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build": [
      "name/name",
      "github:hor-crux/horcrux-core@master",
      "github:hor-crux/horcrux-core@master/horcrux-core",
      "github:polymer/observe-js@0.5.6",
      "github:hor-crux/html@master",
      "github:hor-crux/horcrux-core@master/attribute/attribute",
      "github:hor-crux/horcrux-core@master/component/customelement",
      "github:hor-crux/horcrux-core@master/component/component",
      "github:hor-crux/horcrux-core@master/component/options",
      "github:hor-crux/horcrux-core@master/component/decorator/created",
      "github:hor-crux/horcrux-core@master/component/decorator/attached",
      "github:hor-crux/horcrux-core@master/component/decorator/detached",
      "github:hor-crux/horcrux-core@master/component/decorator/attributechanged",
      "github:hor-crux/horcrux-core@master/component/property",
      "github:hor-crux/horcrux-core@master/component/register/register",
      "github:hor-crux/horcrux-core@master/bind/bind",
      "github:hor-crux/horcrux-core@master/bind/model",
      "github:hor-crux/horcrux-core@master/polyfill/all",
      "github:polymer/observe-js@0.5.6/src/observe",
      "github:hor-crux/html@master/src/html",
      "name/name.html!github:hor-crux/html@master",
      "github:hor-crux/horcrux-core@master/util/loadhtml",
      "github:hor-crux/horcrux-core@master/component/register/prototype",
      "github:hor-crux/horcrux-core@master/util/visit",
      "github:hor-crux/horcrux-core@master/bind/bindattribute",
      "github:hor-crux/horcrux-core@master/bind/bindnode",
      "github:hor-crux/horcrux-core@master/polyfill/function_name",
      "github:hor-crux/horcrux-core@master/polyfill/function_selector",
      "github:hor-crux/horcrux-core@master/polyfill/observe",
      "main",
      "app/app",
      "github:hor-crux/horcrux-di@master",
      "appstore",
      "app/app.html!github:hor-crux/html@master",
      "github:hor-crux/horcrux-flux@master",
      "github:hor-crux/horcrux-di@master/dist/horcrux-di",
      "github:hor-crux/horcrux-flux@master/dist/horcrux-flux",
      "github:hor-crux/horcrux-di@master/dist/di",
      "github:hor-crux/horcrux-flux@master/dist/dispatcher",
      "github:hor-crux/horcrux-flux@master/dist/store",
      "github:hor-crux/horcrux-flux@master/dist/callbackholder",
      "github:hor-crux/horcrux@master",
      "github:hor-crux/horcrux@master/dist/horcrux",
      "github:hor-crux/horcrux-base@master",
      "github:hor-crux/horcrux-base@master/horcrux-base",
      "github:hor-crux/horcrux-base@master/attributes/model",
      "github:hor-crux/horcrux-base@master/attributes/repeat",
      "github:hor-crux/horcrux-base@master/components/import"
    ]
  },

  map: {
    "horcrux": "github:hor-crux/horcrux@master",
    "horcrux-core": "github:hor-crux/horcrux-core@master",
    "horcrux-di": "github:hor-crux/horcrux-di@master",
    "horcrux-flux": "github:hor-crux/horcrux-flux@master",
    "html": "github:hor-crux/html@master",
    "github:hor-crux/horcrux-base@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master",
      "observejs": "github:polymer/observe-js@0.5.6"
    },
    "github:hor-crux/horcrux-core@master": {
      "html": "github:hor-crux/html@master",
      "observejs": "github:polymer/observe-js@0.5.6",
      "webcomponents": "github:webcomponents/webcomponentsjs@0.7.12"
    },
    "github:hor-crux/horcrux-di@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master"
    },
    "github:hor-crux/horcrux-flux@master": {
      "horcrux-core": "github:hor-crux/horcrux-core@master",
      "horcrux-di": "github:hor-crux/horcrux-di@master"
    },
    "github:hor-crux/horcrux@master": {
      "horcrux-base": "github:hor-crux/horcrux-base@master",
      "horcrux-core": "github:hor-crux/horcrux-core@master",
      "horcrux-di": "github:hor-crux/horcrux-di@master",
      "horcrux-flux": "github:hor-crux/horcrux-flux@master"
    }
  }
});
