let mangSo = []; // Khai báo mảng số

// Xử lý khi người dùng thêm số vào mảng
// document.getElementById("nhapMang").onsubmit = function (event) {
//   event.preventDefault();
//   let soN = document.getElementById("nhapMang").value;
//   mangSo.push(Number(soN)); // Chuyển giá trị nhập vào thành số và thêm vào mảng
//   document.getElementById("hienthi").innerHTML = mangSo.join(", ");
//   console.log(mangSo);
// };
function xuat() {
  let xuat = "";
  let nhap = document.getElementById("nhapMang").value;
  mangSo.push(nhap);
  for (let i = 0; i < mangSo.length; i++) {
    if (i > 0) {
      xuat += ",";
    }
    xuat += mangSo[i];
  }
  document.getElementById("ht").innerText = xuat;
}

/**
 * BÀI 1. TỔNG CÁC SỐ DƯƠNG CÓ TRONG MẢNG
 */
function bai1() {
  let tong = 0;
  for (let so of mangSo) {
    if (so > 0) {
      tong += parseInt(so);
    }
  }
  document.getElementById(
    "hienthibai1"
  ).innerHTML = `Tổng các số dương: ${tong}`;
}

/**
 * BÀI 2. ĐẾM CÁC SỐ DƯƠNG CÓ TRONG MẢNG
 */ function bai2() {
  let dem = 0;
  for (let so of mangSo) {
    let soThuc = parseFloat(so);
    if (soThuc > 0) {
      dem++;
    }
  }
  document.getElementById(
    "hienthibai2"
  ).innerHTML = `Số lượng số dương: ${dem}`;
}

/**
 * BÀI 3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
 */
function bai3() {
  if (mangSo.length === 0) {
    document.getElementById("hienthibai3").innerHTML = "Mảng rỗng";
    return;
  }

  let mangSoThuc = mangSo.map(Number);
  let soNhoNhat = Math.min(...mangSoThuc);

  document.getElementById(
    "hienthibai3"
  ).innerHTML = `Số nhỏ nhất: ${soNhoNhat}`;
}

/**
 * BÀI 4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
 */
function bai4() {
  let soDuongNhoNhat = null;
  for (let so of mangSo) {
    if (so > 0 && (soDuongNhoNhat === null || so < soDuongNhoNhat)) {
      soDuongNhoNhat = so;
    }
  }
  let hienThi =
    soDuongNhoNhat !== null
      ? `Số dương nhỏ nhất: ${soDuongNhoNhat}`
      : "Không có số dương trong mảng";
  document.getElementById("hienthibai4").innerHTML = hienThi;
}

/**
 * BÀI 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
 */
function bai5() {
  let soChanCuoiCung = -1;
  for (let i = mangSo.length - 1; i >= 0; i--) {
    if (mangSo[i] % 2 === 0) {
      soChanCuoiCung = mangSo[i];
      break;
    }
  }
  document.getElementById(
    "hienthibai5"
  ).innerHTML = `Số chẵn cuối cùng: ${soChanCuoiCung}`;
}

/**
 * BÀI 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
 */
function bai6() {
  let viTri1 = document.getElementById("so1").value * 1;
  let viTri2 = document.getElementById("so2").value * 1;
  let so1 = mangSo[viTri1];
  let so2 = mangSo[viTri2];
  for (let i = 0; i < mangSo.length; i++) {
    if (i == viTri1) {
      mangSo[i] = so2;
    } else if (i == viTri2) {
      mangSo[i] = so1;
    }
  }
  document.getElementById(
    "hienthibai6"
  ).innerHTML = `Mảng sau khi đổi chỗ: ${mangSo}`;
  console.log(mangSo);
}

/**
 * BÀI 7. Sắp xếp mảng theo thứ tự tăng dần
 */
 function bai7() {
  mangSo.sort((a, b) => a - b);
  document.getElementById(
    "hienthibai7"
  ).innerHTML = `Mảng sau khi sắp xếp: ${mangSo.join(", ")}`;
};

/**
 * BÀI 8. Tìm số nguyên tố đầu tiên có trong mảng
 */
function kiemTraSoNguyenTo(so) {
  if (so < 2) return false;
  for (let i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) return false;
  }
  return true;
}

function bai8() {
  let soNguyenToDauTien = -1;
  for (let so of mangSo) {
    if (kiemTraSoNguyenTo(so)) {
      soNguyenToDauTien = so;
      break;
    }
  }
  document.getElementById(
    "hienthibai8"
  ).innerHTML = `Số nguyên tố đầu tiên: ${soNguyenToDauTien}`;
};

/**
 * BÀI 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 */
let mangSoThuc = [];

document.getElementById("option_content_bai9").onsubmit = function (event) {
  event.preventDefault();
  let soThuc = parseFloat(document.getElementById("sothuc").value);
  mangSoThuc.push(soThuc);
  document.getElementById("hienthimang").innerHTML = mangSoThuc.join(", ");
};

function kiemTraSoNguyen(so) {
  return Number.isInteger(so);
}

function bai9() {
  let demSoNguyen = 0;
  for (let so of mangSoThuc) {
    if (kiemTraSoNguyen(so)) {
      demSoNguyen++;
    }
  }
  document.getElementById("hienthibai9").innerHTML = `Số lượng số nguyên: ${demSoNguyen}`;
}
/**
 * BÀI 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
 */
function bai10 () {
  let demSoDuong = 0;
  let demSoAm = 0;
  for (let so of mangSo) {
    if (so > 0) {
      demSoDuong++;
    } else if (so < 0) {
      demSoAm++;
    }
  }
  let ketQua;
  if (demSoDuong > demSoAm) {
    ketQua = `Số dương nhiều hơn: ${demSoDuong} so với ${demSoAm}`;
  } else if (demSoDuong < demSoAm) {
    ketQua = `Số âm nhiều hơn: ${demSoAm} so với ${demSoDuong}`;
  } else {
    ketQua = `Số lượng số dương và số âm bằng nhau: ${demSoDuong}`;
  }
  document.getElementById("hienthibai10").innerHTML = ketQua;
};
