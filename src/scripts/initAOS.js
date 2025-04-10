import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: false, // 👈 MUY IMPORTANTE si querés que se anime cada vez que aparece
    mirror: true, // 👈 Permite que se anime también al hacer scroll hacia arriba
  });
});

