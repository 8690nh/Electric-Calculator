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
