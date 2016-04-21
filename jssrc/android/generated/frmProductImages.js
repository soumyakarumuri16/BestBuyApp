//Form JS File
function frmProductImages_frmProductImages_onDeviceBack_seq0(eventobject, neworientation) {
    onClickBackBtn.call(this);
};

function frmProductImages_cmbProductImages_onSelection_seq0(eventobject) {
    onSelectCmbProductImages.call(this);
};

function addWidgetsfrmProductImages() {
    var imgProduct = new kony.ui.Image2({
        "id": "imgProduct",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 2, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var cmbProductImages = new kony.ui.ComboBox({
        "id": "cmbProductImages",
        "isVisible": true,
        "skin": "sknCmbPagination",
        "focusSkin": "sknCmbPaginationFocus",
        "onSelection": frmProductImages_cmbProductImages_onSelection_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "popupTitle": null
    });
    frmProductImages.add(
    imgProduct, cmbProductImages);
};

function frmProductImagesGlobals() {
    var MenuId = [];
    frmProductImages = new kony.ui.Form2({
        "id": "frmProductImages",
        "needAppMenu": true,
        "title": null,
        "headers": [hbxHeader],
        "footers": [hbxMenu],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmWhiteBg",
        "addWidgets": addWidgetsfrmProductImages
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
        "onDeviceBack": frmProductImages_frmProductImages_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};