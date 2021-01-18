var preBtn = document.querySelector(".banner-list .prev");
var nextBtn = document.querySelector(".banner-list .next");
var bannerListDivs = document.querySelectorAll(".banner-list .banner-item")
var circleDivs = document.querySelectorAll(".banner-list .page .circleItem")
var currentImg = 0;

console.log(bannerListDivs)
nextBtn.onclick = function(){
    currentImg = currentImg + 1;
    if(currentImg >= bannerListDivs.length){
        currentImg = 0;
    }
    renderNumImg()
}
preBtn.onclick = function(){
    currentImg = currentImg - 1;
    if(currentImg < 0){
        currentImg =  bannerListDivs.length-1;
    }
    renderNumImg()
}

//封装渲染函数
function renderNumImg(){
    //初始化，将所有的img列表的active去掉
    bannerListDivs.forEach(function(item,i){
        item.classList.remove("active");
    })
    circleDivs.forEach(function(item,i){
        item.classList.remove("active");
    })

    bannerListDivs[currentImg].classList.add('active');
    circleDivs[currentImg].classList.add('active')

}
circleDivs.forEach(function(item,i){
    item.onclick = function(){
        // var index = parseInt(item.id[1]);
        // currentImg = index;
        currentImg = i;
        renderNumImg()
    }
})