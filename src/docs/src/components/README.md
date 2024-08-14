# Introducing Flex Layout System: Empowering Effortless Web Design

<b>Flex Layout System v2</b> is a streamlined and powerful library of web components designed to make
responsive web design effortless. This new version introduces significant improvements, including a
reduced number of components, built-in responsive behaviors, and self-contained styles, making it easier
than ever to create clean, maintainable layouts across various projects and frameworks.

Key features of <b>Flex Layout System v2</b> include its simplified component structure, which reduces
the need for complex HTML setups.

With just a single import, <b>Flex Layout System v2</b> integrates seamlessly into any project or
framework. Its components come with built-in responsive capabilities, eliminating the need for additional media queries
or external CSS files. The library also includes supplementary tools for precise control over gaps,
grids, columns, and overall layout, ensuring rapid development with minimal CSS.

# Components

## FlexCanvas

The `FlexCanvas` component is a versatile container that provides a customizable canvas for your layout. It allows you to control the maximum width, display, margin, padding, and overflow behavior of the container. The `FlexCanvas` is ideal for centering content and ensuring consistent layout structure across different screen sizes.

### Usage

To use the `FlexCanvas` component in your HTML, include the following code:

<code>html</code>

```html
<flex-canvas w="1200px" pd="20px"></flex-canvas>
```

### Props

The following properties are available for the `FlexCanvas` component:

| Name   | Type    | Default | Description                                  |
| ------ | ------- | ------- | -------------------------------------------- |
| `w`    | string  | 1400px  | Sets the maximum width of the canvas.        |
| `d`    | string  | block   | Sets the display mode of the canvas.         |
| `mg`   | string  | 0 auto  | Sets the margin of the canvas.               |
| `pd`   | string  | 0       | Sets the padding inside the canvas.          |
| `crop` | boolean | false   | Hides any overflow content if set to `true`. |

### Styling

The `FlexCanvas` component supports the following CSS variables for custom styling:

| Variable    | Description                              |
| ----------- | ---------------------------------------- |
| `--f-cs-mg` | Margin value of the host element.        |
| `--f-cs-pd` | Padding value of the host element.       |
| `--f-cs-db` | Display value of the host element.       |
| `--f-cs-mw` | Maximum width value of the host element. |

These variables can be adjusted to customize the appearance and behavior of the `FlexCanvas`.

### Examples

Here are some examples of how to use the `FlexCanvas` component:

1. **Basic Usage:**

```html
<flex-canvas></flex-canvas>
```

This will create a `FlexCanvas` with default settings.

2. **Custom Width and Padding:**

```html
<flex-canvas w="1200px" pd="20px"></flex-canvas>
```

This sets the maximum width of the canvas to 1200px and applies a padding of 20px.

3. **Cropped Canvas:**

```html
<flex-canvas crop w="1000px"></flex-canvas>
```

This example sets a maximum width of 1000px and hides any overflow content using the `crop` property.

The `FlexCanvas` component is a powerful tool for creating structured and centered layouts, ensuring that your content remains visually consistent across different devices.

## FlexGrid

The `FlexGrid` component is a powerful layout tool designed to create flexible, grid-based structures in your web projects. It allows you to manage spacing, alignment, and overflow behavior with ease. The `FlexGrid` component is typically used as a container for other layout components like `FlexBox` and `FlexCell`.

### Usage

To use the `FlexGrid` component in your HTML, include the following code:

<code>html</code>

```html
<flex-grid gap="20px">
  <!-- Your grid content here -->
</flex-grid>
```

### Props

The following properties are available for the `FlexGrid` component:

| Name       | Type    | Default | Description                                               |
| ---------- | ------- | ------- | --------------------------------------------------------- |
| `gap`      | string  | 0       | Sets the spacing between grid items.                      |
| `d`        | string  | block   | Defines the display type of the grid container.           |
| `crop`     | boolean | false   | If `true`, hides any overflowing content within the grid. |
| `compact`  | boolean | false   | If `true`, removes the padding inside the grid container. |
| `centered` | boolean | false   | If `true`, centers the grid container within its parent.  |

### Styling

The `FlexGrid` component can be customized using CSS variables, providing control over its appearance and behavior:

