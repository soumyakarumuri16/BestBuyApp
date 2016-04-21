/*-------------------------------------------------------------------------------------------------
--- Name      : utilities.js
--- Author    : Soumya Karumuri
--- Date      : 28/06/2015
--- Purpose   : This module has functions that are used for a common purpose in the app
-------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------
--- Name 	    : onPreappinit() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: This method is invoked on the pre-appinit event of the app	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function onPreappinit()
{
	kony.print("LOG : onPreappinit - START");
	gAppData = new initAppData(); 
}

/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickBackBtn() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: This method is invoked when the onRowClick event of the segCategories is triggered	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function onClickBackBtn()
{
	var lCurrentForm = kony.application.getCurrentForm();
	var lBreadcrumbData = gAppData.breadcrumbsArr;
	var lData = gAppData.prodSubCategoriesData;
	
	if(lCurrentForm == frmHome)
	{
		if(lData.length > 1)
		{
			var lBreadcrumbText = "";
		
			lBreadcrumbData.pop();
			lData.pop();
			
			for(var i=0; i < lBreadcrumbData.length;i++)
			{
				if(lBreadcrumbText != "")
				{
					lBreadcrumbText = lBreadcrumbText+"->"+lBreadcrumbData[i]; 
				}
				else
				{
					lBreadcrumbText = lBreadcrumbData[i];
				}
			}
			frmHome.lblBreadCrumb.text = lBreadcrumbText;
			
			frmHome.segCategories.removeAll();
			frmHome.segCategories.setData(lData[lData.length-1]);
			
			if(lData.length == 1)
			{
				hbxHeader.btnBack.isVisible = false;
			}
			
			gAppData.prodSubCategoriesData = lData;
			gAppData.breadcrumbsArr = lBreadcrumbData;
		}
		else
		{
			kony.application.exit();
		}
	}
	else if(lCurrentForm == frmProductsList)
	{
		frmHome.tbxSearch.text = "";
		frmHome.lstSearchFilter.selectedKey = frmHome.lstSearchFilter.masterData[0][0];
		gAppData.isSearchInitiated = false;
		frmHome.show();
		frmProductsList.segProducts.removeAll();
		frmProductsList.cmbPagination.masterData = null;
	}
	else if(lCurrentForm == frmProductDetail)
	{
		frmProductsList.show();
		frmProductDetail.segReviews.removeAll();
	}
	else if(lCurrentForm == frmProductImages)
	{
		frmProductDetail.show();
	}
}

/*-------------------------------------------------------------------------------------------------
--- Name 	    : setIdleTimeout() 
--- Author   	: Soumya Karumuri
--- Date      	: 03/07/2015
--- Purpose  	: This method is invoked when the user remains inactive for more than two minutes on 
				  product details screen	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function setIdleTimeout()
{
	kony.application.registerForIdleTimeout(2,idleTimeout_callback);
}
 
function idleTimeout_callback()
{
	var lNewData = [];
	var lNewBreadcrumbData = [];
	var lData = gAppData.prodSubCategoriesData;
	var lBreadcrumbData = gAppData.breadcrumbsArr;
	hbxHeader.btnBack.isVisible = false;
	frmHome.tbxSearch.text = "";
	frmHome.lstSearchFilter.selectedKey = frmHome.lstSearchFilter.masterData[0][0];
	gAppData.isSearchInitiated = false;
	if(lData && lData.length)
	{
		frmHome.lblBreadCrumb.text = lBreadcrumbData[0];
		frmHome.segCategories.removeAll();
		frmHome.segCategories.setData(lData[0]);
		lNewData.push(lData[0]);
		lNewBreadcrumbData.push(lBreadcrumbData[0]);
		gAppData.prodSubCategoriesData = lNewData;
		gAppData.breadcrumbsArr = lNewBreadcrumbData;
	}
	frmHome.show();
}

/*-------------------------------------------------------------------------------------------------
--- Name 	    : removeFirstCharFromString() 
--- Author   	: Soumya Karumuri
--- Date      	: 03/07/2015
--- Purpose  	: This method is used to remove the first character from a string and return it	
--- Input     	: pString
--- Return   	: string
--------------------------------------------------------------------------------------------------*/

function removeFirstCharFromString(pString)
{
	if(pString)
	{
		pString = pString.substr(1,pString.length-1);
		return pString;
	}
	return "";
}
