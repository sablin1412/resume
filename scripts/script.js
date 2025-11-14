// ==================== ДАННЫЕ ПРОЕКТОВ ====================

const projectsData = {
    0: {
        title: "Личный сайт",
        category: "HTML, CSS",
        description: "Мой первый веб-проект — личная визитная карточка",
        fullDescription: "В этом проекте я применил навыки HTML5 и CSS3, создав адаптивный дизайн, который хорошо отображается на всех устройствах. Использовал современные техники верстки с Flexbox и Grid.",
        technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
        github: "https://github.com/sablin1412",
        demo: "file:///C:/Users/MSI/OneDrive/Desktop/frontend-and-backend-practice/index.html",
        image: "../images/ww1.jpg"
    },
    1: {
        title: "Todo-приложение",
        category: "JavaScript",
        description: "Функциональное приложение с сохранением данных",
        fullDescription: "Создано с использованием ванильного JavaScript. Все задачи сохраняются в localStorage для сохранения данных между сеансами. Реализованы функции добавления, удаления и отметки выполненных задач.",
        technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
        github: "https://github.com/sablin1412",
        demo: "https://jakesgordon.com/games/racer/",
        image: "../images/ww2.jpg"
    },
    2: {
        title: "Интернет-магазин",
        category: "React",
        description: "Сайт с корзиной и фильтрацией товаров",
        fullDescription: "Построено на React с использованием компонентного подхода. E-commerce приложение с полной функциональностью: каталог товаров, корзина покупок, фильтрация и поиск. Интегрирована работа с API для получения данных товаров.",
        technologies: ["React", "JavaScript", "CSS3", "API"],
        github: "https://github.com/sablin1412",
        demo: "file:///C:/Users/MSI/OneDrive/Desktop/frontend-and-backend-practice/pages/goods.html",
        image: "../images/ww3.jpg"
    },
    3: {
        title: "Портфолио Bootstrap",
        category: "Bootstrap, CSS",
        description: "Адаптивный шаблон портфолио на основе фреймворка Bootstrap",
        fullDescription: "Использован Bootstrap для быстрого создания адаптивного макета. Дизайн оптимизирован для всех размеров экранов с красивым современным интерфейсом.",
        technologies: ["Bootstrap", "CSS3", "Responsive Design"],
        github: "https://github.com/sablin1412",
        demo: "https://yandex.ru/games/app/272081",
        image: "../images/ww4.jpg"
    },
    4: {
        title: "Калькулятор",
        category: "JavaScript, HTML, CSS",
        description: "Функциональный веб-калькулятор с историей операций",
        fullDescription: "Калькулятор поддерживает все основные математические операции, имеет очень удобный интерфейс и историю расчетов с возможностью просмотра предыдущих вычислений.",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        github: "https://github.com/sablin1412",
        demo: "https://www.desmos.com/scientific?lang=ru",
        image: "../images/ww5.jpg"
    },
    5: {
        title: "Приложение Погода",
        category: "React, API",
        description: "Приложение для отслеживания погоды с данными в реальном времени",
        fullDescription: "Использует React для управления состоянием и внешнее API OpenWeatherMap для получения актуальных данных о погоде. Показывает прогноз на несколько дней с детальной информацией.",
        technologies: ["React", "API", "JavaScript", "CSS3"],
        github: "https://github.com/sablin1412",
        demo: "https://www.windy.com/ru/-%D0%A0%D0%B0%D0%B4%D0%B0%D1%80-%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D1%8B-radar?radar,",
        image: "../images/ww6.jpg"
    }
};

// ==================== ФИЛЬТРАЦИЯ ПРОЕКТОВ (для projects.html) ====================

document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли кнопки фильтрации на странице
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    if (filterBtns.length > 0) {
        const projectCards = document.querySelectorAll('[data-category]');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Удалить класс active со всех кнопок
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Добавить класс active текущей кнопке
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 10);
                    } else {
                        if (card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                            }, 10);
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
});

