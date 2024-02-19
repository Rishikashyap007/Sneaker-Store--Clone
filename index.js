const menuitems = document.querySelectorAll('.menuitems')
const wrapper = document.querySelector('.sliderwrapper')

// wrapper.style.transform ="translateX(-300vw)";

const products = [
    {
      id: 1,
      title: "Air Force",
      price: `$220`,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: '$280',
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: '$120',
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: '$80',
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: '$220',
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

const productTitle = document.querySelector('.producttitle')
const productimage = document.querySelector('.productimg')
const productPrice = document.querySelector('.productprice')
const productColors = document.querySelectorAll('.productcolor')
const productSizes = document.querySelectorAll('.productsizes p')


let chosenProduct = products[0]
menuitems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        console.log('clicked',index);
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        chosenProduct = products[index]
      
        productPrice.textContent = chosenProduct.price
        productTitle.textContent = chosenProduct.title
        productimage.src = chosenProduct.colors[0].img
        
        productColors.forEach((color,index) =>{
           color.style.backgroundColor = chosenProduct.colors[index].code;

        //    color.addEventListener('click', ()=>{
        //     productimage.src = chosenProduct.colors[index].img
        //    })
        })

    })
})

  
productColors.forEach((color,index) =>{

    color.addEventListener('click', ()=>{
     productimage.src = chosenProduct.colors[index].img

    
    })
 })

 productSizes.forEach((size,index) =>{
   size.addEventListener('click', ()=>{
      productSizes.forEach((size,index)=>{
          console.log('clicked 1',index);
           size.style.backgroundColor='white'
           size.style.color='black'

        })
       console.log('clicked 2',index);
        size.style.backgroundColor='black'
        size.style.color='white'
      })
})

 const buybtn = document.querySelector('.productBUYbtn')
 const close = document.querySelector('.paymentModal span')
 const paymenPage = document.querySelector('.paymentModal')

buybtn.addEventListener('click', ()=>{
    paymenPage.style.display = 'flex'
})
close.addEventListener('click', ()=>{
    paymenPage.style.display = 'none'
})
