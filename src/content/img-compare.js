const form = document.querySelector('.content form')

const submitForm = (value) => {
  const submitButton = form.querySelector(`button[value='${value}']`)
  form.requestSubmit(submitButton)
}

if (form) {
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase()

    if (key === 'a' || key === 'arrowleft') {
      submitForm(1) /* Left */
    }
    else if (key === 'd' || key === 'arrowright') {
      submitForm(2) /* Right */
    }
    else if (key === 's' || key === 'arrowdown') {
      submitForm(0) /* Equal */
    }
    else if (key === 'e') {
      submitForm(-1) /* Report error */
    }
  })
}
