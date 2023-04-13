const menu=document.querySelector('.menu');
const two=document.body
two.appendChild(menu)
const logo=`
<ul class="list">
<li>Здоровое питание</li>
<li><a href="">Наш клуб</a></li>
<li><a href="">О нас</a></li>
<li><a href="">Рецепты</a></li>
<li><a href="">Контакты</a></li>
</ul>
`
menu.innerHTML=logo

const orange=document.createElement('div')
orange.classList.add('orange')
const orang=document.querySelector('.orange')
two.appendChild(orange)
console.log(orange)

const blue=document.createElement('div')
blue.classList.add('blue')
const blu=document.querySelector('.blue')
two.appendChild(blue)
console.log(blue)

const img=document.createElement("img");
img.src="1.jpg"
img.classList.add("zdorovie")
two.appendChild(img)
console.log(img)

const parag=document.createElement('p')
parag.textContent='Здоровое питание'
blue.appendChild(parag)

const text=document.createElement("h1")
text.textContent='Заинтересованы в похудении?'
blue.appendChild(text)

const first=document.createElement('div')
first.classList.add('first')
const one=document.querySelector('.first')
two.appendChild(first)
// const img1=document.createElement("img");
// img1.src="eda.png"
// img1.classList.add("eda")
// first.appendChild(img1)
// const texteda=document.createElement('h3')
// texteda.textContent='Здоровое питание'
// first.appendChild(texteda)
// const parageda=document.createElement('p')
// parageda.textContent='Здоровое питание – это такое питание, которое обеспечивает рост, оптимальное развитие, полноценную жизнедеятельность, способствует укреплению здоровья'
// first.appendChild(parageda)
// console.log(first)

const second=document.createElement('div')
second.classList.add('second')
const dva=document.querySelector('.second')
two.appendChild(second)
// const img2=document.createElement("img");
// img2.src="event.png"
// img2.classList.add("event")
// second.appendChild(img2)
// const textevent=document.createElement('h3')
// textevent.textContent='Тренировки'
// second.appendChild(textevent)
// const paragevent=document.createElement('p')
// paragevent.textContent='Миллионы людей по всему миру ежегодно идут в спортзалы, парки или на стадионы, чтобы сбросить лишние килограммы. '
// second.appendChild(paragevent)
// console.log(second)

const third=document.createElement('div')
third.classList.add('third')
const three=document.querySelector('.third')
two.appendChild(third)
// const img3=document.createElement("img");
// img3.src="psiho.png"
// img3.classList.add("psiho")
// third.appendChild(img3)
// const textpsiho=document.createElement('h3')
// textpsiho.textContent='Психология'
// third.appendChild(textpsiho)
// const paragpsiho=document.createElement('p')
// paragpsiho.textContent='Худеть нужно для собственного здоровья, хорошего самочувствия и исключительно из любви к себе. '
// third.appendChild(paragpsiho)
// console.log(third)

const fourth=document.createElement('div')
fourth.classList.add('fourth')
const four=document.querySelector('.fourth')
two.appendChild(fourth)
// const img4=document.createElement("img");
// img4.src="ves.png"
// img4.classList.add("ves")
// fourth.appendChild(img4)
// const textves=document.createElement('h3')
// textves.textContent='Здоровый вес'
// fourth.appendChild(textves)
// const paragves=document.createElement('p')
// paragves.textContent='Нормальный вес человека — это та масса тела, при которой он имеет максимальные шансы в первую очередь быть здоровым '
// fourth.appendChild(paragves)
// console.log(fourth)

const people  = [
    {img:'eda.png', h3 : "Здоровое питание", p: "Здоровое питание – это такое питание, которое обеспечивает рост, оптимальное развитие, полноценную жизнедеятельность, способствует укреплению здоровья" },
    {img:'event.png', h3 : "Тренировки", p: "Миллионы людей по всему миру ежегодно идут в спортзалы, парки или на стадионы, чтобы сбросить лишние килограммы. "},
    {img:'psiho.png',h3 : "Психология", p: "Худеть нужно для собственного здоровья, хорошего самочувствия и исключительно из любви к себе."},
    {img:'ves.png',h3 : "Здоровый вес", p: "Нормальный вес человека — это та масса тела, при которой он имеет максимальные шансы в первую очередь быть здоровым "}
    ];
      console.log(people);

  let singlepeople = people.map((peoples)=>{
    console.log(peoples)
    return `
      <img src="${peoples.img}" class='eda'>
      <h3 class='nam'>${peoples.h3}</h3>
      <p class="para">${peoples.p}</p>
    `
     });
     console.log(singlepeople)
          first.innerHTML =singlepeople[0];
          second.innerHTML =singlepeople[1]; 
          third.innerHTML =singlepeople[2]; 
          fourth.innerHTML =singlepeople[3]; 
