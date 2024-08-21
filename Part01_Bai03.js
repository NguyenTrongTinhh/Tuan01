// Tính điểm trung bình của 3 đội bóng
function tinhDiemTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

// Xác định điểm trung bình của mỗi đội bóng và xác định đội nào thắng
function xacDinhDoiThang(diemTrungBinhDolphins, diemTrungBinhKoalas) {
    if (diemTrungBinhDolphins > diemTrungBinhKoalas) {
        console.log(`2.Đội Dolphins thắng với điểm trung bình là ${diemTrungBinhDolphins.toFixed(1)} so với điểm trung bình của đội Koalas là ${diemTrungBinhKoalas.toFixed(1)}.`);
    } else if (diemTrungBinhKoalas > diemTrungBinhDolphins) {
        console.log(`2.Đội Koalas thắng với điểm trung bình là ${diemTrungBinhKoalas.toFixed(1)} so với điểm trung bình của đội Dolphins là ${diemTrungBinhDolphins.toFixed(1)}.`);
    }   else if (diemTrungBinhDolphins >= 100 && diemTrungBinhKoalas < 100) {
        console.log(`Đội Dolphins thắng với điểm trung bình là ${diemTrungBinhDolphins.toFixed(1)}, trong khi đội Koalas không đạt được điểm tối thiểu.`);
    } else if (diemTrungBinhKoalas >= 100 && diemTrungBinhDolphins < 100) {
        console.log(`Đội Koalas thắng với điểm trung bình là ${diemTrungBinhKoalas.toFixed(1)}, trong khi đội Dolphins không đạt được điểm tối thiểu.`);
    } else if (diemTrungBinhDolphins < 100 && diemTrungBinhKoalas < 100) {
        console.log(`Không có đội nào thắng! Cả hai đội đều không đạt được điểm tối thiểu hoặc hòa với điểm trung bình là ${diemTrungBinhDolphins.toFixed(1)}.`);
    }else {
        console.log(`2.Hòa! Cả hai đội đều có điểm trung bình là ${diemTrungBinhDolphins.toFixed(1)}.`);
    }
}

// Dữ liệu 1
let diemTrungBinhDolphins_1 = tinhDiemTrungBinh(96, 108, 89);
let diemTrungBinhKoalas_1 = tinhDiemTrungBinh(88, 91, 110);

console.log("Dữ liệu 1")
console.log(`1.Điểm trung bình của đội Dolphins là ${diemTrungBinhDolphins_1.toFixed(1)}`);
console.log(`1.Điểm trung bình của đội Koalas là ${diemTrungBinhKoalas_1.toFixed(1)}`);
xacDinhDoiThang(diemTrungBinhDolphins_1, diemTrungBinhKoalas_1);

// Dữ liệu Bonus 1
let diemTrungBinhDolphins_bonus_1 = tinhDiemTrungBinh(97, 112, 101);
let diemTrungBinhKoalas_bonus_1 = tinhDiemTrungBinh(109, 95, 123);

console.log("Dữ liệu Bonus 1");
console.log(`1.Điểm trung bình của đội Dolphins là ${diemTrungBinhDolphins_bonus_1.toFixed(1)}`);
console.log(`1.Điểm trung bình của đội Koalas là ${diemTrungBinhKoalas_bonus_1.toFixed(1)}`);
xacDinhDoiThang(diemTrungBinhDolphins_bonus_1, diemTrungBinhKoalas_bonus_1);

// Dữ liệu Bonus 2
let diemTrungBinhDolphins_bonus_2 = tinhDiemTrungBinh(97, 112, 101);
let diemTrungBinhKoalas_bonus_2 = tinhDiemTrungBinh(109, 95, 106);

console.log("Dữ liệu Bonus 2");
console.log(`1.Điểm trung bình của đội Dolphins là ${diemTrungBinhDolphins_bonus_2.toFixed(1)}`);
console.log(`1.Điểm trung bình của đội Koalas là ${diemTrungBinhKoalas_bonus_2.toFixed(1)}`);
xacDinhDoiThang(diemTrungBinhDolphins_bonus_2, diemTrungBinhKoalas_bonus_2);
