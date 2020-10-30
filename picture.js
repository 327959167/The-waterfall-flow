loadImg();
function loadImg(){
		var oUl = document.querySelector('.ul');
		ajax("index.json",function(data){
			data = (new Function("return" + data))();
			for(var i=0;i<data.length;i++){
				var oLi = document.createElement("li");
				var oImg = document.createElement("img");
				oImg.src = data[i];
				oLi.appendChild(oImg);
				oUl.appendChild(oLi);
			}
		})
	}