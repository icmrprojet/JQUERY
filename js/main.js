//REVISION


//variables
var nombrePrems = 2;
var chaineDeCaracteres = 'texte texte texte';
var variableBoolen =true;

var nombrePrems= nombrePrems + 7;
console.log("nombrePrems=" + nombrePrems);

chaineDeCaracteres = chaineDeCaracteres + 'blablabla';

if ( nombrePrems == 9){
	console.log('nombrePrems vaut 9')
}else{
	console.log('nombrePrems ne vaut pas 9')
}

if (( nombrePrems == 9) || ( nombrePrems == 10)){
	console.log('nombrePrems vaut 9')
}else{
	console.log('nombrePrems ne vaut pas 9')
}


function mafonctionDeBase(i){ // i peut être true, 4, ou une autre fonction
	//fonctionnement théorique de la fonction
	console.log('mafonctionDeBase');
}

mafonctionDeBase(); // Lancement de la fonction ( ligne 23 qui s'execute)


//INITIATION JQUERY

$(document).ready(function(){
//////////////////////////////////////////// slider

	$('#slider1 .slider').bxSlider({
		slideWidth:600,
		mode:'vertical'
	});

	$('#slider2 .slider').bxSlider({
		slideWidth:300,
		mode:'horizontal', 
		hideControlOnEnd:'true', 
		pager:false,
		auto:true,
		speed:900
	});

	$('#slider3 .slider').bxSlider({
	});


//////////////////////////////////////////// getflywheel
var offset = 250; // hauteur en pixel à partir ou le bouton se déclenche
var duration = 300;

	jQuery(window).scroll(function() { 
		if (jQuery(this).scrollTop() > offset) { // si scroll est > à offset
		jQuery('#scroll-to-top').fadeIn(duration); 
		} else {
		jQuery('#scroll-to-top').fadeOut(duration);
		}
	});
 
 
	jQuery('#scroll-to-top').click(function(event) { 
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	});


//////////////////////////////////////////// topmenu devient fixed menu
//bind etudie un event, si il a du scroll

var topMenuPosition =$('.top-menu').offset().top-50; //recupérer la hauteur du menu depuis le haut de la page
var topMenuHeight =$('.top-menu').css('height'); //recupérer la hauteur du interne menu
console.log(topMenuPosition);
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > topMenuPosition) { // si le scroll est plus important que la position du menu
        $('.top-menu').addClass('fixed-menu');
        $('body').css('margin-top',topMenuHeight);
    } else {
        $('.top-menu').removeClass('fixed-menu');
		$('body').css('margin-top',0);
    }
});


$(window).bind('scroll', function () {
	var verifHeight=$(window).scrollTop();
	console.log('verifHeight=' + verifHeight );
});

/////////////////////////////////////////////////////// open lightbox

$('#btn-popup').click(function(event){
	event.preventDefault();
	//$('#popup').addClass('open');
	//$('#popup').animate({top: '0%'}, 1000,'swing',function(){});
	$('#popup').animate({top: '70%'}, 1000,'swing',function(){});
});

$('.closePopup').click(function(event){
	event.preventDefault();
	//$('#popup').removeClass('open');
	$('#popup').animate({top: '100%'},1000,'swing',function(){});
});


//////////////////////////////////////////// slider
// Pour lister toutes mes actions à réaliser dès que la page est chargée
	var BackBody=$('body').css('background-color');
	console.log('La couleur de fond du body est : ' + BackBody)

	$('.loading').css('display','none');
	//JQUERY('.loading').css('display','none');

	$('h1').css('color','red');
	$('h1').css({'color':'red','background-color':'blue'});

	var h1Bg=$ ('h1').css('background-color');
	console.log('La couleur de fond du H1 : ' + h1Bg)

	var h1Color=$ ('h1').css('color');
	console.log('La couleur de texte du H1 : ' + h1Color)

//	$('.glyphicon').css('color','white');//mettre de préference dans le CSS au cas ou pas de JS

	$('form').on('submit',function(event){
		event.preventDefault();//annule son comportement par defaut
		console.log('formulaire envoyé');
	});

	$('.glyphicon').on('mouseover',function(){
		console.log('oeil');
		$('#password').attr('type','text');
	});
	$('.glyphicon').on('mouseout',function(){
		console.log('oeil - out');
		$('#password').attr('type','password');
	});
	$('.glyphicon').on('dblclick',function(){
		console.log('oeil - out');
		var passwordValue = $('#password').val();
		console.log(passwordValue);
	});

//////////////////////////////////////////// random color
	var colorR;
	var colorG;
	var colorB;

	function randomColor(){
		colorR = Math.floor(255*(Math.random()));// entier entre 0 et 255
		colorG = Math.floor(255*(Math.random()));
		colorB = Math.floor(255*(Math.random()));
		console.log(colorR);
		rgbLine='rgb(' + colorR + ',' + colorG + ',' + colorB + ')' ;
		console.log(rgbLine);
		$('body').css('background-color', rgbLine);
	}

//////////////////////////////////////////// changer couleur de fond
	$('.jumbotron a').click(
		function(event){
			event.preventDefault();//annule son comportement par defaut
			randomColor();
		}
	);

	//$('.jumbotron').slideToggle();
	//le a qui porte cet id
	$('a#btn1').on('click',function(event){
		event.preventDefault();
		//$(this).parent().slideToggle();// parent : fonct JQUERY animation de rempli/ouverture
		$('.jumbotron').slideToggle();
	});