| Variable    | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| `--f-g-gap` | Defines the gap between grid items. Defaults to `0`.             |
| `--f-g-pd`  | Sets the padding for grid items, applied to each slot element.   |
| `display`   | Controls the display property of the grid (e.g., block, inline). |

### Features

- **Gap Management**: The `gap` attribute allows you to define the spacing between grid items, which can be responsive. The gap value is applied consistently across all grid items, ensuring a uniform layout.
- **Compact Mode**: Enabling `compact` mode removes the padding inside the grid, which is useful for tightly packed layouts where you want to minimize space between items.

- **Overflow Control**: The `crop` attribute helps manage overflow by hiding any content that extends beyond the grid's boundaries, ensuring a clean and contained layout.

- **Centering**: With the `centered` attribute, you can easily center the grid container within its parent element, which is particularly useful for aligning content on a page.

### Responsive Design

The `FlexGrid` component supports responsive design through its `gap` attribute, which can accept different values for various breakpoints. This allows you to fine-tune the spacing between grid items based on the screen size.

### Examples

1. **Basic Grid Layout:**

```html
<flex-grid gap="20px">
  <flex-box>
    <!-- Grid items here -->
  </flex-box>
</flex-grid>
```

This example sets up a basic grid layout with a 20px gap between items.

2. **Responsive Gap Values:**

```html
<flex-grid gap="40px, xs 20px, sm 30px">
  <flex-box>
    <!-- Responsive grid items -->
  </flex-box>
</flex-grid>
```

In this example, the gap adjusts based on the screen size, with 40px on larger screens, 30px on small screens, and 20px on extra small screens.

3. **Compact and Cropped Grid:**

```html
<flex-grid compact crop>
  <flex-box>
    <!-- Compact grid items with overflow hidden -->
  </flex-box>
</flex-grid>
```

This setup removes the padding inside the grid and hides any overflowing content, creating a tight, clean layout.

The `FlexGrid` component is an essential tool for building structured, responsive layouts that require precise control over spacing and alignment. Its ability to manage gaps, handle overflow, and support responsive design makes it a versatile component in the Flex Layout System.

## FlexBox

The `FlexBox` component is a flexible container designed to create various types of layouts using Flexbox. It allows you to control the direction, wrapping behavior, alignment, spacing, and dimensions of its child elements, making it ideal for building responsive and dynamic layouts.

### Usage

To use the `FlexBox` component in your HTML, include the following code:

<code>html</code>

```html
<flex-box jc="center" ai="center" gap="20px">
  <!-- Flex items here -->
</flex-box>
```

### Props

The following properties are available for the `FlexBox` component:

| Name     | Type    | Default    | Description                                                                         |
| -------- | ------- | ---------- | ----------------------------------------------------------------------------------- |
| `jc`     | string  | flex-start | Sets the alignment of flex items along the main axis (justify-content).             |
| `ai`     | string  | flex-start | Sets the alignment of flex items along the cross axis (align-items).                |
| `ac`     | string  | flex-start | Sets the alignment of flex lines when there is extra space (align-content).         |
| `dn`     | string  | row        | Defines the direction of the flex items (row, column, row-reverse, column-reverse). |
| `wrap`   | string  | nowrap     | Controls whether the flex items wrap onto multiple lines (wrap, nowrap).            |
| `gap`    | string  | 0          | Sets the spacing between flex items.                                                |
| `w`      | string  | auto       | Sets the width of the flex container.                                               |
| `h`      | string  | auto       | Sets the height of the flex container.                                              |
| `mh`     | string  | auto       | Sets the minimum height of the flex container.                                      |
| `mw`     | string  | auto       | Sets the minimum width of the flex container.                                       |
| `wfull`  | boolean | false      | Sets the width to 100% (full width).                                                |
| `hfull`  | boolean | false      | Sets the height to 100% (full height).                                              |
| `wfit`   | boolean | false      | Makes child elements grow to fit the available space.                               |
| `hfit`   | boolean | false      | Makes child elements grow to fit the available space.                               |
| `start`  | boolean | false      | Aligns flex items to the start of the container (both axes).                        |
| `end`    | boolean | false      | Aligns flex items to the end of the container (both axes).                          |
| `center` | boolean | false      | Centers flex items both horizontally and vertically.                                |
| `column` | boolean | false      | Arranges flex items in a column layout.                                             |

### Styling

