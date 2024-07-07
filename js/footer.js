//since this is common on every page, lets just add the favicon here.
let elem = document.createElement("link");
elem.rel = "shortcut icon";
elem.href = "https://avatars.githubusercontent.com/u/130254323?v=4";
elem.type = "image/png";
document.head.appendChild(elem);


let htmla = `
<div class="footer">
    <p>made by nmsderp ${new Date().getFullYear()}</p>
</div>`

document.write(htmla);
