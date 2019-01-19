class AuctionBanner extends eui.ItemRenderer{
    private img_banner:eui.Image;
    private auction_content:eui.Label;
    public constructor(){
        super();
        this.skinName = "resource/garden_skin/auction/AuctionBanner.exml";
        this.data = Main.Shared().lang_config;
        this.img_banner.source = Creation.Shared().ads.image;
        this.auction_content.text = Creation.Shared().ads.desc;
    }

}