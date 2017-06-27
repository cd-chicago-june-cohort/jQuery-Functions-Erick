$(document).ready(function() {

    $('#click').click(function(){
        alert('I can pop up an alert!');
    });

    $('#hide').click(function(){
        $('#hide p').hide();
    });

    $('#show').click(function() {
        $('#hide p').show();
    });

    $('#toggle').click(function(){
        $('#toggle p').toggle(1000, 'swing');
    });

    $('#slideDown img').hide();

    $('#slideDown').click(function(){
        $('#slideDown img').slideDown(3000);

    });

    $('#slideUp').click(function(){
        $('#slideUp img').slideUp(3000);
    });

    $('#slideToggle').click(function(){
        $('#slideToggle img').slideToggle(3000);
    });

    $('#fadeIn p').hide();

    $('#fadeIn').click(function(){
        $('#fadeIn p').fadeIn(3000);
    });

    $('#fadeOut').click(function(){
        $('#fadeOut p').fadeOut(3000);
    });

    $('#addClass').click(function(){
        $('#addClass h2').addClass('red');
        $('#addClass h3').addClass('blue');
    });

    $('#before').click(function(){
        $('#before').before('<p>This Text Was Added!</p>');
    });

    $('#after').click(function(){
        $('#after').after('<p>This Text Was Added!</p>');
    });

    $('#append').click(function(){
        $('#append').append('<p>This Text Was Appended!</p>')
    });

    $('#html').click(function(){
        $('#html p').html('<i>This Text Has An i Tag </i>');
    });

    $('#attr').click(function(){
        $('#attr img').attr('width','200');
    });

    $('#val').click(function(){
        $('#val input').val('4!');
    });

    $('#text').click(function(){
        $('#text p').text('Text Changed!');
    });
    
    $('.button1').click(function(){
        $('#data').data('val', 'Hello!');
    });
    $('.button2').click(function(){
        alert($('#data').data('val'));
    });
});