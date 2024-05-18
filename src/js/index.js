var home = window.document.getElementById('menuhome')
home.addEventListener('mouseenter', entrar1)
home.addEventListener('mouseout', sair1)

function entrar1() {
    home.style.color = '#760002'
}

function sair1() {
    home.style.color = 'white'
}

var jogo = window.document.getElementById('menujogo')
jogo.addEventListener('mouseenter', entrar2)
jogo.addEventListener('mouseout', sair2)

function entrar2() {
    jogo.style.color = '#760002'
}

function sair2() {
    jogo.style.color = 'white'
}

var novidade = window.document.getElementById('menunovidade')
novidade.addEventListener('mouseenter', entrar3)
novidade.addEventListener('mouseout', sair3)

function entrar3() {
    novidade.style.color = '#760002'
}

function sair3() {
    novidade.style.color = 'white'
}

var forum = window.document.getElementById('menuforum')
forum.addEventListener('mouseenter', entrar4)
forum.addEventListener('mouseout', sair4)

function entrar4() {
    forum.style.color = '#760002'
}

function sair4() {
    forum.style.color = 'white'
}

var suporte = window.document.getElementById('menusuporte')
suporte.addEventListener('mouseenter', entrar5)
suporte.addEventListener('mouseout', sair5)

function entrar5() {
    suporte.style.color = '#760002'
}

function sair5() {
    suporte.style.color = 'white'
}

var mapadojogo = window.document.getElementById('menumapadojogo')
mapadojogo.addEventListener('mouseenter', entrar6)
mapadojogo.addEventListener('mouseout', sair6)

function entrar6() {
    mapadojogo.style.color = '#760002'
}

function sair6() {
    mapadojogo.style.color = 'white'
}

var trabalhos = window.document.getElementById('menutrabalhos')
trabalhos.addEventListener('mouseenter', entrar7)
trabalhos.addEventListener('mouseout', sair7)

function entrar7() {
    trabalhos.style.color = '#760002'
}

function sair7() {
    trabalhos.style.color = 'white'
}

var online = window.document.getElementById('online')
online.addEventListener('mouseenter', entrar8)
online.addEventListener('mousemove', movimento1)
online.addEventListener('mouseout', sair8)

function entrar8() {
    online.style.backgroundColor = '#1A2125'
}

function movimento1() {
    online.style.backgroundColor = '#1A2125'
}

function sair8() {
    online.style.backgroundColor = '#2F3B43'
}

var steam = window.document.getElementById('compra-steam')
steam.addEventListener('mouseenter', entrar9)
steam.addEventListener('mousemove', movimento2)
steam.addEventListener('mouseout', sair9)

function entrar9() {
    steam.style.backgroundColor = '#9A002C'
}

function movimento2() {
    steam.style.backgroundColor = '#9A002C'
}

function sair9() {
    steam.style.backgroundColor = '#CD003B'
}

var gogcom = window.document.getElementById('compra-gogcom')
gogcom.addEventListener('mouseenter', entrar10)
gogcom.addEventListener('mousemove', movimento3)
gogcom.addEventListener('mouseout', sair10)

function entrar10() {
    gogcom.style.backgroundColor = '#2c0744'
}

function movimento3() {
    gogcom.style.backgroundColor = '#2c0744'
}

function sair10() {
    gogcom.style.backgroundColor = '#471666'
}

var historia = window.document.getElementById('history')
historia.addEventListener('mouseenter',entrar11)
historia.addEventListener('mousemove', movimento4)
historia.addEventListener('mouseout', sair11)

function entrar11() {
    historia.style.color = '#760002'
}

function movimento4 () {
    historia.style.color = '#760002'
}

function sair11 () {
    historia.style.color = 'white'
}

var wiki = window.document.getElementById('wiki')
wiki.addEventListener('mouseenter', entrar12)
wiki.addEventListener('mousemove', movimento5)
wiki.addEventListener('mouseout', sair12)

function entrar12() {
    wiki.style.color = '#760002'
}

function movimento5() {
    wiki.style.color = '#760002'
} 

function sair12() {
    wiki.style.color = 'white'
}