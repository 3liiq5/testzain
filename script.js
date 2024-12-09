const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const body = document.body;
const deleteBtn = document.getElementById('deleteBtn');
const submitBtn = document.getElementById('submitBtn');

const textContent = {
    en: {
        formTitle: 'Add Session Appointment',
        labelTopic: 'Session Topic:',
        labelTime: 'Session Time:',
        labelDate: 'Session Date:',
        labelCategory: 'Target Audience:',
        labelLocation: 'Event Hall Name:',
        topicPlaceholder: 'Enter session topic',
        locationPlaceholder: 'Enter hall name',
        deleteButton: 'Delete',
        submitButton: 'Submit',
        themeButtonLight: 'Dark Mode',
        themeButtonDark: 'Light Mode',
        langButton: 'العربية',
        categoryOptions: {
            students: 'For Students and Teachers',
            studentsOnly: 'For Students Only',
            teachersOnly: 'For Teachers Only'
        },
        locationOptions: {
            hall1: 'Test Hall 1',
            hall2: 'Test Hall 2',
            hall3: 'Test Hall 3'
        }
    },
    ar: {
        formTitle: 'إضافة موعد الجلسة',
        labelTopic: 'موضوع الجلسة:',
        labelTime: 'وقت الجلسة:',
        labelDate: 'تاريخ الجلسة:',
        labelCategory: 'الفئة المستهدفة:',
        labelLocation: 'اسم قاعة الحدث:',
        topicPlaceholder: 'اكتب موضوع الجلسة',
        locationPlaceholder: 'أدخل اسم القاعة',
        deleteButton: 'حذف',
        submitButton: 'قبول',
        themeButtonLight: 'الوضع الداكن',
        themeButtonDark: 'الوضع الفاتح',
        langButton: 'English',
        categoryOptions: {
            students: 'للطلبة والتدريسيين',
            studentsOnly: 'للطلاب فقط',
            teachersOnly: 'للتدريسيين فقط'
        },
        locationOptions: {
            hall1: 'قاعة اختبار 1',
            hall2: 'قاعة اختبار 2',
            hall3: 'قاعة اختبار 3'
        }
    }
};

let currentLang = 'ar';
let isDarkMode = false;

function updateLanguage() {
    const lang = textContent[currentLang];
    const locationSelect = document.getElementById('location');
    locationSelect.innerHTML = '';
    Object.entries(lang.locationOptions).forEach(([value, text]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        locationSelect.appendChild(option);
    });

    if (currentLang === 'ar') {
        document.body.classList.remove('ltr');
        document.body.classList.add('rtl');
        document.querySelector('.container').classList.remove('ltr');
        document.querySelector('.container').classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
        document.body.classList.add('ltr');
        document.querySelector('.container').classList.remove('rtl');
        document.querySelector('.container').classList.add('ltr');
    }

    document.getElementById('form-title').textContent = lang.formTitle;
    document.getElementById('label-topic').textContent = lang.labelTopic;
    document.getElementById('label-time').textContent = lang.labelTime;
    document.getElementById('label-date').textContent = lang.labelDate;
    document.getElementById('label-category').textContent = lang.labelCategory;
    document.getElementById('label-location').textContent = lang.labelLocation;

    document.getElementById('topic').placeholder = lang.topicPlaceholder;
    document.getElementById('location').placeholder = lang.locationPlaceholder;

    deleteBtn.textContent = lang.deleteButton;
    submitBtn.textContent = lang.submitButton;
    langToggle.textContent = lang.langButton;
    themeToggle.textContent = isDarkMode ? lang.themeButtonDark : lang.themeButtonLight;

    const categoryDropdown = document.getElementById('category');
    const options = lang.categoryOptions;
    categoryDropdown.innerHTML = `
        <option value="students">${options.students}</option>
        <option value="students-only">${options.studentsOnly}</option>
        <option value="teachers-only">${options.teachersOnly}</option>
    `;
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    updateLanguage();
});

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage();
});

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});