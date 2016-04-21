//Form JS File
function frmProductsList_frmProductsList_onDeviceBack_seq0(eventobject, neworientation) {
    onClickBackBtn.call(this);
};

function frmProductsList_segProducts_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onRowClickSegProducts.call(this);
};

function frmProductsList_cmbPagination_onSelection_seq0(eventobject) {
    onSelectCmbPagination.call(this);
};

function addWidgetsfrmProductsList() {
    var lblResultsFor = new kony.ui.Label({
        "id": "lblResultsFor",
        "isVisible": true,
        "text": null,
        "skin": "sknLblBreadCrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var lblNewItem = new kony.ui.Label({
        "id": "lblNewItem",
        "isVisible": false,
        "text": kony.i18n.getLocalizedString("NEW_ITEM"),
        "skin": "sknLblNewItem"
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
    var segProductsbox = new kony.ui.Box({
        "id": "segProductsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 34
    }, {});
    var segProducts = new kony.ui.SegmentedUI2({
        "id": "segProducts",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hIsNewProduct": "hIsNewProduct",
            "lblAvgReview": "lblAvgReview",
            "lblProdName": "lblProdName",
            "imgProdThumbnail": "imgProdThumbnail",
            "hProductId": "hProductId",
            "vbxProduct": "vbxProduct",
            "hbxProduct": "hbxProduct",
            "imgSideArrow": "imgSideArrow",
            "lblProdPrice": "lblProdPrice"
        },
        "Location": "[1,56]",
        "rowTemplate": segProductsbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmProductsList_segProducts_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var imgProdThumbnail = new kony.ui.Image2({
        "id": "imgProdThumbnail",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {});
    var lblProdName = new kony.ui.Label({
        "id": "lblProdName",
        "isVisible": true,
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
        "containerWeight": 37
    }, {
        "textCopyable": false
    });
    var lblProdPrice = new kony.ui.Label({
        "id": "lblProdPrice",
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
        "containerWeight": 32
    }, {
        "textCopyable": false
    });
    var lblAvgReview = new kony.ui.Label({
        "id": "lblAvgReview",
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
        "containerWeight": 31
    }, {
        "textCopyable": false
    });
    var vbxProduct = new kony.ui.Box({
        "id": "vbxProduct",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 55,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxProduct.add(
    lblProdName, lblProdPrice, lblAvgReview);
    var imgSideArrow = new kony.ui.Image2({
        "id": "imgSideArrow",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var hbxProduct = new kony.ui.Box({
        "id": "hbxProduct",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxProduct.add(
    imgProdThumbnail, vbxProduct, imgSideArrow);
    segProductsbox.add(
    hbxProduct);
    var lblPagination = new kony.ui.Label({
        "id": "lblPagination",
        "isVisible": true,
        "text": null,
        "skin": "sknLblBreadCrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var cmbPagination = new kony.ui.ComboBox({
        "id": "cmbPagination",
        "isVisible": true,
        "skin": "sknCmbPagination",
        "focusSkin": "sknCmbPaginationFocus",
        "onSelection": frmProductsList_cmbPagination_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "popupTitle": null
    });
    var hbxPagination = new kony.ui.Box({
        "id": "hbxPagination",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxPagination.add(
    lblPagination, cmbPagination);
    frmProductsList.add(
    lblResultsFor, lblNewItem, segProducts, hbxPagination);
};

function frmProductsListGlobals() {
    var MenuId = [];
    frmProductsList = new kony.ui.Form2({
        "id": "frmProductsList",
        "needAppMenu": true,
        "title": null,
        "headers": [hbxHeader],
        "footers": [hbxMenu],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmWhiteBg",
        "addWidgets": addWidgetsfrmProductsList
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "onDeviceBack": frmProductsList_frmProductsList_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};