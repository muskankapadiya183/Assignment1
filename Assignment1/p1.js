try
{
	var os = require("os");
	console.log("*************** OS MODULE ***************\n");
	console.log("Platform = "+os.platform());
	console.log("CPU Architecture = "+os.arch());
	console.log("Total Memory = "+os.totalmem() / (1024 * 1024 * 1024));
	console.log("Free Memory = "+os.freemem() / (1024 * 1024 * 1024));
	console.log("User Information = "+os.userInfo());
	console.log("******************************************");
}
catch(err)
{
	console.log("Error = "+err);
}