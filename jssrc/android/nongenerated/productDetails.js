/*-------------------------------------------------------------------------------------------------
--- Name      : productDetails.js
--- Author    : Soumya Karumuri
--- Date      : 29/06/2015
--- Purpose   : This module has functions related to product details screen
-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickMoreProdDtls() 
--- Author   	: Soumya Karumuri
--- Date      	: 30/06/2015
--- Purpose  	: This method is invoked when the onClick event of the linkMore widget is triggered	
--- Input     	: pImageData,pThumbnailImage
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onClickMoreProdDtls(pImageData, pThumbnailImage) {
    if (pImageData && pImageData.length) {
        frmProductImages.imgProduct.src = pImageData[0][0];
        frmProductImages.cmbProductImages.masterData = pImageData;
        frmProductImages.cmbProductImages.isVisible = true;
    } else {
        frmProductImages.cmbProductImages.isVisible = false;
        frmProductImages.imgProduct.src = pThumbnailImage;
    }
    frmProductImages.show();
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchProductDetails() 
--- Author   	: Soumya Karumuri
--- Date      	: 29/06/2015
--- Purpose  	: To fetch the product details	
--- Input     	: pProductId
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function fetchProductDetails(pProductId, pIsNewProduct) {
    kony.application.showLoadingScreen(sknLoading, kony.i18n.getLocalizedString("PLEASE_WAIT"), constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
    gAppData.productId = pProductId;
    gAppData.isNewProduct = pIsNewProduct;
    var lProductDetails_inputparam = {};
    lProductDetails_inputparam["serviceID"] = "FetchProductDetails";
    lProductDetails_inputparam["productId"] = gAppData.productId;
    lProductDetails_inputparam["key"] = gAppData.apiKey;
    lProductDetails_inputparam["httpheaders"] = {};
    lProductDetails_inputparam["httpconfigs"] = {};
    var lProductDetails = appmiddlewaresecureinvokerasync(lProductDetails_inputparam, fetchProductDetails_callback);
}

function fetchProductDetails_callback(pStatus, pResultSet) {
    if (pStatus == 400) {
        kony.print("LOG : fetchProductDetails_callback - pResultSet:");
        kony.print(pResultSet);
        if (pResultSet != null && pResultSet["opstatus"] == 0) {
            if (pResultSet["products"] && pResultSet["products"].length) {
                var lProdPrice, lProdPriceSkin, lThumbnailImage, lRating, lDescription, lThumbnailImg;
                var lProductImagesData = [];
                if (pResultSet["products"][0]["thumbnailImage"]) {
                    lThumbnailImg = pResultSet["products"][0]["thumbnailImage"];
                } else {
                    lThumbnailImg = "iconprodthumbnail.png";
                }
                if ((pResultSet["products"][0]["largeFrontImage"] != "") && (pResultSet["products"][0]["largeFrontImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["largeFrontImage"], "Large Front"]);
                }
                if ((pResultSet["products"][0]["mediumImage"] != "") && (pResultSet["products"][0]["mediumImage"] != undefined)) {
                    lThumbnailImage = pResultSet["products"][0]["mediumImage"];
                    lProductImagesData.push([pResultSet["products"][0]["mediumImage"], "Medium"]);
                } else {
                    if (pResultSet["products"][0]["thumbnailImage"]) {
                        lThumbnailImage = pResultSet["products"][0]["thumbnailImage"];
                    } else {
                        lThumbnailImage = "iconprodthumbnail.png";
                    }
                }
                if ((pResultSet["products"][0]["largeImage"] != "") && (pResultSet["products"][0]["largeImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["largeImage"], "Large"]);
                }
                if ((pResultSet["products"][0]["alternateViewsImage"] != "") && (pResultSet["products"][0]["alternateViewsImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["alternateViewsImage"], "Alternate Views"]);
                }
                if ((pResultSet["products"][0]["angleImage"] != "") && (pResultSet["products"][0]["angleImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["angleImage"], "Angle"]);
                }
                if ((pResultSet["products"][0]["backViewImage"] != "") && (pResultSet["products"][0]["backViewImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["backViewImage"], "Back View"]);
                }
                if ((pResultSet["products"][0]["energyGuideImage"] != "") && (pResultSet["products"][0]["energyGuideImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["energyGuideImage"], "Energy Guide"]);
                }
                if ((pResultSet["products"][0]["leftViewImage"] != "") && (pResultSet["products"][0]["leftViewImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["leftViewImage"], "Left View"]);
                }
                if ((pResultSet["products"][0]["accessoriesImage"] != "") && (pResultSet["products"][0]["accessoriesImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["accessoriesImage"], "Accessories"]);
                }
                if ((pResultSet["products"][0]["remoteControlImage"] != "") && (pResultSet["products"][0]["remoteControlImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["remoteControlImage"], "Remote Control"]);
                }
                if ((pResultSet["products"][0]["rightViewImage"] != "") && (pResultSet["products"][0]["rightViewImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["rightViewImage"], "Right View"]);
                }
                if ((pResultSet["products"][0]["topViewImage"] != "") && (pResultSet["products"][0]["topViewImage"] != undefined)) {
                    lProductImagesData.push([pResultSet["products"][0]["topViewImage"], "Top View"]);
                }
                if (pResultSet["products"][0]["onSale"]) {
                    lProdPrice = "On Sale! " + "$" + pResultSet["products"][0]["salePrice"];
                    lProdPriceSkin = "sknLblRedFont";
                } else {
                    lProdPrice = "$" + pResultSet["products"][0]["regularPrice"];
                    lProdPriceSkin = "sknLblBlackFont";
                }
                if ((pResultSet["products"][0]["customerReviewAverage"] != "") && (pResultSet["products"][0]["customerReviewAverage"] != undefined)) {
                    lRating = pResultSet["products"][0]["customerReviewAverage"];
                } else {
                    lRating = "";
                }
                if ((pResultSet["products"][0]["longDescription"] != "") && (pResultSet["products"][0]["longDescription"] != undefined)) {
                    lDescription = pResultSet["products"][0]["longDescription"];
                } else if ((pResultSet["products"][0]["plot"] != "") && (pResultSet["products"][0]["plot"] != undefined)) {
                    lDescription = pResultSet["products"][0]["plot"];
                }
                frmProductDetail.imgThumbnail.src = lThumbnailImage;
                frmProductDetail.lblName.text = pResultSet["products"][0]["name"];
                frmProductDetail.lblPrice.text = lProdPrice;
                frmProductDetail.lblPrice.skin = lProdPriceSkin;
                frmProductDetail.lblRating.text = kony.i18n.getLocalizedString("AVG_USER_RATING:") + lRating;
                frmProductDetail.lblProdDescription.text = lDescription;
                if (lRating) {
                    lRating = kony.os.toNumber(lRating);
                    lRating = Math.round(lRating);
                } else {
                    lRating = 0;
                }
                for (var i = 1; i <= lRating; i++) {
                    frmProductDetail["imgRating" + i]["src"] = "iconratedstar.png";
                }
                gAppData.thumbnailImage = lThumbnailImg;
                gAppData.productImagesData = lProductImagesData;
                fetchProductReviews(gAppData.productId);
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
/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchProductReviews() 
--- Author   	: Soumya Karumuri
--- Date      	: 29/06/2015
--- Purpose  	: To fetch the product reviews	
--- Input     	: pProductId
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function fetchProductReviews(pProductId) {
    var lProductReviews_inputparam = {};
    lProductReviews_inputparam["serviceID"] = "FetchProductReviews";
    lProductReviews_inputparam["productId"] = pProductId;
    lProductReviews_inputparam["key"] = gAppData.apiKey;
    lProductReviews_inputparam["pageNo"] = "1";
    lProductReviews_inputparam["httpheaders"] = {};
    lProductReviews_inputparam["httpconfigs"] = {};
    var lProductReviews = appmiddlewaresecureinvokerasync(lProductReviews_inputparam, fetchProductReviews_callback);
}

function fetchProductReviews_callback(pStatus, pResultSet) {
    if (pStatus == 400) {
        kony.print("LOG : fetchProductReviews_callback - pResultSet:");
        kony.print(pResultSet);
        if (pResultSet != null && pResultSet["opstatus"] == 0) {
            if (pResultSet["reviews"] && pResultSet["reviews"].length) {
                var lReviewData = [];
                var lReviewObj = {};
                var lRating;
                frmProductDetail.lblTotalNoOfReviews.text = kony.i18n.getLocalizedString("TOTAL_NO_OF_REVIEWS:") + pResultSet["total"];
                for (var i = 0; i < pResultSet["reviews"].length; i++) {
                    lReviewObj = {
                        "lblTitle": pResultSet["reviews"][i]["title"],
                        "lblReviewerName": kony.i18n.getLocalizedString("SUBMITTED_BY:") + pResultSet["reviews"][i]["name"],
                        "imgStar1": {
                            src: "iconunratedstar.png"
                        },
                        "imgStar2": {
                            src: "iconunratedstar.png"
                        },
                        "imgStar3": {
                            src: "iconunratedstar.png"
                        },
                        "imgStar4": {
                            src: "iconunratedstar.png"
                        },
                        "imgStar5": {
                            src: "iconunratedstar.png"
                        },
                        "lblDesc": pResultSet["reviews"][i]["comment"]
                    }
                    if (pResultSet["reviews"][i]["rating"]) {
                        lRating = kony.os.toNumber(pResultSet["reviews"][i]["rating"]);
                        lRating = Math.round(lRating);
                    } else {
                        lRating = 0;
                    }
                    for (var j = 1; j <= lRating; j++) {
                        lReviewObj["imgStar" + j]["src"] = "iconratedstar.png";
                    }
                    lReviewData.push(lReviewObj);
                }
                frmProductDetail.segReviews.setData(lReviewData);
            } else {
                frmProductDetail.lblTotalNoOfReviews.text = kony.i18n.getLocalizedString("NO_REVIEWS");
            }
        } else {
            //kony.application.dismissLoadingScreen();
            if (pResultSet["errmsg"]) {
                alert(pResultSet["errmsg"]);
            } else {
                alert(kony.i18n.getLocalizedString("TECHNICAL_ISSUE"));
            }
        }
    }
    frmProductDetail.show();
    kony.application.dismissLoadingScreen();
}