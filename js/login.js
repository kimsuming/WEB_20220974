addJavascript('/js/security.js');
addJavascript('/js/session.js');
addJavascript('/js/cookie.js');

function login() {
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword")
    let check = document.querySelector("#idSaveCheck");

    if (id.value.length === 0) {
        alert('이메일을 입력하세요');
    } else if (password.value.length === 0) {
        alert('패스워드를 입력하세요');
    } else {
        if (!email_check(id.value)) {
            alert("이메일 형식에 맞게 입력해주세요.");
        } else {
            if (!password_check(password.value)) {
                alert("패스워드 형식에 맞게 입력해주세요.");
            } else {
				
				if (check.checked == true) {
       				alert("쿠키를 저장합니다.");
        			setCookie("id", id.value, 1);
        			alert("쿠키 값 :" + id.value);
    			} else {
        			setCookie("id", id.value, 0);
    			}
                form.action = "../login/index_login.html";
                form.method = "get";
                form.submit();
				session_set();
            }
        }
    }
}

function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

function deleteCookie(cookieName){
    	var expireDate = new Date();
    	expireDate.setDate(expireDate.getDate() - 1);
		document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
	
function init(){
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
    session_check();
}


function email_check(email) {
    let idregex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return idregex.test(email);
}

function password_check(password) {
    let passregex = /^[a-zA-Z][A-Za-z\d@$!%*?&]{8,}$/i;
    return passregex.test(password);
}

function get_id(){
    if(true){
        decrypt_text();
    }
    else{
        var getParameters = function(paramName) {
        var retyrnValue;
        var url = location.href;
        var parameters = (url.slice(url.indexOf("?") + 1, url.length)).split('&');
        for (var i = 0; i < parameters.length; i++) {
            var varName = parameters[i].split('=')[0];

            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            }
        }
    	}
    	alert(getParameters('id') + '님 반갑습니다.');
	}
}