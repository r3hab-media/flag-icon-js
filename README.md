# Simple Flag Icon Script

A lightweight, dependency-free JavaScript snippet that finds custom `<flag-icon>` tags in your HTML and replaces them with beautiful SVG flags from a free CDN.

## Features

- **Easy to Use**: Just add the script to your page and start using `<flag-icon>` tags.

- **Flexible**: Use either the 2-letter ISO country code (`us`) or the full country name (`united states`).

- **Zero Configuration**: No CSS or setup required. The script injects its own styles.

- **Accessible**: Automatically adds descriptive `alt` and `title` tags for screen readers and tooltips.

- **Lightweight**: No libraries or dependencies needed.

## How to Use

1. **Include the Script**: Add the `flag-icon.js` script to the `<head>` of your HTML document. It is recommended to use the `defer` attribute.

   ```html
   <script src="path/to/your/flag-icon.js" defer></script>
   ```

   If you host this project on GitHub, you can use a service like [jsDelivr](https://www.jsdelivr.com/) to serve it as a CDN.

2. **Add Flag Icons**: Use the `<flag-icon>` custom tag anywhere in your HTML `<body>`.

   - **By Country Code**:

     ```html
     Welcome to Canada <flag-icon code="ca"></flag-icon>!
     ```

   - **By Full Name**:

     ```html
     Welcome to Brazil <flag-icon code="brazil"></flag-icon>!
     ```

The script will automatically find these tags on page load and replace them with the corresponding flag images.
