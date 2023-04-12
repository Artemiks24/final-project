// hide/Show about btn
const aboutBtn = document.querySelector('.info__button')
const aboutText = document.querySelector('.paragraph')
// hide/Show brands btn
const brandsButton = document.querySelector('.brands__button')
const brandsList = document.querySelector('.brands__swiper')
// hide/Show repair btn
const buttonRepair = document.querySelector('.repair__button')
const repairList = document.querySelector('.repair__swiper')

export function showMoreText() {
  aboutBtn.addEventListener('click', () => {
    aboutBtn.classList.toggle('show-button--transform')
    aboutText.classList.toggle('paragraph--visible')
    if (aboutBtn.textContent === 'Читать далее') {
      aboutBtn.textContent = 'Скрыть'
    } else {
      aboutBtn.textContent = 'Читать далее'
    }
  })
}
export function showBrandsCards() {
  brandsButton.addEventListener('click', () => {
    brandsList.classList.toggle('brands__swiper--transform')
    brandsButton.classList.toggle('show-button--transform')
    if (brandsButton.textContent === 'Показать все') {
      brandsButton.textContent = 'Скрыть'
    } else {
      brandsButton.textContent = 'Показать все'
    }
  })
}

export function showRepairsCards() {
  buttonRepair.addEventListener('click', () => {
    repairList.classList.toggle('repair__swiper--transform')
    buttonRepair.classList.toggle('show-button--transform')
    if (buttonRepair.textContent === 'Показать все') {
      buttonRepair.textContent = 'Скрыть'
    } else {
      buttonRepair.textContent = 'Показать все'
    }
  })
}
