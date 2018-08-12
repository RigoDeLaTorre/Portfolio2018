import 'bootstrap';
import 'bootstrap/js/dist/util';
import anime from 'animejs';
import $ from 'jquery';



$("#arrow-link").click(function() {
  console.log('clicking')
    $('html, body').animate({
        scrollTop: $("#portfolioId").offset().top
    }, 1000);
});