The `FlexBox` component can be customized using CSS variables, allowing for fine-tuning of its appearance and behavior:

| Variable    | Description                                        |
| ----------- | -------------------------------------------------- |
| `--f-b-db`  | Display mode of the container. Defaults to `flex`. |
| `--f-b-dir` | Flex direction (row, column, etc.).                |
| `--f-b-wp`  | Wrapping behavior of the flex items.               |
| `--f-b-jc`  | Alignment of flex items along the main axis.       |
| `--f-b-ai`  | Alignment of flex items along the cross axis.      |
| `--f-b-ac`  | Alignment of flex lines when there is extra space. |
| `--f-b-gap` | Spacing between flex items.                        |

### Examples

1. **Horizontal Flex Layout with Centered Items:**

```html
<flex-box jc="center" ai="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</flex-box>
```

This example centers the items horizontally and vertically within the flex container.

2. **Vertical Flex Layout with Gap:**

```html
<flex-box column gap="20px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</flex-box>
```

This sets up a vertical layout with 20px of space between each item.

3. **Responsive Flex Layout:**

```html
<flex-box dn="row, sm column" jc="space-between" gap="10px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</flex-box>
```

In this example, the layout changes from a row to a column on small screens (`sm`), with space evenly distributed between items.

The `FlexBox` component is highly flexible, allowing you to create a wide range of layouts with ease, from simple rows and columns to complex responsive designs.

## FlexCell

The `FlexCell` component is a versatile building block within a grid or flexbox layout, providing essential functionality for creating responsive, flexible designs. It allows for precise control over the size, alignment, and behavior of each cell within a `FlexBox` or `FlexGrid` container.

### Usage

To use the `FlexCell` component in your HTML, include the following code:

<code>html</code>

```html
<flex-cell></flex-cell>
```

### Props

The `FlexCell` component supports the following properties:

| Name    | Type   | Default | Description                                                                       |
| ------- | ------ | ------- | --------------------------------------------------------------------------------- |
| `d`     | string | block   | Sets the display type of the cell (e.g., `flex`, `block`).                        |
| `as`    | string | stretch | Aligns the cell along the cross axis (e.g., `center`, `flex-start`, `stretch`).   |
| `order` | number | 0       | Controls the order of the cell within the flex container.                         |
| `g`     | number | 0       | Sets the flex-grow factor, allowing the cell to grow relative to other cells.     |
| `sh`    | number | 0       | Sets the flex-shrink factor, allowing the cell to shrink relative to other cells. |
| `w`     | string | auto    | Defines the width of the cell.                                                    |
| `h`     | string | auto    | Defines the height of the cell.                                                   |
| `bs`    | string | auto    | Sets the flex-basis property, determining the initial size of the cell.           |
| `pd`    | string | 0       | Sets the padding inside the cell.                                                 |

### Styling Attributes

The `FlexCell` component can be further customized with several predefined attributes that modify its behavior and appearance:

- **`fill`**: Expands the cell to fill the available space (`flex: 1 1 auto`).
- **`fit`**: Grows the cell to fill the container (`flex: 1`).
- **`snug`**: Prevents the cell from growing or shrinking (`flex: 0`).
- **`auto`**: Sets the cell to have automatic width and height based on its content (`flex: 0 1 auto`).
- **`stretch`**: Makes the cell stretch to fill the container along the cross axis (`flex-grow: 1`).
- **`center`**: Centers the content inside the cell both horizontally and vertically.

### Responsive Design

The `FlexCell` component supports responsive design through the `generateRootMediaRules` utility, allowing for dynamic adjustments based on screen size. You can define different values for properties like `display`, `align-self`, `width`, `height`, `padding`, and more, making `FlexCell` an ideal choice for adaptive layouts.

### Examples

1. **Basic FlexCell Usage:**

```html
<flex-cell w="50%" h="100px">
  <!-- Content here -->
</flex-cell>
```

This example sets up a `FlexCell` with a width of 50% and a height of 100px.

2. **Responsive FlexCell:**

```html
<flex-cell w="50%, xs 100%" pd="20px, sm 10px">
  <!-- Responsive content here -->
</flex-cell>
```

This example configures the `FlexCell` to have a width of 50% on larger screens, adjusting to 100% on extra small screens. The padding also changes from 20px to 10px based on screen size.

