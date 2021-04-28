
//Get url
var Href = window.location.href; 
 
//Get first linked url on page
//var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(Href);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var Href = window.location.href;
        //Get first linked url on page
        //var firstHref = $("a[href^='http']").eq(0).attr("href");

        console.log(Href);

        //chrome.runtime.sendMessage({"message": "open_new_tab", "url": Href});
      }
    }
  );