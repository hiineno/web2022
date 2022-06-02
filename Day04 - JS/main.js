// Khai báo biến
var a = 10;
a = 20;

let b = 10;
b = 20;

const c = 10;

console.log(a);
// Thay thế bằng const hoặc let
// bỏ alert();
// bỏ thằng var
// sử dụng const và let khi nào?
// 90% Sử dụng const khi khai báo biến
// Sử dụng let khi giá trị sẽ thay đổi trong tương lai

// ===================================
// Kiểu dữ liệu nguyên thủy: number, string, boolean
// kiểu object, null, undefined
const myName = "Đinh Việt Đức";
const myAge = 20;
const myChildren = ["Cc", "aa"]; // 

const myInfo = {
  name: "Dat",
  age: 30,
  married: true,
  "Ma sinh vien": "PH12345"
}; // myInfo.name | myInfo["name"];

console.log("myinfo", myInfo["Ma sinh vien"]);
// ===================================
// làm việc với mảng
const students = [
  { id: 1, code: "PH123", name: "Dat" }, // student
  { id: 2, code: "PH456", name: "Tung" }, // student
  { id: 3, code: "PH789", name: "Kien" } // student
];

let result = "";
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  // console.log(student);
  result += `<div>
                <h2>Ho ten: ${student.name}</h2>
                <span>Ma sinh vien: ${student.code}</span>
            </div>`;
}
console.log("result", result);
// Làm việc với DOM
// selector: querySelector, querySelectorAll - getElementById
// document.querySelector('css selector')
// document.getElementById('id element')

// luôn kiểm tra xem biến đó có tồn tại giá trị ko
// làm việc với chuỗi sử dụng backstick ~ dấu huyền
const app = document.getElementById("app");
if (app) {
  app.innerHTML = result;
}



