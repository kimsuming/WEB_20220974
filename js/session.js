function session_set(){
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let random = new Date();
    
    const obj = {
    id : id.value,
    otp : random
    }
    
    if (sessionStorage) {
        const objString = JSON.stringify(obj);
        let en_text = encrypt_text(objString);
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encrypted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }   
}


function session_get() { //세션 읽기
    if (sessionStorage) {
       return sessionStorage.getItem("Session_Storage_encrypted");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_object")) {
        alert("이미 로그인 되었습니다.");
        location.href='index_login.html';
	}
}

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
    session_check(); // 세션 유무 검사
}

function session_del() {
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_object");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_join_set(){   
    let name = document.querySelector("#joinname");
    let nickname = document.querySelector("#joinnickname");
    let emailfront = document.querySelector("#joinemailfront");
    let emailback = document.querySelector("#joinemailback");
    let password = document.querySelector("#joinpassword");
    let random = new Date();
	
    const newSignUp = new SignUp(name, nickname, emailfront, emailback, password, random);
    console.log(newSignUp.emailadress);
    
    if (sessionStorage) {
        const objString = JSON.stringify(newSignUp);
        let en_text = encrypt_text(objString);
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encryted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }   
}
