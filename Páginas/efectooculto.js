
$(".mostrarVideoGen").click(function(){
    console.log(this.id)


    $(".videosYtb").fadeOut("fast",()=>{

    $("#videoOculto_" + this.id).fadeIn()

    })

})

