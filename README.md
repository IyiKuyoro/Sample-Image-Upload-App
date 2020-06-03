## Image Upload Sample for CKEditor Image Upload Adapter

This is a sample backend application that works with [CKEditor Image Upload Adapter Vanilla Edition](https://github.com/IyiKuyoro/Vanilla-RichText-Editor/tree/custom-app). This app is only indented for demo purposes and should be used with your own security and validation implementations in mind.

### How to Use

- Clone the repo
- Run `npm i` to install all dependencies
- Start the app bu running `npm start`
- To upload and image, send a POST request using a multipart form with a single file parameter named `image` in the request body. If successful it will respond with a `201` and the location of the image as `image_url`
- Send a GET request to get the same image using the `image_url` returned earlier.