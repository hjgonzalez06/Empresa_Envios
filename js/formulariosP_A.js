$(document).ready(function() {
    $(document).on('click', '#nuevo', function () {
        $.ajax({
            url: '../formularios/ingresarP.php',
            type: 'POST',
            data: {},
            beforeSend: function () {
                console.log('Desde la consola');
            }
        })
            .done(function (output) {
                console.log(output);
                $('#formularios').empty().append(output);
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    })

    $(document).on('click', '#modif', function () {
        $.ajax({
            url: '../formularios/modificarP.php',
            type: 'POST',
            data: {cod: $('#cod').val()},
            beforeSend: function () {
                console.log('Desde la consola');
                alert('¿Está seguro(a) de querer modificar el pedido: '+$('#cod').val()+'?');
            }
        })
            .done(function (output) {
                console.log(output);
                $('#formularios').empty().append(output);
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    })

    $(document).on('click', '#del', function () {
        $.ajax({
            url: '../formularios/deleteP.php',
            type: 'POST',
            data: {cod: $('#cod').val()},
            beforeSend: function () {
                console.log('Desde la consola');
                alert('¿Está seguro(a) de querer eliminar el pedido: '+$('#cod').val()+'?');
            }
        })
            .done(function (output) {
                console.log(output);
                $('#formularios').empty().append(output);
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    })
})