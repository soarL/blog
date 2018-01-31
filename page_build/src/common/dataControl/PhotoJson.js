const setting =  require("./setting.js");

let data ={
	"photo1":[],
	"photo2":[],
	"photo3":[],
	"photo4":[],
	"photo5":[]
}

let sendData = {
	"num":'40',
	"start":'0'
}

function dataGrouping(arr){
    var brr1=[];
    var brr2=[];
    var brr3=[];
    var brr4=[];
    var brr5=[];
    for(var i=0;i<arr.length / 5;i++){
        brr1[i]=arr[i*5];
        brr2[i]=arr[i*5+1];
        brr3[i]=arr[i*5+2];
        brr4[i]=arr[i*5+3];
        brr5[i]=arr[i*5+4];
    }
    data.photo1 = brr1;
    data.photo2 = brr2;
    data.photo3 = brr3;
    data.photo4 = brr4;
    data.photo5 = brr5;
}

$.get(setting.serverLocalhost+'/index/photo/read',sendData,(r)=>{
	dataGrouping(r.data);
})

function thisLi(arr){
	var last=arr[0];
	for(let i = 0; i < arr.length;i++){
		if(last > arr[i]){
			last = arr[i];
		}
	}
	var wz;
	for(let i = 0; i < arr.length;i++){
		if(arr[i]==last){
			wz=i;
		}
	}
	switch (wz) {
		case 0:
			return data.photo1
			break;
		case 1:
			return data.photo2
			break;
		case 2:
			return data.photo3
			break;
		case 3:
			return data.photo4
			break;
		case 4:
			return data.photo5
			break;
		default:
			console.log('错了');
			break;
	}
}
function Lidata(arr,i){
	let lArr = [];
	lArr[0]=$('#photoBox li').eq(0).height();
	lArr[1]=$('#photoBox li').eq(1).height();
	lArr[2]=$('#photoBox li').eq(2).height();
	lArr[3]=$('#photoBox li').eq(3).height();
	lArr[4]=$('#photoBox li').eq(4).height();
	thisLi(lArr).push(arr[i]);
}
var k=0
$(document).scroll(function(){
	let num = $('#photoBox').height() - $(window).scrollTop()
	if(num < 600){
		for(var i=0;i<5;i++){
			$.get(`${setting.serverLocalhost}/index/photo/read?num=1&start=${40+k}`,(r)=>{
				Lidata(r.data,0)
			})
			k=k+i
		}
	}
})




module.exports = data;
