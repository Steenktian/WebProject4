	function openNav(){
		document.getElementById("scrollbar").style.width = "250px";
	}
	function closeNav() {
		document.getElementById ("scrollbar").style.width = "0";
	}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1743289395935898',
      xfbml      : true,
      version    : 'v2.8'
    });

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        document.getElementById('status').innerHTML = '';
        document.getElementById('login').style.visibility = 'hidden';
      } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = '';
      } 
      else{
        document.getElementById('status').innerHTML = "";
      }
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function login(){
    FB.login(function(response){
       if (response.status === 'connected') {
        document.getElementById('status').innerHTML = '';
        document.getElementById('login').style.visibility = 'hidden';
      } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = '';
      } 
      else{
        document.getElementById('status').innerHTML = "";
      }
    }, {scope: 'email'});
  }