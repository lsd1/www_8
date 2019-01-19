var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 主页场景
 * @author chenkai
 * @since 2017/6/14
 */
var HomeScene = (function (_super) {
    __extends(HomeScene, _super);
    function HomeScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "HomeSceneSkin";
        return _this;
    }
    HomeScene.prototype.childrenCreated = function () {
        this.popupMenu.setListSkin("ListItemSkin");
        this.popupMenu.addItem("A");
        this.popupMenu.addItem("B");
        this.popupMenu.addItem("C");
        this.popupMenu.addEventListener(egret.TouchEvent.CHANGE, this.onChange, this);
    };
    HomeScene.prototype.onChange = function (e) {
        var selectedIndex = e.data.selectedIndex;
        var itemValue = e.data.itemValue;
        this.msgLabel.text = "选中第" + selectedIndex + "项, 值:" + itemValue;
    };
    return HomeScene;
}(eui.Component));
__reflect(HomeScene.prototype, "HomeScene");
//# sourceMappingURL=HomeScene.js.map