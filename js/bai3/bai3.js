function xemGia() {
    
    let ten = document.getElementById("ten_hoa_qua").value.trim();
    let gia = "";

    
    switch (ten) {
        case "Ổi":
            gia = "20000 VNĐ/kg";
            break;
        case "Dưa Hấu":
            gia = "20000 VNĐ/kg";
            break;
        case "Táo":
            gia = "30000 VNĐ/kg";
            break;
        case "Cam":
            gia = "40000 VNĐ/kg";
            break;
        case "Chôm Chôm":
            gia = "40000 VNĐ/kg";
            break;
        case "Măng Cụt":
            gia = "50000 VNĐ/kg";
            break;
        default:
            gia = "Tìm không thấy";
    }

    
    document.getElementById("ket_qua").innerText = gia;
}
