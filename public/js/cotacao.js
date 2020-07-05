$(function () {
  $('#converter').click(function () {
    const cotacao = parseFloat($('#cotacao').val());
    const quantidade = parseFloat($('#quantidade').val());

    $('#cotacao').val(+cotacao);
    $('#quantidade').val(+quantidade);

    if (isNaN(cotacao)) {
      $('#cotacao').val('Valor inválido!');
    } else if (isNaN(quantidade)) {
      $('#quantidade').val('Valor inválido!');
    } else {
      $('#form').submit();
    }
  });
});
