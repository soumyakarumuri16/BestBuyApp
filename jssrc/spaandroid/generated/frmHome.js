//Form JS File
function frmHome_frmHome_postshow_seq0(eventobject, neworientation) {
    onPostShowFrmHome.call(this);
};

function frmHome_frmHome_onDeviceBack_seq0(eventobject, neworientation) {
    onClickBackBtn.call(this);
};

function frmHome_btnSearch_onClick_seq0(eventobject) {
    onClickSearchBtn.call(this);
};

function frmHome_segCategories_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onRowClickSegCategories.call(this);
};

function addWidgetsfrmHome() {
    var tbxSearch = new kony.ui.TextBox2({
        "id": "tbxSearch",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": kony.i18n.getLocalizedString("SEARCH_BY_KEYWORDS"),
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
        "onClick": frmHome_btnSearch_onClick_seq0,
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
        "margin": [2, 0, 2, 0],
        "padding": [0, 1, 0, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxSearch.add(
    tbxSearch, btnSearch);
    var lblFilterBy = new kony.ui.Label({
        "id": "lblFilterBy",
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("FILTER_BY:"),
        "skin": "sknLblBlackFont",
        "i18n_text": "kony.i18n.getLocalizedString('FILTER_BY:')"
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
    var lstSearchFilter = new kony.ui.ListBox({
        "id": "lstSearchFilter",
        "isVisible": true,
        "masterData": [
            ["0", "<Select a value>"],
            ["1", "1 star or better"],
            ["2", "2 stars or better"],
            ["3", "3 stars or better"],
            ["4", "4 stars or better"]
        ],
        "selectedKey": "0",
        "skin": "sknLstBlackBorderWhiteBg",
        "focusSkin": "sknLstBlackBorderWhiteBg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 5
    }, {});
    var linSeparatorTwo = new kony.ui.Line({
        "id": "linSeparatorTwo",
        "isVisible": true,
        "skin": "sknLinSeparator"
    }, {
        "thickness": 2,
        "margin": [0, 1, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblBreadCrumb = new kony.ui.Label({
        "id": "lblBreadCrumb",
        "isVisible": true,
        "text": "Home",
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
    var linSeparatorThree = new kony.ui.Line({
        "id": "linSeparatorThree",
        "isVisible": true,
        "skin": "sknLinSeparatorLight"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segCategoriesbox = new kony.ui.Box({
        "id": "segCategoriesbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 34
    }, {});
    var segCategories = new kony.ui.SegmentedUI2({
        "id": "segCategories",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hCategoryId": "hCategoryId",
            "lblCategory": "lblCategory",
            "hbxCategory": "hbxCategory",
            "imgCategory": "imgCategory"
        },
        "Location": "[1,128]",
        "rowTemplate": segCategoriesbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "80808000",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmHome_segCategories_onRowClick_seq0,
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
    var lblCategory = new kony.ui.Label({
        "id": "lblCategory",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {
        "textCopyable": false
    });
    var imgCategory = new kony.ui.Image2({
        "id": "imgCategory",
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
    var hbxCategory = new kony.ui.Box({
        "id": "hbxCategory",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 24,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxCategory.add(
    lblCategory, imgCategory);
    segCategoriesbox.add(
    hbxCategory);
    frmHome.add(
    hbxSearch, lblFilterBy, lstSearchFilter, linSeparatorTwo, lblBreadCrumb, linSeparatorThree, segCategories);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "needAppMenu": true,
        "title": null,
        "headers": [hbxHeader],
        "footers": [hbxMenu],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmWhiteBg",
        "postShow": frmHome_frmHome_postshow_seq0,
        "addWidgets": addWidgetsfrmHome
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
        },
        "onDeviceBack": frmHome_frmHome_onDeviceBack_seq0
    });
};