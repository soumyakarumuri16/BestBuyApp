/*-------------------------------------------------------------------------------------------------
--- Name      : home.js
--- Author    : Soumya Karumuri
--- Date      : 27/06/2015
--- Purpose   : This module has functions related to home screen's functionality 
-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onPostShowFrmHome() 
--- Author   	: Soumya Karumuri
--- Date      	: 27/06/2015
--- Purpose  	: This method is invoked on the postShow of frmHome	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onPostShowFrmHome() {
    var lBreadcrumbData = gAppData.breadcrumbsArr;
    var lPrevForm = kony.application.getPreviousForm();
    var lData = gAppData.prodSubCategoriesData;
    if (lPrevForm == null) {
        lBreadcrumbData.push("Home");
        gAppData.breadcrumbsArr = lBreadcrumbData;
        hbxHeader.btnBack.isVisible = false;
        fetchProductCategories();
    } else if (lPrevForm == frmProductsList) {
        kony.print("LOG : onPostShowFrmHome - lData.length:" + lData.length);
        if (lData.length > 1) {
            hbxHeader.btnBack.isVisible = true;
        } else {
            hbxHeader.btnBack.isVisible = false;
        }
    }
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onRowClickSegCategories() 
--- Author   	: Soumya Karumuri
--- Date      	: 29/06/2015
--- Purpose  	: This method is invoked when the onRowClick event of the segCategories is triggered	
--- Input     	: pImageData
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onRowClickSegCategories() {
    kony.print("LOG : onRowClickSegCategories - START");
    kony.print(frmHome.segCategories.selectedItems[0]);
    fetchProductSubCategories(frmHome.segCategories.selectedItems[0]["hCategoryId"], frmHome.segCategories.selectedItems[0]["lblCategory"]);
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchProductCategories() 
--- Author   	: Soumya Karumuri
--- Date      	: 27/06/2015
--- Purpose  	: To fetch the product categories details	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function fetchProductCategories() {
    kony.application.showLoadingScreen(sknLoading, kony.i18n.getLocalizedString("PLEASE_WAIT"), constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    var lProdCategories_inputparam = {};
    lProdCategories_inputparam["serviceID"] = "FetchCategories";
    lProdCategories_inputparam["key"] = gAppData.apiKey;
    lProdCategories_inputparam["httpheaders"] = {};
    lProdCategories_inputparam["httpconfigs"] = {};
    var lProdCategories = appmiddlewaresecureinvokerasync(lProdCategories_inputparam, fetchProductCategories_callback);
}

function fetchProductCategories_callback(pStatus, pResultSet) {
    if (pStatus == 400) {
        kony.print("LOG : fetchProductCategories_callback - pResultSet:");
        kony.print(pResultSet);
        if (pResultSet != null && pResultSet["opstatus"] == 0) {
            var lProdCategoriesData = [];
            var lData = gAppData.prodSubCategoriesData;
            for (var i = 0; i < pResultSet["categories"].length; i++) {
                lProdCategoriesData.push({
                    "lblCategory": pResultSet["categories"][i]["name"],
                    "hCategoryId": pResultSet["categories"][i]["id"],
                    "imgCategory": {
                        src: "iconsidearrow.png"
                    }
                });
            }
            lData.push(lProdCategoriesData);
            frmHome.segCategories.setData(lData[lData.length - 1]);
            gAppData.prodSubCategoriesData = lData;
            kony.application.dismissLoadingScreen();
        } else {
            kony.application.dismissLoadingScreen();
            //Defining basicConf parameter for alert
            var lBasicConf = {
                message: kony.i18n.getLocalizedString("TECHNICAL_ISSUE"),
                alertType: constants.ALERT_TYPE_INFO,
                yesLabel: "yes",
                alertHandler: handle2
            };
            //Defining pspConf parameter for alert
            var lPspConf = {};
            //Alert definition
            var lInfoAlert = kony.ui.Alert(lBasicConf, lPspConf);

            function handle2(pResponse) {
                kony.application.exit();
            }
        }
    }
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchProductSubCategories() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: To fetch the product subcategories details	
--- Input     	: pCategoryId,pCategoryName
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function fetchProductSubCategories(pCategoryId, pCategoryName) {
    kony.application.showLoadingScreen(sknLoading, kony.i18n.getLocalizedString("PLEASE_WAIT"), constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    gAppData.categoryId = pCategoryId;
    gAppData.categoryName = pCategoryName;
    var lProdSubCategories_inputparam = {};
    lProdSubCategories_inputparam["serviceID"] = "FetchSubCategories";
    lProdSubCategories_inputparam["key"] = gAppData.apiKey;
    lProdSubCategories_inputparam["categoryId"] = gAppData.categoryId;
    lProdSubCategories_inputparam["httpheaders"] = {};
    lProdSubCategories_inputparam["httpconfigs"] = {};
    var lProdSubCategories = appmiddlewaresecureinvokerasync(lProdSubCategories_inputparam, fetchProductSubCategories_callback);
}

function fetchProductSubCategories_callback(pStatus, pResultSet) {
    if (pStatus == 400) {
        kony.print("LOG : fetchProductSubCategories_callback - pResultSet:");
        kony.print(pResultSet);
        if (pResultSet != null && pResultSet["opstatus"] == 0) {
            if (pResultSet["subCategories"].length > 3) {
                frmHome.lblBreadCrumb.text = frmHome.lblBreadCrumb.text + "->" + gAppData.categoryName;
                hbxHeader.btnBack.isVisible = true;
                var lProdSubCategoriesData = [];
                var lData = gAppData.prodSubCategoriesData;
                var lBreadcrumbData = gAppData.breadcrumbsArr;
                for (var i = 0; i < pResultSet["subCategories"].length; i++) {
                    lProdSubCategoriesData.push({
                        "lblCategory": pResultSet["subCategories"][i]["name"],
                        "hCategoryId": pResultSet["subCategories"][i]["id"],
                        "imgCategory": {
                            src: "iconsidearrow.png"
                        }
                    });
                }
                lBreadcrumbData.push(gAppData.categoryName);
                lData.push(lProdSubCategoriesData);
                frmHome.segCategories.removeAll();
                frmHome.segCategories.setData(lData[lData.length - 1]);
                gAppData.breadcrumbsArr = lBreadcrumbData;
                gAppData.prodSubCategoriesData = lData;
                kony.application.dismissLoadingScreen();
            } else {
                kony.application.dismissLoadingScreen();
                fetchProductsList("1", gAppData.categoryId);
            }
        } else {
            kony.application.dismissLoadingScreen();
            if (pResultSet["errmsg"]) {
                alert(pResultSet["errmsg"]);
            } else {
                alert(kony.i18n.getLocalizedString("TECHNICAL_ISSUE"));
            }
        }
    }
}