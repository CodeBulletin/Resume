(() => {
  // <stdin>
  var theme_button = document.getElementsByClassName("theme")[0];
  var dark_img = Array.from(document.querySelectorAll(".img_dark"));
  var light_img = document.querySelectorAll(".img_light");
  var print_img = document.querySelectorAll(".img_print");
  function set_theme(str) {
    if (str == "dark") {
      for (let i of light_img) {
        i.style.display = "none";
      }
      for (let i of dark_img) {
        i.style.display = "block";
      }
      for (let i of print_img) {
        i.style.display = "none";
      }
      document.body.classList.toggle("dark_theme", true);
      document.body.classList.toggle("print_theme", false);
    } else if (str == "light") {
      for (let i of dark_img) {
        i.style.display = "none";
      }
      for (let i of light_img) {
        i.style.display = "block";
      }
      for (let i of print_img) {
        i.style.display = "none";
      }
      document.body.classList.toggle("dark_theme", false);
      document.body.classList.toggle("print_theme", false);
    } else {
      for (let i of dark_img) {
        i.style.display = "none";
      }
      for (let i of light_img) {
        i.style.display = "none";
      }
      for (let i of print_img) {
        i.style.display = "block";
      }
      document.body.classList.toggle("dark_theme", false);
      document.body.classList.toggle("print_theme", true);
    }
    localStorage.theme = str;
  }
  function get_theme() {
    if (localStorage.theme) {
      return localStorage.theme;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  }
  var theme = get_theme();
  set_theme(theme);
  theme_button.onclick = function() {
    if (theme == "dark") {
      theme = "light";
      set_theme(theme);
    } else if (theme == "light") {
      theme = "print";
      set_theme(theme);
    } else {
      theme = "dark";
      set_theme(theme);
    }
  };
})();
