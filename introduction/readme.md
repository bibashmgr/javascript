s# Introduction to Javascript

`Javascript` is used to program the behavior of web pages. There are two ways to use javascript code on html document. They are:

1. Internal Javascript:
   
   In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.
   
    **Synatx:**
    ```html
    <!-- inside index.html -->
    <script type="text/javascript>
         // custom scripting
    </script>
    ```

2. External Javascript:
   
   Scripts can also be placed in external files. To use an external script, put the name of the script file in the `src` (source) attribute of a `<script>` tag.

   **Synatx:**
    ```html
   <!-- inside index.html -->
    <script type="text/javascript src="./app.js">
    </script>
    ```
    ```js
    // inside app.js
    // custom scripting 
    ```