3. **Centering Content:**

```html
<flex-cell center>
  <!-- Centered content here -->
</flex-cell>
```

This example uses the `center` attribute to align the content of the `FlexCell` both horizontally and vertically.

### Custom CSS Styling

The `FlexCell` component provides several CSS variables for advanced styling:

| Variable   | Default Value | Description                                                                      |
| ---------- | ------------- | -------------------------------------------------------------------------------- |
| `--f-g-pd` | 0             | Padding applied to the grid cell.                                                |
| `--f-c-db` | block         | Sets the display mode of the cell.                                               |
| `--f-c-o`  | 0             | Controls the order of the cell within the flex container.                        |
| `--f-c-g`  | 0             | Flex-grow factor, defining how much the cell should grow relative to others.     |
| `--f-c-sh` | 0             | Flex-shrink factor, defining how much the cell should shrink relative to others. |
| `--f-c-w`  | auto          | Width of the cell.                                                               |
| `--f-c-h`  | auto          | Height of the cell.                                                              |
| `--f-c-bs` | auto          | Flex-basis value, determining the initial size of the cell.                      |

### Summary

The `FlexCell` component is a highly flexible and essential part of building responsive layouts with the Flex Layout System. It offers a wide range of customization options, allowing for precise control over how each cell behaves and displays within a grid or flexbox container.

## DisplayBox

The `DisplayBox` component is a versatile element designed for conditional rendering based on media queries and responsive display properties. This component allows you to control the visibility of content based on the current screen size or device type, using either CSS properties or JavaScript-based media queries.

### Usage

To use the `DisplayBox` component in your HTML, include the following code:

<code>html</code>

```html
<d-box d="block" media="(min-width: 600px)">
  <!-- Content visible on screens wider than 600px -->
</d-box>
```

### Props

The `DisplayBox` component supports the following properties:

| Name    | Type   | Default | Description                                               |
| ------- | ------ | ------- | --------------------------------------------------------- |
| `d`     | string | block   | Sets the display type of the box (e.g., `block`, `flex`). |
| `media` | string | null    | Defines a media query string to control rendering.        |

### Features

- **Conditional Rendering**: The `DisplayBox` can conditionally render its content based on a specified media query using the `media` attribute. This allows you to hide or show content depending on the screen size, orientation, or any other criteria supported by `matchMedia`.
- **Responsive Display**: Using the `d` attribute, you can set different display properties based on media queries, ensuring that the content adapts to various screen sizes or resolutions.

### Responsive Design

The `DisplayBox` component leverages the `generateRootMediaRules` utility, enabling dynamic adjustments to the `display` property based on predefined breakpoints. This ensures that the content within the `DisplayBox` is only rendered when the specified conditions are met.

### Examples

1. **Basic DisplayBox Usage:**

```html
<d-box d="flex">
  <!-- Flexbox content here -->
</d-box>
```

This example sets up a `DisplayBox` with a flex display.

2. **Conditional Rendering with Media Query:**

```html
<d-box d="block, sm none" media="(min-width: 768px)">
  <!-- Content visible only on screens wider than 768px -->
</d-box>
```

This example configures the `DisplayBox` to display its content as a block element on screens wider than 768px. The content will be hidden (`none`) on smaller screens.

3. **Responsive Display:**

```html
<d-box d="grid, xs block">
  <!-- Content displayed as grid on larger screens, block on extra-small screens -->
</d-box>
```

This example sets the display to `grid` on larger screens, and `block` on extra-small screens.

### Custom CSS Styling

The `DisplayBox` component provides the following custom CSS variable for advanced styling:

| Variable         | Default Value | Description                                               |
| ---------------- | ------------- | --------------------------------------------------------- |
| `--f-db-display` | block         | Controls the display property based on the `d` attribute. |

### Summary

The `DisplayBox` component is a powerful tool for managing the visibility of content based on media queries and responsive display properties. It offers a flexible way to tailor content presentation to different devices and screen sizes, making it an essential component for responsive web design.

## SpaceBox

The `SpaceBox` component, also referred to as `StackedBox`, is a versatile and straightforward element designed to create responsive spacing within layouts. It allows for flexible adjustment of both width and height, making it an ideal tool for managing spacing between elements in a layout.

### Usage

