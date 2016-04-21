/*-------------------------------------------------------------------------------------------------
--- Name      : searchProducts.js
--- Author    : Soumya Karumuri
--- Date      : 01/07/2015
--- Purpose   : This module has functions related to the implementation of search functionality 
-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickSearchBtn() 
--- Author   	: Soumya Karumuri
--- Date      	: 01/07/2015
--- Purpose  	: This method is invoked when the search button on the home screen is clicked	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onClickSearchBtn() {
    var lSearchText = frmHome.tbxSearch.text;
    gAppData.isSearchInitiated = true;
    if (lSearchText != "") {
        fetchSearchProductsList("1");
    } else {
        frmHome.tbxSearch.text = "";
        alert(kony.i18n.getLocalizedString("ENTER_SEARCH_TEXT"));
    }
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchSearchProductsList() 
--- Author   	: Soumya Karumuri
--- Date      	: 02/07/2015
--- Purpose  	: To fetch the products based on search criteria	
--- Input     	: pPageNo
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function fetchSearchProductsList(pPageNo) {
    var lSearchCriteria = "";
    if (frmHome.lstSearchFilter.selectedKey == "-1" || frmHome.lstSearchFilter.selectedKey == "0" || frmHome.lstSearchFilter.selectedKey == null) {
        lSearchCriteria = "search=" + frmHome.tbxSearch.text;
    } else if (frmHome.lstSearchFilter.selectedKey == "1") {
        lSearchCriteria = "search=" + frmHome.tbxSearch.text + "&customerReviewAverage>=1";
    } else if (frmHome.lstSearchFilter.selectedKey == "2") {
        lSearchCriteria = "search=" + frmHome.tbxSearch.text + "&customerReviewAverage>=2";
    } else if (frmHome.lstSearchFilter.selectedKey == "3") {
        lSearchCriteria = "search=" + frmHome.tbxSearch.text + "&customerReviewAverage>=3";
    } else if (frmHome.lstSearchFilter.selectedKey == "4") {
        lSearchCriteria = "search=" + frmHome.tbxSearch.text + "&customerReviewAverage>=4";
    }
    kony.print("LOG : fetchSearchProductsList - lSearchCriteria:" + lSearchCriteria);
    kony.application.showLoadingScreen(sknLoading, kony.i18n.getLocalizedString("PLEASE_WAIT"), constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    var lSearchProducts_inputparam = {};
    lSearchProducts_inputparam["serviceID"] = "FetchSearchProductsList";
    lSearchProducts_inputparam["key"] = gAppData.apiKey;
    lSearchProducts_inputparam["pageNo"] = pPageNo;
    lSearchProducts_inputparam["searchCriteria"] = lSearchCriteria;
    lSearchProducts_inputparam["httpheaders"] = {};
    lSearchProducts_inputparam["httpconfigs"] = {};
    var lSearchProducts = appmiddlewaresecureinvokerasync(lSearchProducts_inputparam, fetchSearchProductsList_callback);
}

function fetchSearchProductsList_callback(pStatus, pResultSet) {
    if (pStatus == 400) {
        kony.print("LOG : fetchSearchProductsList_callback - pResultSet:");
        kony.print(pResultSet);
        if (pResultSet != null && pResultSet["opstatus"] == 0) {
            if (pResultSet["products"] && pResultSet["products"].length) {
                var lPageData = [];
                var lProdData = [];
                var lThumbnailImage, lProdPrice, lProdPriceSkin;
                hbxHeader.btnBack.isVisible = true;
                frmProductsList.lblResultsFor.text = "Results for: " + frmHome.tbxSearch.text;
                if (kony.os.toNumber(pResultSet["totalPages"]) > 1) {
                    frmProductsList.hbxPagination.isVisible = true;
                    if (frmProductsList.cmbPagination.masterData == null) {
                        for (var i = 1; i <= kony.os.toNumber(pResultSet["totalPages"]); i++) {
                            lPageData.push(["key" + i, i]);
                        }
                        frmProductsList.cmbPagination.masterData = lPageData;
                    }
                    frmProductsList.lblPagination.text = "Page " + pResultSet["currentPage"] + " of " + pResultSet["totalPages"];
                } else {
                    frmProductsList.hbxPagination.isVisible = false;
                }
                for (var j = 0; j < pResultSet["products"].length; j++) {
                    if (pResultSet["products"][j]["thumbnailImage"]) {
                        lThumbnailImage = pResultSet["products"][j]["thumbnailImage"];
                    } else {
                        lThumbnailImage = "iconprodthumbnail.png";
                    }
                    if (pResultSet["products"][j]["onSale"]) {
                        lProdPrice = pResultSet["products"][j]["salePrice"];
                        lProdPriceSkin = "sknLblRedFont";
                    } else {
                        lProdPrice = pResultSet["products"][j]["regularPrice"];
                        lProdPriceSkin = "sknLblBlackFont";
                    }
                    lProdData.push({
                        "lblNewItem": {
                            text: kony.i18n.getLocalizedString("NEW_ITEM"),
                            isVisible: pResultSet["products"][j]["new"]
                        },
                        "imgProdThumbnail": {
                            src: lThumbnailImage
                        },
                        "lblProdName": pResultSet["products"][j]["name"],
                        "hProductId": pResultSet["products"][j]["sku"],
                        "lblProdPrice": {
                            text: "$" + lProdPrice.toString(),
                            skin: lProdPriceSkin
                        },
                        "lblAvgReview": kony.i18n.getLocalizedString("AVG_USER_RATING:") + pResultSet["products"][j]["customerReviewAverage"],
                        "imgSideArrow": {
                            src: "iconsidearrow.png"
                        }
                    });
                }
                frmProductsList.segProducts.setData(lProdData);
                frmProductsList.show();
                kony.application.dismissLoadingScreen();
            } else {
                kony.application.dismissLoadingScreen();
                alert("Products are not available for this search criteria");
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