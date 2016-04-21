//Template File
function initializemapPinInfo() {
    var imgStoreIcon = new kony.ui.Image2({
        "id": "imgStoreIcon",
        "isVisible": true,
        "src": "iconstore.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {});
    var lblStoreName = new kony.ui.Label({
        "id": "lblStoreName",
        "isVisible": true,
        "text": null,
        "skin": "sknLblStoreName"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80
    }, {
        "textCopyable": false
    });
    var hbox197350608467318 = new kony.ui.Box({
        "id": "hbox197350608467318",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 34,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox197350608467318.add(
    imgStoreIcon, lblStoreName);
    var lblAddress = new kony.ui.Label({
        "id": "lblAddress",
        "isVisible": true,
        "text": "Address:",
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
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    var lblStoreAddress = new kony.ui.Label({
        "id": "lblStoreAddress",
        "isVisible": true,
        "text": null,
        "skin": "sknLblBreadCrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [3, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    var lblHours = new kony.ui.Label({
        "id": "lblHours",
        "isVisible": true,
        "text": "Hours:",
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
        "containerWeight": 14
    }, {
        "textCopyable": false
    });
    var lblStoreHours = new kony.ui.Label({
        "id": "lblStoreHours",
        "isVisible": true,
        "text": null,
        "skin": "sknLblBreadCrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [3, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {
        "textCopyable": false
    });
    var vbxStoreInfo = new kony.ui.Box({
        "id": "vbxStoreInfo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxStoreInfo.add(
    hbox197350608467318, lblAddress, lblStoreAddress, lblHours, lblStoreHours);
    hbxStoreInfo = new kony.ui.Box({
        "id": "hbxStoreInfo",
        "isVisible": true,
        "skin": "sknCommonBlueBorder",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxStoreInfo.add(
    vbxStoreInfo);
};