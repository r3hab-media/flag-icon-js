# Simple Flag Icon Script

A lightweight, dependency-free JavaScript snippet that finds custom `<flag-icon>` tags in your HTML and replaces them with beautiful SVG flags from a free CDN.

## Features

- **Easy to Use**: Just add the script to your page and start using `<flag-icon>` tags.
- **Flexible**: Use either the 2-letter ISO country code (`us`) or the full country name (`united states`).
- **Zero Configuration**: No CSS or setup required. The script injects its own styles.
- **Accessible**: Automatically adds descriptive `alt` and `title` tags for screen readers and tooltips.
- **Lightweight**: No libraries or dependencies needed.

## How to Use

1.  **Include the Script**: Add the following `script` tag to the `<head>` of your HTML document. This link uses [jsDelivr](https://www.jsdelivr.com/) to serve the file directly from your GitHub repository.

    ```html
    <script
    	src="[https://cdn.jsdelivr.net/gh/r3hab-media/flag-icon-js/flag-icon.js](https://cdn.jsdelivr.net/gh/r3hab-media/flag-icon-js/flag-icon.js)"
    	defer
    ></script>
    ```

2.  **Add Flag Icons**: Use the `<flag-icon>` custom tag anywhere in your HTML `<body>`.

    - **By Country Code**:
      ```html
      Welcome to Canada <flag-icon code="ca"></flag-icon>!
      ```
    - **By Full Name**:
      ```html
      Welcome to Brazil <flag-icon code="brazil"></flag-icon>!
      ```

The script will automatically find these tags on page load and replace them with the corresponding flag images.
