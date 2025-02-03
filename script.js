function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString();
}

setInterval(updateTime, 1000);
updateTime();