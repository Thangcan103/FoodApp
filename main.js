window.addEventListener('scroll',function(){
    const x=this.pageYOffset;
    if(x>80){
        document.querySelector('.icons').classList.add('active')
    }
    else{
        document.querySelector('.icons').classList.remove('active')
    }
})


$(document).ready(function(){
    $('.slide-section4').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        prevArrow:`<button type='button' class='slick-prev pull-left'><</button>`,
            nextArrow:`<button type='button' class='slick-next pull-right'>></button>`
    });
  });

  $(document).ready(function(){
    $('.slide-section6').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
        prevArrow:`<button type='button' class='slick-prev pull-left'><</button>`,
            nextArrow:`<button type='button' class='slick-next pull-right'>></button>`
    });
    var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});
  });

const menubar=document.querySelector(".menu-bar")
menubar.addEventListener("click",function(){
  menubar.classList.toggle("active")
  document.querySelector(".menu-reponsive").classList.toggle("active")
})



window.addEventListener('scroll',function(){
  const b=pageYOffset;
  if(b>800){
    document.querySelector('.backtop').classList.add('active')
  }
  else{
    document.querySelector('.backtop').classList.remove('active')
  }
  // $('.backtop').click(function(){
  //   $('html,body').animate({
  //     scrollTop:0
  //   },500);
  // })
})


const name_item = document.querySelectorAll('.name_item');
const search_item = document.getElementById('search-item');
const element_cakes = document.querySelectorAll('.element_cakes');
const filter_button = document.querySelectorAll('#filter_button .btn');
const h1_price = document.querySelectorAll('h1.price');

search_item.addEventListener('keyup',getItem);
search_item.addEventListener('click',reset);

function reset(){
    for(let i=0;i<filter_button.length;i++){
        filter_button[i].classList.remove('active');
    }
    Array.from(element_cakes).forEach(function(element){
        element.style.display = 'block';
    })
    filter_button[0].classList.add('active');

}



// search item
var h1Text = document.getElementById('showtext');

const infor = document.querySelectorAll('.infor');
function getItem(event){

    let lower_item = search_item.value.toLowerCase();
    Array.from(infor).forEach(function(cake){
        let item_Name = cake.firstElementChild.textContent;
        if(item_Name.toLowerCase().indexOf(lower_item) != -1){
            cake.parentElement.style.display = 'block';
        }
        else {            
            cake.parentElement.style.display = 'none';
            
        }
    })
    
    checkNone(infor);
}



// filter
Array.from(filter_button).forEach(function(button){
    button.addEventListener('click',function(event){

        for(let i=0;i<filter_button.length;i++){
            filter_button[i].classList.remove('active');
        }
        this.classList.add('active');

        let buttonAttr = event.target.dataset.filter;
        // let buttonAttr = button.getAttribute('data-filter');
        Array.from(element_cakes).forEach(function(element){
            let elementAttr = element.dataset.item; // lấy giá trị data-* dùng getAttribute hoặc dataset
            if(buttonAttr===elementAttr  || buttonAttr === 'all'){
                element.style.display = 'block';
            }   
            else {
                element.style.display = 'none';
            }
        })
    })
})


