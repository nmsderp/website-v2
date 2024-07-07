//since this is common on every page, lets just add the favicon here.
let elem = document.createElement("link");
elem.rel = "shortcut icon";
elem.href = "https://avatars.githubusercontent.com/u/130254323?v=4";
elem.type = "image/png";
document.head.appendChild(elem);


let htmla = `
<div class="footer">
    <p>made by nmsderp ${new Date().getFullYear()}</p>
    <a href="https://nmsderp.xyz" target="_blank"><img src="https://nmsderp.xyz/gif.gif" alt="nmsderp.xyz" title="nmsderp.xyz"></a>
</div>`

document.write(htmla);
