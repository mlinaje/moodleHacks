executescript = function() {
    $(function() {
        $.get('http://api.hostip.info/get_html.php', function(data) {
            var url = $("a[title='Agregar entrada']").attr('href');
            if (url != $(location).attr('href')){
               $(location).attr('href',url);
            } else {
                $('.tabtree').remove();
                $('.mod-data-default-template').hide();
                $("input[value='Guardar y ver']").click(function() {
                   alert("Asistencia grabada");
                });
                $("input[value='Guardar y agregar otro']").remove();
                var ip = data.substring(data.lastIndexOf('IP: ') + 4, data.lastIndexOf('.'));
                if (ip != '158.49.227') {
                    $("input[value*='Guardar']").remove();
                    $('#field_1537').val('no');
                    alert('No estás en clase (Dominio IP ' + ip + ')!!!');
                } else {
                    $('#field_1537').val('si');
                    $('#field_1539').val($('#profilename>a:first').text());
                }
            }
        });
    });
};

load = function() {
    load.getScript();
    load.tryReady(0);
};

load.getScript = function() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'http://code.jquery.com/jquery-latest.min.js');
    if (typeof script != 'undefined') {
        document.getElementsByTagName('head')[0].appendChild(script);
    }
};

load.tryReady = function(time_elapsed) {
    if (typeof $ == 'undefined') {
        if (time_elapsed != 5000) {
            setTimeout('load.tryReady(' + (time_elapsed + 200) + ')', 200);
        } else {
            alert('Error cargando jQuery');
        }
    } else {
        if ($("a[title='Campos']").length==0) {
           executescript();
        }
    }
};

load();
