/* ============================================
   OZ SOUNDZ UNLEASHED — COMPONENTS
   Injects nav + footer into every page
   ============================================ */

(function () {

  // Detect root path depth
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const root = depth <= 1 ? './' : depth === 2 ? '../' : '../../';

  // ---- NAV HTML ----
  const navHTML = `
<nav id="site-nav" role="navigation">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-logo" aria-label="Oz Soundz Unleashed Home">
    <img src="images/OzSoundzUnleashedLogo.png"/>
      <div class="nav-logo-mark"><span>OZ</span></div>
      <div class="nav-logo-text">
        <span class="top">Oz Soundz</span>
        <span class="bottom">Unleashed</span>
      </div>
    </a>

    <ul class="nav-links" id="nav-links">
      <li><a href="${root}index.html">Home</a></li>
      <li><a href="${root}pages/about.html">About</a></li>
      <li><a href="${root}pages/host.html">The Host</a></li>
      <li><a href="${root}pages/episodes.html">Episodes</a></li>
      <li><a href="${root}pages/guests.html">Guests</a></li>
      <li>
        <button class="nav-parent" aria-haspopup="true">The Group ▾</button>
        <div class="nav-dropdown">
          <a href="${root}pages/the-oz-soundz-group/index.html">Overview</a>
          <a href="${root}pages/the-oz-soundz-group/music-audio.html">Music &amp; Audio</a>
          <a href="${root}pages/the-oz-soundz-group/studios.html">Studios</a>
          <a href="${root}pages/the-oz-soundz-group/records.html">Records</a>
        </div>
      </li>
      <li>
        <button class="nav-parent" aria-haspopup="true">Media ▾</button>
        <div class="nav-dropdown">
          <a href="${root}pages/our-media/index.html">Our Media</a>
          <a href="${root}pages/our-media/social-media.html">Social Media</a>
        </div>
      </li>
      <li><a href="${root}pages/resources.html">Resources</a></li>
      <li><a href="${root}pages/sponsors.html">Sponsors</a></li>
      <li><a href="${root}pages/submit-guest.html">Be a Guest</a></li>
      <li><a href="${root}pages/contact.html" class="nav-cta">Contact</a></li>
    </ul>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  // ---- FOOTER HTML ----
  const footerHTML = `
<footer id="site-footer">
  <div class="ticker-wrap" aria-hidden="true">
    <div class="ticker">
      <span>Oz Soundz Unleashed</span>
      <span>Independent Voice of Australian Music</span>
      <span>New Episodes Monthly</span>
      <span>Educate. Empower. Elevate.</span>
      <span>Proudly Australian</span>
      <span>Listen on Spotify & Apple Podcasts</span>
      <span>Support Indie Music</span>
      <span>Real Voices. Real Stories. Real Sound.</span>
    </div>
  </div>
  <div class="container" style="margin-top:50px;">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo-text" style="margin-bottom:4px;">
          <span class="top" style="font-family:var(--font-display);font-size:1.8rem;letter-spacing:0.08em;color:var(--text-bright);">Oz Soundz Unleashed</span>
        </div>
        <p class="footer-tagline">The Independent Voice of Australian Music &amp; Audio</p>
        <div class="social-links" style="margin-bottom:16px;">
          <a href="http://facebook.com/ozsoundz" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="http://instagram.com/@ozsoundzunleashed" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="http://tiktok.com/@ozsoundz" class="social-link" target="_blank" rel="noopener" aria-label="TikTok">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/></svg>
          </a>
          <a href="http://youtube.com/@ozsoundz" class="social-link" target="_blank" rel="noopener" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a"/></svg>
          </a>
        </div>
        <p style="font-family:var(--font-mono);font-size:0.62rem;color:var(--text-dim);letter-spacing:0.08em;">
          <a href="mailto:unleashed@ozsoundz.com.au">unleashed@ozsoundz.com.au</a>
        </p>
      </div>

      <div class="footer-col">
        <h4>The Podcast</h4>
        <ul>
          <li><a href="${root}pages/about.html">About The Show</a></li>
          <li><a href="${root}pages/host.html">The Host</a></li>
          <li><a href="${root}pages/episodes.html">All Episodes</a></li>
          <li><a href="${root}pages/guests.html">Show Guests</a></li>
          <li><a href="${root}pages/resources.html">Artist Resources</a></li>
          <li><a href="${root}pages/submit-guest.html">Be a Guest</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>The Group</h4>
        <ul>
          <li><a href="${root}pages/the-oz-soundz-group/index.html">Overview</a></li>
          <li><a href="${root}pages/the-oz-soundz-group/music-audio.html">Music &amp; Audio</a></li>
          <li><a href="${root}pages/the-oz-soundz-group/studios.html">Studios</a></li>
          <li><a href="${root}pages/the-oz-soundz-group/records.html">Records</a></li>
          <li><a href="https://ozsoundzgroup.com.au" target="_blank" rel="noopener">Group Website ↗</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Listen Now</h4>
        <ul>
          <li><a href="https://open.spotify.com/show/1hesPWxJaRNtgo8lZB2Hau" target="_blank" rel="noopener">Spotify</a></li>
          <li><a href="https://podcasts.apple.com/au/podcast/oz-soundz-unleashed/id1829397348" target="_blank" rel="noopener">Apple Podcasts</a></li>
          <li><a href="${root}pages/our-media/index.html">All Platforms</a></li>
          <li><a href="${root}pages/sponsors.html">Sponsors</a></li>
          <li><a href="${root}pages/contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025–2026 Oz Soundz Unleashed · Part of <a href="https://ozsoundzgroup.com.au" target="_blank">The Oz Soundz Group</a> · Sydney, Australia</p>
      <p>Built for the underground. <span style="color:var(--gold);">★</span> Made in Australia.</p>
    </div>
  </div>
</footer>`;

  // ---- INJECT ----
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Load shared scripts
  const mainScript = document.createElement('script');
  mainScript.src = root + 'js/main.js';
  document.body.appendChild(mainScript);

})();
