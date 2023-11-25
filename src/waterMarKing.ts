// eslint-disable-next-line no-unused-vars

import {Options} from "./types/waterMakingOptions";
import {WaterMarKingConstanClass} from "./constantClass/WaterMarKingConstanClass"

import {validateOptions} from "./utils";

class WaterMarKing {
    private options: Options;

    constructor(options: Options) {
        this.options = options;

    }


    public  createWaterMark(){
      this.removeWaterMark()
        // Create a canvas element using the createCanvas method
// 使用 createCanvas 方法创建一个画布元素
        const canvas: HTMLCanvasElement = this.createCanvas();

// Create a container element. If nodeId is provided, use the existing element with that ID;
// otherwise, create a new div element.
// 创建一个容器元素。如果提供了 nodeId，则使用具有该 ID 的现有元素；否则，创建一个新的 div 元素。

        const containerElement: HTMLElement =  document.createElement("div");
        let targetElement;
        if (this.options.nodeId){
            targetElement  = document.getElementById(this.options.nodeId)
            if (!targetElement) throw new Error("Check that you are passing in the correct nodeId");
        }



            containerElement.id = WaterMarKingConstanClass.id;

// Set styles for the container element based on options or default values.
// 根据选项或默认值设置容器元素的样式。
        containerElement.style.pointerEvents = this.options.pointerEvents || WaterMarKingConstanClass.pointerEvents;
        containerElement.style.top = this.options.top || WaterMarKingConstanClass.top;
        containerElement.style.left = this.options.left || WaterMarKingConstanClass.left;
        containerElement.style.opacity = this.options.opacity || WaterMarKingConstanClass.opacity;
        containerElement.style.position = this.options.position || WaterMarKingConstanClass.position;
        containerElement.style.zIndex = this.options.Index || WaterMarKingConstanClass.Index;

// Set width and height of the container element based on options or default values.
// 根据选项设置容器元素的宽度和高度。0为默认会自动获取页面或对应容器宽高,1则为手动指定节点宽高，如果未指定则为页面可视区域宽高，不传为默认,1 为自定义宽度，
// 传入 width与height 如果不传递width与height则会是0px 会造成水印不显示
        if (this.options.containerDefault && this.options.containerDefault ===1 ){

            containerElement.style.width = this.options.width || WaterMarKingConstanClass.width
            containerElement.style.height = this.options.height || WaterMarKingConstanClass.height
        }else {
            containerElement.style.width = this.options.nodeId ? targetElement?.offsetWidth + "px" : document.documentElement.clientWidth - 110 + 'px';
            containerElement.style.height = this.options.nodeId ? targetElement?.offsetHeight + "px" : document.documentElement.clientHeight - 110 + 'px';
        }



// Set background image of the container element using the canvas image data.
// 使用画布图像数据设置容器元素的背景图像。
        containerElement.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat';

// If no nodeId is provided, append the container element to the body.
// 如果未提供 nodeId，则将容器元素附加到 body。
        if (!targetElement) {
            // Append the node to the last child of the specified element node.
            document.body.appendChild(containerElement);
        }else {
            targetElement.appendChild(containerElement);
        }

        return {state:true}

    }


    private   createCanvas () :HTMLCanvasElement{
        // Create a new HTML canvas element
        const canvasElement = document.createElement("canvas");

        // Set the width and height of the canvas based on options or defaults
        // 根据选项或默认值设置画布的宽度和高度
        canvasElement.width = this.options.canVasW || WaterMarKingConstanClass.canVasW;
        canvasElement.height = this.options.canVasH || WaterMarKingConstanClass.canVasH;

        // Get the 2D rendering context of the canvas
        // 获取画布的2D渲染上下文
        const context: CanvasRenderingContext2D = canvasElement.getContext("2d")!;

        // Rotate the canvas based on options or defaults
        // 根据选项或默认值旋转画布
        context.rotate((this.options.rotate || WaterMarKingConstanClass.rotate) * Math.PI / 100);

        // Set the font style based on options or defaults
        // 根据选项或默认值设置字体样式
        context.font = (this.options.font || WaterMarKingConstanClass.font)  + " " + "Verdana";

        // Set the fill color based on options or defaults
        // 根据选项或默认值设置填充颜色
        context.fillStyle = this.options.color || WaterMarKingConstanClass.color;

        // Set the text alignment based on options or defaults
        // 根据选项或默认值设置文本对齐方式
        context.textAlign = this.options.textAlign || WaterMarKingConstanClass.textAlign;

        // Set the text baseline based on options or defaults
        // 根据选项或默认值设置文本基线
        context.textBaseline = this.options.textBaseLine || WaterMarKingConstanClass.textBaseLine;

        // Fill the text at a specific position in the canvas
        // 在画布的特定位置填充文本
        context.fillText((this.options.text || WaterMarKingConstanClass.text), canvasElement.width / 3, canvasElement.height / 2);


        // Return the created canvas element
        // 返回创建的画布元素
        return canvasElement;

    }


    /**
     * If you passed a node or specified a container node when you created it, then get the container node and remove
     * the watermark element under it. If you didn't pass a node then remove the watermark element under the body
     * 如果用户传递了节点或者用户在创建时指定了容器节点那么，则获取容器节点并移除节点下的水印元素，如果用户没有传递节点那么则 移除body下水印元素
     * @param nodeId
     */
    public removeWaterMark(nodeId? :string){
        let nodeElement;
        const wmElement = document.getElementById(WaterMarKingConstanClass.id)
        if (!wmElement) return {state:false};
        if (nodeId || this.options.nodeId){
            if (typeof nodeId !== "string") throw new Error("Removing the watermark requires passing the node id as a string, so check that you have the correct type")
            nodeElement = document.getElementById((nodeId|| this.options.nodeId)!)
            if (!nodeElement) {
                document.body.removeChild(wmElement)
                throw new Error("You passed an error nodeId in the remove method")
            }
            nodeElement.removeChild(wmElement)
        }else {
            document.body.removeChild(wmElement)
        }


        return {state:true}

    }




}

let waterMar:WaterMarKing;
const create = (options :Options )=>{

    const optionsParametersIsTrue = validateOptions(options);
     if (optionsParametersIsTrue){
         waterMar =  new WaterMarKing(options)
         return   waterMar.createWaterMark()

}
    return {state:false}

}
const  remove =  (nodeId?:string)=>{
   return  waterMar.removeWaterMark(nodeId)

}


export default {
    create,
    remove
}
// 开源作者：冯骏
// 联系方式微信:fj327844
