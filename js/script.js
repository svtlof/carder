$(document).ready(function(){
	$('.image-btn').click(function () {
		$('.card-image').toggle();
	});

	$('.title-btn').click(function () {
		$('.card-title').toggle();
	});

	$('.text-btn').click(function () {
		$('.card-text').toggle();
	});

	$('.card-btn').click(function () {
		$('.card-button').toggle();
	});

//варианты позиционирование заголовка
	$('.title-position-left').click(function () {
		$(this).css('background-color', '#000')
		$('.title-position-center').css('background-color', '#b3b3b3')
		$('.title-position-right').css('background-color', '#b3b3b3')
		$('.card-title').css('text-align', 'left')
	});

	$('.title-position-center').click(function () {
		$(this).css('background-color', '#000')
		$('.title-position-right').css('background-color', '#b3b3b3')
		$('.title-position-left').css('background-color', '#b3b3b3')
		$('.card-title').css('text-align', 'center')
	});

	$('.title-position-right').click(function () {
		$(this).css('background-color', '#000')
		$('.title-position-center').css('background-color', '#b3b3b3')
		$('.title-position-left').css('background-color', '#b3b3b3')
		$('.card-title').css('text-align', 'right')
	});

	//варианты позиционирования текста

	$('.text-position-left').click(function () {
		$(this).css('background-color', '#000')
		$('.text-position-center').css('background-color', '#b3b3b3')
		$('.text-position-right').css('background-color', '#b3b3b3')
		$('.card-text').css('text-align', 'left')
	});

	$('.text-position-center').click(function () {
		$(this).css('background-color', '#000')
		$('.text-position-right').css('background-color', '#b3b3b3')
		$('.text-position-left').css('background-color', '#b3b3b3')
		$('.card-text').css('text-align', 'center')
	});

	$('.text-position-right').click(function () {
		$(this).css('background-color', '#000')
		$('.text-position-center').css('background-color', '#b3b3b3')
		$('.text-position-left').css('background-color', '#b3b3b3')
		$('.card-text').css('text-align', 'right')
	});

	//варианты позиционирования кнопки

	$('.button-position-left').click(function () {
		$(this).css('background-color', '#000')
		$('.button-position-center').css('background-color', '#b3b3b3')
		$('.button-position-right').css('background-color', '#b3b3b3')
		$('.button-parent-block').css('justify-content', 'flex-start')
	});

	$('.button-position-center').click(function () {
		$(this).css('background-color', '#000')
		$('.button-position-right').css('background-color', '#b3b3b3')
		$('.button-position-left').css('background-color', '#b3b3b3')
		$('.button-parent-block').css('justify-content', 'center')
	});

	$('.button-position-right').click(function () {
		$(this).css('background-color', '#000')
		$('.button-position-center').css('background-color', '#b3b3b3')
		$('.button-position-left').css('background-color', '#b3b3b3')
		$('.button-parent-block').css('justify-content', 'flex-end')
	});

	let digitCard = "px"
	let digitImage = "px"
	let digitCardRadius = "px"
	let digitCardWidth = "%"
	let digitCardHeight = "px"
	let digitTitleMarginTop = 'px'
	let digitTextMarginTop = 'px'
	let digitButtonMarginTop = 'px'
	let digitButtonRadius = 'px'

// изменение паддинга у карты
	$('.px-card').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.percent-card').css("background-color", "#fff");
		$('.percent-card').css("color", "#959559");
		digitCard = "px"
	})
	$('.percent-card').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-card').css("background-color", "#fff");
		$('.px-card').css("color", "#959559");
		digitCard = "%"
	})
// изменение радиуса изображения
	$('.px-image').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.percent-image').css("background-color", "#fff");
		$('.percent-image').css("color", "#959559");
		digitImage = "px"
	})

	$('.percent-image').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-image').css("background-color", "#fff");
		$('.px-image').css("color", "#959559");
		digitImage = "%"
	})
// изменение радиуса карточки
	$('.px-card-radius').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.percent-card-radius').css("background-color", "#fff");
		$('.percent-card-radius').css("color", "#959559");
		digitCardRadius = "px"
	})

	$('.percent-card-radius').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-card-radius').css("background-color", "#fff");
		$('.px-card-radius').css("color", "#959559");
		digitCardRadius = "%"
	})

	// изменение радиуса кнопки
		$('.px-button-radius').click(function () {
			$(this).css("background-color", "rgb(199, 199, 199)");
			$(this).css("color", "#fff");
			$('.percent-button-radius').css("background-color", "#fff");
			$('.percent-button-radius').css("color", "#959559");
			digitButtonRadius = "px"
		})

		$('.percent-button-radius').click(function () {
			$(this).css("background-color", "rgb(199, 199, 199)");
			$(this).css("color", "#fff");
			$('.px-button-radius').css("background-color", "#fff");
			$('.px-button-radius').css("color", "#959559");
			digitButtonRadius = "%"
		})
