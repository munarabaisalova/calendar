const data = document.getElementById('data')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
let today = new Date()
const weekDays = ["Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишенби","Жекшемби",]
      const allMonth = ['Үчтүн','Бирдин','Жалган Куран','Чын Куран','Бугу','Кулжа','Теке','Баш Оона','Аяк Оона','Тогуздун','Жетинин','Бештин',]

data.innerHTML=today.getDate()
day.innerHTML = weekDays[today.getDay()-1]
month.innerHTML = allMonth[today.getMonth()]
year.innerHTML = today.getFullYear()



let clock =()=>{
    let time = new Date()
let hours = time.getHours()
let minutes = time.getMinutes()
let seconds = time.getSeconds()
if (hours<9)hours = "0"+ hours
    if (minutes<10)minutes= "0"+ minutes
    if (seconds<10)seconds = "0"+ seconds
let elem = hours +":"+ minutes+ ":"+ seconds

let main = document.getElementById('main').innerHTML=elem

// console.log(elem);

}



setTimeout(()=>{
clock()
},1000)



// let desk =()=>{
//     const day = document.getElementById('day')
// const month = document.getElementById('month')
// const year = document.getElementById('year')
// let today = new Date()
// const weekDays = ["Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишенби","Жекшемби",]
//       const allMonth = ['Үчтүн','Бирдин','Жалган Куран','Чын Куран','Бугу','Кулжа','Теке','Баш Оона','Аяк Оона','Тогуздун','Жетинин','Бештин',]

// data.innerHTML=today.getDate()
// day.innerHTML = weekDays[today.getDay()-1]
// month.innerHTML = allMonth[today.getMonth()]
// year.innerHTML = today.getFullYear()
// }
// setInterval(()=>{
//     desk()
// },2000)


// const color =document.querySelector(".color")

const colors = ["red","#7FFFD4","#FAEBD7","#00FFFF","#000000","#0000FF","#8A2BE2","#7FFF00","#DC143C","#D2691E","#9932CC",'#808080'];
console.log(colors);
const button = document.getElementById("btn");

button.addEventListener( "click",()=>{
    document.body.style.backgroundColor = colors[getRandomNumber()];
    });



function getRandomNumber(){
return Math.floor (Math.random() * colors.length)

};
getRandomNumber()







// getRandomNumber()