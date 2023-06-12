function addJavascript(jsname) {
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/session.js');
addJavascript('/js/cookie.js');
addJavascript('/js/security.js');


class SignUp {
	constructor(name, nickname, emailfront, emailback, password, random) {
    	this.name = name.value;
    	this.nickname = nickname.value;
    	this.emailfront = emailfront.value;
		this.emailback = emailback.value;
    	this.password = password.value;
		this.random = random;
	}

    get emailadress() {
		return `${this.emailfront}@${this.emailback}`;
  }

  set emailadress(emailadress) {
    const [emailfront, emailback] = emailadress.split(" ");
    this.emailfront = emailfront;
    this.emailback = emailback;
  }
}


function join(){ // 회원가입
    let form = document.querySelector("#joinin");
    let name = document.querySelector("#joinname");
    let nickname = document.querySelector("#joinnickname");
    let emailfront = document.querySelector("#joinemailfront");
    let emailback = document.querySelector("#joinemailback");
    let password = document.querySelector("#joinpassword");
	
    if(name.value.length === 0 || nickname.value.length === 0 || emailfront.value.length === 0 || emailback.value.lenght === 0 || password.value.length === 0){
        alert("회원가입 폼에 모든 정보를 입력해주세요.");
    }else{
		session_join_set();
        form.submit();
		form.action = "../index_join.html";
    	form.method = "get";
    }
}
