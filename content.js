
var Href = window.location.href; 

console.log(Href);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var Href = window.location.href;
        console.log(Href);
    }
    });