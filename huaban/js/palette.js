/*<!--
线，虚线，多边形，矩形，多角形，铅笔，圆，圆角矩形，
填充样式，描边样式，
橡皮，文字，裁切
撤销，保存，下载，新建
-->*/
function Palette(obj,ctx,mask){
//    属性
    this.obj = obj;
    this.ctx = ctx;
    this.mask=mask;
    this.lineWidth = 3;
    this.fillStyle = '#000';
    this.strokeStyle = '#000';
    //填充  描边  默认是描边
    this.style = 'stroke';
    this.bian = 5;
    this.jiao = 5;
    this.width = obj.width;
    this.height = obj.height;
//    历史记录
    this.history=[];
//
    this.font='20px sans-serif';
    this.textAlign='center';
    this.textBaseline='middle';
}

Palette.prototype= {
    init: function () {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.lineCap = this.lineCap;
    },
    xline: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox=e.offsetX, oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                self.init();
                self.ctx.save()
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.setLineDash([6, 10]);
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.closePath();
                self.ctx[self.style]();
                self.ctx.restore();
            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    line: function () {
        let self = this;
        self.ctx.save()
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                //样式    线宽 填充描边样式
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.closePath();
                self.ctx[self.style]();
                self.ctx.restore();
            }
            self.mask.onmouseup = function () {
                //获取  放在数组中
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },

    qianbi: function () {
        let self = this;
        // self.ctx.save();
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.ctx.clearRect(0,0,500,500)
            self.ctx.beginPath();
            self.ctx.moveTo(ox, oy);
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.lineTo(mx, my);
                self.ctx[self.style]();
            };
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    jvxing: function () {
        let self = this;
        self.init();
        self.ctx.save();
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                this.style = 'stroke';
                self.ctx.rect(ox, oy, (mx - ox), (my - oy));
                // self.ctx.fill();
                self.ctx.closePath();
                self.ctx[self.style]();
                self.ctx.restore();
            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    duobianxing: function () {
        let self = this;
        self.init();
        // self.ctx.save();
        let angel = 360 / self.bian * Math.PI / 180;
        //        圆心（ox,oy）  半径 radius   起始点（ox+r,oy） 移动点坐标 （x,y）
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                let radius = Math.sqrt((mx - ox) * (mx - ox) + (my - oy) * (my - oy));
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox + radius, oy);
                //    每个点的坐标
                for (i = 0; i < self.bian; i++) {
                    let x = ox + radius * Math.cos(angel * i), y = oy + radius * Math.sin(angel * i);
                    self.ctx.lineTo(x, y)
                }
                self.ctx.closePath();
                self.ctx[self.style]()
                // self.ctx.restore();
            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    duojiaoxing: function () {
        let self = this;
        self.init();
        let angel = 360 / (2*self.bian) * Math.PI / 180;
        //        圆心（ox,oy）  半径 radius   起始点（ox+r,oy） 移动点坐标 （x,y）
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                let radius = Math.sqrt((mx - ox) * (mx - ox) + (my - oy) * (my - oy));
                let r=radius/3;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox + radius, oy);
                //    每个点的坐标
                for (i = 0; i < self.bian*2; i++) {
                    if(i%2==0){
                        let x = ox + radius * Math.cos(angel * i), y = oy + radius * Math.sin(angel * i);
                        self.ctx.lineTo(x, y)
                    }else{
                        let x1 = ox + r * Math.cos(angel * i), y1 = oy + r * Math.sin(angel * i);
                        self.ctx.lineTo(x1, y1)
                    }
                }
                self.ctx.closePath();
                self.ctx[self.style]()
            }
            self.mask.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove = null;
                self.mask.onmouseup = null;
            }
        }
    },
    
    round:function(){
        let self = this ;
        self.init();
        self.ctx.save()
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                let r=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.arc(ox,oy,r,0,Math.PI*2);
                self.ctx.closePath();
                self.ctx[self.style]();
                self.ctx.restore();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },
    eraser:function(w,h,eraserBtn){
        let self = this ;
        self.mask.onmousedown=function(){
            if (self.history.length > 0) {
                self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
            }
            eraserBtn.style.display='block';
            eraserBtn.style.width=`${w}px`;
            eraserBtn.style.height=`${h}px`;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX-w/2,my=e.offsetY-h/2;

                if(mx>=self.width-w){
                    mx==self.width-w
                }if(mx<=0){
                    mx==0;
                }
                if(my>=self.height-h){
                    my==self.height-h
                }if(my<=0){
                    my==0;
                }
                eraserBtn.style.left=mx+'px';
                eraserBtn.style.top=my+'px';
                self.ctx.clearRect(mx,my,w,h);
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                eraserBtn.style.display='none';
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
            }
        }
    },


    caiqie:function(clipBtn){
        var self=this;
        self.init();
        self.clipBtn=clipBtn;
        self.mask.onmousedown=function(e){
            var ox=e.offsetX,oy=e.offsetY;
            var minx,miny,w,h;
            self.init();
            self.mask.onmousemove=function(e){
                self.init();
                var cx=e.offsetX,cy=e.offsetY;
                 minx=cx>=ox?ox:cx;
                 miny=cy>=oy?oy:cy;
                 w=Math.abs(cx-ox);
                 h=Math.abs(oy-cy);
                clipBtn.style.cssText=`
                    width:${w}px;height:${h}px;position:absolute;top:${miny}px;left:${minx}px;border:2px dashed #000;
                `
            }
            self.mask.onmouseup=function(){
                self.mask.onmousemove=null;
                self.mask.onmouseup=null;
                self.temp=self.ctx.getImageData(minx,miny,w,h);
                self.ctx.clearRect(minx,miny,w,h);
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.ctx.putImageData(self.temp,minx,miny);
                self.drag(minx,miny,w,h,clipBtn)
            }
        }
    },
    drag:function(x,y,w,h,clipBtn){
        var self=this;
        //   鼠标范围  在截切块内
        self.mask.onmousemove = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            /*    cursor    属性规定要显示的光标的类型（形状）。
                  default	默认光标（通常是一个箭头）
                  move	    此光标指示某对象可被移动。*/
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
            }
        }
        self.mask.onmousedown=function(e){

            var ox=e.offsetX,oy=e.offsetY;
            //    鼠标相对于div左上角的位置
            var dx=e.offsetX-clipBtn.offsetLeft,dy=e.offsetY-clipBtn.offsetTop;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
                return;
            }
            self.mask.onmousemove=function(e){
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length != 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                var cx = e.offsetX;
                var cy = e.offsetY;
                var left = cx - dx;
                var top = cy - dy;
                if(left<0){
                    left=0;
                }
                if(left>self.width-w){
                    left=self.width-w
                }

                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h
                }
                clipBtn.style.left= left+'px';
                clipBtn.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.temp, left, top);
            }
            self.mask.onmouseup=function(){
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.drag(x, y, w, h, clipBtn)
            }
        }
    },

    chexiao:function() {
        if(this.history.length==0){
            return;
        }
        let last=this.history.pop();
        this.ctx.putImageData(last,0,0);
    },
    //保存
    baocun:function () {
        let data=this.obj.toDataURL('image/png');
        this.image.src=data;
    },
    //下载
    xiazai:function () {
        let data=this.obj.toDataURL('image/png').replace('data:image/png','data:stream/octet');
        location.href=data;
    },
    yuanjiao:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            //(ox,oy)是中心点
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                let w=cx-ox,h=cy-oy;
                self.init();
                let r=10;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox-w+r,oy-h);
                self.ctx.lineTo(cx-r,oy-h);
                self.ctx.quadraticCurveTo(cx,oy-h,cx,oy-h+r);
                self.ctx.lineTo(cx,cy-r);
                self.ctx.quadraticCurveTo(cx,cy,cx-r,cy);
                self.ctx.lineTo(ox-w+r,cy);
                self.ctx.quadraticCurveTo(ox-w,cy,ox-w,cy-r);
                self.ctx.lineTo(ox-w,oy-h+r);
                self.ctx.quadraticCurveTo(ox-w,oy-h,ox-w+r,oy-h)
                self.ctx[self.style]();
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmousemove =null;
                self.mask.onmouseup=null;
            }
        }
    },
    xinjian:function(){
        this.ctx.clearRect(0,0,this.width,this.height);
        //    属性
        this.lineWidth = 3;
        this.fillStyle = '#000';
        this.strokeStyle = '#000';
        //填充  描边  默认是描边
        this.style = 'stroke';
        this.bian = 5;
        this.jiao = 5;
//    历史记录
        this.history=[];
        this.font='20px sans-serif';
        this.textAlign='center';
        this.textBaseline='middle';
    },

    wenzi:function() {
        let self = this;
        self.mask.onmousedown = function (e){
            let ox=e.offsetX,oy=e.offsetY;

            let div=document.createElement('div');
            div.style.cssText=`
                min-width:50px;height:auto;position:absolute;left:${ox}px;top:${oy}px;background:#fff;
            `
            div.contentEditable = true;
            self.mask.appendChild(div);
            self.mask.onmousedown=null;
            self.area = div;
            //把事件添加到div上
            self.area.onmousedown=function(e){
                let ox=e.clientX-this.offsetLeft, oy=e.clientY-this.offsetTop;
                self.mask.onmousemove=function(e){
                    if(self.history.length>0){
                        self.ctx.putImageData(self.history[self.history.length-1],0,0);
                    }
                    let cx=e.clientX,cy=e.clientY;
                    let lefts=cx-ox,tops=cy-oy;
                    self.area.style.left=`${lefts}px`;
                    self.area.style.top=`${tops}px`;
                }
                self.area.onmouseup=function(){

                    self.area.onmouseup=null;
                    self.mask.onmousemove=null;
                }
            }
            self.area.onblur=function(){
                //打字
                self.ctx.font=self.font;
                self.ctx.textAlign==self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                this.parentNode.removeChild(this);
                self.area=null;
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
            }
        }
    },
    quanping:function(){
        if(document.documentElement.requestFullscreen){
            document.documentElement.requestFullscrren();
        }else if(document.documentElement.webkitRequestFullscreen){
            document.documentElement.webkitRequestFullscreen();
        }else if(document.documentElement.mozRequestFullscreen){
            document.documentElement.mozRequestFullscreen();
        }
    }

}





