document.getElementById('product').addEventListener('click', displaySub)
document.getElementById('company').addEventListener('click', displaySub1)
document.getElementById('connect').addEventListener('click', displaySub2)
document.getElementById('menuRight').addEventListener('click',displaySubMobile)

function displaySub(){
    document.getElementById('content1').classList.toggle('contentVisible')
    document.getElementById('imag').classList.toggle('rotate')
    document.getElementById('imag3').classList.toggle('rotate')
}

function displaySub1(){
    document.getElementById('content2').classList.toggle('contentVisible')
    document.getElementById('imag1').classList.toggle('rotate')
    document.getElementById('imag4').classList.toggle('rotate')
}

function displaySub2(){
    document.getElementById('content3').classList.toggle('contentVisible')
    document.getElementById('imag2').classList.toggle('rotate')
    document.getElementById('imag5').classList.toggle('rotate')
}

function displaySubMobile(){
    document.getElementById('hamburger').classList.toggle('hamburgerVisible')
    document.getElementById('close').classList.toggle('visibleClose')
    document.getElementById('left').classList.toggle('leftVisible')
}

