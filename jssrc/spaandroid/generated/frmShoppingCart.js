//Form JS File
function frmShoppingCart_btnDelete_onClick_seq0(eventobject, context) {
    onClickDeleteProduct.call(this, frmShoppingCart.segShoppingCart.selectedIndex[1]);
};

function addWidgetsfrmShoppingCart() {
    var lblCartEmpty = new kony.ui.Label({
        "id": "lblCartEmpty",
        "isVisible": false,
        "text": "Shopping cart is empty. Please browse products and add them to your cart",
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var segShoppingCartbox = new kony.ui.Box({
        "id": "segShoppingCartbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 34
    }, {});
    var segShoppingCart = new kony.ui.SegmentedUI2({
        "id": "segShoppingCart",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hIsNewProduct": "hIsNewProduct",
            "btnDelete": "btnDelete",
            "lblName": "lblName",
            "lblPrice": "lblPrice"
        },
        "Location": "[1,28]",
        "rowTemplate": segShoppingCartbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "layoutType": null
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var lblPrice = new kony.ui.Label({
        "id": "lblPrice",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "textCopyable": false
    });
    var btnDelete = new kony.ui.Button({
        "id": "btnDelete",
        "isVisible": true,
        "skin": "sknBtnDeleteProduct",
        "focusSkin": "sknBtnDeleteProduct",
        "onClick": frmShoppingCart_btnDelete_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {});
    segShoppingCartbox.add(
    lblName, lblPrice, btnDelete);
    var lblTotal = new kony.ui.Label({
        "id": "lblTotal",
        "isVisible": true,
        "text": null,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var lblTotalAmount = new kony.ui.Label({
        "id": "lblTotalAmount",
        "isVisible": true,
        "text": null,
        "skin": "sknLblBreadCrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "textCopyable": false
    });
    var hbxTotal = new kony.ui.Box({
        "id": "hbxTotal",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxTotal.add(
    lblTotal, lblTotalAmount);
    var lblNewProdMsg = new kony.ui.Label({
        "id": "lblNewProdMsg",
        "isVisible": false,
        "text": "You have items that are new. Shipping may be delayed",
        "skin": "sknLblNewItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmShoppingCart.add(
    lblCartEmpty, segShoppingCart, hbxTotal, lblNewProdMsg);
};

function frmShoppingCartGlobals() {
    var MenuId = [];
    frmShoppingCart = new kony.ui.Form2({
        "id": "frmShoppingCart",
        "needAppMenu": true,
        "title": null,
        "headers": [hbxHeader],
        "footers": [hbxMenu],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmWhiteBg",
        "addWidgets": addWidgetsfrmShoppingCart
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};