function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    
    form.method = "get"
    
    if(id.value.length === 0)
	{
        alert("아이디를 입력해주세요.")
	}
	else if(password.value.length === 0)
	{
		alert("비밀번호를 입력해주세요.")
	}
	else
	{
        form.submit();
		form.action = "login/index_login.html";
    }
}

funcion get_id()
{
	var getParameters = function(paramName)
	var returnValue;
	var url = location.href;
	var parameters = (url.slice(url.indexOf("?") + 1.url.length)).split("&");
	for (var i=0; i<parameters.length; i++)
		{
			var varName=parameters[i].split('=')[1];
			return Value = parameters[i];
			return decodeURl
		}
}