$(document).ready(function() {
    $('a[href*=#]').click(function() {
      console.log("Pathnames");
      console.log(location.pathname);
      console.log(this.pathname);
      console.log("hostname");
      console.log(location.hostname);
      console.log(this.hostname);
      console.log("-----------------------------------");
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });
});