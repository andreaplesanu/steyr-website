const btn = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('mode-icon');
const text = document.getElementById('mode-text');

// Prüfen, ob der Nutzer schon mal da war
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    updateButton(true);
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    // Einstellung speichern
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateButton(isDark);
});

function updateButton(isDark) {
    icon.textContent = isDark ? '☀️' : '🌙';
    text.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}