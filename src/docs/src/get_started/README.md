# Get Started

To get started with Flex Layout System, follow these simple steps:

Step 1: Install the package Run the following command in your project to install the Flex Layout System package from npm:

```bash
npm install flex-layout-system
```

Step 2: Importing and using the components In your TypeScript/JS file. For example, to use the base layout without utilities and styles, import the following:

```js
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
