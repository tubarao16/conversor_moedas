document.getElementById ('currency-converter').addEventListener('submit', function(event){
    event.preventDefault();
 
    // Obter valores de entrada informados pelo usuário
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;
 
    // Definir taxas de câmbio fixas
    const exchangeRates = {
        USD: { BRL: 5.70, EUR: 0.93 },
        BRL: { USD: 0.18, EUR: 0.16 },
        EUR: { USD: 1.08, EUR: 6.16 },
        EUR: { USD: 1.08, EUR: 6.16 }
    };
 
    // Conversão simples de moeda
    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }
 
    const conversao = document.getElementById('result')
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}` ;
});
