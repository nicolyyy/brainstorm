// JavaScript Document
//favor não alterar
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  //logica filtro portifolio
  $('.btn').on('click', function(){
    var categoria = $(this).attr('data-categoria')
    var todosCards = $('.cards-portfolio')
    $(todosCards).fadeIn(800)

    if(categoria == "todos"){
        $(todosCards).show()
    }
    
    else{
    $('.cards-portfolio').each(function(){
        if(!$(this).hasClass(categoria)){
          
            $(this).hide()
        }else{
            
            $(this).show()
        }
        })
    }
  })

  

