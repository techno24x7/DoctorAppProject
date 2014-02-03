/**
 * 
 */

function insertPatient(name,phoneno,emailid,a_date,a_time,desp,age,sex){
	var input = {
			adapter:"mysql",
			procedure:"procedure1",
			parameters:[name,phoneno,emailid,a_date,a_time,desp,age,sex]
	};
	WL.Client.invokeProcedure(input, {
		onSuccess:putSQLData,
		onFailure:getErrorData
	});
	 
}

function putSQLData(result)
{
   alert("hello");	
}

function getErrorData()
{}