(function () {
  'use strict';

  /* ---------- Aktion des Monats ----------
     Inhalte kommen aus aktion.js. Fehlt die Datei oder steht aktiv:false,
     bleibt der im HTML hinterlegte Stand stehen bzw. das Banner verschwindet. */
  var promo = document.getElementById('promo');
  var aktion = window.AKTION_DES_MONATS;

  if (promo && aktion) {
    if (aktion.aktiv === false) {
      promo.hidden = true;
    } else {
      var setText = function (id, value) {
        var el = document.getElementById(id);
        if (el && value) el.textContent = value;
      };

      setText('promoBadge', aktion.badge);
      setText('promoMonth', aktion.monat);
      setText('promo-heading', aktion.titel);
      setText('promoText', aktion.text);

      var img = document.getElementById('promoImg');
      if (img && aktion.bild) {
        /* srcset zuerst und immer mitsetzen: ein blosses img.src überschreibt
           die Auswahl aus dem Markup, und der Browser lädt dann auf dem Handy
           die grosse Datei statt der kleinen. Fehlt bildKlein, wird der
           Name daraus abgeleitet (name.jpg -> name-700.jpg). */
        var klein = aktion.bildKlein ||
                    aktion.bild.replace(/\.(jpe?g|png|webp)$/i, '-700.$1');
        img.setAttribute('srcset', klein + ' 700w, ' + aktion.bild + ' 1200w');
        img.src = aktion.bild;
        if (aktion.bildAlt) img.alt = aktion.bildAlt;
        if (aktion.bildFokus) img.style.objectPosition = aktion.bildFokus;
      }

      var cta = document.getElementById('promoCta');
      if (cta) {
        if (aktion.ctaText) cta.textContent = aktion.ctaText;
        if (aktion.ctaHref) cta.setAttribute('href', aktion.ctaHref);
        cta.hidden = !(aktion.ctaText && aktion.ctaHref);
      }

      var legal = document.getElementById('promoLegal');
      if (legal) {
        legal.textContent = aktion.hinweis || '';
        legal.hidden = !aktion.hinweis;
      }
    }
  }

  /* ---------- Scroll-Reveal ----------
     Einziges scrollabhängiges Verhalten auf der Seite. Alles Licht kommt
     sonst aus statischen CSS-Verläufen, damit beim Scrollen nichts ruckelt. */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
