//Form JS File
function frmStores_btnSearch_onClick_seq0(eventobject) {
    onClickSearchStores.call(this);
};

function addWidgetsfrmStores() {
    var tbxSearch = new kony.ui.TextBox2({
        "id": "tbxSearch",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter state code...",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbxBlackBorderWhiteBg",
        "focusSkin": "sknTbxBlackBorderWhiteBg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var btnSearch = new kony.ui.Button({
        "id": "btnSearch",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("SEARCH!!"),
        "skin": "sknBtnSearch",
        "focusSkin": "sknBtnSearch",
        "onClick": frmStores_btnSearch_onClick_seq0,
        "i18n_text": "kony.i18n.getLocalizedString('SEARCH!!')"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var hbxSearch = new kony.ui.Box({
        "id": "hbxSearch",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 1, 2, 1],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxSearch.add(
    tbxSearch, btnSearch);
    var mapStores = new kony.ui.Map({
        "id": "mapStores",
        "isVisible": true,
        "calloutTemplate": hbxStoreInfo,
        "widgetDataMapForCallout": {
            "lblStoreHours": "lblStoreHours",
            "lblStoreName": "lblStoreName",
            "lblAddress": "lblAddress",
            "lblHours": "lblHours",
            "imgStoreIcon": "imgStoreIcon",
            "lblStoreAddress": "lblStoreAddress"
        },
        "mapKey": "AIzaSyCoaGTuLwBwUKP6y7w-yy0ApFkVUUmvCKA",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": false,
        "calloutWidth": 80
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "mapSource": constants.MAP_SOURCE_NON_NATIVE
    });
    frmStores.add(
    hbxSearch, mapStores);
};

function frmStoresGlobals() {
    var MenuId = [];
    frmStores = new kony.ui.Form2({
        "id": "frmStores",
        "needAppMenu": true,
        "title": null,
        "headers": [hbxHeader],
        "footers": [hbxMenu],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmWhiteBg",
        "addWidgets": addWidgetsfrmStores
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