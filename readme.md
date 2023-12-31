# Introducing Flex Layout System: Empowering Effortless Web Design

Flex Layout System is a powerful library of web components designed to enhance web design development. It provides a range of flexible components for effortless layout creation and grid implementation. The primary objective of Flex Layout System is to simplify the process of building responsive layouts across different projects and frameworks.

Key advantages of Flex Layout System include its intuitive component names, which eliminate the need for complex div structures. The "flex-box" serves as the container, while the "flex-cell" acts as the adaptable building block within the grid. This simplicity improves efficiency and promotes cleaner, more maintainable code.

By importing Flex Layout System just once, you can seamlessly integrate it into any project and framework. The library offers well-designed components with thoughtful nesting, making it easy to customize gaps, grids, columns, and responsiveness. Additionally, the styles of these components are applied to the host element, allowing for effortless customization and overrides. Supplementary components are also included, providing efficient tools for rapid layout design with minimal CSS requirements.

**See more on official website**: [https://flex-layout-system.com](https://flex-layout-system.com)

## Get Started

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
