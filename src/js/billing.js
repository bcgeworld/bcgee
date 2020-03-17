var sum = 0;

$('td[class*="col-amount"]').each(function () {
    sum += Number($(this).text()) || 0;
});

$('.amount').text(sum);