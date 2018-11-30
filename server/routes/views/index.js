module.exports = (req, res) => {
    function renderFullPage() {
        return `
            <!doctype html>
            <html>
                <head>
                    <title>Tattoo App</title>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                </head>
                <body>
                        <div id="root">
                        </div>
                        <script src="bundle.js"></script>
                </body>
            </html>
        `;
    }

    res.send(renderFullPage());
}