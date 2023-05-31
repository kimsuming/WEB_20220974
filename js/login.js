function login()
{
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    
    form.action = "../login/index_login.html";
	form.method = "get";
	
	if (id.value.length === 0)
	{
		alert('아이디를 입력하세요');
	}
	
	else if (password.value.length === 0)
	{
		alert('패스워드를 입력하세요');
	}
	
	else
	{
		form.submit();
	}
}

function get_id(){
	var getParameters = function(paramName){
		var retyrnValue;
		var url = location.href;
		var parameters = (url.slice(url.indexOf("?") + 1, url.length)).split('&');
		for (var i = 0; i<parameters.length; i ++){
			var varName = parameters[i].split('=')[0];
		
			if (varName.toUpperCase() == paramName.toUpperCase()){
				returnValue = parameters[i].split('=')[1];
				return decodeURIComponent(returnValue);
			}
		}
	}
	alert(getParameters('id') + '님 반갑습니다.');
}