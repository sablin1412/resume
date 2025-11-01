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
        live: 'file:///C:/Users/MSI/OneDrive/Desktop/frontend-and-backend-practice/index.html'
    },
    project2: {
        title: 'Todo-приложение',
        category: 'JavaScript',
        description: 'Интерактивное приложение для управления задачами с функциями добавления, удаления и отметки выполненных задач.',
        details: 'Создано с использованием ванильного JavaScript. Все задачи сохраняются в localStorage для сохранения данных между сеансами.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
        github: 'https://github.com',
        live: 'https://jakesgordon.com/games/racer/'
    },
    project3: {
        title: 'Интернет-магазин',
        category: 'React',
        description: 'E-commerce приложение с полной функциональностью: каталог товаров, корзина покупок, фильтрация и поиск.',
        details: 'Построено на React с использованием компонентного подхода. Интегрирована работа с API для получения данных товаров.',
        technologies: ['React', 'JavaScript', 'CSS3', 'API'],
        github: 'https://github.com',
        live: 'file:///C:/Users/MSI/OneDrive/Desktop/frontend-and-backend-practice/pages/goods.html'
    },
    project4: {
        title: 'Портфолио Bootstrap',
        category: 'Bootstrap, CSS',
        description: 'Адаптивный шаблон портфолио на основе фреймворка Bootstrap с красивым дизайном.',
        details: 'Использован Bootstrap для быстрого создания адаптивного макета. Дизайн оптимизирован для всех размеров экранов.',
        technologies: ['Bootstrap', 'CSS3', 'Responsive Design'],
        github: 'https://github.com',
        live: 'https://yandex.ru/games/app/272081'
    },
    project5: {
        title: 'Калькулятор',
        category: 'JavaScript, HTML, CSS',
        description: 'Функциональный веб-калькулятор с историей операций и красивым интерфейсом.',
        details: 'Калькулятор поддерживает все основные операции, имеет очень удобный интерфейс и историю расчетов.',
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        github: 'https://github.com',
        live: 'https://www.desmos.com/scientific?lang=ru'
    },
    project6: {
        title: 'Приложение Погода',
        category: 'React, API',
        description: 'Приложение для отслеживания погоды с данными в реальном времени от OpenWeatherMap API.',
        details: 'Использует React для управления состоянием и внешнее API для получения актуальных данных о погоде.',
        technologies: ['React', 'API', 'JavaScript', 'CSS3'],
        github: 'https://github.com',
        live: 'https://www.windy.com/ru/-%D0%A0%D0%B0%D0%B4%D0%B0%D1%80-%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D1%8B-radar?radar,'
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
// ==================== МОДАЛЬНОЕ ОКНО ДНЕВНИКА ====================

// Открыть модальное окно дневника
function openDiaryModal() {
    const modal = document.getElementById('diaryModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Закрыть модальное окно дневника
function closeDiaryModal() {
    const modal = document.getElementById('diaryModal');
    if (modal) {
        modal.style.display = 'none';
        // Очистить форму
        document.getElementById('diaryForm').reset();
    }
}

// Обработка формы дневника
const diaryForm = document.getElementById('diaryForm');
if (diaryForm) {
    diaryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Получаем данные из формы
        const entryDate = document.getElementById('entryDate').value.trim();
        const entryTitle = document.getElementById('entryTitle').value.trim();
        const entryDescription = document.getElementById('entryDescription').value.trim();
        const entryStatus = document.getElementById('entryStatus').value;

        // Определяем текст статуса
        const statusText = entryStatus === 'completed' ? '✓ Завершено' : '⏳ В процессе';

        // Создаём новую запись
        const diaryContainer = document.querySelector('.diary-entries');
        if (!diaryContainer) return;

        const newEntry = document.createElement('div');
        newEntry.className = `diary-entry ${entryStatus}`;
        newEntry.innerHTML = `
            <div class="entry-date">${entryDate}</div>
            <div class="entry-content">
                <h3>${entryTitle}</h3>
                <p>${entryDescription}</p>
                <span class="status ${entryStatus}">${statusText}</span>
            </div>
        `;

        // Добавляем запись в начало списка
        diaryContainer.insertBefore(newEntry, diaryContainer.firstChild);

        // Анимация появления
        newEntry.style.opacity = '0';
        newEntry.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            newEntry.style.transition = 'all 0.5s ease';
            newEntry.style.opacity = '1';
            newEntry.style.transform = 'translateY(0)';
        }, 10);

        // Закрываем модальное окно
        closeDiaryModal();

        // Показываем уведомление
        alert('✅ Запись успешно добавлена!');
    });
}

// Закрытие модала при клике вне окна
window.addEventListener('click', function(event) {
    const diaryModal = document.getElementById('diaryModal');
    if (event.target === diaryModal) {
        closeDiaryModal();
    }
});

// Старую функцию addDiaryEntry можно удалить или закомментировать


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
