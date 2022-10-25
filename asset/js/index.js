const checkbox = document.querySelector("input[id='assinatura']");
const checks = document.querySelectorAll("#check");
const itens_lista = document.querySelectorAll("#iten_card");
const plano = document.getElementsByName("selecao_plano");
const plano2 = document.getElementsByName("selecao_plano2");
const preco = document.getElementById("preco_por_caixa");
const preco_a_vista = document.getElementById("preco_a_vista");
const preco_dividido = document.getElementById("preco_dividido");
const desconto = document.getElementById("desconto");
const preco2 = document.getElementById("preco_por_caixa2");
const preco_a_vista2 = document.getElementById("preco_a_vista2");
const preco_dividido2 = document.getElementById("preco_dividido2");
const desconto2 = document.getElementById("desconto2");


checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        checks.forEach(check => {
            check.checked = true;
            check.classList.remove('desmarcada')
            check.classList.add('marcada')
        });
        itens_lista.forEach((item)=>{
            item.classList.remove('desmarcada')
            item.classList.add('marcada')
        })
    }else{
        checks.forEach(check => {
            check.checked = false;
            check.classList.remove('marcada')
            check.classList.add('desmarcada')
        });
        itens_lista.forEach((item)=>{
            item.classList.remove('marcada')
            item.classList.add('desmarcada')
        })
    }
})

plano.forEach((item)=>{
    item.addEventListener('change',()=>{
        if(item.checked){
            if(item.value == '1'){
            preco.innerText = '175,00'
            preco_a_vista.innerText = '149,90'
            preco_dividido.innerText = '14,58'
            desconto.innerText = '25,10'
            }else if(item.value == '3'){
                console.log(item.value)
            preco.innerText = '148,60'
            preco_a_vista.innerText = '445,80'
            preco_dividido.innerText = '49,99'
            desconto.innerText = '136,20'
            }else if(item.value == '6'){
                console.log(item.value)
            preco.innerText = '125,90'
            preco_a_vista.innerText = '755,40'
            preco_dividido.innerText = '62,95'
            desconto.innerText = '221,00'
            }
        }
    })
})
plano2.forEach((item)=>{
    item.addEventListener('change',()=>{
        if(item.checked){
            if(item.value == '1'){
            preco2.innerText = '175,00'
            preco_a_vista2.innerText = '149,90'
            preco_dividido2.innerText = '14,58'
            desconto2.innerText = '25,10'
            }else if(item.value == '3'){
                console.log(item.value)
            preco2.innerText = '148,60'
            preco_a_vista2.innerText = '445,80'
            preco_dividido2.innerText = '49,99'
            desconto2.innerText = '136,20'
            }else if(item.value == '6'){
                console.log(item.value)
            preco2.innerText = '125,90'
            preco_a_vista2.innerText = '755,40'
            preco_dividido2.innerText = '62,95'
            desconto2.innerText = '221,00'
            }
        }
    })
})
