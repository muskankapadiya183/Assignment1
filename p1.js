const readline= require("readline");

const rl=readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const fs = require("fs");
const  path = require("path");

var filename="";
var data="";
var newfname="";

//Create a Directory
var CreateDir = () => {
    rl.question("Enter the  Directory Name := " , (ans) => {
        var dirname = ans;
        fs.mkdir(path.join(__dirname , dirname) , (err) => {
            if(err)
            {
                console.log(err);
                rl.close();
            }
            else
            {
                console.log("Directory Created Successfully......");
                repeat();
            }
        });
    });

};
 
// Remove the directory
 var RemoveDir = () => {
     console.log("Delete the Directory..... ");
     rl.question("Enter the  Direcory Name := " , (ans) => {
        
        fs.rmdir(ans , (err) => {
          
            if (err)
            {   
                console.log(err);
                rl.close();
            }
            else
            {
                console.log("Direcory Deleted Successfully...");
                repeat();
            }
        });

    });
 };
 
// File Creation Module...
var letsCreateFile = () => {
    fs.writeFile(filename , data , (err) => {
        if (err)
        {
            console.log(err);
            rl.close();
        }
        else
        {
            console.log("File Created Successfully...");
            repeat();
        }
    });
};

// Create New File...
var CreateFile = () => {
    
    rl.question("Enter the File Name = " , (ans) => {
        filename = ans + ".txt";

        rl.question("Enter the Data = " , (ans) => {
            data = ans;
            letsCreateFile();
        });

    });

};

// Read File...
var OpenFile = () => {
    console.log("Open File");
    
    rl.question("Enter the File Name = " , (ans) => {
        fname = ans + ".txt";
        fs.readFile(fname , "utf8" , function(err , data) {

            if(err)
            {
                console.log(err);
                rl.close();
            }
            else
            {
                console.log("\n==========================\n");
                console.log("\n********** DATA ***********");
				console.log("\n---------------------------\n")
                console.log(data,"\n"); 
                console.log("\n===========================\n");
                repeat();
            }

        });
    });    

};

// Append File...
var AppendFile = () => {
    
    rl.question("Enter the File Name := " , (ans) => {
        fname = ans + ".txt";
        rl.question("Enter Data Which You Want To Append := " , (ans) => {
            data = ans;
            fs.appendFile(fname , data , (err) => {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log("File Appended Successfully......");
                    repeat();
                }
            });
        });
    });

};

// Update | Replace File...
var UpdateFile = () => {
   
    rl.question("Enter the File Name := " , (ans) => {
        fname = ans + ".txt";
        rl.question("Enter the  new Data := " , (ans) => {
            data = ans;
            fs.writeFile(fname , data , (err) => {
                if(err)
                {
                    console.log( err);
                    rl.close();
                }
                else
                {
                    console.log("Data  are Updated......");
                    repeat();
                }
            });
        });
    });

};

// Rename File...
var RenameFile = () => {
    
    rl.question("Enter the Old File Name := " , (ans) => {
        fname = ans + ".txt";
        rl.question("Enter the New File name := " , (ans) => {
            newfname = ans + ".txt";
            fs.rename(fname , newfname , (err) => {
                if(err)
                {
                    console.log(err);
                    rl.close();
                }
                else
                {
                    console.log("Rename File Successfully...");
                    repeat();
                }
            });
        });
    });

};

// Delete File...
var DeleteFile = () => {

    rl.question("Enter the   File Name := " , (ans) => {
        fname = ans + ".txt";

        fs.unlink(fname , (err) => {
            if(err)
            {
                console.log(err);
                rl.close();
            }
            else
            {
                console.log("File Delete Successfully...");
                repeat();
            }

        });

    });

};

// Menu...
const menu = () => {
    console.log("\n*************** File Module ***************");
    console.log("\n1. Create Directory");
    console.log("2. Remove Directory");
    console.log("3. Create File");
    console.log("4. Read File");
    console.log("5. Delete File");
    console.log("6. Append Data In File");
    console.log("7. Update | Replace File with New Data");
    console.log("8. Rename File");
    console.log("9. Exit");
    console.log("\n*********************************************\n");

};

//Start.....
var start = () => {

    rl.question("Enter Your Choice := " , (ans) => {

        if(ans === "1")
        {
            CreateDir();
        }
        else if(ans === "2")
        {
            RemoveDir();
        }
        else if(ans === "3")
        {
            CreateFile();
        }
        else if(ans === "4")
        {
            OpenFile();
        }
        else if(ans === "5")
        {
            DeleteFile();
        }
        else if(ans === "6")
        {
            AppendFile();
        }
        else if(ans === "7")
        {
            UpdateFile();
        }
        else if(ans === "8")
        {
            RenameFile();
        }
        else if(ans === "9")
        {
            rl.close();
        }
        else
        {
            console.log("Invalid Choice.......");
        }

    });

};

//Repeat....
var repeat = () => {
    menu();
    start();
};

repeat();