To use the `SpaceBox` component in your HTML, include the following code:

<code>html</code>

```html
<space-box size="20px"></space-box>
```

### Props

The `SpaceBox` component supports the following properties:

| Name      | Type    | Default | Description                                |
| --------- | ------- | ------- | ------------------------------------------ |
| `size`    | string  | auto    | Sets the width and height of the box.      |
| `stretch` | boolean | false   | Stretches the box to fill available space. |
| `wfull`   | boolean | false   | Sets the width to 100% (full width).       |
| `hfull`   | boolean | false   | Sets the height to 100% (full height).     |

### Features

- **Flexible Spacing**: The `SpaceBox` allows you to define a specific size for spacing between elements using the `size` attribute. This can be particularly useful for creating consistent spacing in your design.

- **Responsive Sizing**: The `size` attribute can also be used in conjunction with media queries to create responsive spacing that adapts to different screen sizes. This ensures that your layout remains visually balanced across various devices.

- **Stretch and Full-Size Options**: With the `stretch`, `wfull`, and `hfull` properties, the `SpaceBox` can be made to stretch and fill the available space, either horizontally, vertically, or both.

### Responsive Design

The `SpaceBox` leverages the `generateRootMediaRules` utility to dynamically adjust its width and height based on the `size` attribute. This ensures that the component can respond to different screen sizes or resolutions, providing optimal spacing in all scenarios.

### Examples

1. **Basic Spacing:**

```html
<space-box size="20px"></space-box>
```

This example creates a `SpaceBox` with a fixed size of 20px.

2. **Responsive Spacing:**

```html
<space-box size="40px, xs 10px"></space-box>
```

This example sets a responsive size for the `SpaceBox`, where the size is 40px by default and 10px on extra-small screens (`xs`).

3. **Full Width and Height:**

```html
<space-box wf hf></space-box>
```

This example creates a `SpaceBox` that takes up the full width and height of its container.

4. **Stretch to Fill Space:**

```html
<space-box stretch></space-box>
```

This example stretches the `SpaceBox` to fill the available space within its container.

### Custom CSS Styling

The `SpaceBox` component provides the following custom CSS variables for advanced styling:

| Variable       | Default Value | Description                                      |
| -------------- | ------------- | ------------------------------------------------ |
| `--f-sbx-w`    | 100%          | Controls the width of the `SpaceBox`.            |
| `--f-sbx-h`    | auto          | Controls the height of the `SpaceBox`.           |
| `--f-sbx-size` | auto          | Controls both width and height if `size` is set. |

### Summary

The `SpaceBox` is a simple yet powerful component for creating responsive spacing within your layouts. Whether you need fixed spacing, responsive adjustments, or a box that fills available space, the `SpaceBox` provides the flexibility you need to maintain a clean and organized design.

## StyleBox

The `StyleBox` component is an advanced, highly customizable element designed to provide extensive control over styling and layout in web design. It allows you to apply a wide range of CSS properties directly within your HTML, making it a powerful tool for creating responsive and visually consistent layouts.

### Usage

To use the `StyleBox` component in your HTML, include the following code:

<code>html</code>

```html
<s-box w="100%" h="300px" bgc="lightblue" ta="center" pd="20px">
  Content centered with padding
</s-box>
```

### Props

The `StyleBox` component supports a wide array of properties, enabling precise control over layout and styling:

