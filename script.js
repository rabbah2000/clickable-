document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('linkForm');
    const titleInput = document.getElementById('title');
    const urlInput = document.getElementById('url');
    const linksList = document.getElementById('linksList');

    // Charger les liens depuis le localStorage
    let links = JSON.parse(localStorage.getItem('links') || '[]');

    function renderLinks() {
        linksList.innerHTML = '';
        links.forEach((link, idx) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            a.target = '_blank';
            li.appendChild(a);
            linksList.appendChild(li);
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = titleInput.value.trim();
        const url = urlInput.value.trim();
        if (!title || !url) return;
        links.push({ title, url });
        localStorage.setItem('links', JSON.stringify(links));
        renderLinks();
        form.reset();
    });

    renderLinks();
}); 