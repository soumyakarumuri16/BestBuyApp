/*-------------------------------------------------------------------------------------------------
--- Name      : productImages.js
--- Author    : Soumya Karumuri
--- Date      : 28/06/2015
--- Purpose   : This module has functions related to product images screen
-------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------
--- Name 	    : onSelectCmbProductImages() 
--- Author   	: Soumya Karumuri
--- Date      	: 28/06/2015
--- Purpose  	: This method is invoked when the onSelection event of the cmbPagination is 
				  triggered	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function onSelectCmbProductImages()
{
	var lSelectedKey = frmProductImages.cmbProductImages.selectedKeyValue[0];
	kony.print("LOG : onSelectCmbProductImages - lSelectedKey:"+lSelectedKey);
	frmProductImages.imgProduct.src = lSelectedKey;
}
