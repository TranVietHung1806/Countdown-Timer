// đặt ngày chúng ta đếm ngược
var countDownDate = new Date("Feb 1, 2022 00:00:00").getTime();

// cập nhập sau mỗi giây đếm ngược
var x = setInterval(function() {

    // lấy ngày và giờ hôm nay
    var now = new Date().getTime();

    // tìm khoảng cách giữa bây giờ và ngày đếm ngược
    var distance = countDownDate - now;

    // Tính toán thời gian cho ngày, giờ, phút, giây
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Dom tới thẻ p, và xuất ra kết quả
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    // Set style
    document.getElementById("timer").style.color = "red";
    // VIẾT SỰ KIỆN KHI HOÀN THÀNH NGÀY ĐẾM NGƯỢC
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "CHÚC MỪNG TẾT NGUYÊN ĐÁN 2020";
    }
}, 1000);