// Track active time on the page
let startTime = Date.now();

window.addEventListener('beforeunload', () => {
  let endTime = Date.now();
  let timeSpent = endTime - startTime;
  
  // Store time spent on the page
  chrome.storage.local.get("siteData", (data) => {
    let siteData = data.siteData || {};
    let currentUrl = window.location.hostname;
    
    if (!siteData[currentUrl]) {
      siteData[currentUrl] = 0;
    }
    siteData[currentUrl] += timeSpent;

    chrome.storage.local.set({ siteData });
  });
});

