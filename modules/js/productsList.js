/*-------------------------------------------------------------------------------------------------
--- Name      : productsList.js
--- Author    : Soumya Karumuri
--- Date      : 28/06/2015
--- Purpose   : This module has functions related to products screen
-------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------
--- Name 	    : onRowClickSegProducts() 
--- Author   	: Soumya Karumuri
--- Date      	: 29/06/2015
--- Purpose  	: This method is invoked when the onRowClick event of the segProducts is triggered	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function onRowClickSegProducts()
{
	kony.print("LOG : onRowClickSegProducts - START");
	kony.print(frmProductsList.segProducts.selectedItems[0]);
	fetchProductDetails(frmProductsList.segProducts.selectedItems[0]["hProductId"],frmProductsList.segProducts.selectedItems[0]["hIsNewProduct"]);
}

/*-------------------------------------------------------------------------------------------------
--- Name 	    : onSelectCmbPagination() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: This method is invoked when the onSelection event of the cmbPagination is 
				  triggered	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function onSelectCmbPagination()
{
	var lSelectedValue = frmProductsList.cmbPagination.selectedKeyValue[1];
	lSelectedValue = kony.os.toNumber(lSelectedValue);
	lSelectedValue = Math.floor(lSelectedValue);
	lSelectedValue = lSelectedValue.toString();
	kony.print("LOG : onSelectCmbPagination - lSelectedValue:"+lSelectedValue);
	if(gAppData.isSearchInitiated)
	{
		fetchSearchProductsList(lSelectedValue);
	}
	else
	{
		fetchProductsList(lSelectedValue,gAppData.categoryId);
	}
}

/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchProductsList() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: To fetch the products list specific to a category	
--- Input     	: pPageNo,pSubCategoryId
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function fetchProductsList(pPageNo,pSubCategoryId)
{
	kony.application.showLoadingScreen(sknLoading,kony.i18n.getLocalizedString("PLEASE_WAIT"),constants.LOADING_SCREEN_POSITION_FULL_SCREEN,true,false,null);
	var lProducts_inputparam = {};
	lProducts_inputparam["serviceID"] = "FetchProductsList";
	lProducts_inputparam["key"] = gAppData.apiKey;
	lProducts_inputparam["pageNo"] = pPageNo;
	lProducts_inputparam["subCategoryId"] = pSubCategoryId;
	lProducts_inputparam["httpheaders"] = {};
	lProducts_inputparam["httpconfigs"] = {};
	var lProducts = appmiddlewaresecureinvokerasync(lProducts_inputparam,fetchProductsList_callback);
}

function fetchProductsList_callback(pStatus,pResultSet)
{
	if(pStatus == 400)
	{
		kony.print("LOG : fetchProductsList_callback - pResultSet:");
		kony.print(pResultSet);
		if(pResultSet != null && pResultSet["opstatus"] == 0)
		{
			if(pResultSet["products"] && pResultSet["products"].length)
			{
				var lPageData = [];
				var lProdData = [];
				var lThumbnailImage,lProdPrice,lProdPriceSkin;
				
				hbxHeader.btnBack.isVisible = true;
				frmProductsList.lblResultsFor.text = "Results for: "+gAppData.categoryName;
				
				if(kony.os.toNumber(pResultSet["totalPages"]) > 1)
				{
					frmProductsList.hbxPagination.isVisible = true;
					kony.print("LOG : fetchProductsList_callback - frmProductsList.cmbPagination.masterData:"+frmProductsList.cmbPagination.masterData);
					if(frmProductsList.cmbPagination.masterData == null)
					{
						for(var i=1;i <= kony.os.toNumber(pResultSet["totalPages"]);i++)
						{
							lPageData.push(["key"+i,i]);
						}
						frmProductsList.cmbPagination.masterData = lPageData;
						frmProductsList.cmbPagination.selectedKey = frmProductsList.cmbPagination.masterData[0][0];
					}	
					frmProductsList.lblPagination.text = "Page "+pResultSet["currentPage"]+" of "+pResultSet["totalPages"];
				}
				else
				{
					frmProductsList.hbxPagination.isVisible = false;
				}
				
				for(var j=0;j < pResultSet["products"].length;j++)
				{
					if(pResultSet["products"][j]["thumbnailImage"])
					{
						lThumbnailImage = pResultSet["products"][j]["thumbnailImage"];
					}
					else
					{
						lThumbnailImage = "iconprodthumbnail.png";
					}
					
					if(pResultSet["products"][j]["onSale"])
					{
						lProdPrice = pResultSet["products"][j]["salePrice"];
						lProdPriceSkin = "sknLblRedFont";
					}
					else
					{
						lProdPrice = pResultSet["products"][j]["regularPrice"];
						lProdPriceSkin = "sknLblBlackFont";
					}
					
					lProdData.push({
					"lblNewItem":{text:kony.i18n.getLocalizedString("NEW_ITEM"),isVisible:pResultSet["products"][j]["new"]},
					"imgProdThumbnail":{src:lThumbnailImage},
					"lblProdName":pResultSet["products"][j]["name"],
					"hProductId":pResultSet["products"][j]["productId"],
					"hIsNewProduct":pResultSet["products"][j]["new"],
					"lblProdPrice":{text:"$"+lProdPrice.toString(),skin:lProdPriceSkin},
					"lblAvgReview":kony.i18n.getLocalizedString("AVG_USER_RATING:")+pResultSet["products"][j]["customerReviewAverage"],
					"imgSideArrow":{src:"iconsidearrow.png"}
					});
				} 
				frmProductsList.segProducts.setData(lProdData);
				frmProductsList.show();
				kony.application.dismissLoadingScreen();
			}
			else
			{
				kony.application.dismissLoadingScreen();
				if(gAppData.prodSubCategoriesData.length > 1)
				{
					alert("Products are not available for this subcategory");
				}
				else
				{
					alert("Products are not available for this category");
				}
			}
		}
		else
		{
			kony.application.dismissLoadingScreen();
			if(pResultSet["errmsg"])
			{
				alert(pResultSet["errmsg"]);
			}
			else
			{
				alert(kony.i18n.getLocalizedString("TECHNICAL_ISSUE"));
			}
		}
	}
}
