let step = 0
const form = document.querySelector('.content form')

const fieldset = () => {
  return form.querySelector(`fieldset:nth-of-type(${step + 1})`)
}

const setStep = (nextStep) => {
  fieldset().style.background = ''
  step = nextStep
  fieldset().style.background = 'aliceblue'
}

const setOption = (option) => {
  const radio = fieldset().elements[option]
  if (radio) {
    radio.click()
    setStep((step + 1) % 6)
  }
}

const previousStep = () => {
  setStep((step + 5) % 6)
}

const submitForm = () => {
  const submitButton = form.querySelector('button#btn-add')
  if (submitButton) {
    form.requestSubmit(submitButton)
  }
}

if (form) {
  setStep(0)

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase()

    if (key === 'a' || key === 'arrowleft') {
      setOption(0) /* Select first option */
    }
    else if (key === 's' || key === 'arrowdown') {
      setOption(1) /* Select second option */
    }
    else if (key === 'd' || key === 'arrowright') {
      setOption(2) /* Select third option */
    }
    else if (key === 'w' || key === 'arrowup') {
      previousStep() /* Return to previous step */
    }
    else if (key === 'enter') {
      event.preventDefault()
      event.stopPropagation()
      submitForm() /* Submit form */
    }
  })
}
