// ==================== ФИЛЬТРАЦИЯ ПРОЕКТОВ ====================

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
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
});

// ==================== МОДАЛЬНЫЕ ОКНА ====================

const modal = document.getElementById('projectModal');

// Данные проектов
const projectsData = {
    project1: {
        title: 'Личный сайт',
        category: 'HTML, CSS',
        description: 'Мой первый веб-проект - личная визитная карточка, верстка макета в соответствии с современными стандартами.',
        details: 'В этом проекте я применил навыки HTML5 и CSS3, создав адаптивный дизайн, который хорошо отображается на всех устройствах.',
        technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
        github: 'https://github.com',
        live: 'https://example.com'
    },
    project2: {
        title: 'Todo-приложение',
        category: 'JavaScript',
        description: 'Интерактивное приложение для управления задачами с функциями добавления, удаления и отметки выполненных задач.',
        details: 'Создано с использованием ванильного JavaScript. Все задачи сохраняются в localStorage для сохранения данных между сеансами.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
        github: 'https://github.com',
        live: 'https://example.com'
    },
    project3: {
        title: 'Интернет-магазин',
        category: 'React',
        description: 'E-commerce приложение с полной функциональностью: каталог товаров, корзина покупок, фильтрация и поиск.',
        details: 'Построено на React с использованием компонентного подхода. Интегрирована работа с API для получения данных товаров.',
        technologies: ['React', 'JavaScript', 'CSS3', 'API'],
        github: 'https://github.com',
        live: 'https://example.com'
    },
    project4: {
        title: 'Портфолио Bootstrap',
        category: 'Bootstrap, CSS',
        description: 'Адаптивный шаблон портфолио на основе фреймворка Bootstrap с красивым дизайном.',
        details: 'Использован Bootstrap для быстрого создания адаптивного макета. Дизайн оптимизирован для всех размеров экранов.',
        technologies: ['Bootstrap', 'CSS3', 'Responsive Design'],
        github: 'https://github.com',
        live: 'https://example.com'
    },
    project5: {
        title: 'Калькулятор',
        category: 'JavaScript, HTML, CSS',
        description: 'Функциональный веб-калькулятор с историей операций и красивым интерфейсом.',
        details: 'Калькулятор поддерживает все основные операции, имеет очень удобный интерфейс и историю расчетов.',
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        github: 'https://github.com',
        live: 'https://example.com'
    },
    project6: {
        title: 'Приложение Погода',
        category: 'React, API',
        description: 'Приложение для отслеживания погоды с данными в реальном времени от OpenWeatherMap API.',
        details: 'Использует React для управления состоянием и внешнее API для получения актуальных данных о погоде.',
        technologies: ['React', 'API', 'JavaScript', 'CSS3'],
        github: 'https://github.com',
        live: 'https://example.com'
    }
};

function openModal(projectId) {
    const project = projectsData[projectId];
    const modalBody = document.getElementById('modalBody');

    const htmlContent = `
        <h2>${project.title}</h2>
        <p class="project-category"><strong>Категория:</strong> ${project.category}</p>
        <p><strong>Описание:</strong> ${project.description}</p>
        <p><strong>Детали:</strong> ${project.details}</p>
        <p><strong>Технологии:</strong></p>
        <ul>
            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <div style="margin-top: 20px; display: flex; gap: 10px;">
            <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
            <a href="${project.live}" target="_blank" class="btn btn-secondary">Живая версия</a>
        </div>
    `;

    modalBody.innerHTML = htmlContent;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Закрытие модала при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// ==================== ФОРМА КОНТАКТА ====================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Очистить все сообщения об ошибках
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';

        let isValid = true;

        // Валидация имени
        if (name.length < 2) {
            document.getElementById('nameError').textContent = 'Имя должно содержать минимум 2 символа';
            isValid = false;
        }

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Пожалуйста, введите корректный email';
            isValid = false;
        }

        // Валидация сообщения
        if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Сообщение должно содержать минимум 10 символов';
            isValid = false;
        }

        if (isValid) {
            alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим на ${email} в ближайшее время.`);
            contactForm.reset();
        }
    });
}

// ==================== ДОБАВЛЕНИЕ ЗАПИСИ В ДНЕВНИК ====================

function addDiaryEntry() {
    const diaryDate = prompt('Введите дату (например: 20 дек):');
    if (!diaryDate) return;

    const diaryTitle = prompt('Введите название задачи:');
    if (!diaryTitle) return;

    const diaryDesc = prompt('Введите описание:');
    if (!diaryDesc) return;

    const diaryContainer = document.querySelector('.diary-entries');
    if (!diaryContainer) return;

    const newEntry = document.createElement('div');
    newEntry.className = 'diary-entry in-progress';
    newEntry.innerHTML = `
        <div class="entry-date">${diaryDate}</div>
        <div class="entry-content">
            <h3>${diaryTitle}</h3>
            <p>${diaryDesc}</p>
            <span class="status in-progress">⏳ В процессе</span>
        </div>
    `;

    diaryContainer.insertBefore(newEntry, diaryContainer.firstChild);
    alert('Запись успешно добавлена!');
}

// ==================== АКТИВНЫЕ ССЫЛКИ НАВИГАЦИИ ====================

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            item.getAttribute('href') === '.' || 
            currentLocation.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// ==================== ПЛАВНАЯ ПРОКРУТКА ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
