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
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      profile: {
        firstName: '张',
        lastName: '明',
        fullName: '张明',
        title: '计算机科学博士研究生',
        university: '清华大学',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        bio: `我是一名对人工智能和计算机视觉充满热情的研究者。我的研究聚焦于深度学习技术在图像识别和自然语言处理中的应用，尤其关注多模态学习和跨领域知识迁移。<br><br>
              在我的学术生涯中，我致力于开发能够解决真实世界问题的智能系统，并积极参与学术社区的讨论和交流。通过与不同领域的研究者合作，我不断拓展自己的知识边界，希望为人工智能的发展做出贡献。<br><br>
              除了研究工作，我也热爱教学，享受与学生分享知识和激发他们对计算机科学的兴趣的过程。在空闲时间，我喜欢阅读科技书籍、听音乐以及户外远足，保持身心的平衡与活力。`,
        skills: [
          { name: '深度学习', level: 95 },
          { name: '计算机视觉', level: 90 },
          { name: '自然语言处理', level: 85 },
          { name: 'Python', level: 92 },
          { name: 'TensorFlow/PyTorch', level: 88 },
          { name: '数据分析', level: 85 }
        ],
        education: [
          {
            period: '2019 - 至今',
            degree: '计算机科学博士',
            institution: '清华大学',
            description: '研究方向：深度学习在计算机视觉和自然语言处理中的应用，多模态学习理论与实践。',
            courses: ['高级机器学习', '深度学习理论', '计算机视觉', '强化学习']
          },
          {
            period: '2016 - 2019',
            degree: '计算机科学硕士',
            institution: '北京大学',
            description: '研究方向：机器学习算法和计算机视觉，毕业论文《基于深度学习的图像分割算法研究》获得优秀论文奖。',
            courses: ['机器学习', '神经网络', '数据挖掘', '模式识别']
          },
          {
            period: '2012 - 2016',
            degree: '计算机科学学士',
            institution: '浙江大学',
            description: '主修计算机科学与技术，辅修数学。获得校级优秀毕业生称号。',
            courses: ['算法设计', '数据结构', '计算机网络', '数据库系统']
          }
        ],
        research: [
          {
            title: '多模态深度学习',
            brief: '研究如何结合视觉和语言信息进行更高效的学习',
            icon: 'fas fa-brain',
            description: `多模态深度学习是我当前的主要研究方向，致力于开发能够同时处理和整合多种形式数据（如图像、文本、音频）的深度学习模型。<br><br>
                         具体而言，我的研究包括设计新的神经网络架构，使其能够有效地从不同模态中提取特征并进行融合。通过这种方式，模型可以获得更全面的理解，提高在各种任务上的性能，如多模态情感分析、视觉问答以及跨模态检索等。<br><br>
                         最近的工作中，我提出了一种基于Transformer的多模态注意力机制，显著提高了模型对不同模态信息的整合能力，在多个基准测试中取得了先进成果。`,
            publications: [
              'Zhang, M., Wang, L., & Liu, Y. (2022). "Cross-Modal Attention Networks for Visual-Language Understanding". CVPR 2022.',
              'Zhang, M. & Chen, H. (2021). "Multi-Modal Fusion with Dynamic Weighting". NeurIPS 2021.'
            ]
          },
          {
            title: '计算机视觉中的自监督学习',
            brief: '探索无需大量标注数据的视觉表征学习方法',
            icon: 'fas fa-eye',
            description: `自监督学习是减少对大规模标注数据依赖的重要研究方向。在计算机视觉领域，我专注于开发能够从未标注图像中学习有意义视觉表征的自监督学习方法。<br><br>
                         我的研究主要围绕设计有效的预训练任务和对比学习框架，使模型能够捕获图像的本质特征。这些方法在标注数据有限的场景中特别有价值，如医学图像分析和罕见物体识别。<br><br>
                         目前，我正在研究结合自监督学习和元学习的方法，旨在开发能够快速适应新任务的视觉模型。`,
            publications: [
              'Zhang, M., Li, K., & Wang, J. (2023). "Self-Supervised Visual Representations via Contrastive Neighbors". ICCV 2023.',
              'Zhang, M. (2022). "Feature Learning with Limited Supervision: A Comparative Study". ECCV 2022.'
            ]
          },
          {
            title: '自然语言处理中的迁移学习',
            brief: '研究语言模型的领域适应和知识迁移问题',
            icon: 'fas fa-language',
            description: `在自然语言处理领域，我研究如何有效地将预训练语言模型迁移到特定领域和任务中。这包括研究不同的微调策略、领域适应方法以及针对低资源场景的技术。<br><br>
                         特别地，我关注如何在保持模型通用能力的同时，使其能够有效适应特定领域的词汇和语言模式。这在许多专业领域如医学、法律和金融文本处理中具有重要应用价值。<br><br>
                         我的最新工作提出了一种逐层自适应微调方法，能够更有效地利用有限标注数据，在多个专业领域的文本分类和信息提取任务中取得了显著的性能提升。`,
            publications: [
              'Zhang, M. & Zhao, T. (2023). "Layer-wise Adaptive Fine-tuning for Domain-specific NLP Tasks". ACL 2023.',
              'Zhang, M., Wu, X., & Chen, L. (2022). "Knowledge Transfer in Low-resource Settings". EMNLP 2022.'
            ]
          }
        ],
        favoriteSongs: [
          {
            title: '星辰大海',
            artist: '黄霄云',
            cover: 'https://p1.music.126.net/R4ZP3AJ9xV0vvw6Gf0iL7g==/109951165293262918.jpg'
          },
          {
            title: '起风了',
            artist: '买辣椒也用券',
            cover: 'https://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg'
          },
          {
            title: 'The Scientist',
            artist: 'Coldplay',
            cover: 'https://p1.music.126.net/D8M13uLOLVIj44VYvLtD8g==/709886930171285.jpg'
          },
          {
            title: 'Shape of My Heart',
            artist: 'Sting',
            cover: 'https://p2.music.126.net/AK9Z9-mIxtZoPLrjRtbQnw==/109951166637732465.jpg'
          },
          {
            title: '我曾',
            artist: '隔壁老樊',
            cover: 'https://p2.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg'
          },
          {
            title: 'Numb',
            artist: 'Linkin Park',
            cover: 'https://p1.music.126.net/D7rdJqLbFc3UdK96FConWA==/109951168172050791.jpg'
          }
        ],
        contactInfo: [
          {
            type: '邮箱',
            value: 'zhangming@example.com',
            icon: 'fas fa-envelope'
          },
          {
            type: '电话',
            value: '+86 188 8888 8888',
            icon: 'fas fa-phone-alt'
          },
          {
            type: '地址',
            value: '北京市海淀区清华大学计算机科学与技术系',
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
    window.addEventListener('scroll', this.handleScroll);
    this.revealSkills();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.songInterval) {
      clearInterval(this.songInterval);
    }
  },
  methods: {
    handleScroll() {
      const nav = document.querySelector('nav');
      if (window.scrollY > 20) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
      
      this.revealSkills();
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
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
      const skills = document.querySelectorAll('.skill-level');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      skills.forEach((skill) => {
        const skillTop = skill.getBoundingClientRect().top;
        
        if (skillTop < windowHeight - revealPoint) {
          skill.style.width = skill.getAttribute('style').split(':')[1];
        } else {
          skill.style.width = '0%';
        }
      });
    },
    showResearchDetails(index) {
      this.activeResearch = index;
      document.body.style.overflow = 'hidden';
    },
    hideResearchDetails() {
      this.activeResearch = null;
      document.body.style.overflow = '';
    },
    playSong(index) {
      if (this.currentSong === index) {
        // 暂停歌曲
        if (this.songInterval) {
          clearInterval(this.songInterval);
          this.songInterval = null;
        }
        this.currentSong = null;
        this.songProgress = 0;
      } else {
        // 播放新歌曲
        if (this.songInterval) {
          clearInterval(this.songInterval);
        }
        
        this.currentSong = index;
        this.songProgress = 0;
        
        // 模拟歌曲进度
        this.songInterval = setInterval(() => {
          this.songProgress += 0.5;
          if (this.songProgress >= 100) {
            clearInterval(this.songInterval);
            this.songInterval = null;
            this.currentSong = null;
            this.songProgress = 0;
          }
        }, 300);
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
      alert('简历下载功能正在开发中，请稍后再试！');
    }
  }
}).mount('#app');
