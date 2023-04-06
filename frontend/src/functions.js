export function activate_text_fade_down(active, elements) {
  if (active) {
    var i = 0.4;
    elements.forEach((element) => {
      i += 0.15;
      var timing = i;
      element.style.cssText += "transition-duration:" + timing + "s";
      element.classList.add("come_down");
    });
  } else {
    elements.forEach((element) => {
      element.classList.remove("come_down");
    });
  }
}

export function homeNavBarLink(e) {
  e.preventDefault();

  const url = new URL(window.location.href);
  const pathName = url.pathname;

  if (pathName !== "/") {
    window.location.href = "/";
  } else {
    window.scrollTo(0, 0);
    window.history.replaceState(null, "Home Page", "/");
  }
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function get_current_path(path, partNumber) {
  const delimiter = "/",
    start = 0;

  const parts = path.split(delimiter).slice(start);
  return parts[partNumber];
}
