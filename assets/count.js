// Visitor counter. Tells our own server (stats.randomai.in) which page was opened
// and which site the visitor came from. No cookies, nothing sent to anyone else.
// Not counting your own visits: open https://randomai.in/?nocount once on each
// browser you use (https://randomai.in/?count turns counting back on).
(function () {
  if (!/^(www\.)?randomai\.in$/.test(location.hostname)) return;
  try {
    if (/[?&]nocount\b/.test(location.search)) localStorage.setItem('randomai-nocount', '1');
    if (/[?&]count\b/.test(location.search)) localStorage.removeItem('randomai-nocount');
    if (localStorage.getItem('randomai-nocount')) return;
  } catch (e) {}
  var from = '-';
  try {
    var r = document.referrer && new URL(document.referrer);
    if (r && r.hostname !== location.hostname) from = 'https://' + r.hostname + '/';
  } catch (e) {}
  new Image().src = 'https://stats.randomai.in/hit?p=' + encodeURIComponent(location.pathname) +
    '&r=' + from + '&t=' + Date.now();
})();
