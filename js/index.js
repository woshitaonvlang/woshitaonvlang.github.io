$(function(){
    $('#downbok').fullpage({

        sectionsColor: ['', '#4BBFC3', '#7BAABE', '#f90'],
        anchors:['page1','page2','page3','page4','page5'],
        navigation:true,
        loopBottom:true,
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('.my').delay(500).animate({
                    left: '240px'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.text').delay(500).animate({
                    right: '200px'
                }, 1500, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('h2').delay(500).animate({
                    top: '80px'
                }, 1500, 'easeOutExpo');
            }
            if(index == 4){
                $('.key').find('li').fadeIn(2000);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('.my').delay(500).animate({
                    left: '-260px'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.text').delay(500).animate({
                   right: '-200px'
                }, 1500, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('h2').delay(500).animate({
                    top: '-30px'
                }, 1500, 'easeOutExpo');
            }
            if(index == '4'){
                $('.key').find('li').fadeOut(2000);
            }
            if(index == '5'){
                $('.section5').find('.photo').delay(500).animate({
                    left: '100px'
                }, 1500, 'easeOutExpo');
                $('.section5').find('.qq').delay(500).animate({
                    right: '100px'
                }, 1500, 'easeOutExpo');
            }
        }
    })
    let content=document.querySelectorAll('.content');

    let canvas=document.querySelectorAll('canvas');
    console.log(canvas)
    let ctx =canvas[0].getContext('2d');
    let ctx1=canvas[1].getContext('2d');
    let ctx2=canvas[2].getContext('2d');

    let t;
    let num=80;
    let n=0;

    $('.content').hover(function(){
        // $(this).style.opacity=0.3
    })
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'palegreen';
    ctx.lineCap = 'round';
    ctx.font = '20px bold sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // t=setInterval(keyframe,40);
    function keyframe(){
        n++;
        if(n==num){
            clearInterval(t);
            cancelAnimationFrame(t)
        }else{
            t=requestAnimationFrame(keyframe);
        }
        ctx.clearRect(0,0,150,150);
        ctx.beginPath();
        let angel=(n*360/100)*Math.PI/180;
        ctx.arc(75,75,70,0,angel,false);
        ctx.stroke();
        ctx.fillText(`${n}%`,75,75)
    }
    keyframe();


    let t1;
    let num1=88;
    let m=0;
    ctx1.lineWidth = 5;
    ctx1.strokeStyle = 'palegreen';
    ctx1.lineCap = 'round';
    ctx1.font = '20px bold sans-serif';
    ctx1.textAlign = 'center';
    ctx1.textBaseline = 'middle';
    // t1=setInterval(keyframe1,40);
    function keyframe1(){
        m++;
        if(m==num1){
            clearInterval(t1);
            cancelAnimationFrame(t1)
        }else{
            t1=requestAnimationFrame(keyframe1);
        }
        ctx1.clearRect(0,0,150,150);
        ctx1.beginPath();
        let angel1=(m*360/100)*Math.PI/180;
        ctx1.arc(75,75,70,0,angel1,false);
        ctx1.stroke();
        ctx1.fillText(`${m}%`,75,75)
    }
    keyframe1();


    let t2;
    let num2=90;
    let z=0;
    ctx2.lineWidth = 5;
    ctx2.strokeStyle = 'palegreen';
    ctx2.lineCap = 'round';
    ctx2.font = '20px bold sans-serif';
    ctx2.textAlign = 'center';
    ctx2.textBaseline = 'middle';
    // t2=setInterval(keyframe2,40);
    function keyframe2(){
        z++;
        if(z==num2){
            clearInterval(t2);
            cancelAnimationFrame(t2)
        }else{
            t2=requestAnimationFrame(keyframe2);
        }
        ctx2.clearRect(0,0,150,150);
        ctx2.beginPath();
        let angel2=(z*360/100)*Math.PI/180;
        ctx2.arc(75,75,70,0,angel2,false);
        ctx2.stroke();
        ctx2.fillText(`${z}%`,75,75)
    }
    keyframe2();


})