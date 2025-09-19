let nome = prompt("Qual seu nome?")
let preço1
let preço2
let preço3
alert("Faça seu pedido selecione um numero 1 a 4 para selecionar seu pedido")

let pedido = parseInt(prompt(`Menu
(1) Hambúrguer – R$ 20
(2) Pizza – R$ 35
(3) Refrigerante – R$ 5
(4) Batata Frita – R$ 12
(5) Sair`))
if (pedido == 5) {
    alert("Muito obrigado volte sempre!")
} else {
    switch (pedido) {
        case 1:
            pedido = "Hambúrguer"
            preço1 = 20.00
            break
        case 2:
            pedido = "Pizza"
            preço1 = 35.00
            break
        case 3:
            pedido = "Refrigerante"
            preço1 = 5.00
            break
        case 4:
            pedido = "Batata Frita"
            preço1 = 12.00
            break
    }
    let pedido2 = parseInt(prompt(`Menu
(1) Hambúrguer – R$ 20
(2) Pizza – R$ 35
(3) Refrigerante – R$ 5
(4) Batata Frita – R$ 12
(5) Sair`))
    if (pedido2 == 5) {
        alert("Muito obrigado volte sempre!")
    } else {
        switch (pedido2) {
            case 1:
                pedido2 = "Hambúguer"
                preço2 = 20.00
                break
            case 2:
                pedido2 = "Pizza"
                preço2 = 35.00
                break
            case 3:
                pedido2 = "Refrigerante"
                preço2 = 5.00
                break
            case 4:
                pedido2 = "Batata Frita"
                preço2 = 12.00
                break
        }
        let pedido3 = parseInt(prompt(`Menu
(1) Hambúrguer – R$ 20
(2) Pizza – R$ 35
(3) Refrigerante – R$ 5
(4) Batata Frita – R$ 12
(5) Sair`))
        if (pedido3 == 5) {
            alert("Muito obrigado volte sempre!")
        } else {
            switch (pedido3) {
                case 1:
                    pedido3 = "Hambúguer"
                    preço3 = 20.00
                    break
                case 2:
                    pedido3 = "Pizza"
                    preço3 = 35.00
                    break
                case 3:
                    pedido3 = "Refrigerante"
                    preço3 = 5.00
                    break
                case 4:
                    pedido3 = "Batata Frita"
                    preço3 = 12.00
                    break
            }
            let estudante = prompt("Você é estudante? se sim digite S se não digite N").toLowerCase()
            let soma = parseFloat (preço1 + preço2 + preço3)
            if (estudante == "s" && soma > 50) {
                let calculo = parseFloat (soma * 10 / 100)
                let calculo2 = parseFloat (soma * 5 / 100)
                let calculo3 = parseFloat (calculo + calculo2)
                let calculo4 = parseFloat (soma - calculo3)
                alert(`Obrigado ${nome}!
            Pratos escolhidos:
            ${pedido} ${preço1} 
            ${pedido2} ${preço2}
            ${pedido3} ${preço3}
            Total sem desconto: ${soma}
            Total com desconto: ${calculo4}`)
            } else if (soma > 50 && estudante == "n") {
                let calculo = parseFloat (soma * 5 / 100)
                let resultado = parseFloat( soma - calculo)
                alert(`Obrigado ${nome}!
            Pratos escolhidos:
            ${pedido} R$${preço1} 
            ${pedido2} R$${preço2}
            ${pedido3} R$${preço3}
            Total sem desconto: R$${soma}
            Total com desconto: R$${resultado}`)
            } else if (estudante == "s" && soma <= 50) {
                let calculo = parseFloat( soma * 10 / 100)
                let resultado = parseFloat (soma - calculo)
                alert(`Obrigado ${nome}!
            Pratos escolhidos:
            ${pedido} R$${preço1} 
            ${pedido2} R$${preço2}
            ${pedido3} R$${preço3}
            Total sem desconto: R$${soma}
            Total com desconto: R$${resultado}`)
            } else if(estudante == "n" && soma <= 50){
                alert(`Obrigado ${nome}!
            Pratos escolhidos:
            ${pedido} R$${preço1} 
            ${pedido2} R$${preço2}
            ${pedido3} R$${preço3}
            Total sem desconto: R$${soma}
            Total com desconto: R$${soma}`)
            }else{
                alert("algo deu errado, reinicie a pagina")
            }

        }
    }
}