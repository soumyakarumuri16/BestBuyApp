/*-------------------------------------------------------------------------------------------------
--- Name      : appMenu.js
--- Author    : Soumya Karumuri
--- Date      : 01/07/2015
--- Purpose   : This module has functions that are specific to application menu
-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickAppMenuHome() 
--- Author   	: Soumya Karumuri
--- Date      	: 01/07/2015
--- Purpose  	: This method is invoked when the Home button on application menu is clicked	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onClickAppMenuHome() {
    var lNewData = [];
    var lNewBreadcrumbData = [];
    var lData = gAppData.prodSubCategoriesData;
    var lBreadcrumbData = gAppData.breadcrumbsArr;
    var lCurrentForm = kony.application.getCurrentForm();
    hbxHeader.btnBack.isVisible = false;
    frmHome.tbxSearch.text = "";
    frmHome.lstSearchFilter.selectedKey = frmHome.lstSearchFilter.masterData[0][0];
    gAppData.isSearchInitiated = false;
    if (lData && lData.length) {
        frmHome.lblBreadCrumb.text = lBreadcrumbData[0];
        frmHome.segCategories.removeAll();
        frmHome.segCategories.setData(lData[0]);
        lNewData.push(lData[0]);
        lNewBreadcrumbData.push(lBreadcrumbData[0]);
        gAppData.prodSubCategoriesData = lNewData;
        gAppData.breadcrumbsArr = lNewBreadcrumbData;
    }
    if (lCurrentForm != frmHome) {
        frmHome.show();
    }
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickAppMenuStores() 
--- Author   	: Soumya Karumuri
--- Date      	: 04/07/2015
--- Purpose  	: This method is invoked when the Stores button on application menu is clicked	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onClickAppMenuStores() {
    hbxHeader.btnBack.isVisible = false;
    populateStoresData();
    frmStores.show();
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickAppMenuShoppingCart() 
--- Author   	: Soumya Karumuri
--- Date      	: 03/07/2015
--- Purpose  	: This method is invoked when the Cart button on application menu is clicked	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onClickAppMenuShoppingCart() {
    hbxHeader.btnBack.isVisible = false;
    populateShoppingCart();
    frmShoppingCart.show();
}