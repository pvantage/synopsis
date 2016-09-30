var siteurl = "http://www.synopsis.yantradigital.com";

function gup(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
function sitemenus()
{
	var par='?uid='+uid;
	var loginlink='<li><a href="index.html"><div class="cat_img"><img src="images/accountimage.png"/></div>Account <span class="setting_right_icon"><img src="images/nextarrow.png"/></span></a></li>';
	if(uid!='undefined' && typeof uid!='undefined'){
		loginlink='<li><a href="index.html"><img src="images/accountimage.png"/>Logout <span class="setting_right_icon"><img src="images/nextarrow.png"/></span></a></li>';
	}
	var menu='<div id="home" class="tab-pane fade in active"><ul class="cat_links"><li><a href="category.html'+par+'&cid=0"><div class="cat_img"><img src="images/1.png"/></div>All News</a></li><li><a href="category.html'+par+'&cid=4"><div class="cat_img"><img src="images/2.png"/></div>Trending</a></li><li><a href="category.html'+par+'&cid=3"><div class="cat_img"><img src="images/3.png"/></div>Top Stories</a></li><li><a href="savearticles.html'+par+'"><div class="cat_img"><img src="images/4.png"/></div>Saved Article/Bookmarks</a></li><li><a href="unread.html'+par+'"><div class="cat_img"><img src="images/5.png"/></div>Unread</a></li><li><a href="category.html'+par+'&cid=2"><div class="cat_img"><img src="images/6.png"/></div>Local</a></li><li><a href="category.html'+par+'&cid=5"><div class="cat_img"><img src="images/7.png"/></div>International</a></li><li><a href="category.html'+par+'&cid=6"><div class="cat_img"><img src="images/8.png"/></div>Business and Finance </a></li><li><a href="category.html'+par+'&cid=7"><div class="cat_img"><img src="images/9.png"/></div>Politics</a></li><li><a href="category.html'+par+'&cid=8"><div class="cat_img"><img src="images/10.png"/></div>Sports</a></li><li><a href="category.html'+par+'&cid=9"><div class="cat_img"><img src="images/11.png"/></div>Property </a></li><li><a href="category.html'+par+'&cid=10"><div class="cat_img"><img src="images/12.png"/></div>Technology</a></li><li><a href="category.html'+par+'&cid=199"><div class="cat_img"><img src="images/13.png"/></div>Entertainment & Gossip </a></li><li><a href="category.html'+par+'&cid=200"><div class="cat_img"><img src="images/14.png"/></div>Movies and Series </a></li><li><a href="category.html'+par+'&cid=201"><div class="cat_img"><img src="images/15.png"/></div>Health/Science </a></li><li><a href="category.html'+par+'&cid=202"><div class="cat_img"><img src="images/16.png"/></div>Lifestyle</a></li><li><a href="category.html'+par+'&cid=203"><div class="cat_img"><img src="images/17.png"/></div>Trivia</a></li><li><a href="category.html'+par+'&cid=204"><div class="cat_img"><img src="images/18.png"/></div>Jobs</a></li><li><a href="contact-us.html'+par+'"><div class="cat_img"><img src="images/19.png"/></div>Contact us</a></li></ul></div>';
    menu+='<div id="menu1" class="tab-pane fade"><ul class="cat_links">'+loginlink+'<li><a href="#"><div class="cat_img"><img src="images/languageimage.png"/></div>Language<span class="setting_right_icon lang">English</span></a></li><li><a href="javascript:;"><div class="cat_img"><img src="images/notificationimage.png"/></div>Notification<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="notificationapp"><span></span></label></div></span></a></li><li><a href="javascript:;"><div class="cat_img"><img src="images/6.png"/></div>HD Image<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="hdimageapp"><span></span></label></div></span></a></li><li><a href="javascript:;"><div class="cat_img"><img src="images/nightmode.png"/></div>Night Mode<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="nightmodeapp"><span></span></label></div></span></a></li><li><a href="#" class="invitefrnds"><div class="cat_img"><img src="images/inviteimage.png"/></div>Invite Friends</a></li><li><a href="http://www.apple.com"><div class="cat_img"><img src="images/rateimage.png"/></div>Rate App</a></li><li><a href="feedback.html'+par+'"><div class="cat_img"><img src="images/feedbackimage.png"/></div>Feedback </a></li><li><a href="instruction.html'+par+'"><div class="cat_img"><img src="images/howitwork.png"/></div>How it works </a></li></ul></div>';
	
	menu+='<footer class="afterlogin menufooter"><div class="footer_section"><hr><div class="ftr_logo"><img src="images/footerlogo.png"/></div></div></footer>';
	return menu;
}

var uid=gup('uid');


function checkloggedin(uid)
{
	
	var url=siteurl+'/api/register.php';
	
	jQuery.ajax({  
	 type: 'POST',  
	 url: url,  
	 //contentType: contentType,  
	 dataType: 'json',  
	 data: {account_type:'checkuserexist',uid:uid},  
	 crossDomain: true,  
	 beforeSend: function() {
							
	 },		
	 complete: function() {
		jQuery('body .bodyoverlay').remove();
		jQuery('body .preloader').remove();					
	 },
	 success: function(res) {  
	   if(res['success'][0]['message']=='Invalid userid')
	   {
		//window.location='index.html';   
	   }
		return false;
	 },  
	 error: function(response, d, a){
		jQuery('body .bodyoverlay').remove();
		jQuery('body .popupbox').remove();
		var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
		jQuery('body').append(html);
		
		jQuery('.okbox').click(function(){
			jQuery('body .bodyoverlay').remove();
			jQuery('body .popupbox').remove();
		}); 
		
	 } 
   });
		
}
jQuery(document).ready(function(){
	jQuery(".menu_box").click(function(){
		if(jQuery(".wrapper header:first").hasClass('opened'))
		{
			jQuery(".wrapper header:first").removeClass('opened');
			jQuery('.header_right_news').show();
		}
		else
		{
			jQuery(".wrapper header:first").addClass('opened');
			jQuery('.header_right_news').hide();
		}
	});
});
/*window.addEventListener("orientationchange", function(){
    screen.lockOrientation('portrait');
});*/
//screen.lockOrientation('landscape');

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startfblogin").addEventListener("touchend", startfblogin, false);
}
function startfblogin()
{
	
	facebookConnectPlugin.login(["public_profile"],
		fbLoginSuccess,
		function (error) { 
			alert("Error: " + JSON.stringify(error));
		}
	);
}
var fbLoginSuccess = function (userData) {
    facebookConnectPlugin.getAccessToken(function(token) {
        //alert("Token: " + token);
    }, function(err) {
        alert("Could not get access token: " + err);
    });
	facebookConnectPlugin.api('/me?fields=email,name,id', null,
	 function(response) {
		
		var url=siteurl+'/api/fb.php';
		$.ajax({
			type: "POST",
			 url: url,
			data: response,
			dataType: 'json',
			success: function(res){                            
				if(res['success'][0]['message']=='You have login successfully' || res['success'][0]['message']=='You have registered successfully')
				{
					
					window.location ='category.html?uid='+res['success'][0]['user_id']+'&cid=0';
				
					//localStorage.setItem('userInfo', res['success']['userid']);
					//window.location ='category.html';
				}else if(res['success'][0]['message']=='Invalid email or password'){				
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
					var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="images/error.png" /></div><h1 class="success">ERROR</h1><h1>'+res['checklogin']['error']+'</h1><button class="okbox">OK</button></div>';
					jQuery('body').append(html);
					
					jQuery('.okbox').click(function(){
						jQuery('body .bodyoverlay').remove();
						jQuery('body .popupbox').remove();
					});
					
				}
				else
				{
					alert('Server error');
				}
				return false; 
				
			}
		});
	 });
}

setTimeout(function(){
	jQuery('.cat_links .invitefrnds').click(function(){
		var durl='http://synopsis.yantradigital.com';
		window.plugins.socialsharing.share(null,null,null,durl);									 
	});
},1000);