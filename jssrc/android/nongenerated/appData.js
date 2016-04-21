/*-------------------------------------------------------------------------------------------------
--- Name      : appData.js
--- Author    : Soumya Karumuri
--- Date      : 28/06/2015
--- Purpose   : This module has functions related to the initialization of application data
-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------
--- Name 	    : initAppData() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: This method contains initialization of the global object used in the app 	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function initAppData() {
    var that = {};
    that.apiKey = "wwjsa9cmtmjafmzvhncfcc7g";
    that.prodSubCategoriesData = [];
    that.breadcrumbsArr = [];
    that.categoryId = "";
    that.categoryName = "";
    that.productId = "";
    that.productImagesData = [];
    that.thumbnailImage = "";
    that.isSearchInitiated = false;
    that.shoppingCartData = [];
    that.isNewProduct = false;
    return that;
}