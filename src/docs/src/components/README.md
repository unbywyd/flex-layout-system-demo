# Introducing Flex Layout System: Empowering Effortless Web Design

Flex Layout System is a powerful library of web components designed to enhance web design development. It provides a range of flexible components for effortless layout creation and grid implementation. The primary objective of Flex Layout System is to simplify the process of building responsive layouts across different projects and frameworks.

Key advantages of Flex Layout System include its intuitive component names, which eliminate the need for complex div structures. The "flex-box" serves as the container, while the "flex-cell" acts as the adaptable building block within the grid. This simplicity improves efficiency and promotes cleaner, more maintainable code.

By importing Flex Layout System just once, you can seamlessly integrate it into any project and framework. The library offers well-designed components with thoughtful nesting, making it easy to customize gaps, grids, columns, and responsiveness. Additionally, the styles of these components are applied to the host element, allowing for effortless customization and overrides. Supplementary components are also included, providing efficient tools for rapid layout design with minimal CSS requirements.

# Components

## FlexCanvas

FlexCanvas is a web component that provides a flexible canvas for layout design. It allows you to easily customize the display, margin, padding, and maximum width of the canvas.

### Usage

To use the `FlexCanvas` component in your HTML project, include the following code:

```html
<flex-canvas></flex-canvas>
```

### Props

The following table lists the available props for the `FlexCanvas` component:

| Name  | Type   | Default | Description                |
| ----- | ------ | ------- | -------------------------- |
| width | string | null    | The width of the canvas.   |
| mg    | string | null    | The margin of the canvas.  |
| pd    | string | null    | The padding of the canvas. |

### Styling props

The `FlexCanvas` component supports the following CSS variables for custom styling:

| Name      | Description                              |
| --------- | ---------------------------------------- |
| --f-cs-db | Display value of the host element.       |
| --f-cs-mg | Margin value of the host element.        |
| --f-cs-mw | Maximum width value of the host element. |
| --f-cs-pd | Padding value of the host element.       |

### Examples

Here are a few examples of using the `FlexCanvas` component:

```html
<flex-canvas width="1200px"></flex-canvas>
```

## FlexBox

The `FlexBox` component is used as a flexible container that provides layout capabilities for your content. It allows you to control the direction, wrapping behavior, alignment, and spacing of the flex items within the container.

### Usage

```html
<flex-box row gap="20px">
  <!-- Your flex items here -->
</flex-box>
```

### Props

| Name   | Type    | Default | Description                                                             |
| ------ | ------- | ------- | ----------------------------------------------------------------------- |
| row    | Boolean | null    | Determines if the flex items should be arranged horizontally in a row.  |
| column | Boolean | null    | Determines if the flex items should be arranged vertically in a column. |
| gap    | String  | null    | Sets the spacing between the flex items.                                |

:::warning
**Note:** Only one of `row` or `column` props should be specified. Specifying both will result in an error.
:::

### Styling Props

The following props can be used to apply specific styling classes to the `FlexBox` component:

- `nowrap` (boolean, optional): Prevents the flex items from wrapping to multiple lines. When set to `true`, the flex items are forced to stay on a single line.
- `reverse` (boolean, optional): Reverses the order of the flex items. When set to `true`, the flex items are displayed in reverse order.
- `inline` (boolean, optional): Specifies whether the `FlexBox` should be displayed as an inline-flex container. When set to `true`, the `FlexBox` is rendered inline.
- `center` (boolean, optional): Aligns the flex items both horizontally and vertically at the center of the `FlexBox`.
- `middle` (boolean, optional): Aligns the flex items vertically at the center of the `FlexBox`.
- `spread` (boolean, optional): Distributes the flex items evenly along the main axis, with equal space between them.
- `stretch` (boolean, optional): Stretches the flex items to fill the container along the cross axis.
- `start` (boolean, optional): Aligns the flex items to the start of the `FlexBox` along both the main and cross axes.
- `end` (boolean, optional): Aligns the flex items to the end of the `FlexBox` along both the main and cross axes.
- `ai` (string, optional): Sets the alignment of the flex items along the cross axis. Accepts values: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
- `jc` (string, optional): Sets the alignment of the flex items along the main axis. Accepts values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`, `start`, `end`.
- `ac` (string, optional): Sets the alignment of the flex lines when there is extra space on the cross axis. Accepts values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`.

