export type Options = {

    /**
     * 水印文本
     */
    text?:string
    /**
     * 要指定的domid如果不指定默认是整个页面
     */
    nodeId?:string,
    /**
     * canvasW宽度
     */
    canVasW?:number,
    /**
     * canvas高度
     */
    canVasH?:number,
    /**
     * 水印的旋转角度
     */
    rotate?:number,
    /**
     * 水印文字大小
     */
    font?:string,
    /**
     * 水印颜色
     */
    color?:string
    /**
     * 水印的水平对齐方式
     */
    textAlign?:CanvasTextAlign,

    /**
     * 水印的垂直位置
     */

    textBaseLine?:CanvasTextBaseline,


    /**
     * 水印穿透事件
     */

    pointerEvents?:string

    /**
     * 水印距离水印容器顶部距离
     */

    top?:string,

    /**
     * 水印距离水印容器左侧距离
     */

    left?:string,

    /**
     * 水印透明度
     */

    opacity?:string,

    /**
     * 水印的定位方式
     */

    position?:string,

    /**
     * 水印样式的层级
     */

    Index?:string ,

    /**
     *容器的宽高是否使用默认值
     * 默认值是指定nodeId的宽高
     * 需指定自定义width 与height才会 生效
     * 0 默认  1 自定义
     */

    containerDefault?:number


    /**
     * 水印容器的宽度
     */

    width?:string,

    /**
     *水印容器的高度
     */

    height?:string








}
