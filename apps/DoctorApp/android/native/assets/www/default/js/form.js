
/* JavaScript content from js/form.js in folder common */
/**
 * 
 */

function insertPatient(){
	date1();
	 var name=document.getElementById("name").value;
	 var phone=document.getElementById("phone").value;
	 var age=document.getElementById("age").value;	
	 
	 var email=document.getElementById("email").value;
	 var desp=document.getElementById("desp").value;
	 
	var input = {
			adapter:"mysql",
			procedure:"procedure1",
			parameters:[name,phone,email,dt,time,desp,age,sex1]
	};
	WL.Client.invokeProcedure(input, {
		onSuccess:putSQLData,
		onFailure:getErrorData
	});
	 
}
function putSQLData(result)
{
 alert(result.invocationResult.updateStatementResult.updateCount);   
}

function getErrorData(error)
{
   alert("fail");	
}


/*function insertPatient(){
	WL.Client.invokeProcedure({
		adapter:"mysql",
		procedure:"procedure2",
		parameters:[]
}, {
		onSuccess:putSQLData,
		onFailure:getErrorData
	});
	 
}
function putSQLData(result)
{
 alert(result.invocationResult.resultSet[0].name);   
}
function getErrorData(error)
{
alert("fail");	
}

*/