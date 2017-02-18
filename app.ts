//to get value from External fril emp.json
let employee : any[]  = JSON.parse(data);

//Employee type interface same format as JSON data

interface EmpType
{
    name:string;
    address:string;
    designation: string;
}

//Main execution class implements interface EmpType
class TypeSearch implements EmpType
{
    name: string;
    address: string;
    designation: string;
    container = document.getElementById('container');
    searchKey= document.getElementById('search');
    constructor()
    {    
    this.wireEvents();
        
}

//mapping search button from index.html to search function on app.ts

wireEvents()
{ if(this.searchKey)
   this.searchKey.addEventListener('click',()=>this.search());
}
   
//createEmp : used to create Table based up on them employee object passed over in function
//function will return table based up on the employee data passed over in parameter
    createEmp(employee)
    { 
        console.log("i am called");
        let table = document.createElement('table');
       table.setAttribute("id", "table");
       table.className="table";
       console.log(table);
       for(let i=0;i<employee.length;i++)
 {
    
      let tr=[];
      tr[i] = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');

    let name = document.createTextNode(employee[i].name);
    let address = document.createTextNode(employee[i].address);
    let designation = document.createTextNode(employee[i].designation);

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
//search() : to return new value which contains elements which are matched with regEx expression

search()
{  
   this.deleteemployee();  // function called to delete exsiting table;
    let newemployee=[];
 
 //Getting value from input text box from index.html
    let match= (<HTMLInputElement>document.getElementById('textVal')).value;
   
   
    let reg = new RegExp(match);
    
//checking regEx value with the employee object and to push employee object which matches with regEx values
for(let i=0;i<employee.length;i++)
{
if(employee[i].name.match(reg) ||employee[i].address.match(reg) ||employee[i].designation.match(reg) )
{
newemployee.unshift(employee[i]);
}
}
this.container.appendChild(this.createEmp(newemployee));


}


 //to get element table and to remove the element from DOM
deleteemployee()
{
    document.getElementById('table').remove();
}


}


let t = new TypeSearch();
//try catch block
try{
t.container.appendChild(t.createEmp(employee));
}
catch(e)
{
console.log(e.message);
}

