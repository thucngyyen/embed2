# Embed 2

Embed 2 allows clients to setup Ada Web Chat in their web application. For further information on how to use Embed, check out our [documentation](https://developers.ada.cx/reference/add-chat-to-website).

## 1. Installation

NPM:

```
npm install @ada-support/embed2
```

Yarn:

```
yarn add @ada-support/embed2
```

This will install the Embed 2 package and it's dependencies.

## 2. Usage

First, import Embed 2 into your App:

```
import adaEmbed from "@ada-support/embed2";
```

Second, place the code below to start Embed 2 when the DOM is ready:

```
adaEmbed.start({
  handle: "bot-handle",
});
```

In the example above the `handle` key is a part of `AdaSettings`. To learn more about other settings, consult the [API reference](https://developers.ada.cx/reference/embed2-reference).
