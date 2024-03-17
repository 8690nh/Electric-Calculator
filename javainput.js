/* chỉ số điện mới và cũ, đơn giá điện theo từng khoảng
và các khoản phí cố định nếu có. Sau đó, chương trình sẽ
tính và hiển thị tổng số tiền cần thanh toán cho hóa đơn

  A = P x T
  A là điện năng đã tiêu thụ kWh
  P là công suất tiêu thụ KW
  T là thời gian sử dụng h
  0.41 for daile usage
 */

// let ue = prompt("Enter your daily kWh usage"); // used electric
// let me = prompt("Enter your monthly kWh usage"); // monthly electric usage
// let cd = new Date().getMonth(); // curren date
// let x, y, z;
// z = cd - ue;
// x = ue * 24;
// y = x * z;

let x = prompt("Tổng điện năng tiêu thụ (kWh)");
if (x <= 50) {
    if (x > 51 && x <= 100) {
document.write("Thành tiền　:　" + ((x * 1.678) + "VNĐ" * 1.08));
} else {
      document.write("Thành tiền　:　" + (x * 1.734) + "VNĐ");
  }
} else if (x > 101 && x <= 200) {
document.write("Thành tiền　:　" + (x * 2.014) + "VNĐ");
} else {
      if (x > 201 && x <= 300) {
      document.write("Thành tiền　:　" + (x * 2.536) + "VNĐ");
  } else if (x > 301 && x <= 400) {
      document.write("Thành tiền　:　" + (x * 2.834) + "VNĐ");
  } else {
        document.write("Thành tiền　:　" + (x * 2.927) + "VNĐ");
    }
  }
