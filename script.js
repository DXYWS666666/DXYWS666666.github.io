document.addEventListener('DOMContentLoaded', function() {
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
});
