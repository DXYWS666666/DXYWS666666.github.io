document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2023-02-6'); // 设置为您的纪念日日期
    const timer = document.getElementById('timer');

    function updateTimer() {
        const now = new Date();
        const duration = now - startDate;

        let seconds = Math.floor(duration / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
  
  // 创建雪花
    function createSnowflake() {
        const snowFlake = document.createElement('i');
        snowFlake.classList.add('fas', 'fa-snowflake');
        snowFlake.style.left = Math.random() * window.innerWidth + 'px';
        snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 随机动画持续时间
        snowFlake.style.opacity = Math.random();
        snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

        document.getElementById('snow-container').appendChild(snowFlake);

        // 一段时间后移除雪花
        setTimeout(() => {
            snowFlake.remove();
        }, 5000);
    }

    // 每隔一段时间创建一个新的雪花
    setInterval(createSnowflake, 100);
  
  // 设置下一个重要日期
    const nextImportantDate = new Date('2024-02-25'); // 修改为您的重要日期

    function updateCountdown() {
        const now = new Date();
        const duration = nextImportantDate - now;

        let seconds = Math.floor(duration / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
  
  
});

