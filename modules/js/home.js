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

function onPostShowFrmHome()
{
	var lPrevForm = kony.application.getPreviousForm();
	var lData = gAppData.prodSubCategoriesData;
	
	if(lPrevForm == null)
	{
		hbxHeader.btnBack.isVisible = false;
		fetchProductSubCategories("cat00000","Home");
	}
	else if(lPrevForm == frmProductsList)
	{
		kony.print("LOG : onPostShowFrmHome - lData.length:"+lData.length);
		if(lData.length > 1)
		{
			hbxHeader.btnBack.isVisible = true;
		}
		else
		{
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

function onRowClickSegCategories()
{
	kony.print("LOG : onRowClickSegCategories - START");
	kony.print(frmHome.segCategories.selectedItems[0]);
	fetchProductSubCategories(frmHome.segCategories.selectedItems[0]["hCategoryId"],frmHome.segCategories.selectedItems[0]["lblCategory"]);
}

/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchProductSubCategories() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: To fetch the product subcategories details	
--- Input     	: pCategoryId,pCategoryName
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function fetchProductSubCategories(pCategoryId,pCategoryName)
{
	kony.application.showLoadingScreen(sknLoading,kony.i18n.getLocalizedString("PLEASE_WAIT"),constants.LOADING_SCREEN_POSITION_FULL_SCREEN,true,false,null);
	gAppData.categoryId = pCategoryId;
	gAppData.categoryName = pCategoryName;
	var lProdSubCategories_inputparam = {};
	lProdSubCategories_inputparam["serviceID"] = "FetchSubCategories";
	lProdSubCategories_inputparam["key"] = gAppData.apiKey;
	lProdSubCategories_inputparam["categoryId"] = gAppData.categoryId;
	lProdSubCategories_inputparam["httpheaders"] = {};
	lProdSubCategories_inputparam["httpconfigs"] = {};
	var lProdSubCategories = appmiddlewaresecureinvokerasync(lProdSubCategories_inputparam,fetchProductSubCategories_callback);
}

function fetchProductSubCategories_callback(pStatus,pResultSet)
{
	if(pStatus == 400)
	{
		kony.print("LOG : fetchProductSubCategories_callback - pResultSet:");
		kony.print(pResultSet);
		if(pResultSet != null && pResultSet["opstatus"] == 0)
		{
			if(pResultSet["subCategories"].length > 3)
			{
				var lProdSubCategoriesData = [];
				var lData = gAppData.prodSubCategoriesData;
				var lBreadcrumbData = gAppData.breadcrumbsArr;
				
				if(gAppData.categoryName != "Home")
				{
					frmHome.lblBreadCrumb.text = frmHome.lblBreadCrumb.text+"->"+gAppData.categoryName;
					hbxHeader.btnBack.isVisible = true;
				}
				
				for(var i=0;i < pResultSet["subCategories"].length;i++)
				{
					lProdSubCategoriesData.push({
					"lblCategory":pResultSet["subCategories"][i]["name"],
					"hCategoryId":pResultSet["subCategories"][i]["id"],
					"imgCategory":{src:"iconsidearrow.png"}
					});
				}
				
				lBreadcrumbData.push(gAppData.categoryName);
				lData.push(lProdSubCategoriesData);
				frmHome.segCategories.removeAll();
				frmHome.segCategories.setData(lData[lData.length-1]);
				gAppData.breadcrumbsArr = lBreadcrumbData; 
				gAppData.prodSubCategoriesData = lData;
				kony.application.dismissLoadingScreen();
			}
			else
			{
				kony.application.dismissLoadingScreen();
				fetchProductsList("1",gAppData.categoryId);
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

