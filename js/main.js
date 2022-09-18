function toggleLightMode() {
    var element = document.body
    element.classList.toggle("light-mode");
}

var website_name = 'http://th1s1sau.github.io'

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <table class="header-content"><tr>
            <td class="home-link"><b><a href="${website_name}">th1s1sau</a></b>&nbsp;&nbsp;&nbsp;<a href="${website_name}/musiclog">musiclog</a></td>
            <td class="light-dark"><a href="#" onclick="parent.toggleLightMode()">Light/Dark</a></td>
        </tr></table>
      `;
    }
  }

function setHTML(className, displayValue) {
    var items = document.getElementsByClassName(className);
    for (var i=0; i < items.length; i++) {
        items[i].innerHTML = displayValue;
    }
  }

function idHTML(idName, displayValue) {
    document.getElementById(idName).innerHTML = displayValue;
}

customElements.define('main-header', Header);

console.log()