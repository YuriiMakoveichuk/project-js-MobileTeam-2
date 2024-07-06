const sectionElCovers = document.querySelector('.covers-container');
console.log(sectionElCovers.clientHeight);
const liElem = document.querySelectorAll('.covers-item');
console.log(liElem);

const topElCovers = sectionElCovers.getBoundingClientRect().top;
const bottomElCovers = sectionElCovers.getBoundingClientRect().bottom;
console.log(topElCovers, bottomElCovers);

const top = window.innerHeight;
console.log(top);

function animalCovers() {
  if (sectionElCovers < top) {
    console.log(Hello);
  }
}
animalCovers();
