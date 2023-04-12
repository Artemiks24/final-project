const showAside = document.querySelector('.button--show-aside');
const hideAside = document.querySelector('.button--hide-aside');
const aside = document.querySelector('.aside');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const hideFeedback = document.querySelector('.button--hide-feedback');
const feedback = document.querySelector('.feedback');
const sidebar = document.querySelector('.sidebar');
const showCall = document.querySelectorAll('.button--show-call');
const hideCall = document.querySelector('.button--hide-call');
const call = document.querySelector('.call');
const showFeedback = document.querySelectorAll('.button--show-feedback');


const sections = [sidebar, aside, header];

// hide/Show aside
export function asideTranslate () {
  showAside.addEventListener('click', () => {
    aside.classList.add('aside--translate')
    main.classList.add('blur')
  })
  
  hideAside.addEventListener('click', () => {
    aside.classList.remove('aside--translate')
    main.classList.remove('blur')
  })
}
// hide/Show feedback
export function feedbackTranslate () {
  showFeedback.forEach(e => e.addEventListener('click', () => {
    feedback.classList.add('feedback--translate')
    sections.forEach(e => e.classList.add('blur'))
    main.classList.add('blur')
  }))
  
  hideFeedback.addEventListener('click', () => {
    feedback.classList.remove('feedback--translate')
    sections.forEach(e => e.classList.remove('blur'))
    main.classList.remove('blur')
  })
}
// hide/Show call
export function callTranslate () {
  showCall.forEach(e => e.addEventListener('click', () => {
    call.classList.add('call--translate')
    sections.forEach(e => e.classList.add('blur'))
    main.classList.add('blur')
  }))
  
  hideCall.addEventListener('click', () => {
    call.classList.remove('call--translate')
    sections.forEach(e => e.classList.remove('blur'))
    main.classList.remove('blur')
  })
}
// hide/Show main
export function mainTranslate () {
  main.addEventListener('click', () => {
    if (document.documentElement.clientWidth > 768) {
      aside.classList.remove('aside--translate')
      main.classList.remove('blur')
    }
    feedback.classList.remove('feedback--translate')
    call.classList.remove('call--translate')
    sections.forEach(e => e.classList.remove('blur'))
  })
}
