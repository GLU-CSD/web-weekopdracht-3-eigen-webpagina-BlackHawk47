document.querySelectorAll('.track').forEach((track) => {
    track.addEventListener('mouseenter', () => {
        track.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    track.addEventListener('mouseleave', () => {
        track.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});