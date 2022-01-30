document.getElementById('product').addEventListener('click', displaySub)
document.getElementById('company').addEventListener('click', displaySub1)
document.getElementById('connect').addEventListener('click', displaySub2)

function displaySub(){
    document.getElementById('content1').classList.toggle('contentVisible')
    document.getElementById('imag').classList.toggle('rotate')
}

function displaySub1(){
    document.getElementById('content2').classList.toggle('contentVisible')
    document.getElementById('imag1').classList.toggle('rotate')
}

function displaySub2(){
    document.getElementById('content3').classList.toggle('contentVisible')
    document.getElementById('imag2').classList.toggle('rotate')
}