// ==================== МОДАЛЬНЫЕ ОКНА ====================

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    
    if (!modal) return; // Если модалки нет на странице, выходим
    
    const detailButtons = document.querySelectorAll('.project-details-btn');
    const closeButtons = document.querySelectorAll('[data-close-modal]');

    // Открытие модального окна
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                openModal(project);
            }
        });
    });

    // Закрытие модального окна
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
            closeModal();
        }
    });

    function openModal(project) {
        const modalTitle = modal.querySelector('.modal__title');
        const modalBody = modal.querySelector('.modal__body');

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

        modal.removeAttribute('hidden');
        modal.setAttribute('aria-hidden', 'false');
        
        // Фокус на заголовок модального окна
        modalTitle.focus();
        
        // Блокировка прокрутки body
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.setAttribute('hidden', '');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
});

// ==================== ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ ====================

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    if (!themeToggle) return;

    // Загрузка сохранённой темы
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
        themeToggle.setAttribute('aria-label', theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему');
    }
});

// ==================== АКТИВНАЯ ССЫЛКА В НАВИГАЦИИ ====================

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// ==================== ВАЛИДАЦИЯ ФОРМЫ КОНТАКТОВ (для contacts.html) ====================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return; // Если формы нет, выходим
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Очистка предыдущих ошибок
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        
        // Валидация имени
        if (name.value.trim().length < 2) {
            showError(name, 'Имя должно содержать минимум 2 символа');
            isValid = false;
        }
        
        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Введите корректный email');
            isValid = false;
        }
        
        // Валидация сообщения
        if (message.value.trim().length < 10) {
            showError(message, 'Сообщение должно содержать минимум 10 символов');
            isValid = false;
        }
        
        if (isValid) {
            // Здесь можно отправить данные на сервер
            alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.');
            contactForm.reset();
        }
    });
    
    function showError(input, message) {
        input.classList.add('input-error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'var(--danger-color)';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
    }
});

/// ==================== МОДАЛЬНОЕ ОКНО ДНЕВНИКА С LOCALSTORAGE ====================

