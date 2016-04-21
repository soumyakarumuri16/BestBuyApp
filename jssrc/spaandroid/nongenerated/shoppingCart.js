/*-------------------------------------------------------------------------------------------------
--- Name      : shoppingCart.js
--- Author    : Soumya Karumuri
--- Date      : 03/07/2015
--- Purpose   : This module has functions related to the implementation of shopping cart 
				functionality 
-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickAddToCart() 
--- Author   	: Soumya Karumuri
--- Date      	: 03/07/2015
--- Purpose  	: This method is invoked when the Add to Shopping cart button on product details 
				  screen is clicked	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onClickAddToCart() {
    var lData = gAppData.shoppingCartData;
    var lPrice = removeFirstCharFromString(frmProductDetail.lblPrice.text);
    var lProdObj = {
        "name": frmProductDetail.lblName.text,
        "price": lPrice,
        "priceSkin": frmProductDetail.lblPrice.skin,
        "new": gAppData.isNewProduct
    };
    lData.push(lProdObj);
    gAppData.shoppingCartData = lData;
    alert("Product has been successfully added to your cart");
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : populateShoppingCart() 
--- Author   	: Soumya Karumuri
--- Date      	: 03/07/2015
--- Purpose  	: This method populates products data into shopping cart	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function populateShoppingCart() {
    var lData = gAppData.shoppingCartData;
    kony.print("LOG : onPreShowFrmShoppingCart - lData:");
    kony.print(lData);
    if (lData.length > 0) {
        var lCartData = [];
        var lProdObj = {};
        var lTotalPrice = 0;
        var lFlag = false;
        for (var i = 0; i < lData.length; i++) {
            lProdObj = {
                "lblName": lData[i]["name"],
                "lblPrice": {
                    text: "$" + lData[i]["price"],
                    skin: lData[i]["priceSkin"]
                },
                "btnDelete": ".",
                "hIsNewProduct": lData[i]["new"]
            };
            lCartData.push(lProdObj);
            if (i > 0) {
                lTotalPrice = lTotalPrice + kony.os.toNumber(lData[i]["price"]);
            } else {
                lTotalPrice = kony.os.toNumber(lData[i]["price"]);
            }
            if (lData[i]["new"]) {
                lFlag = true;
            }
        }
        lTotalPrice = lTotalPrice.toFixed(2);
        kony.print("LOG : onPreShowFrmShoppingCart - lTotalPrice:" + lTotalPrice);
        frmShoppingCart.segShoppingCart.setData(lCartData);
        frmShoppingCart.lblCartEmpty.isVisible = false;
        frmShoppingCart.hbxTotal.isVisible = true;
        frmShoppingCart.lblTotal.text = "Total: ";
        frmShoppingCart.lblTotalAmount.text = "$" + lTotalPrice.toString();
        if (lFlag) {
            frmShoppingCart.lblNewProdMsg.isVisible = true;
        } else {
            frmShoppingCart.lblNewProdMsg.isVisible = false;
        }
    } else {
        frmShoppingCart.lblCartEmpty.isVisible = true;
    }
}
/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickDeleteProduct() 
--- Author   	: Soumya Karumuri
--- Date      	: 03/07/2015
--- Purpose  	: This method deletes a product from the cart	
--- Input     	: pRowNo
--- Return   	: none
--------------------------------------------------------------------------------------------------*/
function onClickDeleteProduct(pRowNo) {
    var lNewData = [];
    kony.print("LOG : onClickDeleteProduct - pRowNo:" + pRowNo);
    frmShoppingCart.segShoppingCart.removeAt(pRowNo);
    if (frmShoppingCart.segShoppingCart.data && frmShoppingCart.segShoppingCart.data.length) {
        var lProdObj = {};
        var lData = frmShoppingCart.segShoppingCart.data;
        var lTotalPrice = 0;
        var lFlag = false;
        var lPrice = "";
        for (var i = 0; i < lData.length; i++) {
            lPrice = removeFirstCharFromString(lData[i]["lblPrice"]["text"]);
            lProdObj = {
                "name": lData[i]["lblName"],
                "price": lPrice,
                "priceSkin": lData[i]["lblPrice"]["skin"],
                "new": lData[i]["hIsNewProduct"]
            };
            lNewData.push(lProdObj);
            if (i > 0) {
                lTotalPrice = lTotalPrice + kony.os.toNumber(lPrice);
            } else {
                lTotalPrice = kony.os.toNumber(lPrice);
            }
            if (lData[i]["hIsNewProduct"]) {
                lFlag = true;
            }
        }
        lTotalPrice = lTotalPrice.toFixed(2);
        frmShoppingCart.lblCartEmpty.isVisible = false;
        frmShoppingCart.hbxTotal.isVisible = true;
        frmShoppingCart.lblTotal.text = "Total: ";
        frmShoppingCart.lblTotalAmount.text = "$" + lTotalPrice.toString();
        if (lFlag) {
            frmShoppingCart.lblNewProdMsg.isVisible = true;
        } else {
            frmShoppingCart.lblNewProdMsg.isVisible = false;
        }
    } else {
        frmShoppingCart.lblCartEmpty.isVisible = true;
        frmShoppingCart.hbxTotal.isVisible = false;
        frmShoppingCart.lblTotalAmount.text = "";
    }
    kony.print("LOG : onClickDeleteProduct - lNewData:");
    kony.print(lNewData);
    gAppData.shoppingCartData = lNewData;
}