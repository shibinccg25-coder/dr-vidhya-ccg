(function () {
  var L = window.CCG_LINKS || {};
  document.querySelectorAll("a[data-link]").forEach(function (a) {
    var url = L[a.getAttribute("data-link")];
    if (url) {
      a.setAttribute("href", url);
      if (/^https?:/i.test(url)) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener noreferrer"); }
    } else {
      a.removeAttribute("href");
      a.setAttribute("role", "link");
      a.setAttribute("aria-disabled", "true");
      a.classList.add("is-pending");
      var note = document.querySelector('[data-pending-for="' + a.getAttribute("data-link") + '"]');
      if (note) note.hidden = false;
    }
  });
})();

/* Fit each CCG page to the screen width (max 1:1). Uniform scale only. */
(function () {
  var root = document.documentElement, W = 480;
  function fit() {
    var avail = root.clientWidth || window.innerWidth;
    root.style.setProperty("--s", Math.min(1, avail / W).toFixed(4));
  }
  fit();
  window.addEventListener("resize", fit);
  window.addEventListener("orientationchange", fit);
})();
