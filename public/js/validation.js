$(function () {
  $('#converter').click(function () {
    const cotacao = parseFloat($('#cotacao').val());
    const quantidade = parseFloat($('#quantidade').val());

    if (isNaN(cotacao) || isNaN(quantidade)) {
      if (isNaN(cotacao)) {
        $('#cotacao').val('');
        $('#cotacao').attr('placeholder', 'Valor inválido!');
      }

      if (isNaN(quantidade)) {
        $('#quantidade').val('');
        $('#quantidade').attr('placeholder', 'Valor inválido!');
      }
    } else {
      $('#cotacao').val(Math.abs(cotacao));
      $('#quantidade').val(Math.abs(quantidade));
      $('#form').submit();
    }
  });
});
