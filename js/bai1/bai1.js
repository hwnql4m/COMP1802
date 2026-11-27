
let tienVay = Number(prompt("Nhập số tiền vay (triệu đồng):"));
let laiSuat = Number(prompt("Nhập lãi suất (%/năm):"));
let soNam = Number(prompt("Nhập số năm (n):"));


let tienLaiMotNam = tienVay * (laiSuat / 100);
let tongTienPhaiTra = tienVay + soNam * tienLaiMotNam;


alert("Tổng số tiền phải trả sau " + soNam + " năm là: " + tongTienPhaiTra + " triệu đồng");
document.write("Tổng số tiền phải trả sau " + soNam + " năm là: <b>" + tongTienPhaiTra + " triệu đồng</b>");