| Name         | Type    | Default | Description                                                       |
| ------------ | ------- | ------- | ----------------------------------------------------------------- |
| `fit`        | string  | null    | Controls the `object-fit` property for slotted images or videos.  |
| `unstyle`    | boolean | false   | Removes all default styles from slotted content.                  |
| `block`      | boolean | false   | Sets the display to `block`.                                      |
| `inline`     | boolean | false   | Sets the display to `inline`.                                     |
| `d`          | string  | null    | Controls the display property of the box.                         |
| `round`      | boolean | false   | Makes the box circular by applying a 50% border radius.           |
| `stretch`    | boolean | false   | Expands the box to fill the available space.                      |
| `zi`         | string  | null    | Sets the `z-index` of the box.                                    |
| `pos`        | string  | null    | Controls the `position` property of the box.                      |
| `inset`      | string  | null    | Sets the `inset` (top, right, bottom, left) values of the box.    |
| `fill`       | boolean | false   | Forces slotted content to fill the box's width and height.        |
| `wfull`      | boolean | false   | Sets the width to 100% (full width).                              |
| `hfull`      | boolean | false   | Sets the height to 100% (full height).                            |
| `bgblur`     | string  | null    | Applies a background blur effect to the box.                      |
| `crop`       | boolean | false   | Hides any overflow content by setting `overflow: hidden`.         |
| `sr-only`    | boolean | false   | Visually hides content but keeps it accessible to screen readers. |
| `scrollable` | boolean | false   | Makes the box scrollable by setting `overflow: auto`.             |
| `ws`         | string  | null    | Sets the `white-space` property.                                  |
| `color`      | string  | null    | Sets the text color of the box.                                   |
| `bgc`        | string  | null    | Sets the background color of the box.                             |
| `fz`         | string  | null    | Controls the `font-size` of the box's content.                    |
| `fw`         | string  | null    | Controls the `font-weight` of the box's content.                  |
| `lh`         | string  | null    | Controls the `line-height` of the box's content.                  |
| `w`          | string  | null    | Sets the width of the box.                                        |
| `h`          | string  | null    | Sets the height of the box.                                       |
| `mw`         | string  | null    | Sets the minimum width of the box.                                |
| `mxw`        | string  | null    | Sets the maximum width of the box.                                |
| `mh`         | string  | null    | Sets the minimum height of the box.                               |
| `mxh`        | string  | null    | Sets the maximum height of the box.                               |
| `tt`         | string  | null    | Controls the `text-transform` property of the box's content.      |
| `pis`        | string  | null    | Sets the `padding-inline-start` property.                         |
| `pie`        | string  | null    | Sets the `padding-inline-end` property.                           |
| `pbs`        | string  | null    | Sets the `padding-block-start` property.                          |
| `pbe`        | string  | null    | Sets the `padding-block-end` property.                            |
| `mis`        | string  | null    | Sets the `margin-inline-start` property.                          |
| `mie`        | string  | null    | Sets the `margin-inline-end` property.                            |
| `mbs`        | string  | null    | Sets the `margin-block-start` property.                           |
| `mbe`        | string  | null    | Sets the `margin-block-end` property.                             |
| `mg`         | string  | null    | Sets the margin around the box.                                   |
| `pd`         | string  | null    | Sets the padding inside the box.                                  |
| `ta`         | string  | null    | Controls the `text-align` property of the box's content.          |
| `op`         | string  | null    | Sets the opacity of the box.                                      |
| `td`         | string  | null    | Controls the `text-decoration` property of the box's content.     |
| `br`         | string  | null    | Sets the border-radius of the box.                                |
| `pi`         | string  | null    | Controls the `padding-inline` property.                           |
| `pb`         | string  | null    | Controls the `padding-block` property.                            |
| `mi`         | string  | null    | Controls the `margin-inline` property.                            |
| `mb`         | string  | null    | Controls the `margin-block` property.                             |
| `fg`         | string  | null    | Sets the flex-grow property of the box.                           |
| `ratio`      | string  | null    | Sets the aspect-ratio property of the box.                        |

### Features

- **Flexible Layout and Styling**: `StyleBox` allows for the application of various CSS properties, including display, size, padding, margin, and alignment, directly via HTML attributes. This simplifies the process of creating and adjusting layouts.

- **Responsive Design**: The component supports responsive attributes for properties such as width, height, padding, and margin. This ensures that your layout can adapt to different screen sizes without needing additional media queries.

- **Logical Properties**: `StyleBox` supports logical CSS properties like `padding-inline`, `margin-block`, etc., making it fully compatible with both LTR (Left-to-Right) and RTL (Right-to-Left) text directions.

- **Object Fit**: With the `fit` attribute, you can control how slotted images or videos fit within the box. This is particularly useful for maintaining aspect ratios in responsive designs.

- **Accessibility Features**: The `sr-only` attribute is available to visually hide content while keeping it accessible to screen readers, enhancing the accessibility of your site.

- **Customizable Borders and Shapes**: The `round` attribute makes it easy to create circular elements by applying a 50% border radius, while the `crop` attribute hides overflow content, creating a clean and focused design.

### Responsive Design

