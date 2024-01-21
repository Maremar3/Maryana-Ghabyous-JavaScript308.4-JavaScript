let data =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26';
  //-------------one---------------------------------//
  let array=data.split("\n");
  //console.log(array);

  let rows=[]
  for(let i =0;i<array.length;i++){
  rows.push(array[i].split(","))
}

console.log(rows);
//Cache this two-dimensional array in a variable for later use.
oldarray=rows
//-----------------Two--------------------------//
let objstr1
for(let i=1;i<=4;i++){
    
    for(let j=0;j<4;j++){
       objstr1={ID:rows[i][0],Name:rows[i][1],Occupution:rows[i][2],Age:rows[i][3]}
       
    }
       console.log(objstr1)
    
    }
    

//--------------------------------Three------//
//For each row of data in the result array ,create an object where the key of each value is the heading for that value’s column.
//let objstr1
let idd=[]
var lowercase
let enteries
let key,keys
let result={}
for(let i=1;i<=4;i++){
    
for(let j=0;j<4;j++){
   objstr1={ID:rows[i][0],Name:rows[i][1],Occupution:rows[i][2],Age:rows[i][3]}
  keys = Object.keys(objstr1);
 key = keys[j];
  //Convert these keys to all lowercase letters for consistency.
  //Store these objects in an array, in the order that they were originally listed.
    result[key.toLowerCase()] = objstr1[key];
}

console.log(result)
//console.log(keys)
}
//-----------------------four--------------------//















//let key, keys = Object.keys(objstr1);
//let i

//let result={}



// for( i=1;i<=4;i++){
// for(let j=0;j<4;j++){

//     key = keys[j];
  
//     result[key.toLowerCase()] = objstr1[key];
 
// }
// //console.log(result);  
// }


 
   // total--;
//while(total>=0)





// for(let i=1;i<=4;i++){
    
//     for(let j=0;j<4;j++){
 
//         result[key.toLowerCase()] = objstr1[key];   }
// }



//Convert these keys to all lowercase letters for consistency.
// let idd=[]
let iden = [42, 57, 63,98];
let namee = ["Bruce","Bob","Blaine","Bill"];
let occupationn = ["Knight", "Fry Cook", "Quiz Master", "Doctor"];
let agee = [41,19,58,26];

for(let conv=0;conv<4;conv++)
{
////stored lowercase object in array
    idd[conv]=rows[0][conv].toLowerCase()
}
//console.log(idd)
//Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.


   // let idd=rows[0][i].toLowerCase()
   // console.log(idd)

//-----------------------
let id = [42, 57, 63,98];
let name = ["Bruce","Bob","Blaine","Bill"];
let occupation = ["Knight", "Fry Cook", "Quiz Master", "Doctor"];
let age = [41,19,58,26];
let obj = Object.assign({id, name, occupation, age});
let newArray = [obj];
//console.log(JSON.stringify(obj));
//console.log(newArray)

//-------------------------------


// let id=[42,54,21,68]
// let Name= ["Bruce","Bob","Blaine","Bill"];
// let occupation = ["Knight", "Fry Cook", "Quiz Master", "Doctor"];
// let age = [41,19,58,26];
// let obj = Object.assign({id, Name, occupation, age});
// console.log(obj)
// let newArray = [obj];
//console.log(JSON.stringify(obj));
//console.log(newArray)
//--------------------------------------------
// let str110=str1[0]
//     let str111=str1[1]
//     let str112=str1[2]
//     let str113=str1[3]
//     const objstr1={str110:str2[0],str111:str2[1],str112:str2[2],str113:str3[3]}



//--------------------------------------------
//for(colnum=0;colnum<4;colnum++){
    //console.log(originalstr[i])
    // if (originalstr[colnum]=='/n')
    // break;
    // }
    //     console.log(colnum);


// let columns=[];
// for(let i=0;i<[rows.length];i++){
//     columns.push(rows[i][0].split(','))

// }
// //console.log(columns)
// //let table=columns.flat()
// //console.log(table)
// console.log(array);