function getCookieToken() {
	let cookies = document.cookie.split(';');
	for(i = 0; i < cookies.length; i++) {
	  cookies[i] = cookies[i].split('=')
	};
	for (x = 0; x < cookies.length; x++){
	  if (cookies[x][0] == 'token') {
		return cookies[x][1];
	  };
	};
};

function setToken(token) {
  const d = new Date();
  d.setTime(d.getTime()+30*1000)  // 30 mins expiry
  document.cookie = "name=token" + ";token="+token + ";expires="+d.toUTCString() + ";path=/"+";"+";samesite=strict";
};

function tokenRedirectCheck() {
  if (getCookieToken()) {
    location.replace('https://passwordless.duckdns.org/managepwds.html')
  }
  else {
    location.replace('https://passwordless.duckdns.org/loginsignup.html')
  };
};

function checkTokenExists() {
  if (getCookieToken()) {
    location.replace('https://passwordless.duckdns.org/managepwds.html')
  }
  else {
    pass;
  };
};

export {checkTokenExists, getCookieToken, setToken, tokenRedirectCheck}