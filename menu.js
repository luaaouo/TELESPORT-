windowaddEventListener("scroll", function(){
    let header = document.querySelector('#header')
header.classList.toggle('rolagem',window.scroLLY > 500);
}
)