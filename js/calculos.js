$('#calcular').click(function () {
  var idade = parseFloat($('#txtidade').val())
  var salariobruto = parseFloat($('#txtsalariobruto').val())
  var dependentes = parseFloat($('#txtdependentes').val())
  var nome = $('#txtnome').val()

  var bonusidade = 0;

  if (idade > 50){
    bonusidade += 300;
  }else{
    bonusidade += 200;
  }

  var inss = salariobruto * 0.08;
  var vt = salariobruto * 0.05;

  var bonusdependentes = dependentes * 50;

  var salarioliquido = salariobruto - inss - vt + bonusidade + bonusdependentes;

  $('#alertnome')
    .text('Nome do Funcionário: ' + nome)
    .css({ 'font-weight': 'bold', 'font-size': '14pt', color: '#000000' })

  $('#alertdependentes')
    .text('Número de dependentes: ' + dependentes)
    .css({ 'font-weight': 'bold', 'font-size': '14pt', color: '#a5008f' })

  $('#alertsalariob')
    .text('Salário Bruto: R$' + salariobruto)
    .css({ 'font-weight': 'bold', 'font-size': '14pt', color: '#006703' })

  $('#alertinss')
    .text('Valor INSS: R$' + inss)
    .css({ 'font-weight': 'bold', 'font-size': '14pt', color: '#000000' })

  $('#alertvt')
    .text('Valor Vale Transporte: R$' + vt)
    .css({ 'font-weight': 'bold', 'font-size': '14pt', color: '#a5008f' })

  $('#alertsalariol')
    .text('Salário Líquido: R$' + salarioliquido)
    .css({ 'font-weight': 'bold', 'font-size': '14pt', color: '#006703' })

});
