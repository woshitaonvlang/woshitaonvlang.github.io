/*
* @Author: lenovo
* @Date:   2017-05-05 21:17:32
* @Last Modified by:   lenovo
* @Last Modified time: 2017-05-08 09:24:04
*/

'use strict';
$(function(){
	let yj=document.querySelector('.nav>.yiji');
	let ej=document.querySelector('.nav>.yiji>ul>li>.erji');

	let sl=document.querySelector('.star>.ss>.sl');
	let sr=document.querySelector('.star>.ss>.sr');

	let s1=document.querySelectorAll('.star>.sphoto>.s1')[0];
	let s2=document.querySelectorAll('.star>.sphoto>.s2')[0];
	// console.log(s1,s2)
	let tt=document.querySelector('.tjb>.rec>.title>.tt');
	let tl=document.querySelector('.tjb>.rec>.title>.tt>.tl');
	let tr=document.querySelector('.tjb>.rec>.title>.tt>.tr');
	// console.log(tt,tl,tr)
	let f1=document.querySelectorAll('.title .title2 .f1')[0];
	let f2=document.querySelectorAll('.title .title2 .f2')[0];
	let f3=document.querySelectorAll('.title .title2 .f3')[0];
	let f4=document.querySelectorAll('.title .title2 .f4')[0];
	// console.log(f1,f2,f3,f4)

	let mat1=document.querySelectorAll('.mat1')[0];
	let mat2=document.querySelectorAll('.mat2')[0];
	let mat3=document.querySelectorAll('.mat3')[0];
	let mat4=document.querySelectorAll('.mat4')[0];
	// console.log(mat1,mat2,mat3,mat4)

	let d1=document.querySelectorAll('.dpb>.acc>.title .title2 .s1')[0];
	let d2=document.querySelectorAll('.dpb>.acc>.title .title2 .s2')[0];
	let d3=document.querySelectorAll('.dpb>.acc>.title .title2 .s3')[0];
	let d4=document.querySelectorAll('.dpb>.acc>.title .title2 .s4')[0];
	// console.log(d1,d2,d3,d4)

	let acc1=document.querySelectorAll('.acc1')[0];
	let acc2=document.querySelectorAll('.acc2')[0];
	let acc3=document.querySelectorAll('.acc3')[0];
	let acc4=document.querySelectorAll('.acc4')[0];
	// console.log(acc1,acc2,acc3,acc4)

	let hots=document.getElementsByClassName('hot1');
	let arrs=document.getElementsByClassName('arr');
	// console.log(arrs)
	// console.log(hots)

	let left=$('.lt')[0];
	let right=$('.gt')[0];
	let win=$('.win')[0];
	let imgBox=$('.imgBox')[0];
	let lis=$('li',imgBox);
	
	let phoBox=$('.phoBox')[0];

	let firsts=$('.first',phoBox);
	let rec=$('.rec')[0];
	let phoWidth=parseInt(getStyle(firsts[0],'width'))+parseInt(getStyle(firsts[0],'margin-right'));

	let btn=$('.btn')[0];
	let btns=$('li',btn);
	lis[0].style.zIndex=10;
	let index=0;
	let t;
	let t1;
	let flag1=true;
	let num=5;
	t1=setInterval(move1,2000);
	t=setInterval(move,2000);
	

	let large=$('.large');

	let wheel2=$('.wheel2')[0];
	let li20=$('.li2',wheel2);
	console.log(wheel2,li20);

	let wheel21=$('.wheel2')[1];
	let li21=$('.li2',wheel21);
	// console.log(li21)
	let wheel22=$('.wheel2')[2];
	let li22=$('.li2',wheel22);

	let wheel23=$('.wheel2')[3];
	let li23=$('.li2',wheel23);

	let posLeft=$('.posLeft');
	let posRight=$('.posRight');
	// console.log(posLeft,posRight)
	
	let keyBox0=$('.keyBox')[0];
	let li10=$('.li1',keyBox0);
	// console.log(li10,keyBox0)

	let keyBox1=$('.keyBox')[1];
	let li11=$('.li1',keyBox1);
	// console.log(li11,keyBox1)
		
	let keyBox2=$('.keyBox')[2];
	let li12=$('.li1',keyBox2);
	// console.log(keyBox2)

	let keyBox3=$('.keyBox')[3];
	let li13=$('.li1',keyBox3);
	// console.log(keyBox3)

	let keyWidth=parseInt(getComputedStyle(large[0],null).width);
	console.log(keyWidth);
	let current=0,next=0;

	posLeft[0].onclick=function(){
		move41();
	}
	posRight[0].onclick=function(){
		move31();
	}
	posLeft[1].onclick=function(){
		move42();
	}
	posRight[1].onclick=function(){
		move32();
	}
	posLeft[2].onclick=function(){
		move43();
	}
	posRight[2].onclick=function(){
		move33();
	}
	posLeft[3].onclick=function(){
		move4();
	}
	posRight[3].onclick=function(){
		move3();
	}
	for(let i=0;i<li10.length;i++){
		if(i==0){
			continue;
		}
		li10[i].style.left=keyWidth+'px';
	}
	for(let i=0;i<li11.length;i++){
		if(i==0){
			continue;
		}
		li11[i].style.left=-keyWidth+'px';
	}
	for(let i=0;i<li12.length;i++){
		if(i==0){
			continue;
		}
		li12[i].style.left=-keyWidth+'px';
	}
	for(let i=0;i<li13.length;i++){
		if(i==0){
			continue;
		}
		li13[i].style.left=-keyWidth+'px';
	}

	for(let i=0;i<li20.length;i++){
		li20[i].onclick=function(){
			if(i==current){
				return;
			}
			if(i>current){
				li20[i].style.left=keyWidth+'px';
				animate(li10[current],{left:-keyWidth});
				animate(li10[i],{left:0});
			}
			if(i<current){
				li20[i].style.left=-keyWidth+'px';
				animate(li10[current],{left:keyWidth});
				animate(li10[i],{left:0})
			}
			current=next=i;
		}
	}
	for(let i=0;i<li21.length;i++){
		li21[i].onclick=function(){
			if(i==current){
				return;
			}
			if(i>current){
				li21[i].style.left=keyWidth+'px';
				animate(li11[current],{left:-keyWidth});
				animate(li11[i],{left:0});
			}
			if(i<current){
				li21[i].style.left=-keyWidth+'px';
				animate(li11[current],{left:keyWidth});
				animate(li11[i],{left:0})
			}
			current=next=i;
		
		}
	}
	for(let i=0;i<li22.length;i++){
		li22[i].onclick=function(){
			if(i==current){
				return;
			}
			if(i>current){
				li21[2].style.left=keyWidth+'px';
				animate(li12[current],{left:-keyWidth});
				animate(li12[i],{left:0});
			}
			if(i<current){
				li22[i].style.left=-keyWidth+'px';
				animate(li12[current],{left:keyWidth});
				animate(li12[i],{left:0})
			}
			current=next=i;
		}
	}
	for(let i=0;i<li23.length;i++){
		li23[i].onclick=function(){
			if(i==current){
				return;
			}
			if(i>current){
				li23[i].style.left=keyWidth+'px';
				animate(li13[current],{left:-keyWidth});
				animate(li13[i],{left:0});
			}
			if(i<current){
				li23[i].style.left=-keyWidth+'px';
				animate(li13[current],{left:keyWidth});
				animate(li13[i],{left:0})
			}
			current=next=i;
		}
	}
	function move31(){
		next++;
		if(next==li10.length){
			next=0;
		}
		li10[next].style.left=keyWidth+'px';
		animate(li10[current],{left:-keyWidth});
		animate(li10[next],{left:0})
		current=next;
	}
	function move41(){
		next--;
		if(next<0){
			next=li10.length-1;
		}
		li10[next].style.left=-keyWidth+'px';
		animate(li10[current],{left:keyWidth});
		animate(li10[next],{left:0})
		current=next
	}
	function move32(){
		next++;
		if(next==li11.length){
			next=0;
		}
		li11[next].style.left=keyWidth+'px';
		animate(li11[current],{left:-keyWidth});
		animate(li11[next],{left:0})
		current=next;
	}
	function move42(){
		next--;
		if(next<0){
			next=li11.length-1;
		}
		li11[next].style.left=-keyWidth+'px';
		animate(li11[current],{left:keyWidth});
		animate(li11[next],{left:0})
		current=next
	}
	function move33(){
		next++;
		if(next==li12.length){
			next=0;
		}
		li12[next].style.left=keyWidth+'px';
		animate(li12[current],{left:-keyWidth});
		animate(li12[next],{left:0})
		current=next;
	}
	function move43(){
		next--;
		if(next<0){
			next=li12.length-1;
		}
		li12[next].style.left=-keyWidth+'px';
		animate(li12[current],{left:keyWidth});
		animate(li12[next],{left:0})
		current=next
	}
	function move3(){
		next++;
		if(next==li13.length){
			next=0;
		}
		li13[next].style.left=keyWidth+'px';
		animate(li13[current],{left:-keyWidth});
		animate(li13[next],{left:0})
		current=next;
	}
	function move4(){
		next--;
		if(next<0){
			next=li13.length-1;
		}
		li13[next].style.left=-keyWidth+'px';
		animate(li13[current],{left:keyWidth});
		animate(li13[next],{left:0})
		current=next
	}




	win.onmouseenter=function(){
		clearInterval(t);
	}
	win.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	left.onclick=function(){
		moveDown();
	}
	right.onclick=function(){
		move();
	}
	yj.onmouseenter=function(){
		ej.style.display='block';
	}
    yj.onmouseleave=function(){
		ej.style.display='none';
	}
	sl.onclick=function(){
		s1.style.transform='translateX(0)';
		s2.style.transform='translateX(0)';
		// console.log(1)
	}
	sr.onclick=function(){
		s1.style.transform='translateX(-1226px)';
		s2.style.transform='translateX(-1226px)';
		// console.log(2)
	}
	f2.onmouseenter=function(){
		mat1.style.display='none';
		mat2.style.display='none';
		mat4.style.display='none';
		mat3.style.display='block';
		f1.style.color='black';
		f1.style.border=0;
		f2.style.color='#ff6700';
		f2.style.borderBottom='1px solid #ff6700';
		f3.style.color='black';
		f3.style.border=0;
		f4.style.color='black';
		f4.style.border=0;
	}
	f1.onmouseenter=function(){
		mat2.style.display='none';
		mat1.style.display='block';
		mat3.style.display='none';
		mat4.style.display='none';
		f1.style.color='#ff6700';
		f1.style.borderBottom='1px solid #ff6700';
		f3.style.color='black';
		f3.style.border=0;
		f4.style.color='black';
		f4.style.border=0;
		f2.style.color='black';
		f2.style.border=0;
	}
	f3.onmouseenter=function(){
		mat1.style.display='none';
		mat2.style.display='block';
		mat3.style.display='none';
		mat4.style.display='none';
		f1.style.color='black';
		f1.style.border=0;
		f2.style.color='black';
		f2.style.border=0;
		f3.style.color='#ff6700';
		f3.style.borderBottom='1px solid #ff6700';
		f4.style.color='black';
		f4.style.border=0;
	}
	f4.onmouseenter=function(){
		mat1.style.display='none';
		mat4.style.display='block';
		mat2.style.display='none';
		mat3.style.display='none';
		f1.style.color='black';
		f1.style.border=0;
		f2.style.color='black';
		f2.style.border=0;
		f3.style.color='black';
		f3.style.border=0;
		f4.style.color='#ff6700';
		f4.style.borderBottom='1px solid #ff6700';
	}


	d4.onmouseenter=function(){
		acc1.style.display='none';
		acc4.style.display='block';
		acc2.style.display='none';
		acc3.style.display='none';
		d1.style.color='black';
		d1.style.border=0;
		d2.style.color='black';
		d2.style.border=0;
		d3.style.color='black';
		d3.style.border=0;
		d4.style.color='#ff6700';
		d4.style.borderBottom='1px solid #ff6700';
	}
	d3.onmouseenter=function(){
		acc1.style.display='none';
		acc2.style.display='block';
		acc4.style.display='none';
		acc3.style.display='none';
		d1.style.color='black';
		d1.style.border=0;
		d2.style.color='black';
		d2.style.border=0;
		d3.style.color='#ff6700';
		d3.style.borderBottom='1px solid #ff6700';
		d4.style.color='black';
		d4.style.border=0;
	}
	d2.onmouseenter=function(){
		acc1.style.display='none';
		acc3.style.display='block';
		acc2.style.display='none';
		acc4.style.display='none';
		d1.style.color='black';
		d1.style.border=0;
		d2.style.color='#ff6700';
		d2.style.borderBottom='1px solid #ff6700';
		d3.style.color='black';
		d3.style.border=0;
		d4.style.color='black';
		d4.style.border=0;
	}
	d1.onmouseenter=function(){
		acc4.style.display='none';
		acc1.style.display='block';
		acc2.style.display='none';
		acc3.style.display='none';
		d1.style.color='#ff6700';
		d1.style.borderBottom='1px solid #ff6700';
		d3.style.color='black';
		d3.style.border=0;
		d4.style.color='black';
		d4.style.border=0;
		d2.style.color='black';
		d2.style.border=0;
	}
	rec.onmouseenter=function(){
		clearInterval(t1)
	}
	rec.onmouseleave=function(){
		t1=setInterval(move1,2000);
	}
	tr.onclick=function(){	
		if(!flag1){
			return;
		}	
		flag1=false;
		move1()
	}
	tl.onclick=function(){
		if(!flag1){
			return;
		}	
		flag1=false;
		move2()
	}
		
	for(let i=0;i<hots.length;i++){
		hots[i].onmouseenter=function(){
			for(let j=0;j<arrs.length;j++){
				arrs[j].style.display='none';
				hots[j].style.color='black';
				hots[j].style.border=0;
			}
			arrs[i].style.display='block';
			hots[i].style.color='#ff6700';
			hots[i].style.borderBottom='1px solid #ff6700';
		}
	}

	for(let i=0;i<btns.length;i++){
		btns[i].onclick=function(){
			for(let j=0;j<btns.length;j++){
				lis[j].style.display='none';
				btns[j].style.background='#ccc';
			}
			btns[i].style.background='#ff6700';
			lis[i].style.display='block';
			index=i;
		}
	}
	function move(){
		index++;
		if(index==lis.length){
			index=0
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			btns[i].style.background='#ccc';
		}
		btns[index].style.background='#ff6700';
		lis[index].style.display='block';
	}
	function moveDown(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		if(index==lis.length){
			index=0
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			btns[i].style.background='#ccc';
		}
		btns[index].style.background='#ff6700';
		lis[index].style.display='block';
	}

	
	function move1(){
		animate(phoBox,{left:-phoWidth},function(){
			for(let i=0;i<num;i++){
				let first=getFirst(phoBox);
				phoBox.appendChild(first);				
				phoBox.style.left='0';	
			}								
			flag1=true;
		})
	}
	function move2(){	
		for(let i=0;i<num;i++){
			let last=getLast(phoBox);
			let first=getFirst(phoBox);
			console.log(last,first)
			phoBox.insertBefore(last,first);
			phoBox.style.left=-phoWidth+'px';
			animate(phoBox,{left:0},function(){
				flag1=true;
			});		
		}
						
	}
})