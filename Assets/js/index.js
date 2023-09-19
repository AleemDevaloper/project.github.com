$('document').ready(function () {


    $('#c1').hide()
    $('.left-arrow').click( function () {
      if ( $('#c1').hide() ) {
        $('#c1').show()
        $('#c6').hide()

        $('.right-arrow').click(function () {
            if($('#c1').show()){
              $('#c1').hide()
              $('#c6').show()
            }
           
          })
      }
    })
        
    $('.right-arrow').click(function () {
      if($('#c1').hide()){
        $('#c1').show()
        $('#c6').hide()

        $('.right-arrow').click(function () {
            if($('#c1').show()){
              $('#c1').hide()
              $('#c6').show()
            }
           
          })
      }
     
    })
})