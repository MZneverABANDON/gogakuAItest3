function fetchWebsiteData() {
    const url = document.getElementById('websiteLink').value;
    
    fetch(url).then(response => {
        return response.text();
    }).then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const textContent = doc.body.textContent || "";

        const wordCount = textContent.split(/\s+/).length;
        const bytes = new Blob([data]).size;

        document.getElementById('wordCount').textContent = "Word Count: " + wordCount;
        document.getElementById('websiteSize').textContent = "Website Size: " + bytes + " bytes";
    });

    const now = new Date();
    const currentTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    document.getElementById('currentTime').textContent = "Current Time: " + currentTime;
}

// Initial setup
const now = new Date();
const currentTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();
document.getElementById('currentTime').textContent = "Current Time: " + currentTime;
