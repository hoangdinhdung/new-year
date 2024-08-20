
const countdownElement = document.getElementById('countdown');
var lunar = Lunar.fromYmd(new Date().getFullYear() + 1, 1, 1);
var solar = lunar.getSolar();
console.log('Lunar', solar.getDay(), solar.getMonth(), solar.getYear());
console.log('check date', Date);
// console.log(solar.toFullString());
// console.log(solar.getLunar());

// Đếm ngược đến giao thừa âm lịch

// Thời gian giao thừa (30 tháng Chạp năm Giáp Thìn - 28 tháng 1 năm 2025 dương lịch)
const newYearEve = new Date(solar.getYear(), solar.getMonth() - 1, solar.getDay()).getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = newYearEve - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
};

setInterval(updateCountdown, 1000);

// Tạo các phần tử tuyết động
function createSnowflakes() {
    const numberOfSnowflakes = 1000; // Số lượng tuyết rơi
    const container = document.body;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        // Xếp ngẫu nhiên vị trí trái và thời gian hoạt động
        const leftPosition = Math.random() * 90 + 5; // Từ 5% đến 95%
        const animationDuration = Math.random() * 15 + 5; // Từ 5s đến 20s
        snowflake.style.left = `${leftPosition}%`;
        snowflake.style.animationDuration = `${animationDuration}s`;
        container.appendChild(snowflake);
    }
}

// Gọi hàm để tạo tuyết rơi khi trang tải
document.addEventListener('DOMContentLoaded', createSnowflakes);

