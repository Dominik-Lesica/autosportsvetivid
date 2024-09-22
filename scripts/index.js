const priceButton = document.querySelector('.price-button-js');
const priceWrapper = document.querySelector('.price-wrapper-js');
const logo = document.querySelector('.logo-js');
const eveningHours = document.querySelector('.evening-hours-js');

priceButton.addEventListener('click', () => {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = priceWrapper.getBoundingClientRect();
  const offset   = elemRect.top - bodyRect.top - 70;
  window.scroll({
    top: offset,
    behavior: "smooth"
  });
})

document.addEventListener('scroll', () => {
  if(window.scrollY > 20) {
    logo.style.transform = 'scale(1)';
    logo.style.transition = '0';
  }
  if(window.scrollY < 20) {
    logo.style.transform = 'scale(1.3)';
    logo.style.transition = '0.3s';
  }
})
  
if(window.scrollY > 20) {
  logo.style.transform = 'scale(1)';
}
if(window.scrollY < 20) {
  logo.style.transform = 'scale(1.3)';
}



if(window.matchMedia("(min-width: 900px)").matches) {
  document.querySelectorAll('.gallery-thumbnail-js').forEach((thumbnail, index) => {
    let nextImg = index;
    let lastImg = index;
    thumbnail.addEventListener('click' , () => {
      const html = `
      <div class="lightbox lightbox-js">
        <div class="lightbox-img-wrapper">
          <img src="/imgs/gallery_img_${index}.jpg" class="lightbox-img">
          <img src="/icons/icons8-x.svg" class="lightbox-x-icon">
          <img src="/icons/left-arrow-svgrepo-com.svg" class="arrows left-arrow">
          <img src="/icons/right-arrow-svgrepo-com.svg" class="arrows right-arrow">
        </div>
      </div>`
      document.body.insertAdjacentHTML('beforeend', html);
  
      document.querySelector('.lightbox-x-icon').addEventListener('click', () => {
        document.querySelector('.lightbox').remove();
      })
  
      document.querySelector('.right-arrow').addEventListener('click', () => {
        nextImg++;
        if(nextImg === 12) {
          nextImg = 0
        }
        document.querySelector('.lightbox-img').src = `/imgs/gallery_img_${nextImg}.jpg`
      })
  
      document.querySelector('.left-arrow').addEventListener('click', () => {
        lastImg--;
        if(lastImg === -1) {
          lastImg = 11
        }
        document.querySelector('.lightbox-img').src = `/imgs/gallery_img_${lastImg}.jpg`
      })
    })
  })  
}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day; 
}

const dayOfYear = getDayOfYear();
if (dayOfYear >= 152 && dayOfYear < 258) {
  eveningHours.innerHTML = '18:00 - 20:00';
}
if(dayOfYear >= 258 && dayOfYear < 319 || dayOfYear >=46 && dayOfYear < 152) {
  eveningHours.innerHTML = '17:00 - 19:00'
}
if (dayOfYear >= 319 && dayOfYear < 370 || dayOfYear >= 0 && dayOfYear < 46) {
  eveningHours.innerHTML = '16:00 - 18:00'
}































