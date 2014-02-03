
/* JavaScript content from js/doctor.js in folder common */
/**
 * 
 */

function loadPage(){
	var pagepath = "pages/DoctorDetails.html";
	pagesHistory.push("pages/doctor.html");
	$("#container").load(pagepath, function(){WL.Logger.info("Page loaded");});
			
	
}