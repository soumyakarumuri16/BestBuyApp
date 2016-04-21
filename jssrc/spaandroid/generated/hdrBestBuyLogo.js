//Template File
function hdrBestBuyLogo_btnBack_onClick_seq0(eventobject) {
    onClickBackBtn.call(this);
};

function initializehdrBestBuyLogo() {
    hbxHeader = new kony.ui.Box({
        "id": "hbxHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbxHeader() {
        var btnBack = new kony.ui.Button({
            "id": "btnBack",
            "isVisible": true,
            "text": null,
            "skin": "sknBtnBack",
            "focusSkin": "sknBtnBack",
            "onClick": hdrBestBuyLogo_btnBack_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
            "vExpand": false,
            "hExpand": false,
            "margin": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "containerWeight": 20
        }, {});
        var imgBestBuyLogo = new kony.ui.Image2({
            "id": "imgBestBuyLogo",
            "isVisible": true,
            "src": "iconbestbuy.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 20, 0],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 80
        }, {});
        var hbxBestBuyLogo = new kony.ui.Box({
            "id": "hbxBestBuyLogo",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 98,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [1, 0, 0, 0],
            "padding": [0, 1, 0, 1],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbxBestBuyLogo.add(
        btnBack, imgBestBuyLogo);
        var linSeparatorOne = new kony.ui.Line({
            "id": "linSeparatorOne",
            "isVisible": true,
            "skin": "sknLinSeparator"
        }, {
            "thickness": 1,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "paddingInPixel": false
        }, {});
        var vbxHeader = new kony.ui.Box({
            "id": "vbxHeader",
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
        vbxHeader.add(
        hbxBestBuyLogo, linSeparatorOne);
        hbxHeader.add(
        vbxHeader);
    }
    addWidgetshbxHeader();
};