

var $tabs = function (target) {
	var
		//Переменная _elemTabs хранит DOM-элемент, предоставляющий собой контейнер с вкладками.
	  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
		_eventTabsShow,
		//Метод _showTab предназначен для скрытия текущей (активной) вкладки и отображения 
		//другой в зависимости от переданной ему ссылки.
	  _showTab = function (tabsLinkTarget) {
		 var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
		 tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
		 tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
		 tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
		 // если следующая вкладка равна активной, то завершаем работу
		 if (tabsLinkTarget === tabsLinkActive) {
			return;
		 }
		 // удаляем классы у текущих активных элементов
		 if (tabsLinkActive !== null) {
			tabsLinkActive.classList.remove('tabs__link_active');
		 }
		 if (tabsPaneShow !== null) {
			tabsPaneShow.classList.remove('tabs__pane_show');
		 }
		 // добавляем классы к элементам (в завимости от выбранной вкладки)
		 tabsLinkTarget.classList.add('tabs__link_active');
		 tabsPaneTarget.classList.add('tabs__pane_show');
		 document.dispatchEvent(_eventTabsShow);
		},
	  //Метод _switchTabTo используется для переключения вкладки по её порядковому номеру.
	  _switchTabTo = function (tabsLinkIndex) {
		 var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
		 if (tabsLinks.length > 0) {
			if (tabsLinkIndex > tabsLinks.length) {
			  tabsLinkIndex = tabsLinks.length;
			} else if (tabsLinkIndex < 1) {
			  tabsLinkIndex = 1;
			}
			_showTab(tabsLinks[tabsLinkIndex - 1]);
		 }
	  };
	
	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
	
	//Установка обработчиков событий для вкладок определяется 
	//с помощью addEventListener и выполняется в момент вызова $tabs.
	_elemTabs.addEventListener('click', function (e) {
	  var tabsLinkTarget = e.target;
	  // завершаем выполнение функции, если кликнули не по ссылке
	  if (!tabsLinkTarget.classList.contains('tabs__link')) {
		 return;
	  }
	  // отменяем стандартное действие
	  e.preventDefault();
	  _showTab(tabsLinkTarget);
	});
	
	return {
	  showTab: function (target) {
		 _showTab(target);
	  },
	  switchTabTo: function (index) {
		 _switchTabTo(index);
	  }
	}
	
	};
	
	$tabs('.tabs');
	

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

	

let burger = document.querySelector('.icon-menu');
burger.addEventListener("click", function (e) {
	let burger_icon = document.querySelector('.icon-menu');
	let menu = document.querySelector('.header__menu');
	let lock = document.querySelector('body');

	burger_icon.classList.toggle('_active');
	menu.classList.toggle('_active');
	lock.classList.toggle('_lock');
});

// Инициализация Swiper
new Swiper('.specialties', {
	loop: true,

	pagination: {
		el: '.specialties__pagination',
		// Буллеты
		clickable: true,
	}
});

//<Якоря>===========================================================================

function home(top)
{
	const header = document.querySelector(".header");
	//header.scrollIntoView(top);
	header.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function about(top)
{
	const about = document.querySelector(".about");
	about.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function team(top)
{
	const team = document.querySelector(".team");
	team.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function booking(top)
{
	const booking = document.querySelector(".reservation");
	booking.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function menu(top)
{
	const menu = document.querySelector(".specialties");
	menu.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function galerie(top)
{
	const galerie = document.querySelector(".delicious");
	galerie.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function events(top)
{
	const events = document.querySelector(".private");
	events.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
function contact(top)
{
	const contact = document.querySelector(".contact");
	//header.scrollIntoView(top);

	contact.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

//</Якоря>===========================================================================
