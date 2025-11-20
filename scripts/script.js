// ==================== ДАННЫЕ ПРОЕКТОВ ====================

const projectsData = {
    0: {
        title: "Личный сайт",
        category: "HTML, CSS",
        description: "Мой первый веб-проект — личная визитная карточка",
        fullDescription: "В этом проекте я применил навыки HTML5 и CSS3, создав адаптивный дизайн, который хорошо отображается на всех устройствах. Использовал современные техники верстки с Flexbox и Grid.",
        technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
        github: "https://github.com/sablin1412",
        demo: "https://sablin1412.github.io/resume/",
        image: "images/project1.jpg"
    },
    1: {
        title: "Todo-приложение",
        category: "JavaScript",
        description: "Функциональное приложение с сохранением данных",
        fullDescription: "Создано с использованием ванильного JavaScript. Все задачи сохраняются в localStorage для сохранения данных между сеансами. Реализованы функции добавления, удаления и отметки выполненных задач.",
        technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
        github: "https://github.com/sablin1412",
        demo: "https://example.com/todo",
        image: "images/project2.jpg"
    },
    2: {
        title: "Интернет-магазин",
        category: "React",
        description: "Сайт с корзиной и фильтрацией товаров",
        fullDescription: "Построено на React с использованием компонентного подхода. E-commerce приложение с полной функциональностью: каталог товаров, корзина покупок, фильтрация и поиск.",
        technologies: ["React", "JavaScript", "CSS3", "API"],
        github: "https://github.com/sablin1412",
        demo: "https://example.com/shop",
        image: "images/project3.jpg"
    },
    3: {
        title: "Портфолио Bootstrap",
        category: "Bootstrap, CSS",
        description: "Адаптивный шаблон портфолио на основе Bootstrap",
        fullDescription: "Использован Bootstrap для быстрого создания адаптивного макета. Дизайн оптимизирован для всех размеров экранов.",
        technologies: ["Bootstrap", "CSS3", "Responsive Design"],
        github: "https://github.com/sablin1412",
        demo: "https://example.com/portfolio",
        image: "images/project4.jpg"
    },
    4: {
        title: "Калькулятор",
        category: "JavaScript, HTML, CSS",
        description: "Функциональный веб-калькулятор с историей операций",
        fullDescription: "Калькулятор поддерживает все основные математические операции и имеет удобный интерфейс.",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        github: "https://github.com/sablin1412",
        demo: "https://example.com/calc",
        image: "images/project5.jpg"
    },
    5: {
        title: "Приложение Погода",
        category: "React, API",
        description: "Приложение для отслеживания погоды с данными в реальном времени",
        fullDescription: "Использует React для управления состоянием и внешнее API для получения актуальных данных о погоде.",
        technologies: ["React", "API", "JavaScript", "CSS3"],
        github: "https://github.com/sablin1412",
        demo: "https://example.com/weather",
        image: "images/project6.jpg"
    }
};

