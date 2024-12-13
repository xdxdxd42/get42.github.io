// script.js
document.getElementById('download-btn').addEventListener('click', function () {
    // Programmatically create a link and trigger the download
    const filePath = 'files/snowfall (Slowed  Reverb).mp3'; // File path
    const link = document.createElement('a'); // Create an <a> element
    link.href = filePath;
    link.download = 'snowfall (Slowed  Reverb).mp3'; // Set the file name for download
    link.click(); // Trigger the click event
});

document.getElementById("discord-btn").addEventListener("click", () => {
    window.location.href = "https://discord.gg/4GEUnyXUm4";
});

document.getElementById("telegram-btn").addEventListener("click", () => {
    window.location.href = "https://t.me/get42ex";
});
