$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        
        const novatarefa = $('#nova-tarefa').val();
        
        if ($('.lista li').filter(function() {
            return $(this).text() === novatarefa;
        }).length > 0) {
            alert('Esta tarefa já está na lista!');
            return;
        }
        
        const novoItem = $('<li></li>');
        novoItem.text(novatarefa);
        
        $('ul.lista').append(novoItem);
        novoItem.hide().fadeIn(500);
        $('#nova-tarefa').val('');
        
        novoItem.click(function() {
            $(this).toggleClass('concluido');
        });
    });
});
