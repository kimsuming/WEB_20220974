function logout(){
    session_del(); // 세션 삭제
    location.href='../index.html';
}