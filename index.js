let data =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26';
  //-------------one AND Two---------------------------------//
  let array=data.split("\n");
  //console.log(array);
  let rows=[]
  
//Instead of hard-coding four columns per row, expand your code to accept any number of columns.
  for(let i =0;i<array.length;i++){
    //Store your results in a two-dimensional array.
  rows.push(array[i].split(","))
}
console.log(rows)
oldarray=rows

//-----------------three-----------------------//
//declaring resulting object
let obj = {};
let arr = [];
//goes for all rows in table except the first one
for (let i = 1; i < rows.length; i++){
    obj = {};
    for(let j = 0; j < rows[0].length; j++){
//create an object that has “key” as j element in 0 row and “value” as j-element in i row
    obj[rows[0][j].toLowerCase()] = rows[i][j];
    }
//add worker at the end of our resulting array
    arr.push(obj);
    //console.log(obj)
}
console.log(arr);

//------------------Four-------------------//
//Remove the last element from the sorted array.
let remove=arr.pop()


let pp={ id: "48", name: "Barry", occupation: "Runner", age: "25" }
//Insert the following object at index 1:
arr.splice(1,0,pp)
//Add the following object to the end of the array:
let per={id: "7", name: "Bilbo", occupation: "None", age: "111" }
let add=arr.push(per)
console.log(arr)
//calculate the averages of age
let average;
let intage=0
 for (let p=0;p<arr.length;p++){
    intage+=parseInt(arr[p].age)
    average=intage/arr.length
    //console.log(Object.values(workers))
 }
 console.log(average)
 //---------------five---------------
 //transform the final set of data back into CSV format.
 /////console.log(arr)
 let s = arr.map(getd);
function getd(rows) {
  return [rows.id,rows.name,rows.occupation,rows.age].join(",");
}
//  let show = arr.map( (columns)=>{ [columns.id,columns.name,columns.occupation,columns.age].join(",")} );
let title = "id,name,occupation,age"
s.unshift(title)
// return
 console.log(s)
 let csv=s.toString();
 console.log(csv)