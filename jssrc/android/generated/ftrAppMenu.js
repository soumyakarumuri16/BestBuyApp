//Template File
function ftrAppMenu_btnHome_onClick_seq0(eventobject) {
    onClickAppMenuHome.call(this);
};

function ftrAppMenu_btnStores_onClick_seq0(eventobject) {
    onClickAppMenuStores.call(this);
};

function ftrAppMenu_btnShoppingCart_onClick_seq0(eventobject) {
    onClickAppMenuShoppingCart.call(this);
};

function initializeftrAppMenu() {
    hbxMenu = new kony.ui.BoxTemplate({
        "id": "hbxMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxMenu
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbxMenu() {
        var btnHome = new kony.ui.Button({
            "id": "btnHome",
            "isVisible": true,
            "text": null,
            "skin": "sknFtrBtnHome",
            "focusSkin": "sknFtrBtnHomeFocus",
            "onClick": ftrAppMenu_btnHome_onClick_seq0
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
            "containerWeight": 33
        }, {});
        var btnStores = new kony.ui.Button({
            "id": "btnStores",
            "isVisible": true,
            "text": null,
            "skin": "sknFtrBtnStores",
            "focusSkin": "sknFtrBtnStoresFocus",
            "onClick": ftrAppMenu_btnStores_onClick_seq0
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
            "containerWeight": 34
        }, {});
        var btnShoppingCart = new kony.ui.Button({
            "id": "btnShoppingCart",
            "isVisible": true,
            "text": null,
            "skin": "sknFtrBtnCart",
            "focusSkin": "sknFtrBtnCartFocus",
            "onClick": ftrAppMenu_btnShoppingCart_onClick_seq0
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
            "containerWeight": 33
        }, {});
        hbxMenu.add(
        btnHome, btnStores, btnShoppingCart);
    }
};