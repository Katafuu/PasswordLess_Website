function getCookieToken() {
	let cookies = document.cookie.split(';');
	for(let i = 0; i < cookies.length; i++) {
	  cookies[i] = cookies[i].split('=')
	};
	for (let x = 0; x < cookies.length; x++){
	  if (cookies[x][0].trim() == 'token') {
		  return cookies[x][1];
	  }
	};
};

if (getCookieToken()) {
  location.replace('https://passwordless.duckdns.org/managecreds.html')
}
else {
  location.replace('https://passwordless.duckdns.org/loginsignup.html')
};