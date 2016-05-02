$(function(){
        $('a[href^="#"]').on('click', function(event){
            event.preventDefault();

            var target = this.hash;

            console.log(this.hash);
            var $target = $(target);

            console.log(window.location.hash);
            console.log($target.offset());
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function(){
                window.location.hash = target;
            })
        })
    }());
