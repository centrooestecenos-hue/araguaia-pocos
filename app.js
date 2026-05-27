/* ============================================================
   ARAGUAIA POÇOS — Landing Page JS
   - UTM tracking | Scroll progress | Reveal | Counter | Form
   ============================================================ */

const WHATSAPP_LINK = 'https://wa.me/message/VCMNJ7SGMDHQE1';
const WEBHOOK_URL = 'https://formspree.io/f/xvzyvdzy';

// === UTM tracking ===
const utm = {
  source:   new URLSearchParams(location.search).get('utm_source')   || 'direto',
  medium:   new URLSearchParams(location.search).get('utm_medium')   || 'organico',
  campaign: new URLSearchParams(location.search).get('utm_campaign') || '',
  content:  new URLSearchParams(location.search).get('utm_content')  || '',
  termo:    new URLSearchParams(location.search).get('utm_term')     || ''
};
try { sessionStorage.setItem('utm_data', JSON.stringify(utm)); } catch(e){}

// === Ano dinâmico no footer ===
document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // === Força autoplay do vídeo do hero (e mostra botão de play se falhar) ===
  const heroVid = document.getElementById('heroVideo');
  const playBtn = document.getElementById('playBtn');
  if (heroVid) {
    heroVid.muted = true;
    heroVid.play().catch(() => {
      // Autoplay bloqueado pelo navegador — mostra botão de play
      if (playBtn) playBtn.style.display = 'flex';
    });
    // Tenta novamente quando a página estiver totalmente visível
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        heroVid.play().catch(() => {});
      }
    });
  }

  // Auto-play em TODOS os vídeos da página
  document.querySelectorAll('video').forEach(v => {
    v.muted = true;
    v.play().catch(() => {});
  });
});

// === Scroll progress bar + header shrink ===
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  const bar = document.getElementById('scrollBar');
  if (bar) bar.style.width = pct + '%';

  const hdr = document.getElementById('hdr');
  if (hdr) hdr.classList.toggle('scrolled', h.scrollTop > 50);
});

// === Scroll reveal (Intersection Observer) ===
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});

// === Counter animation nas stats ===
function animateCounter(el, target) {
  const span = el.querySelector('span:first-child');
  if (!span) return;
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    span.textContent = Math.round(target * eased);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(s => {
        animateCounter(s, parseInt(s.dataset.target));
      });
      statsObs.disconnect();
    }
  });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
  const statsEl = document.querySelector('.stats');
  if (statsEl) statsObs.observe(statsEl);
});

// === Tracking de cliques (Pixel + GA) ===
function trackClick(label) {
  if (typeof fbq !== 'undefined') fbq('track', 'Contact', { content_name: label });
  if (typeof gtag !== 'undefined') gtag('event', 'click', {
    event_label: label,
    utm_source: utm.source,
    utm_campaign: utm.campaign
  });
}
window.trackClick = trackClick;

// === Form submit ===
function enviarLead(e) {
  e.preventDefault();
  const form = e.target;
  const dados = {
    nome: form.nome.value,
    telefone: form.telefone.value,
    cidade: form.cidade.value,
    finalidade: form.finalidade.value,
    origem: utm.source,
    campanha: utm.campaign,
    conteudo_anuncio: utm.content,
    termo: utm.termo,
    data: new Date().toISOString(),
    pagina: location.href,
    _replyto: 'centrooestecenos@gmail.com',
    _subject: '🌊 Novo Lead Araguaia — ' + form.nome.value + ' (' + form.cidade.value + ')'
  };

  // Conversões
  if (typeof fbq !== 'undefined') fbq('track', 'Lead', {
    content_name: 'form_landing',
    content_category: form.finalidade.value
  });
  if (typeof gtag !== 'undefined') gtag('event', 'generate_lead', {
    value: 1, currency: 'BRL', method: form.finalidade.value
  });

  fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(dados)
  }).then(() => redir(dados)).catch(() => redir(dados));

  return false;
}
window.enviarLead = enviarLead;

// === Toggle som do vídeo do hero ===
function toggleSound(btn) {
  const v = document.getElementById('heroVideo');
  const icon = document.getElementById('soundIcon');
  if (!v) return;
  v.muted = !v.muted;
  const ICON_MUTED = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';
  const ICON_ON    = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>';
  if (icon) icon.innerHTML = v.muted ? ICON_MUTED : ICON_ON;
  if (btn) {
    btn.setAttribute('aria-label', v.muted ? 'Ativar som' : 'Mutar som');
    btn.setAttribute('title', v.muted ? 'Ativar som' : 'Mutar som');
  }
  if (!v.muted) {
    v.play().catch(() => {});
  }
  if (typeof trackClick === 'function') trackClick(v.muted ? 'video_mute' : 'video_unmute');
}
window.toggleSound = toggleSound;

function redir(d) {
  const msg = encodeURIComponent(
    'Olá! Sou ' + d.nome + ', de ' + d.cidade + '.\n' +
    'Vim pelo site (Araguaia Poços) e quero orçamento para poço artesiano.\n\n' +
    '📋 Finalidade: ' + d.finalidade + '\n' +
    '📱 WhatsApp: ' + d.telefone + '\n' +
    '🎯 Origem: ' + d.origem
  );
  location.href = 'https://wa.me/5564999606284?text=' + msg;
}
