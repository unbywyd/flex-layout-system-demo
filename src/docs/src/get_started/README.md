# Get Started with Flex Layout System v2

Flex Layout System v2 is a powerful and streamlined library of web components designed to simplify responsive web design. With a reduced number of components, built-in responsiveness, and self-contained styles, Flex Layout System v2 allows you to create clean and maintainable layouts effortlessly.

## Installation

To get started with Flex Layout System v2, follow these simple steps:

### Step 1: Install the Package

Run the following command in your project to install the Flex Layout System package from npm:

```bash
npm install flex-layout-system
```

### Step 2: Use It in Your Project

For ES/TS Projects, import the library in your JavaScript or TypeScript file:

```js
import "flex-layout-system";
```

If you want to use this library in your HTML file (browser), you can use the following script tag:

```html
<script src="https://unpkg.com/flex-layout-system/dist/browser.min.js"></script>
```

## Using Flex Layout System in Frameworks

### Angular

If you want to use this library in your Angular project, follow these steps:

1. Install the package in your Angular project:

```bash
npm install flex-layout-system
```

2. Finally, in your `app.module.ts` file, add the following:

```js
import "flex-layout-system";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

### Next.js


To use this library in your Next.js project:

1. Install the package:

```bash
npm install flex-layout-system
```

2. In your component file, add "use client" at the top:

```js
"use client"; 

import "flex-layout-system/jsx.types.d"; // Import JSX types
import "flex-layout-system"; // Import components

// Example usage:
<flex-box jc="space-between">
  <span>1</span>
  <span>2</span>
</flex-box>
```

3. **Important**: This library uses Shadow DOM and is purely client-side, meaning it will only work on the client side. You can write syntax similar to regular HTML, but rendering will be handled exclusively on the client.

4. Ensure the library is imported on the client side. If you're using `"use client"`, Next.js will handle the import correctly. However, if you're working with a server component, it won't render! You must ensure the script is loaded on the client side, either using lazy loading methods provided by Next.js or by utilizing `Script` from `next/script` to load the library as a polyfill for web component support on the client.

```js
import Script from "next/script";

export default function MyComponent() {
  return (
    <>
      <Script src="https://unpkg.com/flex-layout-system/dist/browser.min.js" strategy="lazyOnload" />
      <flex-box jc="space-between">
        <span>1</span>
        <span>2</span>
      </flex-box>
    </>
  );
}
```