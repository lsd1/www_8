//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends eui.Component implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.skinName = '<?xml version="1.0" encoding="utf-8"?><e:Skin class="NewFile" width="750" height="1334" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing"><e:Image source="bg_d_png" left="0" right="0" top="0" bottom="0" width="0" height="0"/><e:Group anchorOffsetX="0" anchorOffsetY="0" horizontalCenter="0" verticalCenter="-72"><e:Image source="wutong_json.tree_10_d" scaleX="1" scaleY="1" horizontalCenter="0" verticalCenter="0"/><e:Image source="wutong_json.fruit_m_10_d" scaleX="1" scaleY="1" horizontalCenter="-16" verticalCenter="-133"/></e:Group><e:Group left="0" right="0" anchorOffsetY="0" bottom="147" top="996"><e:Rect right="0" left="0" top="0" bottom="0" fillColor="0x000000" fillAlpha="0.4"/><e:Image source="wutong_json.undercolor" horizontalCenter="0" verticalCenter="0"/><e:Group width="708" height="51" horizontalCenter="0" verticalCenter="0"><e:Image id="prog_bar" source="wutong_json.load_bar" width="0" scaleX="1" scaleY="1" verticalCenter="0.5" left="118" anchorOffsetX="0"/></e:Group><e:Label text="Loading..." anchorOffsetX="0" width="162" anchorOffsetY="0" height="42" fontFamily="HXBNRBJ" size="34" italic="true" verticalCenter="0.5" horizontalCenter="-33"/><e:Label id="percent" text="Label" fontFamily="HXBNRBJ" size="34" height="42" verticalAlign="middle" textAlign="center" anchorOffsetX="0" width="120" horizontalCenter="84" verticalCenter="0.5" italic="true"/></e:Group></e:Skin>';
        
    }

    //进度条
    private prog_bar:eui.Image;
    //百分数
    private percent:eui.Label;

    public createView() {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
    }

    public onProgress(current: number, total: number): void {
        let per = Math.floor(current/total * 100 );
        this.percent.text = per.toString()+"%";
        this.prog_bar.width = current / total * 472;
    }
}
