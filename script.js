const subscribeContainer = document.querySelector('.subscribe-container')
const succesContainer = document.querySelector('.succes-container')
const emailInput = document.querySelector('.email-form .input-wrap #email-input')
const emailSubmit = document.querySelector('.email-form #email-submit')
const succesEmailContainer = document.querySelector('.succes-container #target-email')
let succesEmail = ''
const messageSubmit = document.querySelector('.succes-container #message-submit')


const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function resetEmailForm (){
  succesContainer.classList.remove('visible')
  subscribeContainer.classList.add('visible')
  emailInput.value = ''

  if ( emailInput.classList.contains('invalid') ){
    emailInput.classList.remove('invalid')
  }

  if ( emailInput.parentElement.querySelector('.error-message') ){
    emailInput.parentElement.querySelector('.error-message').remove()
  }
}

function showError (){
  if ( !emailInput.classList.contains('invalid') ){
    emailInput.classList.add('invalid')

    const errorElement = document.createElement('span')
    errorElement.classList.add('error-message')
    errorElement.textContent = 'Valid email required'
    emailInput.parentElement.appendChild(errorElement)
  }
}

function validateForm (){
  const inputValue = emailInput.value
  
  if( inputValue == '' || !inputValue.match(mailRegex) ){
    showError ()
    return
  }

  succesEmail = inputValue
  succesEmailContainer.textContent = succesEmail
  subscribeContainer.classList.remove('visible')
  succesContainer.classList.add('visible')

  messageSubmit.addEventListener('click', resetEmailForm)
}

emailSubmit.addEventListener('click', validateForm)