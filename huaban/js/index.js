
window.onload=function(){
    let canvas=document.querySelector('canvas');
    let ctx=canvas.getContext('2d');
    // let pale=document.querySelector('.palette');
    // let lable = document.querySelector('lable')


    let mask=document.querySelector('.mask')
    let eraserBtn=document.querySelector('.eraser');
    let eraser=document.querySelector('.rubber');
    
    let line=document.querySelector('.xian');
    let qianbi = document.querySelector('.qianbi');
    let jvxing=document.querySelector('.jvxing');
    let duobianxing=document.querySelector('.duobianxing');
    let xline=document.querySelector('.xvxian');
    let round=document.querySelector('.yuan');
    let yuanjiao=document.querySelector('.yuanjiaojvxing');
    let baocun=document.querySelector('.baocun');
    let xiazai=document.querySelector('.xiazai');
    let chexiao=document.querySelector('.chexiao');
    let xinjian = document.querySelector('.xinjian');
    let wujiaoxing=document.querySelector('.wujiaoxing');

    let miaobian=document.querySelector('.miaobian');
    let tianchong=document.querySelector('.tianchong');
    let input1=document.querySelector('.input1');
    let input2=document.querySelector('.input2');

    let quanping=document.querySelector('.quanping');
    let tuiquan = document.querySelector('.tuiquan');
    let wenzi=document.querySelector('.wenzi');

    let caiqie=document.querySelector('.caiqie');
    let clipBtn=document.querySelector('.clip')


    let palette=new Palette(canvas,ctx,mask);

    /*pale.onclick=function(){
        lable.strokeStyle='black'
    }*/
    line.onclick=function(){
        palette.line();
    }
    xline.onclick=function(){
        palette.xline();
    }
    round.onclick=function(){
        palette.round();
    }
    qianbi.onclick=function(){
        palette.qianbi();
    }
    jvxing.onclick=function(){
        palette.jvxing();
    }
    duobianxing.onclick=function(){
        palette.bian=prompt('请输入边数','5')
        palette.duobianxing();
    }
    wujiaoxing.onclick=function(){
        palette.bian=prompt('请输入边数','5')
        palette.duojiaoxing();
    }
    yuanjiao.onclick=function(){
        palette.yuanjiao();
    }
   eraser.onclick=function(){
        let w=prompt('请输入尺寸','20')
        palette.eraser(w,w,eraserBtn);
    }
    caiqie.onclick=function(){
        palette.caiqie(clipBtn);
    }
    miaobian.onclick=function(){
        palette.style='stroke';
    }
    tianchong.onclick=function(){
        palette.style='fill';
    }
    //填充
    input1.onchange=function () {
        palette.fillStyle=this.value;
    }
    //描边
    input2.onchange=function () {
        palette.strokeStyle=this.value;
    }

    baocun.onclick=function(){
        palette.baocun();
    }
    xiazai.onclick=function(){
        palette.xiazai();
    }
    chexiao.onclick=function () {
        palette.chexiao();
    }
    document.body.onkeydown=function(e){
        if(e.ctrlKey&&e.keyCode==90){
           palette.chexiao();
        }
    }
    xinjian.onclick=function(){
        palette.xinjian();
    }
    quanping.onclick=function(){
        palette.quanping();
    }
    wenzi.onclick=function(){
        palette.wenzi();
    }

}