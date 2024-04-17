import {hotels} from '../data/hotels.js';

const hb = document.querySelector('#hamburgerButton');
const cb = document.querySelector('#closeButton');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
pw.classList.toggle('moveOver');
hb.classList.toggle('open')
cb.classList.toggle('open')
});

cb.addEventListener('click', () => {
pw.classList.toggle('moveOver');
hb.classList.toggle('open')
cb.classList.toggle('open')
});

//inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();

//grab tht hotel location data

console.log(hotels);
const cards=document.querySelector('#properties')

hotels.forEach(building => {
  const mySection = document.createElement('section')

const theImage = document.createElement("img")
theImage.src = `images/${building.hotelImg}`
theImage.alt = building.name

const theName = document.createElement("h2")
theName.textContent = building.name

const theAddress = document.createElement("p");
theAddress.innerHTML = `${building.address[0]}<br>${building.address[1]}, ${building.address[2]}`;

const theTelephone = document.createElement("a");
theTelephone.href = `tel:${building.tel}`
theTelephone.textContent = building.tel

mySection.appendChild(theImage)
mySection.appendChild(theName)
mySection.appendChild(theAddress)
mySection.appendChild(theTelephone)
cards.appendChild(mySection)
})