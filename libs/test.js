function formatNumber(num) {
    var result = [], counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--){
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0){
          result.unshift(','); 
      }
    }
       return result.join('');
}

function tNum(str,strt){
	var y = parseInt(str);
	var h = 0;
	var f = [];
	var yst;

	if(y < 10000){
		yst= formatNumber(y)+strt;
		console.log(yst)
		return 
	}
	for(var xs=0;xs < y.toString().length-3;xs++){
		if(f.length==0){
			f.push(y.toString().length-3);
		}
		f.push('0');
	}

	var fnum = parseInt(f.join(''));
	if(fnum < 1000){
		fnum = 1000;
	}
	var t = setInterval(function(){
		h = h + fnum;
		if(h>y){
			clearInterval(t);
			yst= formatNumber(y)+strt;
			console.log(yst);
			return;
		}else{
			yst =formatNumber(h)+strt;
		}
	},1)
}

function runNum(arr){
  var e = [];
  var g = [];
  for(var k = 0;k<arr.length;k++){
    if(arr[k].toString().split('.')[1]){
      g.push('.'+arr[k].toString().split('.')[1]);
      e.push(arr[k].toString().split('.')[0]);
    }else{
      g.push('.00')
      e.push(arr[k].toString().split('.')[0]);
    }
  };
  for(var hj = 0;hj<arr.length;hj++){
  	tNum(e[hj],g[hj])
  }
}


runNum([1061500,'5279',972117.28,'0'])