var employee = JSON.parse(data);
var TypeSearch = (function () {
    function TypeSearch() {
        this.container = document.getElementById('container');
        this.searchKey = document.getElementById('search');
        this.wireEvents();
    }
    TypeSearch.prototype.wireEvents = function () {
        var _this = this;
        if (this.searchKey)
            this.searchKey.addEventListener('click', function () { return _this.search(); });
    };
    TypeSearch.prototype.createEmp = function (employee) {
        console.log("i am called");
        var table = document.createElement('table');
        table.setAttribute("id", "table");
        table.className = "table";
        console.log(table);
        for (var i = 0; i < employee.length; i++) {
            var tr = [];
            tr[i] = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var name_1 = document.createTextNode(employee[i].name);
            var address = document.createTextNode(employee[i].address);
            var designation = document.createTextNode(employee[i].designation);
            td1.appendChild(name_1);
            td2.appendChild(address);
            td3.appendChild(designation);
            tr[i].appendChild(td1);
            tr[i].appendChild(td2);
            tr[i].appendChild(td3);
            table.appendChild(tr[i]);
        }
        return table;
    };
    TypeSearch.prototype.search = function () {
        this.deleteemployee();
        var newemployee = [];
        var match = document.getElementById('textVal').value;
        var reg = new RegExp(match);
        for (var i = 0; i < employee.length; i++) {
            if (employee[i].name.match(reg) || employee[i].address.match(reg) || employee[i].designation.match(reg)) {
                newemployee.unshift(employee[i]);
            }
        }
        this.container.appendChild(this.createEmp(newemployee));
    };
    TypeSearch.prototype.deleteemployee = function () {
        document.getElementById('table').remove();
    };
    return TypeSearch;
}());
var t = new TypeSearch();
try {
    t.container.appendChild(t.createEmp(employee));
}
catch (e) {
    console.log(e.message);
}
