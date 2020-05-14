$(document).ready(function(){
	$('.menu-bar').on('click','ul li',function(){
		$(this).find('.sub-cat').toggle();
	});

	$('.menu-icon').click(function(){
		var pop='<div class="popup"></div>';
		$('body').append(pop);
		$('.left-menu').css({'left':'0px'});
	});
	
	$('body').on('click','.popup',function(){
		$(this).remove();
		$('.left-menu').css({'left':'-282px'});
	});

	$('.left-menu').on('click','ul li',function(){
		$(this).find('.sub-left-menu').slideToggle(500);
	});

	/* slide show */
	$('.slider-inner img').first().addClass('active');

	function next(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		currentImg.removeClass('active');
		if(nextImg.length){
			nextImg.addClass('active');
		}else{
			$('.slider-inner img').first().addClass('active');
		}
	}

	var timeShow = setInterval(function(){
		next();
		rowslider();
	},5000);

	$('.next').on('click', function(){
		clearInterval(timeShow);
		next();
	});
			
	$('.prev').on('click', function(){
		clearInterval(timeShow);
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		currentImg.removeClass('active');
		if(prevImg.length){
			prevImg.addClass('active');
		} else {
			$('.slider-inner img').last().addClass('active');	
		}
	});

	function rowslider(){
		var currentImg = $('.show');
		var nextImg = currentImg.next();
		currentImg.removeClass('show');
		if(nextImg.length){
			nextImg.addClass('show');
		}else{
			$('.rowinner-slider .itemslider').first().addClass('show');
		}
	}

	$('.rowslider-next').on('click', function(){
		rowslider();
		clearInterval(timeShow);
	});

	$('.rowslider-prev').on('click', function(){
		clearInterval(timeShow);
		var currentImg = $('.show');
		var prevImg = currentImg.prev();
		currentImg.removeClass('show');
		if(prevImg.length){
			prevImg.addClass('show');
		} else {
			$('.rowslider .itemslider').last().addClass('show');	
		}
	});

	$('#close-product').click(function(){
		$('#product-modal').hide();
	});

	$(document).on('click','.eye',function(){
		$('#product-modal').show();
		$('#product-detail').css('top','50%');
	});	

  	// PRODUCT ZOOM
  	$('#product-main-view .product-view').zoom();
  	$(document).on('click','.for-zoom',function(){
  		$('.for-zoom').removeClass('purple');
  		var itself = $(this).attr('src');
  		$('#img').attr('src',itself);
  		$(this).addClass('purple');
  		$('#product-main-view .product-view').zoom();
  	});
  			
  	var a = $('.for-zoom').eq(0).attr('src');
  	$('#img').attr('src',a);

  	/*scroll up button*/
  	$(window).scroll(function(){

        if($(this).scrollTop() > '1000') {
            $("#scrollUp").css({'display': 'block'});
        } else {
         $("#scrollUp").hide();
        }
    });

  	$("#scrollUp").on('click', function(event) {

    	// Prevent default anchor click behavior
    	event.preventDefault();

    	// Store hash
    	var hash = this.hash;

			  $('html, body').animate({
      		scrollTop: $(hash).offset().top
    	},500, function(){

		     window.location.hash = hash;
      	});	
  	});

  	$('.play-grid').click(function(){
  		$('.list').removeClass('col-sm-12 col-12');
  		$('.list').addClass('col-sm-4');
  		$('.list-detail').removeClass('d-flex');
  		$('.list').removeClass('p-0');
  		$('.list').addClass('p-1');
  		$('.pos').css({'top':'70px','left':'0px'});
  		$('.list-img').css('padding-left','20px');
  		$('.button-list').css('color','orange');
  		$(this).css('color','white');
  	});

  	$('.play-list').click(function(){
  		$('.list').removeClass('col-sm-4');
  		$('.list').addClass('col-sm-12 col-12');
  		$('.list-detail').addClass('d-flex');
  		$('.list').removeClass('p-1');
  		$('.list').addClass('p-0');
  		$('.pos').css({'left':'0px','bottom':'10px','top':'90px'});
  		$('.list-img').css('padding-left','0px');
  		$('.button-grid').css('color','orange');
  		$(this).css('color','white');
  	});

});

$(function(){		
		var $gallery = $('.gallery a').simpleLightbox();

		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
	});