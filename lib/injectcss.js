var decoded = decodeURIComponent(window.location.search.substr(1));

var injected_css = document.createElement('style');
injected_css.innerHTML = decoded;
document.head.appendChild(injected_css);
