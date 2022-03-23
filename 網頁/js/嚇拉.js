<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script type="text/javascript">
    $ (function (){
        $("navigation ul > 1i:has (ul) > a").append('<div class="arrow-bottom"></div>');
        $("navigation ul > li ul li:has (ul) > a").append('<div class="arrow-right">/div');
    });
</script>