function calcular(){

    var n1 =Number(document.querySelector(".n1").value)
    var n2 =Number(document.querySelector(".n2").value)
    var n3 =Number(document.querySelector(".n3").value)
    var n4 =Number(document.querySelector(".n4").value)
    var n5 =Number(document.querySelector(".n5").value)
    var n6 =Number(document.querySelector(".n6").value)
    var n7 =Number(document.querySelector(".n7").value)
    var n8 =Number(document.querySelector(".n8").value)
    var n9 =Number(document.querySelector(".n9").value)
    var n10 =Number(document.querySelector(".n10").value)
    var x1 = (n1*n2)
    var x2 = (n3*n4)
    var x3 = (n5*n6)
    var x4 = (n7*n8)
    var x5 = (n9*n10)
    var total = ((n1*n2)+(n3*n4)+(n5*n6)+(n7*n8)+(n9*n10))
    var resultado = document.querySelector(".display")
    
  
    
   resultado.innerHTML = `A sua loja possui ${n1+n3+n5+n7+n9} mercadorias em estoque, com valor total de R$${total},00 reais.`


   if( n2 === 0 && n4 === 0 && n6 === 0 && n8 === 0 && n10 === 0 ){
    resultado.innerHTML = `Você possui ${n1+n3+n5+n7+n9} mercadorias em estoque.`
   }
   if( n1 === 0 && n3 === 0 && n5 === 0 && n7 === 0 && n9 === 0 ){
    resultado.innerHTML = `Você possui um valor total de mercadorias equivalente á R$${n2+n4+n6+n8+n10},00.`
   }
   if (n1 === 0 && n2 === 0 && n3 === 0 && n4 === 0 && n5 === 0 && n6 === 0 && n7 === 0 && n8 === 0 && n9 === 0 && n10 === 0) {
    resultado.innerHTML = `Você não preencheu nenhum campo!`
}
}
function apagar(){
    var n1 =Number(document.querySelector(".n1").value = "")
    var n2 =Number(document.querySelector(".n2").value = "")
    var n3 =Number(document.querySelector(".n3").value = "")
    var n4 =Number(document.querySelector(".n4").value = "")
    var n5 =Number(document.querySelector(".n5").value = "")
    var n6 =Number(document.querySelector(".n6").value = "")
    var n7 =Number(document.querySelector(".n7").value = "")
    var n8 =Number(document.querySelector(".n8").value = "")
    var n9 =Number(document.querySelector(".n9").value = "")
    var n10 =Number(document.querySelector(".n10").value = "")
    var resultado = document.querySelector(".display")
    
    resultado.innerHTML = "Resultado"
}


