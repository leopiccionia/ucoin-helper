const form = document.querySelector('.content form')

const submitForm = (value) => {
  const submitButton = form.querySelector(`button[value='${value}']`)
  form.requestSubmit(submitButton)
}

if (form) {
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase()

    if (key === 'a' || key === 'arrowleft') {
      submitForm(2) /* Obverse */
    }
    else if (key === 'd' || key === 'arrowright') {
      submitForm(1) /* Reverse */
    }
    else if (key === 's' || key === 'arrowdown') {
      submitForm(4) /* Both reverse and obverse */
    }
    else if (key === 'e') {
      submitForm(-1) /* Report error */
    }
  })
}
