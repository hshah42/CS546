(function() {
	function isPalindrome(input)
	{
		input = input.replace(/\s/g, '');
		input = input.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()?’@]/g,'');
		if(input.length==0)
			{
				return false;
			}
		input=input.toLowerCase();
		console.log(input);
		for(let i=0; i<input.length; i++)
			{
				if(input[i]!=input[(input.length-1)-i])
					{
						return false
					}
			}
		return true;
	}
    
    const staticForm = document.getElementById("palindrome-checker");
	const palindrome = document.getElementsByName("phrase")[0];


    staticForm.addEventListener("submit", event => { 
	const realVal = palindrome.value;
	console.log(realVal);    	
    });



})();