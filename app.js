document.addEventListener('DOMContentLoaded', function() {
  // 初始化粒子效果
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#9370db"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#8a2be2",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // 自定义光标
  const cursor = document.getElementById('cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  });
  
  // 在可点击元素上改变光标样式
  const clickables = document.querySelectorAll('a, button, .research-card, .play-button');
  clickables.forEach(element => {
    element.addEventListener('mouseenter', () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = '#ff00ff';
      }
    });
    element.addEventListener('mouseleave', () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = '#8a2be2';
      }
    });
  });

  // 创建雨滴效果
  function createRaindrops() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain-container');
    rainContainer.style.position = 'absolute';
    rainContainer.style.top = '0';
    rainContainer.style.left = '0';
    rainContainer.style.width = '100%';
    rainContainer.style.height = '100%';
    rainContainer.style.overflow = 'hidden';
    rainContainer.style.pointerEvents = 'none';
    rainContainer.style.zIndex = '1';
    
    homeSection.appendChild(rainContainer);
    
    // 创建50个雨滴
    for (let i = 0; i < 50; i++) {
      createRaindrop(rainContainer);
    }
  }
  
  function createRaindrop(container) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    
    // 随机样式
    const size = Math.random() * 4 + 1; // 1-5px
    const posX = Math.random() * 100; // 0-100%
    const duration = Math.random() * 1 + 1; // 1-2s
    const delay = Math.random() * 2; // 0-2s
    
    raindrop.style.width = `${size}px`;
    raindrop.style.height = `${size * 10}px`;
    raindrop.style.left = `${posX}%`;
    raindrop.style.position = 'absolute';
    raindrop.style.top = '-50px';
    raindrop.style.backgroundColor = '#9370db';
    raindrop.style.opacity = Math.random() * 0.3 + 0.2;
    raindrop.style.borderRadius = '50%';
    raindrop.style.animation = `rain ${duration}s linear infinite`;
    raindrop.style.animationDelay = `${delay}s`;
    
    container.appendChild(raindrop);
  }

  // 初始化雨滴
  setTimeout(createRaindrops, 1000);

  // Vue 应用
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        menuActive: false,
        activeResearch: null,
        currentSong: null,
        songProgress: 0,
        formSubmitting: false,
        formStatus: '',
        songInterval: null,
        visualizerInterval: null,
        contactForm: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        profile: {
          firstName: 'D',
          lastName: 'XY',
          fullName: 'DXY',
          title: '计算机科学研究生',
          university: '电子科技大学',
          avatar: 'https://img.freepik.com/free-photo/cute-cat-with-colorful-galaxy-sunglasses_23-2150134516.jpg',
          bio: `我是一名对人工智能安全和计算机视觉充满热情的研究者。我的研究聚焦于深度学习对抗样本的生成与防御，探索人工智能系统的安全边界和提高其鲁棒性。<br><br>
                在我的学术生涯中，我致力于开发能够抵抗恶意攻击的智能系统，并深入研究对抗样本背后的数学原理。通过探索不同的攻击和防御策略，我期望为构建更安全、更可靠的人工智能应用做出贡献。<br><br>
                除了研究工作，我也热爱音乐和摄影，在闲暇时间喜欢探索不同的艺术形式，寻找技术与艺术的交叉点。我相信跨学科的思维方式能够激发创新，为人工智能领域带来新的视角和解决方案。`,
          skills: [
            { name: '对抗样本生成', level: 95 },
            { name: '深度学习', level: 90 },
            { name: '人工智能安全', level: 88 },
            { name: 'Python', level: 92 },
            { name: 'TensorFlow/PyTorch', level: 85 },
            { name: '计算机视觉', level: 80 }
          ],
          education: [
            {
              period: '2025 - 至今',
              degree: '计算机科学硕士研究生',
              institution: '电子科技大学',
              description: '研究方向：深度学习安全、对抗样本生成与防御技术，智能系统鲁棒性分析。',
              courses: ['深度学习安全', '机器学习高级理论', '计算机视觉', '信息安全']
            },
            {
              period: '2021 - 2025',
              degree: '计算机科学与技术学士',
              institution: '哈尔滨工程大学',
              description: '主修课程包括数据结构、算法设计、机器学习基础和神经网络。',
              courses: ['数据结构', '算法分析', '人工智能基础', '机器学习']
            }
          ],
          research: [
            {
              title: '对抗样本生成方法研究',
              brief: '探索更有效的对抗样本生成算法，突破AI系统防御',
              icon: 'fas fa-shield-virus',
              description: `对抗样本生成是我主要的研究方向，致力于开发能够有效欺骗深度神经网络的对抗样本算法。这些算法通过添加精心设计的微小扰动，使模型产生错误预测，从而揭示AI系统的潜在弱点。<br><br>
                           我的研究包括改进现有的攻击方法（如FGSM、PGD和C&W攻击），以及探索新的对抗样本生成范式。特别关注黑盒攻击场景和物理世界中的对抗样本生成，这对于评估实际系统的安全性至关重要。<br><br>
                           最近的工作中，我提出了一种基于进化算法的对抗样本生成方法，能够在极小的扰动下实现高转移率，对多种防御方法都展现出较强的攻击能力。`,
              publications: [
                'D. XY, Liu, J., & Zhang, W. (2023). "EvolutionaryAdv: 基于进化策略的高鲁棒性对抗样本生成". ICCV 2023.',
                'D. XY & Wang, L. (2022). "物理世界中的对抗样本攻击：挑战与突破". CVPR 2022.'
              ]
            },
            {
              title: '对抗防御与鲁棒性分析',
              brief: '研究如何提高神经网络对对抗样本的防御能力',
              icon: 'fas fa-user-shield',
              description: `在对抗样本攻击研究的基础上，我同样关注如何增强深度学习模型的防御能力，使其在面对恶意攻击时仍能保持稳定性能。<br><br>
                           我的研究包括对抗训练策略的改进、基于特征空间的防御方法、输入转换防御以及检测对抗样本的技术。通过系统分析不同防御方法的优缺点，我试图构建一个更全面的防御框架，能够应对多种攻击场景。<br><br>
                           近期工作中，我提出了一种结合贝叶斯不确定性和对抗训练的方法，在保持模型性能的同时显著提高了其对未知攻击的鲁棒性，并在多个基准测试中验证了该方法的有效性。`,
              publications: [
                'D. XY, Chen, H., & Li, K. (2023). "BayesAdv: 基于贝叶斯不确定性的鲁棒对抗防御". NeurIPS 2023.',
                'D. XY, Zhang, T., & Wang, J. (2022). "混合领域自适应对抗训练方法". ECCV 2022.'
              ]
            },
            {
              title: '对抗样本的可解释性研究',
              brief: '探索对抗样本成功欺骗AI系统的原理',
              icon: 'fas fa-search',
              description: `对抗样本的可解释性是理解AI安全的关键。我的研究致力于解析对抗样本能够成功欺骗神经网络的深层次原因，从网络结构、决策边界和特征表示等多个角度进行分析。<br><br>
                           我专注于开发可视化工具和数学框架，用于理解对抗样本在特征空间中的表现，以及它们如何影响模型的决策过程。通过这些研究，我希望能够建立对抗样本与模型架构、训练数据之间关系的理论基础。<br><br>
                           最新的工作中，我提出了一种基于特征归因的方法，能够有效地识别对抗样本攻击时模型最脆弱的特征区域，并据此提出了有针对性的防御策略，显著提高了模型对特定类型攻击的防御能力。`,
              publications: [
                'D. XY & Liu, Y. (2023). "特征归因视角下的对抗样本分析". ICLR 2023.',
                'D. XY, Wu, X., & Chen, L. (2022). "对抗样本对决策边界的影响：几何分析". AAAI 2022.'
              ]
            }
          ],
          favoriteSongs: [
            {
              title: 'Born To Die',
              artist: 'Lana Del Rey',
              cover: 'https://i.scdn.co/image/ab67616d0000b273e7b6c82efea77abdd0cc4891'
            },
            {
              title: 'Summertime Sadness',
              artist: 'Lana Del Rey',
              cover: 'https://i.scdn.co/image/ab67616d0000b273e7b6c82efea77abdd0cc4891'
            },
            {
              title: 'Young and Beautiful',
              artist: 'Lana Del Rey',
              cover: 'https://i.scdn.co/image/ab67616d0000b2734196528dda42a779bf449d9d'
            },
            {
              title: 'Video Games',
              artist: 'Lana Del Rey',
              cover: 'https://i.scdn.co/image/ab67616d0000b273c4b934461af1b6c5ce3d7e3a'
            },
            {
              title: 'Blue Jeans',
              artist: 'Lana Del Rey',
              cover: 'https://i.scdn.co/image/ab67616d0000b273e7b6c82efea77abdd0cc4891'
            },
            {
              title: 'West Coast',
              artist: 'Lana Del Rey',
              cover: 'https://i.scdn.co/image/ab67616d0000b273beccd468477c9eacbbbfd73e'
            }
          ],
          contactInfo: [
            {
              type: '邮箱',
              value: '2296651431@qq.com',
              icon: 'fas fa-envelope'
            },
            {
              type: '电话',
              value: '+86 188 8888 8888',
              icon: 'fas fa-phone-alt'
            },
            {
              type: '地址',
              value: '四川省成都市高新区西源大道2006号电子科技大学',
              icon: 'fas fa-map-marker-alt'
            }
          ],
          socialMedia: [
            { icon: 'fab fa-github', url: 'https://github.com/' },
            { icon: 'fab fa-linkedin', url: 'https://linkedin.com/' },
            { icon: 'fab fa-twitter', url: 'https://twitter.com/' },
            { icon: 'fab fa-researchgate', url: 'https://researchgate.net/' }
          ]
        }
      };
    },
    mounted() {
      // 监听滚动事件
      window.addEventListener('scroll', this.handleScroll);
      
      // 初始化技能条动画
      setTimeout(this.revealSkills, 500);
      
      // 初始化音符动画
      this.animateMusicNotes();
      
      // 初始化VanillaTilt (如果库已加载)
      this.initTilt();

      // 初始化GSAP动画 (如果库已加载)
      this.initGSAPAnimations();
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.songInterval) {
        clearInterval(this.songInterval);
      }
      if (this.visualizerInterval) {
        clearInterval(this.visualizerInterval);
      }
    },
    methods: {
      handleScroll() {
        // 导航栏效果
        const nav = document.querySelector('nav');
        if (window.scrollY > 20) {
          nav.classList.add('sticky');
        } else {
          nav.classList.remove('sticky');
        }
        
        // 检查需要执行动画的元素
        this.checkReveal();
        
        // 技能进度条动画
        this.revealSkills();
      },
      
      scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (!element) return;
        
        const offset = 80; // 导航栏的高度
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        this.menuActive = false;
      },
      
      toggleMenu() {
        this.menuActive = !this.menuActive;
      },
      
      revealSkills() {
        const skillLevels = document.querySelectorAll('.skill-level');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        skillLevels.forEach((skill) => {
          const skillTop = skill.getBoundingClientRect().top;
          
          if (skillTop < windowHeight - revealPoint) {
            // 获取应该设置的宽度
            const skillStyle = skill.getAttribute('style');
            const widthValue = skillStyle ? skillStyle.match(/width\s*:\s*([\d.]+)%/) : null;
            const targetWidth = widthValue ? widthValue[1] + '%' : '0%';
            skill.style.width = targetWidth;
          } else {
            skill.style.width = '0%';
          }
        });
      },
      
      checkReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach((el) => {
          const elementTop = el.getBoundingClientRect().top;
          if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
          }
        });
      },
      
      rotateAvatar(e) {
        const avatar = document.getElementById('avatar-img');
        if (!avatar) return;
        
        const container = e.currentTarget;
        const containerRect = container.getBoundingClientRect();
        
        const x = e.clientX - containerRect.left;
        const y = e.clientY - containerRect.top;
        
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        avatar.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      },
      
      showResearchDetails(index) {
        this.activeResearch = index;
        document.body.style.overflow = 'hidden';
      },
      
      glowEffect(e) {
        const card = e.currentTarget;
        const glowElement = card.querySelector('.research-glow');
        if (!glowElement) return;
        
        const x = e.offsetX;
        const y = e.offsetY;
        
        glowElement.style.opacity = '0.5';
        glowElement.style.left = `${x}px`;
        glowElement.style.top = `${y}px`;
      },
      
      playSong(index) {
        if (this.currentSong === index) {
          // 暂停歌曲
          if (this.songInterval) {
            clearInterval(this.songInterval);
            this.songInterval = null;
          }
          if (this.visualizerInterval) {
            clearInterval(this.visualizerInterval);
            this.visualizerInterval = null;
          }
          this.currentSong = null;
          this.songProgress = 0;
        } else {
          // 播放新歌曲
          if (this.songInterval) {
            clearInterval(this.songInterval);
          }
          if (this.visualizerInterval) {
            clearInterval(this.visualizerInterval);
          }
          
          this.currentSong = index;
          this.songProgress = 0;
          
          // 模拟歌曲进度
          this.songInterval = setInterval(() => {
            this.songProgress += 0.5;
            if (this.songProgress >= 100) {
              clearInterval(this.songInterval);
              this.songInterval = null;
              if (this.visualizerInterval) {
                clearInterval(this.visualizerInterval);
                this.visualizerInterval = null;
              }
              this.currentSong = null;
              this.songProgress = 0;
            }
          }, 300);
          
          // 模拟音频可视化效果
          this.visualizerInterval = setInterval(() => {
            const bars = document.querySelectorAll('.visualizer .bar');
            bars.forEach(bar => {
              bar.style.height = `${this.getRandomHeight()}px`;
            });
          }, 100);
        }
      },
      
      getRandomHeight() {
        return Math.floor(Math.random() * 25) + 5; // 5-30px
      },
      
      animateMusicNotes() {
        setInterval(() => {
          const notes = document.querySelectorAll('.music-notes i');
          notes.forEach((note, index) => {
            setTimeout(() => {
              note.style.opacity = '1';
              setTimeout(() => {
                note.style.opacity = '0';
              }, 4000);
            }, index * 2000);
          });
        }, 6000);
      },
      
      pulseAnimation(e) {
        const icon = e.currentTarget.querySelector('.icon');
        if (!icon) return;
        
        icon.style.animation = 'none'; // 重置动画
        setTimeout(() => {
          icon.style.animation = 'pulse 1s';
        }, 10);
      },
      
      initTilt() {
        if (typeof VanillaTilt !== 'undefined') {
          VanillaTilt.init(document.querySelectorAll('.research-card'), {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.5
          });
        }
      },
      
      initGSAPAnimations() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          // 注册ScrollTrigger插件
          gsap.registerPlugin(ScrollTrigger);
          
          // 为每个部分创建滚动动画
          gsap.utils.toArray('section').forEach((section, i) => {
            // 标题动画
            const title = section.querySelector('.title span');
            if (title) {
              gsap.fromTo(title, 
                {opacity: 0, y: 50},
                {
                  opacity: 1, 
                  y: 0,
                  duration: 1,
                  scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                  }
                }
              );
            }
          });
        }
      },
      
      submitForm() {
        this.formSubmitting = true;
        
        // 模拟表单提交
        setTimeout(() => {
          this.formSubmitting = false;
          this.formStatus = '消息已成功发送！我会尽快回复您。';
          
          // 重置表单
          this.contactForm = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          
          // 清除状态消息
          setTimeout(() => {
            this.formStatus = '';
          }, 5000);
        }, 1500);
      },
      
      downloadCV() {
        // 创建一个模拟的下载体验
        const downloadingElement = document.createElement('div');
        downloadingElement.style.position = 'fixed';
        downloadingElement.style.top = '20px';
        downloadingElement.style.left = '50%';
        downloadingElement.style.transform = 'translateX(-50%)';
        downloadingElement.style.background = '#8a2be2';
        downloadingElement.style.color = 'white';
        downloadingElement.style.padding = '15px 30px';
        downloadingElement.style.borderRadius = '30px';
        downloadingElement.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.5)';
        downloadingElement.style.zIndex = '9999';
        downloadingElement.style.opacity = '0';
        downloadingElement.style.transition = 'opacity 0.3s';
        downloadingElement.innerText = '简历下载中...';
        
        document.body.appendChild(downloadingElement);
        
        // 显示下载消息
        setTimeout(() => {
          downloadingElement.style.opacity = '1';
        }, 100);
        
        // 模拟下载
        setTimeout(() => {
          downloadingElement.innerText = '下载完成！';
          downloadingElement.style.background = '#4caf50';
          
          // 清除消息
          setTimeout(() => {
            downloadingElement.style.opacity = '0';
            setTimeout(() => {
              document.body.removeChild(downloadingElement);
            }, 300);
          }, 2000);
        }, 2000);
      }
    }
  }).mount('#app');
});
