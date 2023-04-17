
const wrapper = document.querySelector('.wrapper')
const aside = document.querySelector('.aside')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
const header = document.querySelector('.header')
const feedback = document.querySelector('.feedback')
const sidebar = document.querySelector('.sidebar')
const call = document.querySelector('.call')
const sections = [header, sidebar, footer]

export function translate() {
  wrapper.addEventListener('click', (e) => {
    if (e.target.closest('.button--show-aside')) {
      aside.classList.add('aside--translate')
      sections.forEach((e) => e.classList.add('blur'))
      main.classList.add('blur')
      document.body.style.overflow = 'hidden';
    }
    if (e.target.closest('.button--hide-aside')) {
      aside.classList.remove('aside--translate')
      sections.forEach((e) => e.classList.remove('blur'))
      main.classList.remove('blur')
      
    }
    if (e.target.closest('.button--show-feedback')) {
      aside.classList.remove('aside--translate')
      feedback.classList.add('feedback--translate')
      sections.forEach((e) => e.classList.add('blur'))
      main.classList.add('blur')
      document.body.style.overflow = 'hidden';
    }
    if (e.target.closest('.button--hide-feedback')) {
      feedback.classList.remove('feedback--translate')
      main.classList.remove('blur')
      sections.forEach((e) => e.classList.remove('blur'))
      document.body.style.overflow = 'visible';
    }
    if (e.target.closest('.button--show-call')) {
      aside.classList.remove('aside--translate')
      call.classList.add('call--translate')
      sections.forEach((e) => e.classList.add('blur'))
      main.classList.add('blur')
      document.body.style.overflow = 'hidden';
    }
    if (e.target.closest('.button--hide-call')) {
      if (!e.target) return
      call.classList.remove('call--translate')
      main.classList.remove('blur')
      sections.forEach((e) => e.classList.remove('blur'))
      document.body.style.overflow = 'visible';
    }

    if (e.target.closest('.main')) {
      if (document.documentElement.clientWidth > 768) {
        aside.classList.remove('aside--translate')
        call.classList.remove('call--translate')
        feedback.classList.remove('feedback--translate')
        sections.forEach((e) => e.classList.remove('blur'))
        main.classList.remove('blur')
        document.body.style.overflow = 'visible';
      }
    }
  })
}

export function escTranslate() {
  document.addEventListener ('keydown', (e) => {
    if(e.keyCode === 27) {
      aside.classList.remove('aside--translate')
      call.classList.remove('call--translate')
      feedback.classList.remove('feedback--translate')
      sections.forEach((e) => e.classList.remove('blur'))
      main.classList.remove('blur')
      document.body.style.overflow = 'visible';
    }
  })
}