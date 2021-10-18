"use strict";

!function (e, t) {
  "use strict";

  t.addEventListener("DOMContentLoaded", function () {
    var n = t.querySelector("#theme");
    n.checked = "true" === e.localStorage.getItem("switchedTheme"), n.addEventListener("change", function (t) {
      t.currentTarget.checked ? e.localStorage.setItem("switchedTheme", "true") : e.localStorage.removeItem("switchedTheme");
    });
    var s = {
      menuElement: t.getElementById("menu"),
      toggleClick: function toggleClick(e) {
        e.target !== this.menuElement || e.target.classList.contains("act") ? this.menuElement.classList.remove("act") : (e.preventDefault(), e.stopImmediatePropagation(), document.getElementsByClassName("nav")[0].focus(), this.menuElement.classList.toggle("act"));
      },
      close: function close(e) {
        if (e.isComposing || 229 === e.key) return !1;
        "Escape" === e.key && (this.menuElement.classList.remove("act"), e.preventDefault(), e.stopImmediatePropagation());
      }
    };
    t.addEventListener("click", function (e) {
      return s.toggleClick(e);
    }), e.addEventListener("keyup", function (e) {
      return s.close(e);
    });
  });
}(window, document);