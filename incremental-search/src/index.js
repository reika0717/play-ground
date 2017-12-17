import lists from './data/lists.json'
const [list1, list2] = lists

const showOptions = names => {
  const el = document.getElementById('js-options')
  el.innerHTML = ''

  for (const name of names) {
    const nameEl = document.createElement('div')
    nameEl.innerHTML = name
    el.append(nameEl)
  }

  if (names.length) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
}

const init = () => {
  const input = document.getElementById('js-input')
  const options = document.getElementById('js-options')

  input.addEventListener('keyup', event => {
    console.log('ho')
    const name = event.target.value
    const re = new RegExp(name, 'i')

    if (!name) {
      return showOptions([])
    }

    const names = [...list1, ...list2].filter(name => name.match(re))
    showOptions(names)
  })

  options.addEventListener('click', event => {
    const name = event.target.innerText
    input.value = name
    options.innerHTML = ''
    options.style.display = 'none'
  })
}

document.addEventListener('DOMContentLoaded', init)
