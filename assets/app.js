/**
 * Bright Path - Child Development & Autism Therapy Center
 * Core Interactive Client Script
 */

(function () {
  'use strict';

  // 1. Theme Management
  const html = document.documentElement;
  const body = document.body;
  const savedTheme = localStorage.getItem('bp-theme') || 'light';
  body.dataset.theme = savedTheme;

  function updateThemeToggles(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.innerHTML = theme === 'dark' ? '☀️' : '◐';
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }
  updateThemeToggles(savedTheme);

  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
      body.dataset.theme = newTheme;
      localStorage.setItem('bp-theme', newTheme);
      updateThemeToggles(newTheme);
    });
  });

  // 2. RTL Management
  const savedRtl = localStorage.getItem('bp-rtl') === '1';
  if (savedRtl) {
    body.classList.add('rtl');
    html.setAttribute('dir', 'rtl');
  }

  document.querySelectorAll('[data-rtl-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const isRtl = body.classList.toggle('rtl');
      if (isRtl) {
        html.setAttribute('dir', 'rtl');
        localStorage.setItem('bp-rtl', '1');
      } else {
        html.removeAttribute('dir');
        localStorage.setItem('bp-rtl', '0');
      }
    });
  });

  // 3. Mobile Navigation Drawer
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (menuBtn) {
          menuBtn.setAttribute('aria-expanded', 'false');
          menuBtn.innerHTML = '☰';
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (menuBtn) {
          menuBtn.setAttribute('aria-expanded', 'false');
          menuBtn.innerHTML = '☰';
        }
      }
    });
  }

  // 4. Back to Top Button
  let backToTop = document.querySelector('.back-to-top');
  if (!backToTop) {
    backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 5. Password Eye Icon Toggle (Login & Register Pages)
  document.querySelectorAll('[data-toggle-pass]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-toggle-pass');
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      btn.innerHTML = isPassword
        ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
        : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });

  // 6. Demo Forms Handling
  document.querySelectorAll('[data-demo-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = form.querySelector('[data-message]');
      if (msg) {
        msg.textContent = 'Thank you! Your inquiry has been received. Our clinical intake coordinator will reach out within 24 hours.';
        msg.style.color = 'var(--brand)';
      }
      form.reset();
    });
  });

  // 7. Dashboard Session Booking Request
  const bookingForm = document.querySelector('[data-booking]');
  function renderBookings() {
    const list = document.querySelector('[data-bookings]');
    if (!list) return;
    const items = JSON.parse(localStorage.getItem('bp-bookings') || '[]');
    if (items.length === 0) {
      list.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--muted)">No custom session requests submitted yet. Use the form above to book a new session.</td></tr>';
      return;
    }
    list.innerHTML = items.map(item => `
      <tr>
        <td><b>${escapeHtml(item.child || 'Aarav')}</b></td>
        <td>${escapeHtml(item.therapy || 'Occupational Therapy')}</td>
        <td>${escapeHtml(item.date || 'Upcoming')}</td>
        <td><span class="card-tag" style="background:#e8f5e9;color:#2e7d32">Confirmed</span></td>
      </tr>
    `).join('');
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(bookingForm));
      const existing = JSON.parse(localStorage.getItem('bp-bookings') || '[]');
      existing.unshift(data);
      localStorage.setItem('bp-bookings', JSON.stringify(existing));
      const feedback = document.querySelector('[data-bookmsg]');
      if (feedback) {
        feedback.textContent = 'Session request successfully saved to your family schedule!';
        feedback.style.color = 'var(--brand)';
      }
      bookingForm.reset();
      renderBookings();
    });
    renderBookings();
  }

  // 8. Payment button demo
  const payBtn = document.querySelector('[data-pay]');
  if (payBtn) {
    payBtn.addEventListener('click', () => {
      alert('Secure Stripe/Razorpay payment gateway integration demo. Contact clinic administration for official receipts.');
    });
  }

})();
