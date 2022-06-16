(function (w, d) {
  'use strict'

  function init () {
    const themeSwitch = d.querySelector('#theme')
    themeSwitch.checked = w.localStorage.getItem('switchedTheme') === 'true'
    themeSwitch.addEventListener('change', e => e.currentTarget.checked ? w.localStorage.setItem('switchedTheme', 'true') : w.localStorage.removeItem('switchedTheme'))

    const MENU = {
      menuElement: d.getElementById('menu'),
      click (e) {
        if (e.target === this.menuElement && !e.target.classList.contains('act')) {
          e.preventDefault()
          e.stopImmediatePropagation()
          this.menuElement.classList.toggle('act')
          return
        }
        this.close()
      },
      listenForKeys (e) {
        if (e.isComposing || e.key === 229) return false
        if (e.key === 'Escape') this.close()
        if (e.key === 'Tab' && !this.menuElement.classList.contains('act')) {
          this.menuElement.classList.toggle('act')
          this.menuElement.nextElementSibling.focus()
        }
      },
      close () { this.menuElement.classList.remove('act') }
    }

    d.addEventListener('click', MENU.click.bind(MENU))
    w.addEventListener('keyup', MENU.listenForKeys.bind(MENU))
  }

  d.addEventListener('DOMContentLoaded', init)
}(window, document))
