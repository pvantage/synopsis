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
setTimeout(function(){
	jQuery('#nightmodeapp').change(function(){
		if(jQuery(this).is(':checked'))
		{
			localStorage.setItem('nightmodeapp', 1);
			jQuery('body').addClass('nightmode');
		}
		else
		{
			localStorage.setItem('nightmodeapp', 0);
			jQuery('body').removeClass('nightmode');
		}
	});
},1000);
if(localStorage.getItem('nightmodeapp') != null && localStorage.getItem('nightmodeapp') != '1'){
	jQuery('body').addClass('nightmode');	
}
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

jQuery(document).ready(function(){
	localStorage.removeItem("booked");
	var bokmark='0';
	savetobookmark=function(){
			jQuery('.newsection.activenews a.bookmarks').click(function(){
				var $this=jQuery(this);
				var url2=siteurl+'/api/like.php';
				var id=jQuery(this).attr('coords');
				var bookmarked = '';
				if(localStorage.getItem('bookmarked') != null){	   
				   bookmarked = localStorage.getItem('bookmarked');	
				  // alert(bookmarked);	
				}
				if(!jQuery(this).hasClass('bookedmarked'))
				{
					if(localStorage.getItem('bookmarked') == null){	   
					   var bookmarked = id;		
					}else{		
						var bookmarked = localStorage.getItem('bookmarked')+','+id;
					}
					jQuery(this).addClass('bookedmarked');
					jQuery('.activenews footer .source').append('<span class="msgnotification">News bookmarked</span>');
					
				}
				else
				{
					var bookmarked2=bookmarked.split(',');
					var index=bookmarked2.indexOf(id);
					if(parseInt(index)>=0)
					{
						bookmarked2.splice(index, 1);
						if(parseInt(bookmarked2.length)>0){
							var bookmarked='';
							for(i=0;i<bookmarked2.length;i++)
							{
								if(i=='0')
								{
									bookmarked=bookmarked2[i];
								}
								else
								{
									bookmarked=bookmarked+','+bookmarked2[i];
								}
							}
						}
						//unreadnews = localStorage.getItem('bookmarked')+','+jQuery(this).next('div').attr('news-id');
					}
					jQuery(this).removeClass('bookedmarked');
					jQuery('.activenews footer .source').append('<span class="msgnotification">Removeed bookmark</span>');
					
				}
				localStorage.setItem('bookmarked', bookmarked);
				
				setTimeout(function(){
					jQuery('.newsection footer .source span.msgnotification').remove();
				},700);
			});
		},
		likenews=function(){
			jQuery('.activenews a.likethis').click(function(){
				var $this=jQuery(this);
				var url2=siteurl+'/api/like.php';
				var id=jQuery(this).attr('coords');
				jQuery.ajax({ 
				 type: 'POST',  
				 url: url2,  
				 dataType: 'json',  
				 data: {device_id:device_id,id:id},  
				 crossDomain: true,  
				 beforeSend: function() {
				 },		
				 complete: function() {
					
				 },
				 success: function(res) {  
					if(parseInt(res['total_like'][0]['count'])>=0)
					{
						if(res['total_like'][0]['news_like']){
							jQuery($this).addClass('liked');
						}else{jQuery($this).removeClass('liked');}
						var likes=' Like';
						if(parseInt(res['total_like'][0]['count'])>0){
							likes=res['total_like'][0]['count']+' Like';
							if(parseInt(res['total_like'][0]['count'])>1){
								likes=res['total_like'][0]['count']+' Likes';
							}
						}
						
						jQuery($this).html('<img src="images/like.png"> '+likes);
					}
					
				 },  
				 error: function(response, d, a){
					
				 } 
			   });
			});
		},
		loadagainnews=function(){
			jQuery('a.loadnewnews').click(function(){
				jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/16px_grey.gif"></a>');
					setTimeout(function(){
						jQuery('.newsection').removeClass('latestnews');
						jQuery('.newsection').removeClass('activenews');
						jQuery('.newsection:first').addClass('activenews');
						var th=jQuery('.activenews');
						swipnews(th);
						jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/221.png"></a>');
						loadagainnews();
					},1000);
			});
		},
		
		sharenews=function(){
			jQuery('.activenews a.sharenews').click(function(){
				var title=jQuery(this).attr('data-title');
				var durl=jQuery(this).attr('data-url');
				var dtext=jQuery(this).attr('data-text');
				var dimg=jQuery(this).attr('data-img');
				dtext="Save time. Download Synopsis,It's highest rated news app, to read news in 80 words.";
				//alert(dtext);
				window.plugins.socialsharing.share(dtext,title,dimg,durl);
			});
		},
		swipnews=function(th){
			jQuery(th).swipe( {
				//Generic swipe handler for all directions
				swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
					responsiveVoice.cancel();
					jQuery('.activenews a.speakthis').removeClass('activespeach');
					//console.log( direction );
					if(direction=='up'){
						if(localStorage.getItem('unreadnews') == null){	   
						   var unreadnews = jQuery(this).attr('news-id');		
						}else{		
							var unreadnews = localStorage.getItem('unreadnews')+','+jQuery(this).attr('news-id');
							
						}
						unreadnews2=unreadnews.split(',');
						var newxtnewsid=jQuery(this).next('div').attr('news-id');
						if(parseInt(unreadnews2.indexOf(newxtnewsid))<0)
						{
							unreadnews = localStorage.getItem('unreadnews')+','+jQuery(this).next('div').attr('news-id');
						}
						localStorage.setItem('unreadnews', unreadnews);
						if(jQuery(this).next('div').hasClass('newsection'))
						{
							jQuery(this).next('div').addClass('activenews');
							jQuery(this).slideUp(500,function(){
								jQuery('.newsection').removeAttr('style');jQuery(this).removeClass('activenews');
								th=jQuery('.activenews');
								swipnews(th);
								
								var lastnewsid=jQuery('.allnews .newsection:first').attr('news-id');
								var lastnewsid2=jQuery('.allnews .activenews').attr('news-id');
								if(localStorage.getItem("booked")!=null)
								{
									bokmark=localStorage.getItem("booked");
								}
								var bookmarked2=bokmark.split(',');
								var index=bookmarked2.indexOf(lastnewsid2);
								if(parseInt(index)<0)
								{
									savetobookmark();
									likenews();
									sharenews();
								}
								bokmark=bokmark+','+lastnewsid2;
								localStorage.setItem("booked",bokmark);
								if(lastnewsid!=lastnewsid2){
									jQuery('.header_right_news').html('<a href="javascript:;" class="gototopnews"><img src="images/toparrow.png"></a>');
								}
								else
								{
									jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/221.png"></a>');
									
								}
								jQuery('a.gototopnews').click(function(){
									jQuery("html, body").animate({ scrollTop: 0 }, 1000,function(){
										if(jQuery('.allnews .latestnews:last').next('div').hasClass('newsection'))
										{
											jQuery('.allnews .latestnews:last').next('.newsection').addClass('activenews');
											jQuery('.newsection').removeClass('activenews');
										}
										else
										{
											jQuery('.newsection').removeClass('activenews');
											jQuery('.allnews .newsection:first').addClass('activenews');
										}
										jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/221.png"></a>');
										loadagainnews();
									});
								});
							});
							
						}
						
						
						
					}
					else if(direction=='down'){
						if(jQuery(this).prev('div').hasClass('newsection'))
						{
							jQuery(this).prev('div').addClass('activenews');
							jQuery(this).slideDown(1000,function(){
								jQuery('.newsection').removeAttr('style');
								jQuery(this).removeClass('activenews');
								th=jQuery('.activenews');
								swipnews(th);
							});
							/*jQuery(this).animate({
								height: "100px"
							}, 2000, "swing", function(){
								jQuery('.newsection').removeAttr('style');
								jQuery(this).removeClass('activenews');
								th=jQuery('.activenews');
								swipnews(th);
							});*/
							
						}
						var lastnewsid=jQuery('.allnews .newsection:first').attr('news-id');
						var lastnewsid2=jQuery('.allnews .activenews').attr('news-id');
						if(lastnewsid==lastnewsid2){
							jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/221.png"></a>');
							loadagainnews();
						}
					}
					//likenews();
					//savetobookmark();
					//sharenews();
					jQuery('.activenews .new_detail_section, .activenews .new_des_content').click(function(){
						jQuery("header").toggle();
					});
					jQuery('.activenews a.speakthis').click(function(){
						var sptext=jQuery(this).attr('data');
						if(jQuery(this).hasClass('activespeach'))
						{
							responsiveVoice.cancel();
							jQuery(this).removeClass('activespeach');
						}
						else
						{
							responsiveVoice.speak(sptext);
							jQuery(this).addClass('activespeach');
						}
						return false;
					});
				}
				
			});
		}
		
});