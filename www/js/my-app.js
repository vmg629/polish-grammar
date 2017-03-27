// Determine theme depending on device
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;
 
// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};
 
// Define Dom7
var $$ = Dom7;
 
// Change Through navbar layout to Fixed
if (!isIos) {
    // Change class
    //$$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    // And move Navbar into Page
    //$$('.view .navbar').prependTo('.view .page');
}

var iswebView = Framework7.prototype.device.webView === true;

if (!iswebView) {
	$$('html').removeClass('html_webview');
}

// Init App
var myApp = new Framework7({
    // Enable Material theme for Android device only
    material: isAndroid ? true : false,
    // Enable Template7 pages
    template7Pages: true,
	swipePanel: 'left',
	swipePanelActiveArea: 20, //Value in px. Width of invisible edge from the screen that triggers swipe panel
	swipeBackPage: false,
	tapHold: false,
	tapHoldPreventClicks: true,
	fastClicks: true
});
 
// Init View
var mainView = myApp.addView('.view-main', {
    // Don't worry about that Material doesn't support it
    // F7 will just ignore it for Material theme
    dynamicNavbar: false
});

// Menu 
$$('.panel .list-block ul li').on('click', function (e) {
	myApp.closePanel();
});

$$('.accordion-item').on('accordionOpen:opened', function (e) {
	myApp.alert('11111');
});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
})

