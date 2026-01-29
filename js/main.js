/** AM JS - Manaus - Dynamic-energetic with orange jungle and action */
const STATE_CONFIG = {
  stateCode: 'am',
  capital: 'Manaus',
  formspreeUrl: 'https://formspree.io/f/xpqzgnez',
  colors: { primary: '#ff8c00', secondary: '#ff6347', accent: '#ffa500' },
  animations: {"enabled": true, "header": {"type": "boldSlide", "duration": "0.5s", "easing": "cubic-bezier(0.68, -0.55, 0.265, 1.55)", "delay": "0s"}, "sections": {"type": "zoomReveal", "duration": "0.9s", "easing": "ease-out", "stagger": "0.1s"}, "hero": {"type": "jungleParallax", "speed": 0.8, "direction": "multi"}, "cards": {"type": "dynamicFlip", "angle": 180, "duration": "0.6s"}, "images": {"type": "energeticReveal", "scale": 1.3, "blur": "initial"}},
  interactions: {"hover": "energetic-pop", "scroll": "dynamic-zoom", "transitions": "bold-snap", "click": "explosion-ripple"},
  premiumEffects: ["jungle-parallax", "orange-glow", "motion-blur", "vine-patterns"]
};

const SECTIONS = ["am-index-section--map", "am-index-section-frequently-asked-questions-about-living-in-", "am-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