// ==================== ПРАКТИКИ 17-18: ДОСТУПНОСТЬ ====================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== УПРАВЛЕНИЕ ФОКУСОМ (ПРАКТИКА 17) ==========
    
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key !== 'Tab') return;
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });
    }
    
    // ========== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ С ДОСТУПНОСТЬЮ ==========
    
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    const themeLabel = themeToggle?.querySelector('.sr-only');
    
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
        
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            
            if (themeIcon) {
                themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
            }
            
            if (themeLabel) {
                themeLabel.textContent = theme === 'light' ? 'Тема: Светлая' : 'Тема: Тёмная';
            }
            
            themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
            themeToggle.setAttribute('aria-label', theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему');
        }
    }
    
    // ========== АКТИВНАЯ ССЫЛКА С aria-current ==========
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.setAttribute('aria-current', 'page');
            link.classList.add('active');
        } else {
            link.removeAttribute('aria-current');
        }
    });
    
    // ========== УВЕДОМЛЕНИЯ С aria-live (ПРАКТИКА 18) ==========
    
    let notificationsContainer = document.getElementById('notifications');
    
    if (!notificationsContainer) {
        notificationsContainer = document.createElement('div');
        notificationsContainer.id = 'notifications';
        notificationsContainer.className = 'notifications-container';
        notificationsContainer.setAttribute('role', 'status');
        notificationsContainer.setAttribute('aria-live', 'polite');
        notificationsContainer.setAttribute('aria-atomic', 'true');
        document.body.appendChild(notificationsContainer);
    }
    
    window.showNotification = function(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        
        notificationsContainer.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('notification--show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('notification--show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    };
    
    // ========== ANNOUNCE ДЛЯ СКРИНРИДЕРОВ ==========
    
    window.announceToScreenReader = function(message) {
        const announcement = document.createElement('div');
        announcement.className = 'sr-only';
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            announcement.remove();
        }, 1000);
    };
    
    // ========== SKIP-LINK ==========
    
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // ========== ИНДИКАТОР ЗАГРУЗКИ ==========
    
    window.setLoadingState = function(element, isLoading) {
        element.setAttribute('aria-busy', isLoading ? 'true' : 'false');
        
        if (isLoading) {
            element.classList.add('is-loading');
            announceToScreenReader('Загрузка данных');
        } else {
            element.classList.remove('is-loading');
            announceToScreenReader('Загрузка завершена');
        }
    };
    
    // ========== МОДАЛЬНЫЕ ОКНА ПРОЕКТОВ ==========
    
    const projectModal = document.getElementById('projectModal');
    const detailButtons = document.querySelectorAll('.project-details-btn');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    let lastFocusedElement = null;

    if (projectModal) {
        detailButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projectsData[projectId];
                
                if (project) {
                    openProjectModal(project);
                }
            });
        });

        closeButtons.forEach(btn => {
            btn.addEventListener('click', closeProjectModal);
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !projectModal.hasAttribute('hidden')) {
                closeProjectModal();
            }
        });

        function openProjectModal(project) {
            lastFocusedElement = document.activeElement;
            
            const modalTitle = projectModal.querySelector('.modal__title');
            const modalBody = projectModal.querySelector('.modal__body');

            modalTitle.textContent = project.title;
            
            modalBody.innerHTML = `
                <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 0.5rem; margin-bottom: 1rem;">
                <p style="margin-bottom: 1rem; line-height: 1.7;"><strong>Категория:</strong> ${project.category}</p>
                <p style="margin-bottom: 1rem; line-height: 1.7;">${project.fullDescription}</p>
                <h3 style="margin-bottom: 0.5rem; color: var(--primary-color);">Технологии:</h3>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="button button--primary">GitHub</a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="button button--secondary">Демо</a>
                </div>
            `;

            projectModal.removeAttribute('hidden');
            projectModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            
            const modalContent = projectModal.querySelector('.modal__content');
            if (modalContent) {
                modalContent.focus();
                trapFocus(modalContent);
            }
            
            announceToScreenReader('Модальное окно с деталями проекта открыто');
        }

        function closeProjectModal() {
            projectModal.setAttribute('hidden', '');
            projectModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            
            if (lastFocusedElement) {
                lastFocusedElement.focus();
            }
            
            announceToScreenReader('Модальное окно закрыто');
        }
    }
    
    // ========== ФИЛЬТРАЦИЯ ПРОЕКТОВ ==========
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('[data-category]');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                
                this.classList.add('active');
                this.setAttribute('aria-pressed', 'true');
                
                const filterValue = this.getAttribute('data-filter');
                let visibleCount = 0;
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 10);
                        visibleCount++;
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
                
                const filterText = this.textContent;
                announceToScreenReader(`Фильтр ${filterText} применён. Показано проектов: ${visibleCount}`);
            });
        });
    }
    
    // ========== ВАЛИДАЦИЯ ФОРМЫ КОНТАКТОВ ==========
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            document.querySelectorAll('[aria-invalid="true"]').forEach(el => {
                el.setAttribute('aria-invalid', 'false');
                el.classList.remove('input-error');
            });
            
            let isValid = true;
            let firstInvalidField = null;
            
            if (name.value.trim().length < 2) {
                showError(name, 'Имя должно содержать минимум 2 символа');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = name;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                showError(email, 'Введите корректный email');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = email;
            }
            
            if (message.value.trim().length < 10) {
                showError(message, 'Сообщение должно содержать минимум 10 символов');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = message;
            }
            
            if (isValid) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                setLoadingState(submitBtn, true);
                
                setTimeout(() => {
                    setLoadingState(submitBtn, false);
                    showNotification('✓ Спасибо за сообщение! Я свяжусь с вами в ближайшее время.', 'success');
                    contactForm.reset();
                    announceToScreenReader('Форма успешно отправлена');
                }, 2000);
            } else {
                if (firstInvalidField) {
                    firstInvalidField.focus();
                    announceToScreenReader('Форма содержит ошибки. Пожалуйста, исправьте их.');
                }
            }
        });
        
        function showError(input, message) {
            input.classList.add('input-error');
            input.setAttribute('aria-invalid', 'true');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.id = input.id + '-error';
            errorDiv.textContent = message;
            errorDiv.setAttribute('role', 'alert');
            
            input.parentElement.appendChild(errorDiv);
            
            const describedBy = input.getAttribute('aria-describedby') || '';
            input.setAttribute('aria-describedby', describedBy + ' ' + errorDiv.id);
        }
    }
    
    // ========== ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ ==========
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });
});
