function calcularIMC(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var IMC = peso / (altura*altura);
    document.getElementById('IMC').value = IMC.toFixed(2);
}