document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        window.location.href = `details.html?id=${id}`;
    });
});
