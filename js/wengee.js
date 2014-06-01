var styleUnit={
	//文本
	f12px:"font-size:12px;",
	f14px:"font-size:14px;",
	f16px:"font-size:16px;",
	f18px:"font-size:18px;",
	f20px:"font-size:20px;",
	f24px:"font-size:24px;",
	//盒模型
	mLRa:"margin-left:auto;margin-right:auto;",
	mg20:"margin:20px;",
	mg15:"margin:15px;",
	mg10:"margin:10px;",
	mg5:"margin:5px;",
	pd20:"padding:20px;",
	pd15:"padding:15px;",
	pd10:"padding:10px;",
	pd5:"padding:5px;",
	w50:"width:50%;",
	//布局
	dInline:"display:inline;",
	dBlock:"display:block;",
	dIB:"display:inline-block;",
	fl:"float:left;",
	fr:"float:right;",
	oh:"overflow:hidden;",
	tc:"text-align:center;"
	
	//其他
	};
function styleGenerator(wengeePage,wengeeArray){
	var wengeeMode="";//develop,release; 
	var unitGroup="",unitGroup_Arr=[];
	var cssContent="<style>";
	var loopLen="";
	if(wengeeArray.length>0){
		wengeeMode="release";
		loopLen=wengeeArray.length;
		for(var i=0;i<loopLen;i++){
			var styleSyndicate="";
			unitGroup=wengeeArray[i];
			unitGroup_Arr=unitGroup.split("-");
			unitGroup_Arr=unitGroup_Arr.splice(1,unitGroup_Arr.length);
			$.map(unitGroup_Arr,function(ele){
				styleSyndicate+=styleUnit[ele];
			});
			cssContent+="."+unitGroup+"{"+styleSyndicate+"}";
		}
	}else{
		wengeeMode="develop";
		var wengeeEles=document.querySelectorAll("[class*="+wengeePage+"]"),
			loopLen=wengeeEles.length;
		for(var i=0;i<loopLen;i++){
			var styleSyndicate="";
			unitGroup=wengeeEles[i].className;
			wengeeArray.push(unitGroup);
			unitGroup_Arr=unitGroup.split("-");
			unitGroup_Arr=unitGroup_Arr.splice(1,unitGroup_Arr.length);
			$.map(unitGroup_Arr,function(ele){
				styleSyndicate+=styleUnit[ele];
			});
			cssContent+="."+unitGroup+"{"+styleSyndicate+"}";
		}
	};
	cssContent+="</style>";
	$("head").append(cssContent);
	if(wengeeMode=="develop"){
		console.log(wengeePage);
		console.log(wengeeArray);
	}
};