//////////////////////////////////////////// anim perso
	//fonction animate
	$('#left-link').click(function(event){
		$('.play img').attr('src','img/minion7.png');
		event.preventDefault();
		$('.play img').animate({'left':'-=100px'}, 800, 'swing', function(){
			$('.play img').attr('src','img/minion3.png');
		});
	});
	$('#right-link').click(function(event){
		event.preventDefault();
		$('.play img').attr('src','img/minion6.png');
		$('.play img').animate({'left':'+=100px'}, 800, 'swing', function(){
			$('.play img').attr('src','img/minion3.png');
		});
	});
	$('#jump-link').click(function(event){
		event.preventDefault();
		$('.play img').attr('src','img/minion5.png');
		$('.play img').animate({'top':'-=200px'}, 800, 'swing',function(){
			$('.play img').animate({'top':'+=200px'}, 600, 'swing',function(){
				$('.play img').attr('src','img/minion3.png');
			});
		});
	});



//////////////////////////////////////////// EXERCICES ///////////////////////////////////
// créer 3 div avec ID #box1, #box2, #box3 (avec des tailles et couleurs de fonds en css)
// Créer 3 boutons qui déclenchent 3 effets sur les box respectives
// chnagement de couleurs de fond
// chnagement de hauteur
// bords arrondis

// Changer une source d'image (comme minion)
/*
$('a#btnexo1').on('mouseover',function(event){
	event.preventDefault();
	$('#box1').css({'background-color':'red','border-radius':'20px','color':'white','height':'350px'});
	$('#box2').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box3').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box1 img').attr({'src':'img/minion.png','width':'150px'});
	$('#box2 img').attr({'src':'img/minion2.png','width':'80px'});
	$('#box3 img').attr({'src':'img/minion6.png','width':'80px'});
});
$('a#btnexo1').on('click',function(event){
	event.preventDefault();
	$('#box1').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box1 img').attr({'src':'img/minion5.png','width':'80px'});
});*/
//////////////////////////////////////////////// CORRECTION
var actualColor= $('#box1').css('background-color');
$('a#btnexo1').on('mouseover',function(event){
	event.preventDefault(); // annuler le comportement natif du lien
	//var actualColor= $('#box1').css('background-color','red'); // récuperer le couleur
	//console.log(actualColor);
	$('#box1').css({'background-color':'red'}); //Changer la couleur
	console.log(actualColor);
	$('#box1 img').attr({'src':'img/minion5.png','width':'80px'});
});
$('a#btnexo1').on('mouseout',function(event){
	event.preventDefault(); // annuler le comportement natif du lien
	$('#box1').css({'background-color':actualColor}); //Changer la couleur
	console.log(actualColor);
});



$('a#btnexo2').on('mouseover',function(event){
	event.preventDefault();
	$('#box2').css({'background-color':'blue','border-radius':'20px','color':'white','height':'350px'});
	$('#box1').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box3').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box2 img').attr({'src':'img/minion.png','width':'150px'});
	$('#box1 img').attr({'src':'img/minion5.png','width':'80px'});
	$('#box3 img').attr({'src':'img/minion6.png','width':'80px'});
});
$('a#btnexo2').on('click',function(event){
	event.preventDefault();
	$('#box2').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box2 img').attr({'src':'img/minion2.png','width':'80px'});
});
//////////////////////////// CORRECTION avec data- placés dans le HTML
var startColor= $('#btnexo2').attr('data-color-start');// récupérer les valeur d'un attribut
console.log(startColor);
$('a#btnexo2').on('mouseout',function(event){
	event.preventDefault(); // annuler le comportement natif du lien
	$('#box2').css({'background-color':startColor}); //J'injecte la couleur

});
///////////////////////////////////////////////////////////////////////////////////


$('a#btnexo3').on('mouseover',function(event){
	event.preventDefault();
	$('#box3').css({'background-color':'green','border-radius':'20px','color':'white','height':'350px'});
	$('#box1').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box2').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box3 img').attr({'src':'img/minion.png','width':'150px'});
	$('#box1 img').attr({'src':'img/minion5.png','width':'80px'});
	$('#box2 img').attr({'src':'img/minion2.png','width':'80px'});
});
$('a#btnexo3').on('click',function(event){
	event.preventDefault();
	$('#box3').css({'background-color':'white','border-radius':'20px','color':'black'});
	$('#box3 img').attr({'src':'img/minion6.png','width':'80px'});
});


// Trouver comment enjecter du texte dans une div (au click sur un bouton pzr exemple)
$('a#btn00').on('click',function(event){
	event.preventDefault();
    $('#div00').append("<p>append click</p>");
})
$('#btn00').mouseover(function(event){
		//$('#div00').html("<p>append over</p>");// remplace
        $('#div00').append("<p>append over</p>");// rajoute
    })



// Regarder dans la console.log ce qui est récupéré quand on vise en Jquery une balise
console.log($ ('box3'));

//////////////////////////// CORRECTION
// Essayer d'installer le BXslider(www.bxslider.com)



// observer son comportement (avec du texte) (avec des images)
// Regarder les options (autoPlay par exemple ou vertical/horizontale)

// fonctions append / html /


});


