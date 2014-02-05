
/* JavaScript content from js/listpatients.js in folder common */
/**
 * 
 */

function loadPage2()
{
	
		var pagepath = "pages/displaypatientlist.html";
		pagesHistory.push("pages/listpatients.html");
		$("#container").load(pagepath, function(){WL.Logger.info("Page loaded");});
				
		
	}	
