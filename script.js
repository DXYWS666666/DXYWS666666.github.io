document.addEventListener('DOMContentLoaded', function() {
    // 初始化活跃部分
    showSection('about');
    
    // 导航按钮点击事件
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // 霓虹光标效果
    const cursor = document.getElementById('neon-cursor');
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // 音乐播放器控制
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const volumeSlider = document.getElementById('volume-slider');
    
    playButton.addEventListener('click', function() {
        audioPlayer.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    });
    
    pauseButton.addEventListener('click', function() {
        audioPlayer.pause();
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline-block';
    });
    
    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = this.value / 100;
    });
    
    // 系统运行时间计算
    const startTime = new Date();
    setInterval(updateUptime, 60000); // 每分钟更新一次
    updateUptime(); // 初始化
    
    // 创建赛博朋克粒子效果
    createCyberParticles();
    
    // 技能条动画
    animateSkillBars();
    
    // 发送消息按钮效果
    const sendButton = document.querySelector('.send-button');
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            this.innerHTML = '<span class="button-text">发送中...</span>';
            setTimeout(() => {
                this.innerHTML = '<span class="button-text">已发送 ✓</span>';
                // 重置表单
                setTimeout(() => {
                    document.querySelectorAll('.cyber-input').forEach(input => {
                        input.value = '';
                    });
                    this.innerHTML = '<span class="button-text">发送消息</span><span class="button-glitch"></span>';
                }, 2000);
            }, 1500);
        });
    }
    
    // 项目卡片悬停效果
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 242, 254, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 242, 254, 0.2)';
        });
    });
    
    // 创建雪花效果
    setInterval(createSnowflake, 100);
});

// 显示指定部分
function showSection(sectionId) {
    // 隐藏所有部分
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });
    
    // 显示选中的部分
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }
    
    // 更新导航按钮状态
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        if (button.getAttribute('data-section') === sectionId) {
            button.style.backgroundColor = 'rgba(0, 242, 254, 0.2)';
            button.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.5)';
        } else {
            button.style.backgroundColor = 'transparent';
            button.style.boxShadow = 'none';
        }
    });
}

// 更新系统运行时间
function updateUptime() {
    const startTime = new Date();
    startTime.setHours(startTime.getHours() - Math.floor(Math.random() * 24));
    startTime.setDate(startTime.getDate() - Math.floor(Math.random() * 7));
    
    const now = new Date();
    const diff = now - startTime;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('uptime').textContent = `${days}天${hours}小时${minutes}分钟`;
}

// 创建赛博朋克粒子
function createCyberParticles() {
    const container = document.getElementById('personal-container');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cyber-particle');
        
        // 随机样式
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--secondary-color)';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        // 随机位置
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // 添加到容器
        container.appendChild(particle);
        
        // 随机动画
        animateParticle(particle);
    }
}

// 粒子动画
function animateParticle(particle) {
    const duration = Math.random() * 10 + 10; // 10-20秒
    
    particle.style.transition = `all ${duration}s linear`;
    
    setTimeout(() => {
        // 移动到新位置
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // 递归调用以创建连续动画
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, 100);
}

// 技能条动画
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        
        setTimeout(() => {
            skill.style.width = width;
        }, 300);
    });
}

// 创建雪花
function createSnowflake() {
    const snowFlake = document.createElement('i');
    snowFlake.classList.add('fas', 'fa-snowflake');
    snowFlake.style.position = 'absolute';
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowFlake.style.opacity = Math.random() * 0.3;
    snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowFlake.style.color = Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--secondary-color)';
    snowFlake.style.textShadow = '0 0 5px currentColor';
    snowFlake.style.top = '-20px';
    snowFlake.style.transform = 'translateY(0)';
    snowFlake.style.transition = `transform ${Math.random() * 3 + 5}s linear`;

    document.getElementById('snow-container').appendChild(snowFlake);

    // 设置雪花下落
    setTimeout(() => {
        snowFlake.style.transform = `translateY(${window.innerHeight + 20}px)`;
    }, 100);

    // 一段时间后移除雪花
    setTimeout(() => {
        snowFlake.remove();
    }, 8000);
}
