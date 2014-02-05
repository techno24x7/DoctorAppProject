/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("INSERT INTO patient(`name`, `phoneno`,`email`, `a_date`, `a_time`, `description`)VALUES (?,?,?,?,?,?);");
function procedure1(name,phoneno,emailid,a_date,a_time,desp) {
	
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [name,phoneno,emailid,a_date,a_time,desp]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
var procedure2Statement = WL.Server.createSQLStatement("Select * from patient;");
function procedure2(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure2Statement,
		parameters : [param]
	});
}

