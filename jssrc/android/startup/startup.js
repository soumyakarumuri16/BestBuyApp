//startup.js file
function BestBuyApppreappinit_seq0(params) {
    onPreappinit.call(this);
};
var globalhttpheaders = {};
var appConfig = {
    appId: "BestBuyApp",
    appName: "BestBuyApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.10",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://192.168.0.10:8080/middleware/MWServlet",
    secureurl: "http://192.168.0.10:8080/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrBestBuyLogo();
    initializeftrAppMenu();
    initializemapPinInfo();
    frmHomeGlobals();
    frmProductDetailGlobals();
    frmProductImagesGlobals();
    frmProductsListGlobals();
    frmShoppingCartGlobals();
    frmStoresGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        preappinit: onPreappinit,
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
kony.print = function() {
    return;
};