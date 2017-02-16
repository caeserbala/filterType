let emp:any[] = [{ "id": 0,  "name": "bala" , "address" : "india" , "designation": "manager"},
{ "id": 1, "name": "balaji" , "address" : "americaba" , "designation": "team leader"},
{  "id": 2,"name": "ram" , "address" : "malaysia" , "designation": "human resorce"}];
//let emp : any[] =config;
//alert(emp);
let newEmp=[];


let container = document.getElementById('container');

//To render table
function display(emp) 
{
 let table = document.createElement('table');
 let tr=[];
 for(let i=0;i<emp.length;i++)
 {
      tr[i] = document.createElement('tr');
     let td1 = document.createElement('td');
    let td2 = document.createElement('td');
      let td3 = document.createElement('td');

    let name = document.createTextNode(emp[i].name);
    let address = document.createTextNode(emp[i].address);
    let designation = document.createTextNode(emp[i].designation);

    td1.appendChild(name);
    td2.appendChild(address);
     td3.appendChild(designation);
  
    
    tr[i].appendChild(td1);
    tr[i].appendChild(td2);
      tr[i].appendChild(td3);

    table.appendChild(tr[i]);

 }
 return table;
}

container.appendChild(display(emp));

//To find particular data over in table
function search()
{   
    let names=[];
    let address=[];
    let designation=[];
    for(let i=0;i<emp.length;i++)
    {
        names [i]= emp[i].name;
       // console.log(names[i]);
          address [i]= emp[i].address;
         // console.log(address[i]);
             designation [i]= emp[i].designation;
           //  console.log(designation[i]);
    }

    //finding matching regex 
let findReg = function(match , a: string[]) {
    let reg = new RegExp(match);

    return a.filter(function(item){
        return typeof item == 'string' && item.match(reg); 
    });
}
let text= (<HTMLInputElement>document.getElementById('textVal')).value;
console.log(text);

//values results from regex
let resultName = findReg(text,names );
let resultAddress = findReg(text ,address );
let resultDesigination = findReg(text ,designation );
console.log(resultName);
console.log(resultAddress);
console.log(resultDesigination);
let removeVal=[];
  //finding matched element;
  let removeId = function(resultName,resultAddress,resultDesigination)
  { for(let i=0;i<emp.length;i++)
    { 
      for(let j=0;j<emp.length;j++)
      {
      if(emp[i].name==resultName[j]||emp[i].address==resultAddress[j]||emp[i].designation==resultDesigination[j])
      {
removeVal.push(emp[i].id)
console.log("value of employee are equal"+emp[i].name+ ""+emp[i].id);
      }
      }
    }
  }  
removeId (resultName,resultAddress,resultDesigination);


//remove repeated values
let unique = removeVal.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
console.log("removal id's are "+unique);


//to find unique value
for(let i=0;i<unique.length+1;i++)
{
  newEmp.push(emp[unique.pop()]);
  console.log("new employeee name"+newEmp[i].name);
}

container = document.getElementById('container');
 container.innerHTML = " ";
 container = document.getElementById('container');

 container.appendChild(display(newEmp));
    
}