`StyleBox` utilizes the `generateRootMediaRules` utility to dynamically adjust its styles based on various breakpoints. This allows for the creation of responsive layouts that automatically adjust to different screen sizes.

For example:

<code>html</code>

```html
<s-box pd="20px, sm 10px" mg="10px, sm 5px">
  Responsive padding and margin
</s-box>
```

This example applies different padding and margin values depending on the screen size.

### Examples

1. **Basic Styling:**

```html
<s-box w="100%" h="300px" bgc="lightblue" ta="center" pd="20px">
  Content centered with padding
</s-box>
```

2. **Responsive Padding and Margin:**

```html
<s-box pd="20px, sm 10px" mg="10px, sm 5px">
  Responsive padding and margin
</s-box>
```

3. **Circular Shape with Centered Content:**

```html
<s-box center round w="100px" h="100px" bgc="red"> Circle </s-box>
```

4. **Screen Reader Only Content:**

```html
<s-box sr-only> Screen reader only content </s-box>
```

5. **Object Fit for Images or Videos:**

```html
<s-box object-fit="cover" fit>
  <img src="image.jpg" alt="Cover Image" />
</s-box>
```

### Summary

The `StyleBox` component is a highly flexible and powerful tool for web developers who need granular control over their layouts and styling. It is ideal for creating responsive, accessible, and visually consistent designs across various screen sizes and devices.

## FlexMedia

The `FlexMedia` component is a powerful tool for handling responsive design in web applications. It dynamically adjusts to different screen sizes or container widths by setting appropriate media modes, which are reflected in the component's attributes. This allows developers to create layouts that adapt seamlessly across various devices and screen sizes.

### Usage

To use the `FlexMedia` component in your HTML, include the following code:

```html
<flex-media breakpoints="480, 768, 1024, 1280, 1440" target="window">
  <!-- Responsive content here -->
</flex-media>
```

### Props

The `FlexMedia` component provides several properties that allow you to control how it behaves:

| Name          | Type   | Default | Description                                                                                 |
| ------------- | ------ | ------- | ------------------------------------------------------------------------------------------- |
| `breakpoints` | string | null    | A comma-separated list of pixel values that define the breakpoints.                         |
| `target`      | string | null    | Specifies the target element to listen for resize events. Defaults to the component itself. |
| `sizes`       | string | null    | Reflects the current active media modes based on the component's width.                     |

### Features

- **Responsive Breakpoints**: The `breakpoints` property allows you to define custom breakpoints at which the component will adjust its behavior. These breakpoints are specified as a comma-separated list of pixel values.

- **Dynamic Resizing**: The component listens to resize events on a specified target element (such as the window or a specific container) and adjusts the active media modes accordingly.

- **Flexible Targeting**: You can specify any element as the target for resize events using the `target` property. By default, the component listens to resize events on itself.

- **Media Mode Reflection**: The component dynamically updates its `sizes` attribute with the active media modes, reflecting the current state based on the width of the target element.

### Responsive Design

The `FlexMedia` component is designed to support a wide range of responsive design needs. By defining breakpoints, you can ensure that your content adapts smoothly to different screen sizes.

For example:

```html
<flex-media breakpoints="480, 768, 1024" target="#mainContainer">
  <!-- Responsive content here -->
</flex-media>
```

This example sets up a `FlexMedia` component that listens for resize events on the `#mainContainer` element and adjusts its layout based on the defined breakpoints.

### Breakpoints and Modes

The `breakpoints` property is a comma-separated list of pixel values that define where the media modes change. The component automatically maps these breakpoints to the predefined media sizes (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`). For example:

- `xs`: 0px and up
- `sm`: 480px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `xxl`: 1440px and up

### Example

Here's how you can implement the `FlexMedia` component:

```html
<flex-media breakpoints="480, 768, 1024, 1280" target="window">
  <div>
    <!-- Responsive content that adapts to the screen size -->
  </div>
</flex-media>
```

In this example, the component will adjust based on the window's width, updating its `sizes` attribute to reflect the active media modes (`[xs]`, `[sm]`, `[md]`, `[lg]`, `[xl]`, `[xxl]`).

### Summary

The `FlexMedia` component is an essential tool for managing responsive designs. By allowing developers to define custom breakpoints and dynamically adjusting to different screen sizes, it provides the flexibility needed to create adaptive layouts that work across all devices.
