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
	var loginlink='<li><a href="index.html"><img src="images/accountimage.png"/>Account <span class="setting_right_icon"><img src="images/nextarrow.png"/></span></a></li>';
	if(uid!='undefined' && typeof uid!='undefined'){
		loginlink='<li><a href="index.html"><img src="images/accountimage.png"/>Logout <span class="setting_right_icon"><img src="images/nextarrow.png"/></span></a></li>';
	}
	var menu='<div id="home" class="tab-pane fade in active"><ul class="cat_links"><li><a href="category.html'+par+'&cid=0"><img src="images/1.png"/>All News</a></li><li><a href="category.html'+par+'&cid=4"><img src="images/2.png"/>Trending</a></li><li><a href="category.html'+par+'&cid=3"><img src="images/3.png"/>Top Stories</a></li><li><a href="savearticles.html'+par+'"><img src="images/4.png"/>Saved Article/Bookmarks</a></li><li><a href="unread.html'+par+'"><img src="images/5.png"/>Unread</a></li><li><a href="category.html'+par+'&cid=2"><img src="images/6.png"/>Local</a></li><li><a href="category.html'+par+'&cid=5"><img src="images/7.png"/>International</a></li><li><a href="category.html'+par+'&cid=6"><img src="images/8.png"/>Business and Finance </a></li><li><a href="category.html'+par+'&cid=7"><img src="images/9.png"/>Politics</a></li><li><a href="category.html'+par+'&cid=8"><img src="images/10.png"/>Sports</a></li><li><a href="category.html'+par+'&cid=9"><img src="images/11.png"/>Property </a></li><li><a href="category.html'+par+'&cid=10"><img src="images/12.png"/>Technology</a></li><li><a href="category.html'+par+'&cid=199"><img src="images/13.png"/>Entertainment & Gossip </a></li><li><a href="category.html'+par+'&cid=200"><img src="images/14.png"/>Movies and Series </a></li><li><a href="category.html'+par+'&cid=201"><img src="images/15.png"/>Health/Science </a></li><li><a href="category.html'+par+'&cid=202"><img src="images/16.png"/>Lifestyle</a></li><li><a href="category.html'+par+'&cid=203"><img src="images/17.png"/>Trivia</a></li><li><a href="category.html'+par+'&cid=204"><img src="images/18.png"/>Jobs</a></li><li><a href="contact-us.html'+par+'"><img src="images/19.png"/>Contact us</a></li></ul></div>';
    menu+='<div id="menu1" class="tab-pane fade"><ul class="cat_links">'+loginlink+'<li><a href="#"><img src="images/languageimage.png"/>Language<span class="setting_right_icon lang">English</span></a></li><li><a href="javascript:;"><img src="images/notificationimage.png"/>Notification<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="notificationapp"><span></span></label></div></span></a></li><li><a href="javascript:;"><img src="images/6.png"/>HD Image<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="hdimageapp"><span></span></label></div></span></a></li><li><a href="javascript:;"><img src="images/nightmode.png"/>Night Mode<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="nightmodeapp"><span></span></label></div></span></a></li><li><a href="#"><img src="images/inviteimage.png"/>Invite Friends</a></li><li><a href="#"><img src="images/rateimage.png"/>Rate App</a></li><li><a href="feedback.html'+par+'"><img src="images/feedbackimage.png"/>Feedback </a></li><li><a href="instruction.html'+par+'"><img src="images/feedbackimage.png"/>How it works </a></li></ul></div>';
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
/*window.addEventListener("orientationchange", function(){
    screen.lockOrientation('portrait');
});*/
//screen.lockOrientation('landscape');