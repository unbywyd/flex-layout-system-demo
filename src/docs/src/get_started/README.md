# Get Started

To get started with Flex Layout System, follow these simple steps:

Step 1: Install the package Run the following command in your project to install the Flex Layout System package from npm:

```bash
npm install flex-layout-system
```

Step 2: Importing and using the components In your TypeScript/JS file. For example, to use the base layout without utilities and styles, import the following:

```js
// TS project / source file with TS support
import "flex-layout-system";
import "flex-layout-system/dist/css-responsive.min.css";

// JS project
// Only one of the following is required.
// If you want to use the base layout, import the following:
import "flex-layout-system/dist/base.min.js";

// If you want to use the layout with utilities, import the following:
import "flex-layout-system/dist/full.min.js";

// Optional. If you want to use the responsive utilities based on CSS Media Queries, import the following:
import "flex-layout-system/dist/css-responsive.min.css";

// Optional: If you want to use the responsive utilities based on the JavaScript system using the flex-media component, import the following:
import "flex-layout-system/dist/js-responsive.min.css";
```

If yow want to use this library in your HTML file (browser), you can use the following:

```html
<!-- Only one of the following is required. -->
<!-- If you want to use the base layout, import the following: -->
<script src="https://unpkg.com/flex-layout-system/dist/base.min.js"></script>

<!-- If you want to use the layout with utilities, import the following: -->
<script src="https://unpkg.com/flex-layout-system/dist/full.min.js"></script>

<!-- Optional. If you want to use the responsive utilities based on CSS Media Queries, import the following: -->
<link
  rel="stylesheet"
  href="https://unpkg.com/flex-layout-system/dist/css-responsive.min.css"
/>

<!-- Optional: If you want to use the responsive utilities based on the JavaScript system using the flex-media component, import the following: -->
<link
  rel="stylesheet"
  href="https://unpkg.com/flex-layout-system/dist/js-responsive.min.css"
/>
```

## Usage with React

To use this library with React, you can use the following:

1. Just import the library in your project as described above.
2. And use the components in your JSX/TSX files as web components. For example:

```jsx
import React from "react";
import "flex-layout-system"; // Import the library, all components will be registered as web components and you can use them in your JSX/TSX files because they are typed as JSX elements.

export default function App() {
  return (
    <div>
      <flex-box>
        <flex-cell>Item 1</flex-cell>
        <flex-cell>Item 2</flex-cell>
        <flex-cell>Item 3</flex-cell>
      </flex-box>
    </div>
  );
}
```

::: tip
All components are typed as JSX elements, so you can use them in your TypeScript projects.
:::

In the future, we will implement a more convenient way to use the library in React projects by creating a package with React components.

### Class attribute support

React don't support the `class` attribute, so you can use the `className` attribute instead but you need to use the `className` as string. For example:

```jsx
import React from "react";
import "flex-layout-system"; // Import the library, all components will be registered as web components and you can use them in your JSX/TSX files because they are typed as JSX elements.

export default function App() {
  return (
    <div>
      <flex-box className="fullscreen">
        <flex-cell className="cell cell-6">Item 1</flex-cell>
      </flex-box>
    </div>
  );
}
```

This library synchronizes the `class` and `className` attributes for all components, so you can use them together.

## Best practices

With this library, you can create templates with minimal effort without using extra style rules, but you should not forget about web accessibility, a couple of examples:

```html
<flex-grid gap="10px">
  <flex-box stretch column>
    <flex-cell>
      <s-box fz="32px" fw="700" block ta="center" role="heading" aria-level="1">
        I am accessible heading of level 1
      </s-box>
      <s-box block color="#444" fz="18px">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam
        </p>
      </s-box>
    </flex-cell>
    <flex-cell> </flex-cell>
    <flex-cell> </flex-cell>
  </flex-box>
</flex-grid>
```
