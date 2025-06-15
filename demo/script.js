document.querySelectorAll('.item, .item2').forEach(card => {
  const glow = card.querySelector('.hover-glow');
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.setProperty('--x', `${x}px`);
    glow.style.setProperty('--y', `${y}px`);
  });
});
