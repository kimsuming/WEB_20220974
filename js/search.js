document.getElementById("search_btn").addEventListener('click', search_message);

var Not_allowed = ["냠냠","쩝쩝","꿀꺽"];
var blocked = false;
message = [];

function search_message()
{
    let search_str = document.querySelector("#search_txt");
    
	if (search_str.value.length === 0)
	{
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
	
	else 
	{
    	for (var n = 0; n < Not_allowed.length; n++)
		{
			if (search_str.value.includes(Not_allowed[n]))
			{
				alert("유효하지 않은 검색어입니다.");
				blocked = true;
				break;
			}
		}
		
		if (blocked == false)
		{
			alert("검색을 수행합니다!");
   			console.log(search_str.value); 
			document.querySelector("#form_main").submit();
			
			message.push(search_str.value);
			
			if (message.length > 5){
				message.shift();
			}
			document.querySelector("#search_message").innerHTML = message;
		}
	}
	blocked = false;
}