### Custom CSS Styling

The `FlexBox` component can be customized using CSS variables. The following variables are available:

- `--f-b-db`: Specifies the display mode of the container. Defaults to `flex`.
- `--f-b-dir`: Specifies the direction of the flex items. Defaults to `row` or `column` based on the specified props.
- `--f-b-wp`: Specifies the wrapping behavior of the flex items. Defaults to `wrap`.
- `--f-b-jc`: Specifies the alignment of the flex items along the main axis. Defaults to `flex-start`.
- `--f-b-ai`: Specifies the alignment of the flex items along the cross axis. Defaults to `flex-start`.
- `--f-b-ac`: Specifies the alignment of the flex lines when there is extra space on the cross axis. Defaults to `flex-start`.
- `--f-b-gap`: Specifies the spacing between the flex items. Defaults to `0`.

### Examples

### Horizontal Flex Layout

```html
<flex-box row>
  <flex-cell></flex-cell>
  <flex-cell></flex-cell>
  <flex-cell></flex-cell>
</flex-box>
```

### Vertical Flex Layout

```html
<flex-box column>
  <flex-cell></flex-cell>
  <flex-cell></flex-cell>
  <flex-cell></flex-cell>
</flex-box>
```

### Flex Layout with Gap

```html
<flex-box row gap="20px">
  <flex-cell></flex-cell>
  <flex-cell></flex-cell>
  <flex-cell></flex-cell>
</flex-box>
```

## FlexCell Component

FlexCell is a web component that represents an adaptable building block within a grid layout. It provides various options for customization, including display properties, flex basis, maximum width, order, flex grow, and flex shrink.

:::tip
This component must be a child of the **FlexBox** component
:::

### Usage

To use the `FlexCell` component in your HTML project, include the following code:

```html
<flex-cell></flex-cell>
```

### Props

The `FlexCell` component supports the following props:

| Name   | Type   | Default | Description                        |
| ------ | ------ | ------- | ---------------------------------- |
| order  | number | null    | The order of the cell in the grid. |
| grow   | number | null    | The flex grow value of the cell.   |
| shrink | number | null    | The flex shrink value of the cell. |
| width  | string | null    | The width of the cell.             |

### Styling

The FlexCell component can be styled using the following attributes on the `:host` selector:

| Attribute  | Description                                          |
| ---------- | ---------------------------------------------------- |
| scrollable | Makes the flex cell scrollable.                      |
| flex       | Sets the display of the flex cell to `flex`.         |
| iflex      | Sets the display of the flex cell to `inline-flex`.  |
| iblock     | Sets the display of the flex cell to `inline-block`. |
| fill       | Sets the flex properties to `1 1 auto`.              |
| fit        | Sets the flex properties to `1`.                     |
| snug       | Sets the flex properties to `0`.                     |
| auto       | Sets the flex properties to `0 1 auto`.              |
| stretch    | Sets the flex grow property to `1`.                  |
| order="X"  | Sets the order of the flex cell to `X`.              |
| grow="X"   | Sets the flex grow factor to `X`.                    |
| shrink="X" | Sets the flex shrink factor to `X`.                  |

To use the 12-column grid system, you can apply the `cell-X` class to the FlexCell component, where X is a number from 1 to 12 representing the desired width of the column.

#### Responsive Layout

To create responsive layouts, you can use the `cell-md-X `classes, where X is a number from 1 to 12 representing the desired width of the column. The `md` prefix indicates that the column width applies for medium-sized screens and above. You can also use other breakpoints such as `sm`, `lg`, and `xl` to target different screen sizes.

:::tip
To utilize the responsive utilities, you need to import the corresponding styles.
:::

The following options are available:

#### CSS Media Queries

If you want to use the responsive utilities based on CSS Media Queries, import the following CSS file:

```html
<link rel="stylesheet" href="flex-layout-system/dist/css-responsive.min.css" />
```

JavaScript System with flex-media Component
If you want to use the responsive utilities based on the JavaScript system using the flex-media component, import the following CSS file:

```html
<link rel="stylesheet" href="flex-layout-system/dist/js-responsive.min.css" />
```

:::tip
Make sure to include these styles in your project to enable the responsive features of the FlexCell component.
:::

### Custom CSS Styling

The `FlexCell` component provides various styling options that can be customized using CSS variables. Here are some of the available CSS variables:

