'use strict'

function OpenItemWindow(item) {
    let itemWindow = window.open();
    let windowInnerHtml = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="./assets/styles/common.css" />
            <link rel="stylesheet" href="./assets/styles/main.css" />
            <title>Internship-9-CSS</title>
        </head>
        <body>
            <main>
                <div class="main__offers">
                    <div class="offers__item">
                        ${item.innerHTML}
                    </div>
                </div>
            </main>
            <script src="./assets/scripts/update.js"></script>
            <script src="./assets/scripts/event.js"></script>
        </body>
    </html>
  `
    itemWindow.document.write(windowInnerHtml);
}