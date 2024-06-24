const infoBox = document.querySelector('#info-detail');
const confirmEmailBtn = document.querySelector('#confirmEmail');
const confirmBox = document.querySelector('#confirm');
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
confirmEmailBtn.addEventListener('click', (e) => {
  const emailValue = document.querySelector('#email').value;
  if(regex.test(emailValue)) {
    infoBox.style.visibility = 'visible';
    confirmBox.innerHTML = 'Xác nhận thành công'
  } else {
    infoBox.style.visibility = 'hidden';
    confirmBox.innerHTML = 'Xác nhận thất bại'
  }
})

const expBtn = document.querySelector('#experience-btn');
const expContent = document.querySelector('#experience>.section-content');
expContent.style.display = 'none';
const eduBtn = document.querySelector('#education-btn');
const eduContent = document.querySelector('#education>.section-content');
eduContent.style.display = 'none';
const actBtn = document.querySelector('#activity-btn');
const actContent = document.querySelector('#activity>.section-content');
actContent.style.display = 'none';
const hobbyBtn = document.querySelector('#hobby-btn');
const hobbyContent = document.querySelector('#hobby>.section-content');
hobbyContent.style.display = 'none';
const langBtn = document.querySelector('#language-btn');
const langContent = document.querySelector('#language>.section-content');
langContent.style.display = 'none';
const skillBtn = document.querySelector('#skill-btn');
const skillContent = document.querySelector('#skill>.section-content');
skillContent.style.display = 'none';

expBtn.addEventListener('click', (e) => {
  if (expContent.style.display === 'none') {
    expContent.style.display = 'block';
    expBtn.innerHTML = "View less"
  } else {
    expContent.style.display = 'none';
    expBtn.innerHTML = "View more"
  }
})
actBtn.addEventListener('click', (e) => {
  if (actContent.style.display === 'none') {
    actContent.style.display = 'block';
    actBtn.innerHTML = "View less"
  } else {
    actContent.style.display = 'none';
    actBtn.innerHTML = "View more"
  }
})
hobbyBtn.addEventListener('click', (e) => {
  if (hobbyContent.style.display === 'none') {
    hobbyContent.style.display = 'block';
    hobbyBtn.innerHTML = "View less"
  } else {
    hobbyContent.style.display = 'none';
    hobbyBtn.innerHTML = "View more"
  }
})
langBtn.addEventListener('click', (e) => {
  if (langContent.style.display === 'none') {
    langContent.style.display = 'block';
    langBtn.innerHTML = "View less"
  } else {
    langContent.style.display = 'none';
    langBtn.innerHTML = "View more"
  }
})
skillBtn.addEventListener('click', (e) => {
  if (skillContent.style.display === 'none') {
    skillContent.style.display = 'block';
    skillBtn.innerHTML = "View less"
  } else {
    skillContent.style.display = 'none';
    skillBtn.innerHTML = "View more"
  }
})
eduBtn.addEventListener('click', (e) => {
  if (eduContent.style.display === 'none') {
    eduContent.style.display = 'block';
    eduBtn.innerHTML = "View less"
  } else {
    eduContent.style.display = 'none';
    eduBtn.innerHTML = "View more"
  }
})