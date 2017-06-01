/*
* @Author: lenovo
* @Date:   2017-04-01 11:09:10
* @Last Modified by:   lenovo
* @Last Modified time: 2017-04-06 10:58:43
*/
// html{
// 	fontsize:50px   设备尺寸/设计尺寸*100
// }
'use strict';
 


window .onload = function(){		    // /窗口加载后执行一段程序/ 
	var designWidth = 320; 
	// 定义设计尺寸             
	function fontSize(){
		var CW = document.documentElement.clientWidth;
		// consolo.log(CW);
	// 监测获取设备尺寸
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style.fontSize = size;
	// 设置html的字体
	}

	fontSize()
	// 运行
	window.onresize = fontSize;
	// 检测窗口尺寸是否变化

}