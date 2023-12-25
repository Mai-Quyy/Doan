

function check_button() {

 
  var name_ = document.getElementById("form-name").value;
  var pw = document.getElementById("form-password").value;
  var cfpw = document.getElementById("form-cfpassword").value;

  if (name == 0)
      alert('chưa nhập tên đăng nhập')
  else if (pw == 0)
      alert('chưa nhập mật khẩu')
  else if (cfpw == 0)
      alert('chưa nhập mật khẩu')
  else
      alert('đăng ký thành công')
      window.location.href="./login.html";
}
var dataBase = indexedDB.open("Thi_DB", 1);
dataBase.onerror = function (event) {
  console.log("error: "); //Thông báo database không mở được
};
dataBase.onsuccess = function (event) {
  db = dataBase.result;
  console.log("success: " + db); //Thông báo database có mở được
};
//Phương thức tạo một đối tượng khách hàng cho database
dataBase.onupgradeneeded = function () {
  var db = event.target.result;
  var createStore = db.createObjectStore("signin", { keyPath: "name" })
};
function addStudents() {
  db = dataBase.result;
  //Mở giao dịch đọc ghi dữ liệu vào đối tượng khách hàng
  var tx = db.transaction("signin", "readwrite")
  //Thao tác trên đối tượng
  var store = tx.objectStore("signin")
  var stduserName = document.getElementById("form-name").value;
  var stdPassword = document.getElementById("form-password").value;
  var stdcfPassword = document.getElementById("form-cfpassword").value;
  store.put({ name:stduserName, password: stdPassword, cfpassword:stdcfPassword })
  //nạp danh dách đối tượng vào đối tượng khách hàng
  // for (var i in objCustomer) {
  //     store.put(objCustomer[i])
  // }
  if (store.count == null)
      alert("Không thêm được dữ liệu")
  else
      alert("Thêm được dữ liệu thành công")
}
