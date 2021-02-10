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

const arrEmpty = []
const arrBrandCard = document.querySelectorAll('.brand__item').forEach((i) => {
  arrEmpty.push(i)
})

const arrLastThree = arrEmpty.slice(arrEmpty.length - 3)
const arrLastFive = arrEmpty.slice(arrEmpty.length - 5)
const btnAllOpen = document.querySelector('.brand__all')

let btnAllOpens = true


const isCheckWindow = () => {
  const widthWindow1120 = window.matchMedia('(min-width:1120px)').matches
  const widthWindow768 = window.matchMedia('(width:768px)').matches
  const widthWindow320 = window.matchMedia('(width:320px)').matches
  if (widthWindow320) {
    arrEmpty.forEach((i) => {
      i.style.display = 'block'
    })
  } else if (widthWindow768) {
    arrLastFive.forEach(i => {
      i.style.display = 'none'
    })
  } else if (widthWindow1120) {
    arrEmpty.forEach((i) => {
      i.style.display = 'block'
    })

    arrLastThree.forEach(i => {
      i.style.display = 'none'
    })
  }
}

isCheckWindow()


btnAllOpen.addEventListener('click', () => {
  if(btnAllOpens) {
    arrEmpty.forEach((i) => {
      i.style.display = 'block'
    })
    btnAllOpens = false
  } else  {
    btnAllOpens = true
    isCheckWindow()
  }
})


