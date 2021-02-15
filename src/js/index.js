import '../scss/style.scss';
import '../scss/block-nav-menu/style-nav.scss';


if (window.innerWidth <= 767) {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const arrEmptyBrand = []
const arrEmptyTechnic = []
const arrBrandCard = document.querySelectorAll('.brand__item').forEach(i => {
  arrEmptyBrand.push(i)
})
const arrTechnicCard = document.querySelectorAll('.repair-technic__item').forEach(i => {
  arrEmptyTechnic.push(i)
})

const arrLastBrandThree = arrEmptyBrand.slice(arrEmptyBrand.length - 3)
const arrLastBrandFive = arrEmptyBrand.slice(arrEmptyBrand.length - 5)
const btnAllOpen = document.querySelector('.brand__all')

const arrLastTechnicSix = arrEmptyTechnic.slice(arrEmptyTechnic.length - 6)
const arrLastTechnicFive = arrEmptyTechnic.slice(arrEmptyTechnic.length - 5)

let btnAllOpens = true


const isCheckWindow = () => {
  const widthWindow1120 = window.matchMedia('(min-width:1120px)').matches
  const widthWindow768 = window.matchMedia('(width:768px)').matches
  const widthWindow320 = window.matchMedia('(width:320px)').matches
  if (widthWindow320) {
    arrEmptyBrand.forEach(i => {
      i.style.display = 'block'
    })
    arrEmptyTechnic.forEach(i => {
      i.style.display ='block'
    })

  } else if (widthWindow768) {
    arrLastBrandFive.forEach(i => {
      i.style.display = 'none'
    })

    arrLastTechnicSix.forEach(i => {
      i.style.display ='none'
    })
  } else if (widthWindow1120) {
    arrEmptyBrand.forEach(i => {
      i.style.display = 'block'
    })

    arrLastBrandThree.forEach(i => {
      i.style.display = 'none'
    })

    arrLastTechnicFive.forEach(i => {
      i.style.display = 'none'
    })
  }
}

isCheckWindow()


btnAllOpen.addEventListener('click', () => {
  if(btnAllOpens) {
    arrEmptyBrand.forEach((i) => {
      i.style.display = 'block'
    })
    btnAllOpens = false
  } else  {
    btnAllOpens = true
    isCheckWindow()
  }
})


// MENU!

const menu = document.querySelector('.nav-menu')
const blur = document.querySelector('.blur')
const modalCall = document.querySelector('.modal-call')
const modalFeedback = document.querySelector('.modal-feedback')

document.addEventListener('click', (event) => {
  if(event.target.matches('.menu-logo__btn')) {
    menu.classList.add('nav-menu--active')
    blur.classList.add('blur--active')
  }
  if(event.target.matches('#menu-logo__btn--close')) {
    menu.classList.remove('nav-menu--active')
    blur.classList.remove('blur--active')
    if(modalFeedback.classList.contains('.modal-call--active') || modalCall.classList.contains('modal-call--active')) {
      blur.classList.add('blur--active')
      menu.classList.remove('nav-menu--active')
    }
  }

  if(event.target.matches('.repair-list__btn') || event.target.matches('.table-price__btn') || event.target.matches('.contacts-list__call'))   {
    modalCall.classList.add('modal-call--active')
    blur.classList.add('blur--active')
    menu.classList.remove('nav-menu--active')
  }
  if(event.target.matches('.modal-call__close') || event.target.matches('.blur')) {
    modalCall.classList.remove('modal-call--active')
    modalFeedback.classList.remove('modal-call--active')
    blur.classList.remove('blur--active')
    menu.classList.remove('nav-menu--active')
  }

  if(event.target.matches('.contacts-list__chat')) {
    modalFeedback.classList.add('modal-call--active')
    blur.classList.add('blur--active')
    menu.classList.remove('nav-menu--active')
  }
  if(event.target.closest('.nav-list__item')) {
    let a = document.querySelectorAll('[data-key]')
    const targetKey = event.target.closest('.nav-list__item').dataset.key
    Array.from(a).map((i)=> {
      if(i.dataset.key === targetKey) {
        i.classList.add('nav-list__item--active')
      } else {
        i.classList.remove('nav-list__item--active')
      }
    })
  }
})

let btnAllRepairOpens = true
const btnAllRepair = document.querySelector('.repair-technic__all')
btnAllRepair.addEventListener('click', ()=> {
  if(btnAllRepairOpens) {
    arrEmptyTechnic.forEach(i => {
      i.style.display ='block'
    })
    btnAllRepairOpens = false
  } else  {
    btnAllRepairOpens = true
    isCheckWindow()
  }
})
