

$('.header .navbar-nav li.nav-item').click(function(){
    var menuActive = $(this).attr("data-active");
    localStorage.setItem("menuActive", menuActive);
    setMenuActive();
})

function setMenuActive() { 
    debugger;
    var tabActive = localStorage.getItem("menuActive");
    if(tabActive == null) {
        localStorage.setItem("menuActive", 1);
        tabActive = 1;
    } 
    $('.header .navbar-nav li.nav-item').each(function(){
        $(this).removeClass("active");
        let tab = $(this).attr("data-active");
        if(tab == tabActive){
            $(this).addClass("active");
            $(this).click();
        }
    })
}
//b1: xóa menu đang chứa class active hiện tại
//b2: tìm element thỏa mãn điều kiện để active (lấy - tính - thuc)

setMenuActive();