// изменение ширины карты
	$('.px-card-width').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.percent-card-width').css("background-color", "#fff");
		$('.percent-card-width').css("color", "#959559");
		digitCardWidth = "px"
	})

	$('.percent-card-width').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-card-width').css("background-color", "#fff");
		$('.px-card-width').css("color", "#959559");
		digitCardWidth = "%"
	})

	// изменение высоты карты
	$('.px-card-height').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.vh-card-height').css("background-color", "#fff");
		$('.vh-card-height').css("color", "#959559");
		digitCardHeight = "px"
	})

	$('.vh-card-height').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-card-height').css("background-color", "#fff");
		$('.px-card-height').css("color", "#959559");
		digitCardHeight = "vh"
	})

	// margin of title
	$('.px-title-margin-top').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.percent-title-margin-top').css("background-color", "#fff");
		$('.percent-title-margin-top').css("color", "#959559");
		digitTitleMarginTop = "px"
	})

	$('.percent-title-margin-top').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-title-margin-top').css("background-color", "#fff");
		$('.px-title-margin-top').css("color", "#959559");
		digitTitleMarginTop = "%"
	})

	// margin of text
	$('.px-text-margin-top').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.percent-text-margin-top').css("background-color", "#fff");
		$('.percent-text-margin-top').css("color", "#959559");
		digitTextMarginTop = "px"
	})

	$('.percent-text-margin-top').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-text-margin-top').css("background-color", "#fff");
		$('.px-text-margin-top').css("color", "#959559");
		digitTextMarginTop = "%"
	})

	// margin of button
	$('.px-button-margin-top').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.percent-button-margin-top').css("background-color", "#fff");
		$('.percent-button-margin-top').css("color", "#959559");
		digitButtonMarginTop = "px"
	})

	$('.percent-button-margin-top').click(function () {
		$(this).css("background-color", "rgb(199, 199, 199)");
		$(this).css("color", "#fff");
		$('.px-button-margin-top').css("background-color", "#fff");
		$('.px-button-margin-top').css("color", "#959559");
		digitButtonMarginTop = "%"
	})

	$('.card-width-btn').click(function () {
		let width = $('.card-width').val()
		$('.user-card').css('width', width + digitCardWidth)
	})

	$('.card-height-btn').click(function () {
		let height = $('.card-height').val()
		$('.user-card').css('height', height + digitCardHeight)
	})

	$('.title-font-size-btn').click(function () {
		let fontSize = $('.title-font-size').val()
		$('.card-title').css('font-size', fontSize + 'px')
	})

	$('.title-margin-top-btn').click(function () {
		let titleMarginTop = $('.title-margin-top').val()
		$('.card-title').css('margin-top', titleMarginTop + digitTitleMarginTop)
	})

	$('.text-margin-top-btn').click(function () {
		let textMarginTop = $('.text-margin-top').val()
		$('.card-text').css('margin-top', textMarginTop + digitTextMarginTop)
	})

	$('.button-margin-top-btn').click(function () {
		let buttonMarginTop = $('.button-margin-top').val()
		$('.button-parent-block').css('margin-top', buttonMarginTop + digitButtonMarginTop)
	})

	document.getElementById("padding-card-controller").addEventListener("change", function() {
		$('.user-card').css("padding", this.value + digitCard)
		$('.padding-card-indicator').html(this.value)
	})

	document.getElementById("border-image-controller").addEventListener("change", function() {
		$('.card-image').css("border-radius", this.value + digitImage)
		$('.border-image-indicator').html(this.value)
	})

	document.getElementById("border-card-controller").addEventListener("change", function() {
		$('.user-card').css("border-radius", this.value + digitCardRadius)
		$('.border-card-indicator').html(this.value)
	})

	document.getElementById("border-button-controller").addEventListener("change", function() {
		$('.card-button').css("border-radius", this.value + digitCardRadius)
		$('.border-button-indicator').html(this.value)
	})

})
