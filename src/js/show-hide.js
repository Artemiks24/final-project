// hide/Show
const aboutText = document.querySelector('.paragraph')
const brandsList = document.querySelector('.brands__swiper')
const repairList = document.querySelector('.repair__swiper')
const wrapper = document.querySelector('.wrapper')

export function showMore() {
  wrapper.addEventListener('click', (e) => {
    if (e.target.closest('.info__button')) {
      e.target.classList.toggle('show-button--transform')
      aboutText.classList.toggle('paragraph--visible')
      if (e.target.textContent === 'Читать далее') {
        e.target.textContent = 'Скрыть'
      } else {
        e.target.textContent = 'Читать далее'
      }
    }

    if (e.target.closest('.brands__button')) {
      e.target.classList.toggle('show-button--transform')
      brandsList.classList.toggle('brands__swiper--transform')
      if (e.target.textContent === 'Показать все') {
        e.target.textContent = 'Скрыть'
      } else {
        e.target.textContent = 'Показать все'
      }
    }

    if (e.target.closest('.repair__button')) {
      e.target.classList.toggle('show-button--transform')
      repairList.classList.toggle('repair__swiper--transform')
      if (e.target.textContent === 'Показать все') {
        e.target.textContent = 'Скрыть'
      } else {
        e.target.textContent = 'Показать все'
      }
    }
  })
}
