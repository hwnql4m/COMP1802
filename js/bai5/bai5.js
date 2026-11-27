
let mangSanPham = [
    "Sony Xperia",
    "Samsung Galaxy",
    "Nokia 6",
    "Xiaomi Redmi Note 4",
    "Apple iPhone 6s",
    "Xiaomi Mi 5s Plus",
    "Apple iPhone 8 Plus",
    "Fujitsu F-04E",
    "Oppo A71"
];


function hienThiDanhSach() {
    let noiDung = "";
    for (let i = 0; i < mangSanPham.length; i++) {
        noiDung += "<tr>";
        noiDung += "<td>" + mangSanPham[i] + "</td>";
        noiDung += "<td><button onclick='suaSanPham(" + i + ")'>Edit</button></td>";
        noiDung += "<td><button onclick='xoaSanPham(" + i + ")'>Delete</button></td>";
        noiDung += "</tr>";
    }
    document.getElementById("danh_sach").innerHTML = noiDung;
    document.getElementById("so_luong").innerText = mangSanPham.length + " products";
}


function themSanPham() {
    let ten = document.getElementById("ten_moi").value.trim();
    if (ten === "") {
        alert("Vui lòng nhập tên sản phẩm!");
        return;
    }
    mangSanPham.push(ten);
    document.getElementById("ten_moi").value = ""; // Xóa trắng ô nhập sau khi thêm
    alert("Đã thêm sản phẩm thành công!");
    hienThiDanhSach();
}


function suaSanPham(index) {
    let tenSua = prompt("Nhập tên mới cho sản phẩm:", mangSanPham[index]);
    if (tenSua !== null && tenSua.trim() !== "") {
        mangSanPham[index] = tenSua.trim();
        hienThiDanhSach();
    }
}

// Bước 7: Hàm xóa sản phẩm tại vị trí index
function xoaSanPham(index) {
    if (confirm("Bạn có chắc muốn xóa " + mangSanPham[index] + " không?")) {
        mangSanPham.splice(index, 1);
        hienThiDanhSach();
    }
}


hienThiDanhSach();
