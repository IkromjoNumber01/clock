



// console.log(h,m,s,hours,minutes);


// let x = 0; 
//  function rec() {
//     console.log(x);
//     if(x<10){
//         x++
//         setTimeout(() =>{
//             rec()
//         }, 1000)
//     }
//  }

//  rec()






// let x = 0; 
//  function rec() {
//     console.log(x);
//     let a;
//     if(x==20){
//         clearInterval(a)
//     }else if (x < 50){
//         x++;
//         a = setTimeout(() =>{
//            rec()

//         }, 20)
//     }

//  }

//  rec()




let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

//*getHours - Kompyuterdagi soatni olib beradi
//*getMinutes - Kompyuterdagi minutnini olib beradi
//*getSeconds - Kompyuterdagi soniyani olib beradi



function clock() {

    const time = new Date();
    let hourArrow = time.getHours()
    let minuteArrow = time.getMinutes()
    let secondArrow = time.getSeconds()

    //  console.log(hourArrow, minuteArrow , secondArrow);

    h.style.transform = `rotate(${hourArrow * 30}deg)`
    m.style.transform = `rotate(${minuteArrow * 6}deg)`
    s.style.transform = `rotate(${secondArrow * 6}deg)`

    setTimeout(() => {
        clock()

    }, 1000);

    hours.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow
    minutes.innerHTML = minuteArrow < 10 ? '0' + minuteArrow : minuteArrow
}

clock()



let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
tabsItem[i].addEventListener('click', function () {


  for( let k = 0; k <tabsItem.length; k++){
    tabsItem[k].classList.remove('active')                 
    tabsContentItem[k].classList.remove('active')
      }

      tabsItem[i].classList.add('active')                 
      tabsContentItem[i].classList.add('active')
})
     
}

//* classList - qoshadi
//* class.remove - opchirib beradi
//* clast.contains - 

