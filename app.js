var emp = [{ "id": 0, "name": "bala", "address": "india", "designation": "manager" },
    { "id": 1, "name": "balaji", "address": "americaba", "designation": "team leader" },
    { "id": 2, "name": "ram", "address": "malaysia", "designation": "human resorce" }];
//let emp : any[] =config;
//alert(emp);
var newEmp = [];
var container = document.getElementById('container');
//To render table
function display(emp) {
    var table = document.createElement('table');
    var tr = [];
    for (var i = 0; i < emp.length; i++) {
        tr[i] = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var name_1 = document.createTextNode(emp[i].name);
        var address = document.createTextNode(emp[i].address);
        var designation = document.createTextNode(emp[i].designation);
        td1.appendChild(name_1);
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
function search() {
    var names = [];
    var address = [];
    var designation = [];
    for (var i = 0; i < emp.length; i++) {
        names[i] = emp[i].name;
        // console.log(names[i]);
        address[i] = emp[i].address;
        // console.log(address[i]);
        designation[i] = emp[i].designation;
    }
    //finding matching regex 
    var findReg = function (match, a) {
        var reg = new RegExp(match);
        return a.filter(function (item) {
            return typeof item == 'string' && item.match(reg);
        });
    };
    var text = document.getElementById('textVal').value;
    console.log(text);
    //values results from regex
    var resultName = findReg(text, names);
    var resultAddress = findReg(text, address);
    var resultDesigination = findReg(text, designation);
    console.log(resultName);
    console.log(resultAddress);
    console.log(resultDesigination);
    var removeVal = [];
    //finding matched element;
    var removeId = function (resultName, resultAddress, resultDesigination) {
        for (var i = 0; i < emp.length; i++) {
            for (var j = 0; j < emp.length; j++) {
                if (emp[i].name == resultName[j] || emp[i].address == resultAddress[j] || emp[i].designation == resultDesigination[j]) {
                    removeVal.push(emp[i].id);
                    console.log("value of employee are equal" + emp[i].name + "" + emp[i].id);
                }
            }
        }
    };
    removeId(resultName, resultAddress, resultDesigination);
    //remove repeated values
    var unique = removeVal.filter(function (elem, index, self) {
        return index == self.indexOf(elem);
    });
    console.log("removal id's are " + unique);
    //to find unique value
    for (var i = 0; i < unique.length + 1; i++) {
        newEmp.push(emp[unique.pop()]);
        console.log("new employeee name" + newEmp[i].name);
    }
    container = document.getElementById('container');
    container.innerHTML = " ";
    container = document.getElementById('container');
    container.appendChild(display(newEmp));
}