- `--f-c-db`: Display value of the host element.
- `--f-c-b`: Flex basis value of the host element.
- `--f-c-o`: Order value of the host element.
- `--f-c-g`: Flex grow value of the host element.
- `--f-c-sh`: Flex shrink value of the host element.

### Examples

Here is an example of using the `FlexCell` component:

```html
<flex-cell order="2" grow="3" shrink="1" width="50%"></flex-cell>
```

## FlexGrid

**FlexGrid** is a component that creates a flexible grid layout. It is customizable with a **gap** property and **compact** mode.

:::tip
**Important**: The FlexGrid component should be a parent to a flex container (**FlexBox**). That is, any element that you want to apply the flex layout to should be nested inside the FlexGrid component.
:::

### Usage

To use `FlexGrid`, simply include it in your HTML:

```html
<flex-grid gap="10px">
  <flex-container>
    <!--...-->
  </flex-container>
</flex-grid>
```

### Props

The `FlexGrid` component has the following property:

| Name | Type   | Default | Description                |
| ---- | ------ | ------- | -------------------------- |
| gap  | string | null    | The gap between grid items |

### Styling

`FlexGrid` component comes with built-in styles that can be modified by setting attributes:

| Name    | Description              |
| ------- | ------------------------ |
| flex    | Enables flexible display |
| compact | Removes padding          |

### Custom CSS Styling

The CSS variables for the FlexGrid component:

| Name      | Default | Description                     |
| --------- | ------- | ------------------------------- |
| --f-g-gap | 0       | Sets the gap between grid items |

## FlexMedia

`FlexMediaBox` is a component that creates a flexible media box layout. It is customizable with `breakpoints`, `target`, and sizes properties. It listens for resize events and sets media sizes accordingly.

### Usage

To use **FlexMediaBox**, simply include it in your HTML:

```html
<flex-media-box
  breakpoints="780,1200,1400,1600"
  target="#targetElement"
></flex-media-box>
```

### Props

The **FlexMediaBox** component has the following properties:

| Name        | Type             | Default | Description                                             |
| ----------- | ---------------- | ------- | ------------------------------------------------------- |
| breakpoints | string           | null    | Comma-separated list of breakpoint numbers              |
| target      | string           | null    | The target element to listen for resize events on       |
| sizes       | string(Readonly) | null    | Sizes set by the component after listening resize event |

## StackedBox

The **StackedBox** is a component that creates a layout where all children are absolutely positioned, effectively making them stacked on top of each other. It comes with a **crop** attribute that when present, hides any overflowing content.

### Usage

```html
<stacked-box crop>
  <stacked-cell z="1">1</stacked-cell>
  <stacked-cell z="2">2</stacked-cell>
</stacked-box>
```

### Props

The **StackedBox** component does not have any properties to configure.

### Styling

The **StackedBox** component comes with built-in styles that can be adjusted using attributes:

| Name | Description                   |
| ---- | ----------------------------- |
| crop | Hides any overflowing content |

## StackedCell

**StackedCell** is a component that should be used as a child within the **StackedBox** component. It is designed to be absolutely positioned within the **StackedBox**. The **StackedCell** component can be adjusted using various properties such as `xa`, `xb`, `ya`, `yb`, `z`, `oc` and attributes like `rel`, `overlay` and `stretch`.

### Usage

```html
<stacked-box>
  <stacked-cell
    xa="10px"
    ya="20px"
    z="1"
    oc="rgba(0, 0, 0, 0.5)"
    rel
    overlay
    stretch
  >
    <!-- Content goes here -->
  </stacked-cell>
</stacked-box>
```

### Props

The **StackedCell** component has the following properties:

| Name | Type   | Default | Description                                            |
| ---- | ------ | ------- | ------------------------------------------------------ |
| xa   | string | null    | The inset-inline-start value                           |
| xb   | string | null    | The inset-inline-end value                             |
| ya   | string | null    | The inset-block-start value                            |
| yb   | string | null    | The inset-block-end value                              |
| z    | string | null    | The z-index value                                      |
| oc   | string | null    | The background color when the overlay attribute is set |

### Styling

The **StackedCell** component comes with built-in styles that can be adjusted by setting attributes:

| Name    | Description                                           |
| ------- | ----------------------------------------------------- |
| rel     | Sets the position to relative                         |
| overlay | Sets a background overlay                             |
| stretch | Sets the inset to 0 (making the item fill its parent) |

