
/* JavaScript content from js/doctordetails.js in folder common */
/**
 * 
 */

function loadPage(){
	var pagepath = "pages/Form.html";
	pagesHistory.push("pages/DoctorDetails.html");
	$("#container").load(pagepath, function(){WL.Logger.info("Page loaded");});
			
	
}

function goBack(){
	$("#container").load(pagesHistory.pop(), function(){WL.Logger.info("I am Back");});
}