const arrows = document.querySelectorAll(".arrow");
const newLists = document.querySelectorAll(".new-list")

arrows.forEach((arrow, i)=> {
    const itemNumber = newLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if (itemNumber - (6 + clickCounter) >= 0) {
           newLists[i].style.transform = `translateX(${
            newLists[i].computedStyleMap().get("transform")[0].x.value - 300
         }px)`;
        } else {
            newLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }

    });
    console.log(newLists[i].querySelectorAll("img").length);
});

const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.searchBtn')
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');

const specificElement = document.querySelector(".search-btn");
specificElement.addEventListener('click', function(){
    console.log(search.classList.contains('active'))
    if(search.classList.contains('active')){
        searchBox.value = ''
    }
    else {
        search.classList.add('active');
        searchBox.focus();
    }
})

closeBtn.addEventListener('click', function(){
    search.classList.remove('active');
    searchBox.focus();
})