### Custom CSS Styling

The CSS variables for the **StackedCell** component:

| Name      | Default            | Description                                         |
| --------- | ------------------ | --------------------------------------------------- |
| --f-sc-s  | auto               | The inset-inline-start value                        |
| --f-sc-e  | auto               | The inset-inline-end value                          |
| --f-sc-t  | auto               | The inset-block-start value                         |
| --f-sc-b  | auto               | The inset-block-end value                           |
| --f-sc-z  | auto               | The z-index value                                   |
| --f-sc-oc | rgba(0, 0, 0, 0.5) | The overlay color when the overlay attribute is set |

## FitBox

**FitBox** is a component that creates a container box with several options for adjusting its layout and behavior. It allows control over its dimensions, overflow behavior, alignment, shape, and also how its child elements should fit within it.

### Usage

To use the **FitBox**, include it in your HTML and place any content you wish within it:

```html
<fit-box width="50%" height="200px" crop scrollable round cover>
  <!-- Content goes here -->
</fit-box>
```

### Props

The **FitBox** component has the following properties:

| Name   | Type   | Default | Description           |
| ------ | ------ | ------- | --------------------- |
| width  | string | null    | The width of the box  |
| height | string | null    | The height of the box |

### Styling

The **FitBox** component comes with built-in styles that can be adjusted using attributes:

| Name       | Description                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| flex       | Changes the display property to flex                                                  |
| stretch    | Makes the box fill its parent container                                               |
| crop       | Hides any overflowing content                                                         |
| scrollable | Makes the box scrollable                                                              |
| center     | Centers the content within the box                                                    |
| fill       | Makes the child elements fill the box                                                 |
| round      | Makes the box circular                                                                |
| cover      | Makes the child image(s) cover the box                                                |
| contain    | Makes the child image(s) maintain their aspect ratio within the box                   |
| force      | Enforces the stretch and fill properties, overriding any styles set by child elements |

### Custom CSS Styling

The CSS variables for the **FitBox** component:

| Name     | Default | Description           |
| -------- | ------- | --------------------- |
| --f-fb-w | 100%    | The width of the box  |
| --f-fb-h | auto    | The height of the box |

## AspectRatio

**AspectRatio** is a web component that can be used to create a container with a specific aspect ratio. The aspect ratio can be set using the **ratio** attribute, and it also has **center** and **fit** modes for the content inside the container.

### Usage

```html
<a-ratio ratio="16/9">
  <!-- Content goes here -->
</a-ratio>
```

### Props

| Name   | Type    | Default | Description                                                                                                                                                                              |
| ------ | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| center | Boolean | true    | Centers the content inside the container if set to true.                                                                                                                                 |
| ratio  | String  | null    | Sets the aspect ratio of the container. Supported values are: "1/1", "4/3", "16/9", "21/9", "3/4", "9/16", "9/21", "1/2", "2/1", "1/3", "3/1", "1/4", "4/1", "1/5", "5/1", "1/6", "6/1". |

### Styling

The `a-ratio` component provides several style options based on attribute settings. For example, the **center** attribute centers the content within the container and the **ratio** attribute adjusts the aspect ratio.

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| --f-ar-v | Sets the aspect ratio of the container. The default value is 'auto'. |

### Custom CSS Styling

The `a-ratio` component has the following custom CSS properties:

| Name     | Default | Description                             |
| -------- | ------- | --------------------------------------- |
| --f-ar-v | auto    | Sets the aspect ratio of the container. |

## FlexDivider

**FlexDivider** is a component that represents a horizontal divider. It can be used to visually separate content within a layout. The appearance of the divider can be customized using various properties.

When no `h` or `v` attribute is provided, the `FlexDivider` component tries to adapt its style based on the parent container's flex direction. However, if the h or v attribute is specified, it overrides the adaptive behavior and forces the divider to be either `horizontal` or `vertical`, respectively.

### Usage

```html
<flex-divider></flex-divider>
```

### Props

| Name  | Type   | Default | Description                      |
| ----- | ------ | ------- | -------------------------------- |
| mg    | string | null    | The margin of the divider        |
| width | string | null    | The width of the divider         |
| color | string | null    | The color of the divider         |
| size  | string | null    | The size (height) of the divider |

