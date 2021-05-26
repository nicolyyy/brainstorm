// JavaScript Document
//favor não alterar
$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

//logica filtro portifolio
$('.btn').on('click', function () {
    var categoria = $(this).attr('data-categoria')
    var todosCards = $('.cards-portfolio')
    $(todosCards).fadeIn(800)

    if (categoria == "todos") {
        $(todosCards).show()
    }

    else {
        $('.cards-portfolio').each(function () {
            if (!$(this).hasClass(categoria)) {

                $(this).hide()
            } else {

                $(this).show()
            }
        })
    }
})

function collapse1() {
    let check = document.getElementById("collapsible1");
    let content = document.getElementById("card-content1");
    if (check.checked == true) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function collapse2() {
    let check = document.getElementById("collapsible2");
    let content = document.getElementById("card-content2");
    if (check.checked == true) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function collapse3() {
    let check = document.getElementById("collapsible3");
    let content = document.getElementById("card-content3");
    if (check.checked == true) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}



