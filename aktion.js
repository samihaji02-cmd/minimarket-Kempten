/* ==========================================================================
   Aktion des Monats — einziges Datenfeld für das Aktions-Banner.
   Beim Monatswechsel NUR diese Datei anfassen: Werte hier ändern, fertig.
   Das Banner-Markup in index.html ist der Fallback ohne JavaScript und
   wird von diesen Werten überschrieben.

   Regeln, die nicht gebrochen werden dürfen:
   - bild: 3:2, liegt in assets/photos/
   - zu jedem Bild gehört eine 700 px breite Fassung fürs Handy, benannt
     nach dem Muster name-700.jpg. Fehlt sie, laden Handys unnötig die
     grosse Datei.
   - titel/text: nur Oberkategorien, keine Marken- oder Sortenlisten
   ========================================================================== */
window.AKTION_DES_MONATS = {
  aktiv:     true,
  monat:     'September',
  badge:     'Aktion des Monats',
  titel:     'Diesen Monat: E-Zigaretten',
  text:      'Das Vape-Fach ist diesen Monat im Angebot – rund um die Uhr am ' +
             'Automaten, Ausgabe nach Ausweiskontrolle.',
  bild:      'assets/photos/aktion-vapes.jpg',
  bildAlt:   'Elfbar-Vapes in verschiedenen Farben, nebeneinander aufgereiht',
  /* Bildausschnitt: object-position */
  bildFokus: '50% 50%',
  ctaText:   'Zu den 18+-Artikeln',
  ctaHref:   '#ab18',
  hinweis:   'Enthält Nikotin. Abgabe nur an Personen ab 18 Jahren, Ausweiskontrolle am Automaten.'
};

/* Vorlage für kommende Monate (auskommentiert lassen, bis sie dran ist):

window.AKTION_DES_MONATS = {
  aktiv:   true,
  monat:   'Oktober',
  badge:   'Aktion des Monats',
  titel:   'Diesen Monat: Energie',
  text:    'Das Energy-Fach im Kühlautomaten ist diesen Monat im Angebot.',
  bild:    'assets/photos/kat-energie.jpg',
  bildAlt: 'Gekühltes Automatenfach mit Energy-Dosen',
  bildFokus: '50% 50%',
  ctaText: 'Zum Sortiment',
  ctaHref: '#sortiment',
  hinweis: ''
};
*/
