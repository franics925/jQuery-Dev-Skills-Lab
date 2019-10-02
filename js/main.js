for(var i = 0; i < localStorage.length; i++){
    $('ul').append(`<li>${localStorage.getItem(localStorage.key(i))}</li>`);
}

$('ul').on('click','li', function(){
    $(this).remove();
});

$('button').on('click', function(evt){
    let input = $('input').val();
    $('ul').append(`<li><button>x</button>${input}</li>`);
    localStorage.setItem(input, input);
});