### Styling

The **FlexDivider** component comes with built-in styles that can be adjusted using attributes:

| Attribute Name | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| v              | Indicates a vertical divider                                |
| h              | Indicates a horizontal divider                              |
| stretch        | Stretches the divider to fill the available width or height |
| dark           | Sets a dark background color for the divider                |

### Custom CSS Styling

The **FlexDivider** component has the following custom CSS properties:

:::tip
**Note**: The --f-divider-bg CSS variable is used to set the background color of the divider. By default, it uses either `--f-divider-bg-dark` or `--f-divider-bg-light` based on the presence of the dark attribute.
:::

| Name                          | Default                                                     | Description                                        |
| ----------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| --f-divider-size              | 1px                                                         | The width or height of the divider                 |
| --f-divider-bg-dark           | rgba(255, 255, 255, 0.12)                                   | The dark background color of the divider           |
| --f-divider-bg-light          | rgba(0, 0, 0, 0.12)                                         | The light background color of the divider          |
| --f-vd-ops-size               | auto                                                        | The size (height) of the divider                   |
| --f-divider-bg                | var(--f-divider-fallback-bg-dark, var(--f-divider-bg-dark)) | The background color of the divider                |
| --f-divider-fallback-bg-dark  | var(--f-divider-bg-dark)                                    | The fallback dark background color of the divider  |
| --f-divider-fallback-bg-light | var(--f-divider-bg-light)                                   | The fallback light background color of the divider |

## SpaceBox

The **SpaceBox** component represents a box with adjustable `width`, `height`, or `size`.

### Usage

To use the **SpaceBox** component, simply include it in your HTML:

```html
<space-box></space-box>
```

### Props

| Name   | Type   | Default | Description                            |
| ------ | ------ | ------- | -------------------------------------- |
| width  | string | null    | The width of the box                   |
| height | string | null    | The height of the box                  |
| size   | string | null    | The size (width and height) of the box |

### Styling

### Custom Styling

```tip
**Note**: You can use the `width`, `height`, `and` size props to adjust the corresponding CSS properties of the SpaceBox.
```

| CSS Property | Default | Description                     |
| ------------ | ------- | ------------------------------- |
| --f-sbx-db   | block   | The display property of the box |
| --f-sbx-w    | 100%    | The width of the box            |
| --f-sbx-h    | auto    | The height of the box           |

## StyleBox

The `StyleBox` component allows you to customize various styling properties of an HTML element.

### Usage

To use the `StyleBox` component, simply include it in your HTML:

```html
<s-box fz="12px"></s-box>
```

### Styling Props

- `block` - Sets the display property of the element to `block`.
- `inline` - Sets the display property of the element to `inline`.
- `fb` - fallback method, an attribute that specifies to reset child element styles apply styles only to the `host`

### Styling

| Property | Type   | Default | Description                             |
| -------- | ------ | ------- | --------------------------------------- |
| fz       | string | null    | The font size of the element            |
| fw       | string | null    | The font weight of the element          |
| lh       | string | null    | The line height of the element          |
| w        | string | null    | The width of the element                |
| h        | string | null    | The height of the element               |
| mw       | string | null    | The minimum width of the element        |
| mxw      | string | null    | The maximum width of the element        |
| mh       | string | null    | The minimum height of the element       |
| mxh      | string | null    | The maximum height of the element       |
| pis      | string | null    | The inline start padding of the element |
| pie      | string | null    | The inline end padding of the element   |
| pbs      | string | null    | The block start padding of the element  |
| pbe      | string | null    | The block end padding of the element    |
| mis      | string | null    | The inline start margin of the element  |
| mie      | string | null    | The inline end margin of the element    |
| mbs      | string | null    | The block start margin of the element   |
| mbe      | string | null    | The block end margin of the element     |
| mg       | string | null    | The margin of the element               |
| pd       | string | null    | The padding of the element              |
| ta       | string | null    | The text alignment of the element       |
| op       | string | null    | The opacity of the element              |
| td       | string | null    | The text decoration of the element      |
| br       | string | null    | The border radius of the element        |
| px       | string | null    | The horizontal padding (left and right) |
| py       | string | null    | The vertical padding (top and bottom)   |
| mx       | string | null    | The horizontal margin (left and right)  |
| my       | string | null    | The vertical margin (top and bottom)    |