document.addEventListener('DOMContentLoaded', function() {
    const addEntryBtn = document.getElementById('addEntryBtn');
    const addEntryModal = document.getElementById('addEntryModal');
    const addEntryForm = document.getElementById('addEntryForm');
    const closeButtons = document.querySelectorAll('[data-close-modal-diary]');
    const progressInput = document.getElementById('entryProgress');
    const progressValue = document.getElementById('progressValue');
    const entriesList = document.querySelector('.diary-entries');

    if (!addEntryBtn || !addEntryModal) return;

    // Загрузка записей из localStorage при загрузке страницы
    loadDiaryEntries();

    // Обновление значения прогресса
    if (progressInput && progressValue) {
        progressInput.addEventListener('input', function() {
            progressValue.textContent = this.value + '%';
        });
    }

    // Открытие модального окна
    addEntryBtn.addEventListener('click', function() {
        openDiaryModal();
    });

    // Закрытие модального окна
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeDiaryModal);
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !addEntryModal.hasAttribute('hidden')) {
            closeDiaryModal();
        }
    });

    // Отправка формы
    if (addEntryForm) {
        addEntryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Очистка предыдущих ошибок
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
            
            const title = document.getElementById('entryTitle');
            const description = document.getElementById('entryDescription');
            const progress = document.getElementById('entryProgress');
            const status = document.querySelector('input[name="entryStatus"]:checked');
            
            let isValid = true;
            
            // Валидация названия
            if (title.value.trim().length < 3) {
                showError(title, 'Название должно содержать минимум 3 символа');
                isValid = false;
            }
            
            // Валидация описания
            if (description.value.trim().length < 10) {
                showError(description, 'Описание должно содержать минимум 10 символов');
                isValid = false;
            }
            
            if (isValid) {
                const entryData = {
                    id: Date.now(), // уникальный ID
                    title: title.value.trim(),
                    description: description.value.trim(),
                    progress: parseInt(progress.value),
                    status: status.value,
                    date: new Date().toISOString()
                };
                
                // Сохранение в localStorage
                saveDiaryEntry(entryData);
                
                // Добавление на страницу
                addDiaryEntryToPage(entryData);
                
                // Сброс формы
                addEntryForm.reset();
                progressValue.textContent = '50%';
                
                // Закрытие модального окна
                closeDiaryModal();
                
                // Показать уведомление
                showNotification('✓ Запись успешно добавлена!');
            }
        });
    }

    // ========== ФУНКЦИИ LOCALSTORAGE ==========

    function saveDiaryEntry(entryData) {
        // Получаем существующие записи
        let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        
        // Добавляем новую запись в начало массива
        entries.unshift(entryData);
        
        // Сохраняем обратно в localStorage
        localStorage.setItem('diaryEntries', JSON.stringify(entries));
    }

    function loadDiaryEntries() {
        if (!entriesList) return;
        
        // Получаем записи из localStorage
        let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        
        // Добавляем каждую запись на страницу
        entries.forEach(entry => {
            addDiaryEntryToPage(entry, false); // false = без анимации при загрузке
        });
    }

    function deleteDiaryEntry(id) {
        // Получаем записи
        let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        
        // Фильтруем, удаляя запись с нужным id
        entries = entries.filter(entry => entry.id !== id);
        
        // Сохраняем обновлённый массив
        localStorage.setItem('diaryEntries', JSON.stringify(entries));
    }

    // ========== ФУНКЦИИ ИНТЕРФЕЙСА ==========

    function openDiaryModal() {
        addEntryModal.removeAttribute('hidden');
        addEntryModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Фокус на первое поле
        const firstInput = addEntryModal.querySelector('input, textarea');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }

    function closeDiaryModal() {
        addEntryModal.setAttribute('hidden', '');
        addEntryModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Очистка ошибок
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    }

    function showError(input, message) {
        input.classList.add('input-error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
    }

    function addDiaryEntryToPage(data, animate = true) {
        const newEntry = document.createElement('article');
        newEntry.className = animate ? 'diary-entry diary-entry--new' : 'diary-entry';
        newEntry.setAttribute('data-entry-id', data.id);
        
        const statusClass = data.status === 'completed' ? 'status--completed' : 'status--progress';
        const statusText = data.status === 'completed' ? '✓ Завершено' : '⏳ В процессе';
        
        // Форматирование даты
        const entryDate = new Date(data.date);
        const formattedDate = entryDate.toLocaleDateString('ru-RU', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
        
        newEntry.innerHTML = `
            <div class="diary-entry__header">
                <h3 class="diary-entry__title">${escapeHtml(data.title)}</h3>
                <div class="diary-entry__actions">
                    <span class="diary-entry__status ${statusClass}">${statusText}</span>
                    <button class="delete-entry-btn" data-id="${data.id}" aria-label="Удалить запись" title="Удалить запись">
                        🗑️
                    </button>
                </div>
            </div>
            <p class="diary-entry__date">${formattedDate}</p>
            <p class="diary-entry__description">${escapeHtml(data.description)}</p>
            <div class="diary-entry__progress">
                <div class="progress-bar">
                    <div class="progress-bar__fill" style="--progress: ${data.progress}%;" role="progressbar" aria-valuenow="${data.progress}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        `;
        
        // Добавляем в начало списка
        entriesList.prepend(newEntry);
        
        // Анимация появления (только для новых записей)
        if (animate) {
            setTimeout(() => {
                newEntry.classList.add('diary-entry--show');
            }, 10);
        }
        
        // Добавляем обработчик удаления
        const deleteBtn = newEntry.querySelector('.delete-entry-btn');
        deleteBtn.addEventListener('click', function() {
            const entryId = parseInt(this.getAttribute('data-id'));
            
            if (confirm('Вы уверены, что хотите удалить эту запись?')) {
                // Удаляем из localStorage
                deleteDiaryEntry(entryId);
                
                // Удаляем со страницы с анимацией
                newEntry.style.opacity = '0';
                newEntry.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    newEntry.remove();
                    showNotification('🗑️ Запись удалена');
                }, 300);
            }
        });
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('notification--show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('notification--show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Функция для экранирования HTML (защита от XSS)
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
