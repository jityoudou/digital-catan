import { Injectable } from '@angular/core';
import * as p5 from 'p5';

import { GraphicBook, Graphic, GRAPHIC_DATA } from '../../model/graphics'

@Injectable({
  providedIn: 'root'
})
export class GraphicService extends GraphicBook{
  private p5ref:any;

  constructor() {
    super();
    //this.graphics = new Graphics();
  }

  public setP5Instance(p:p5){
    this.p5ref = p;
  }

  public loadGraphics(){
    console.log("graphc load ")
    this.ROAD_KOMA = this.loadGraphic( GRAPHIC_DATA.ROAD_KOMA );
    this.TEST_TREASURE = this.loadGraphic( GRAPHIC_DATA.TEST_TREASURE );
  }
  // 各graphicに画像を読み込ませる
  public loadGraphic(graphic:Graphic){
    graphic.image = this.p5ref.loadImage( graphic.filePath );
    return graphic;
  }
}
