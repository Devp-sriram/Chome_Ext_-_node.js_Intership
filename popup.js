document.addEventListener('DOMContentLoaded',  function() {
     document.getElementById('showTitle').addEventListener('click', function() {
        
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentTab = tabs[0];
            if (currentTab) {
                document.getElementById('title').textContent = currentTab.title;
                console.log(currentTab.title);
            } else {
                console.log("No active tab found.");
            }
        });
    });
});

