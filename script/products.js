
function removeItem(n) {
  var temp = document.getElementsByClassName('tbl-content')[0];
  temp = temp.getElementsByTagName('tr');
  if (confirm('Bạn có muốn xóa?') == true) {
    deleteArr(n);
    reloadArr();
    showItem();
  }
}
function deleteArr(position) {
  var arrLength = productArr.length;
  for (var i=position; i<arrLength; i++) {
    productArr[i] = productArr[i+1];
  }
  productArr.pop();
}
function reloadArr() {
  var arrLength = productArr.length;
  var productToShowOnScreen = '<table>';
  for (var i=0; i<arrLength; i++) {
    productToShowOnScreen += '<tr>' +
      '<td>' + productArr[i].id + '</td>' +
      '<td>' + productArr[i].name + '</td>' +
      '<td>' + productArr[i].firstPrice + '</td>' +
      '<td>' + productArr[i].fixPrice + '</td>' +
      '<td>' +
        '<button>Sửa</button>' +
        '<button onclick="removeItem(' + i + ')">Xóa</button>' +
      '</td>' +
    '</tr>';
  }
  productToShowOnScreen += '</table>';
  document.getElementsByClassName('tbl-content')[0].innerHTML = productToShowOnScreen;
}

function showItem() {
  var input, filter, table, tr, td, i, txtValue, trLength, filterType;
  input = document.getElementById("tbl-searchbar");
  filter = input.value.toUpperCase();
  table = document.getElementsByClassName('tbl-content')[0];
  tr = table.getElementsByTagName("tr");
  trLength = tr.length;
  filterType = document.getElementById("filterType").value;
  for (i=0; i<trLength; i++) {
    td = tr[i].getElementsByTagName("td")[filterType];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function editArr(n) {

}
