//since this is common on every page, lets just add the favicon here.
let elem = document.createElement("link");
elem.rel = "shortcut icon";
elem.href = "https://c.dumo.se/dumo178removebg.png";
elem.type = "image/png";
document.head.appendChild(elem);


let htmla = `
<iframe src="https://john.citrons.xyz/embed?ref=https://dumo.se" style="margin-left:auto;display:block;margin-right:auto;max-width:732px;width:100%;height:94px;border:none;"></iframe>
<hr />
<div class="container">
    <h1>Stalk me!</h1>
    <div class="buttons">
        <button id="twitterbtn">Twitter</button>
        <button id="guildedbtn">Guilded</button>
        <button id="pronounspagebtn">Pronouns.page</button>
        <button id="blueskybtn">Bluesky</button>
        <button id="replitbtn">Replit</button>
    </div>
</div>
<div class="footer">
    <p>made by dumo. ${new Date().getFullYear()}</p>
</div>`

document.write(htmla);

let assignments = {
    twitterbtn: "https://twitter.com/realdumo",
    guildedbtn: "https://guilded.gg/u/BA4X",
    pronounspagebtn: "https://en.pronouns.page/@dumo",
    blueskybtn: "https://bsky.app/profile/dumo178.bsky.social",
    replitbtn: "https://replit.com/@dumorando",
}

let keys = Object.keys(assignments);

keys.forEach(element => {
    document.getElementById(element).addEventListener("click", () => {
        window.location.replace(assignments[element]);
    })
})