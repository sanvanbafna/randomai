// Launching-soon buttons, subscribe box and screenshot tabs.
(function () {
  var toast = document.getElementById('toast'), timer;
  function soon(msg) {
    toast.textContent = msg || 'Launching soon. Downloads open at launch.';
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove('show'); }, 2800);
  }
  document.querySelectorAll('.soon').forEach(function (b) {
    b.addEventListener('click', function () { soon(b.dataset.msg); });
  });
  var sub = document.getElementById('sub');
  if (sub) sub.addEventListener('submit', function (e) {
    e.preventDefault();
    soon('Launching soon. Subscriptions open at launch.');
  });
  document.querySelectorAll('.gallery[data-tabs]').forEach(function (g) {
    var img = g.querySelector('.shot'), cap = g.querySelector('.caption');
    g.querySelectorAll('.tab').forEach(function (t) {
      t.addEventListener('click', function () {
        g.querySelectorAll('.tab').forEach(function (x) { x.setAttribute('aria-selected', 'false'); });
        t.setAttribute('aria-selected', 'true');
        img.src = t.dataset.src; img.alt = t.textContent + ' screen'; cap.textContent = t.dataset.cap;
      });
    });
  });
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
