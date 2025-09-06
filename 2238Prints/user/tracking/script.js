document.querySelector("#homeBtn").addEventListener("click", function () {
    window.location.href = "/";
});

document.querySelector("#browseBtn").addEventListener("click", function () {
    window.location.href = "/browse";
});

document.querySelector("#listBtn").addEventListener("click", function () {
    window.location.href = "/list";
});



document.querySelector("#submit").addEventListener("click", function (e) {
    let trackid = Number(document.getElementById("tid").value);
    e.preventDefault()
    switch(trackid){
        case 1163306092025:
            window.location.href = `/user/tracking/ui/?id ${trackid}`;
            break
        default:
            document.querySelector(".info").textContent = `sorry, we don't have package: ${trackid}`
    };
})



