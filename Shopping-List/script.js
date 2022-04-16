var selectedRow = null

function FormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Brand"] = document.getElementById("Brand").value;
    formData["Quantity"] = document.getElementById("Quantity").value;
    formData["Price"] = document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("shoppingList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Brand;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Quantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="Edit(this)">Edit</a>
                       <a onClick="Delete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Brand").value = "";
    document.getElementById("Quantity").value = "";
    document.getElementById("Price").value = "";
    selectedRow = null;
}

function Edit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Brand").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Brand;
    selectedRow.cells[2].innerHTML = formData.Quantity;
    selectedRow.cells[3].innerHTML = formData.Price;
}

function Delete(td) {
    if (confirm('Are you sure to delete this item ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("shoppingList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}