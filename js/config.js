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
	var loginlink='<li><a href="index.html" class="closedaccountmenu"><div class="cat_img"><img src="images/accountimage.png"/></div>Account <span class="setting_right_icon"><img src="images/expendsarrow.png"/></span></a><ul class="social-media" style="display:none;"><li><a href="index.html"><div class="social_img gmail"><img src="images/ac_email.png"/></div>Connect with email</a></li><li><a href="index.html"><div class="social_img fb"><img src="images/ac_fb.png"/></div>Connect with facebook</a></li><li><a href="index.html"><div class="social_img gplus"><img src="images/ac_gplush.png"/></div>Connect with G+</a></li><li><a href="index.html"><div class="social_img twitter"><img src="images/ac_twitter.png"/></div>Connect with twitter</a></li></ul></li>';
	if(uid!='undefined' && typeof uid!='undefined'){
		
		if(localStorage.getItem('displayname')!=null){
			if(localStorage.getItem('displayimg')!=null && localStorage.getItem('displayimg')!=''){
				loginlink='<li><a href="index.html" class="closedaccountmenu"><div class="cat_img"><img src="images/accountimage.png"/></div>Account <span class="setting_right_icon"><img src="images/expendsarrow.png"/></span></a><ul class="social-media activeprofile" style="display:none;"><li><div class="social_img gmail">'+localStorage.getItem('displayimg')+' '+localStorage.getItem('displayname')+'</div><a href="index.html">Logout</a></li></ul></li>';
			}
			else
			{
				loginlink='<li><a href="index.html" class="closedaccountmenu"><div class="cat_img"><img src="images/accountimage.png"/></div>Account <span class="setting_right_icon"><img src="images/expendsarrow.png"/></span></a><ul class="social-media activeprofile" style="display:none;"><li><div class="social_img gmail"><img src="images/ac_email.png" /> '+localStorage.getItem('displayname')+'</div><a href="index.html">Logout</a></li></ul></li>';
			}
		}
		else
		{
			loginlink='<li><a href="index.html" id="applogout"><div class="cat_img"><img src="images/accountimage.png"/></div>Logout <span class="setting_right_icon"><img src="images/nextarrow.png"/></span></a></li>';
		}
	}
	var menu='<div id="home" class="tab-pane fade in active"><ul class="cat_links"><li><a href="category.html'+par+'&cid=0"><div class="cat_img"><img src="images/1.png"/></div>All News</a></li><li><a href="category.html'+par+'&cid=4"><div class="cat_img"><img src="images/2.png"/></div>Trending</a></li><li><a href="category.html'+par+'&cid=3"><div class="cat_img"><img src="images/3.png"/></div>Top Stories</a></li><li><a href="savearticles.html'+par+'"><div class="cat_img"><img src="images/4.png"/></div>Saved Article/Bookmarks</a></li><li><a href="unread.html'+par+'"><div class="cat_img"><img src="images/5.png"/></div>Unread</a></li><li><a href="category.html'+par+'&cid=2"><div class="cat_img"><img src="images/6.png"/></div>Local</a></li><li><a href="category.html'+par+'&cid=5"><div class="cat_img"><img src="images/7.png"/></div>International</a></li><li><a href="category.html'+par+'&cid=6"><div class="cat_img"><img src="images/8.png"/></div>Business and Finance </a></li><li><a href="category.html'+par+'&cid=7"><div class="cat_img"><img src="images/9.png"/></div>Politics</a></li><li><a href="category.html'+par+'&cid=8"><div class="cat_img"><img src="images/10.png"/></div>Sports</a></li><li><a href="category.html'+par+'&cid=9"><div class="cat_img"><img src="images/11.png"/></div>Property </a></li><li><a href="category.html'+par+'&cid=10"><div class="cat_img"><img src="images/12.png"/></div>Technology</a></li><li><a href="category.html'+par+'&cid=199"><div class="cat_img"><img src="images/13.png"/></div>Entertainment & Gossip </a></li><li><a href="category.html'+par+'&cid=200"><div class="cat_img"><img src="images/14.png"/></div>Movies and Series </a></li><li><a href="category.html'+par+'&cid=201"><div class="cat_img"><img src="images/15.png"/></div>Health/Science </a></li><li><a href="category.html'+par+'&cid=202"><div class="cat_img"><img src="images/16.png"/></div>Lifestyle</a></li><li><a href="category.html'+par+'&cid=203"><div class="cat_img"><img src="images/17.png"/></div>Trivia</a></li><li><a href="category.html'+par+'&cid=204"><div class="cat_img"><img src="images/18.png"/></div>Jobs</a></li><li><a href="contact-us.html'+par+'"><div class="cat_img"><img src="images/19.png"/></div>Contact us</a></li></ul></div>';
    menu+='<div id="menu1" class="tab-pane fade"><ul class="cat_links">'+loginlink+'<li><a href="#"><div class="cat_img"><img src="images/languageimage.png"/></div>Language<span class="setting_right_icon lang">English</span></a></li><li><a href="javascript:;"><div class="cat_img"><img src="images/notificationimage.png"/></div>Notification<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="notificationapp"><span></span></label></div></span></a></li><li><a href="javascript:;"><div class="cat_img"><img src="images/6.png"/></div>HD Image<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="hdimageapp"><span></span></label></div></span></a></li><li><a href="javascript:;"><div class="cat_img"><img src="images/nightmode.png"/></div>Night Mode<span class="setting_right_icon"><div class="checkbox checkbox-slider--c checkbox-slider-lg"><label><input type="checkbox" id="nightmodeapp"><span></span></label></div></span></a></li><li><a href="#" class="invitefrnds"><div class="cat_img"><img src="images/inviteimage.png"/></div>Invite Friends</a></li><li><a href="javascript:;" id="ratingapp"><div class="cat_img"><img src="images/rateimage.png"/></div>Rate App</a></li><li><a href="feedback.html'+par+'"><div class="cat_img"><img src="images/feedbackimage.png"/></div>Feedback </a></li><li><a href="instruction.html'+par+'"><div class="cat_img"><img src="images/howitwork.png"/></div>How it works </a></li></ul></div>';
	
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
		jQuery('footer .source').append('<span class="msgnotification">Server error</span>');
		setTimeout(function(){
			jQuery('footer .source span.msgnotification').remove();
		},700);
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
	localStorage.setItem('device_id', device.uuid);
	document.querySelector("#startfblogin").addEventListener("touchend", startfblogin, false);
	document.querySelector("#starttwitterlogin").addEventListener("touchend", twitterlogedin, false);
	document.querySelector("#startgplogin").addEventListener("touchend", gplogedin, false);
	document.querySelector("#applogout").addEventListener("touchend", applogout, false);
	
}
function applogout(){
	TwitterConnect.logout(
	  function() {
		alert('Successful logout!');
	  },
	  function() {
		alert('Error logging out');
	  }
	);
	CordovaFacebook.logout({
	   onSuccess: function() {
		  alert("The user is now logged out");
	   }
	});
}
function gplogedin()
{
	var html='<div class="bodyoverlay"></div><div class="preloader"></div>';
	jQuery('body').append(html);
		window.plugins.googleplus.login(
		{
		  'scopes': 'profile', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
		  'webClientId': '250337148939-2iq3in6at1687m1lhurgsev8db1l6m9b.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
		  'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
		},
		function (obj) {
		   jQuery('body .preloader').remove();
		  jQuery('body .bodyoverlay').remove();
		 // alert(JSON.stringify(obj)); // do something useful instead of alerting
		  //alert(obj.email);
		  var url=siteurl+'/api/register.php';
			var location='';
			if(localStorage.getItem('countrycode')!=null){
				location=localStorage.getItem('countrycode');
			}
			$.ajax({
				type: "POST",
				 url: url,
				data: {account_type:'google_plus',email:obj.email,first_name:obj.displayName,location:location},
				dataType: 'json',
				success: function(res){                            
					if(res['success'][0]['message']=='Login successfully' || res['success'][0]['message']=='You have registered successfully')
					{
						localStorage.setItem('displayname',obj.displayName);
						localStorage.setItem('displayimg','<img src="'+obj.imageUrl+'" />');
						window.location ='instruction.html?uid='+res['success'][0]['user_id'];
					
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
		},
		function (msg) {
		  jQuery('body .preloader').remove();
		  jQuery('body .bodyoverlay').remove();
		  alert('error: ' + msg);
		}
	);
		
}
function twitterlogedin()
{
	var html='<div class="bodyoverlay"></div><div class="preloader"></div>';
	jQuery('body').append(html);
	TwitterConnect.login(
	  function(result) {
		jQuery('body .preloader').remove();
		jQuery('body .bodyoverlay').remove();
		 //alert(result['userName']);
		var url=siteurl+'/api/register.php';
		var location='';
		if(localStorage.getItem('countrycode')!=null){
			location=localStorage.getItem('countrycode');
		}
		$.ajax({
			type: "POST",
			 url: url,
			data: {account_type:'twitter',email:result['userId'],first_name:result['userName'],location:location},
			dataType: 'json',
			success: function(res){                            
				if(res['success'][0]['message']=='Login successfully' || res['success'][0]['message']=='You have registered successfully')
				{
					localStorage.setItem('displayname',result['userName']);
					localStorage.setItem('displayimg','<img src="https://pbs.twimg.com/profile_images/'+result['userId']+'/buddy_normal.jpg" />');
					
					window.location ='instruction.html?uid='+res['success'][0]['user_id'];
				
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
	  }, function(error) {
		alert('Twitter login error: '+error);
	  }
	);	
}
function startfblogin()
{
	
	CordovaFacebook.login({
	   permissions: ['email', 'user_likes'],
	   onSuccess: function(result) {
		  if(result.declined.length > 0) {
			 alert("The User declined something!");
		  }
		  //alert(result);
		  alert(result.userID);
		  alert(result.data.email);
		  alert(result.data.name);
		  alert(result.data.id);
		  alert(result.data.first_name);
		  /* ... */
	   },
	   onFailure: function(result) {
		  if(result.cancelled) {
			 alert("The user doesn't like my app");
		  } else if(result.error) {
			 alert("There was an error:" + result.errorLocalized);
		  }
	   }
	});
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
	jQuery('.cat_links #ratingapp').click(function(){
		window.location='iframe.html?url=http://www.goople.com';
		return false;
	});
	jQuery('.cat_links .closedaccountmenu').click(function(){
		if(jQuery(this).hasClass('open'))
		{
			jQuery(this).next('ul').hide();	
			jQuery('.setting_right_icon',this).html('<img src="images/expendsarrow.png"/>');
			jQuery(this).removeClass('open');
		}
		else
		{
			jQuery(this).next('ul').show();	
			jQuery('.setting_right_icon',this).html('<img src="images/uparrow.png"/>');
			jQuery(this).addClass('open');	
		}
		return false;
	});
},1000);

jQuery(document).ready(function(){
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
		jQuery('#hdimageapp').change(function(){
			if(jQuery(this).is(':checked'))
			{
				localStorage.setItem('hdimageapp', 1);
			}
			else
			{
				localStorage.setItem('hdimageapp', 0);
			}
		});
		jQuery('#notificationapp').change(function(){
			
			if(jQuery(this).is(':checked'))
			{
				localStorage.setItem('notificationapp', 1);
				var notification=1;
			}
			else
			{
				localStorage.setItem('notificationapp', 0);
				var notification=0;
			}
			var $this=jQuery(this);
			var url2=siteurl+'/api/notification.php';
			var device_id=localStorage.getItem('device_id');
			jQuery.ajax({ 
			 type: 'POST',  
			 url: url2,  
			 dataType: 'json',  
			 data: {device_id:device_id,notification:notification},  
			 crossDomain: true,  
			 beforeSend: function() {
			 },		
			 complete: function() {
				
			 },
			 success: function(res) {  
				
				
			 },  
			 error: function(response, d, a){
				
			 } 
		   });
		});
		
	},1000);
	if(localStorage.getItem('notificationapp') != null && localStorage.getItem('notificationapp') == '1'){
		jQuery('#notificationapp').attr('checked',true);
	}
	if(localStorage.getItem('nightmodeapp') != null && localStorage.getItem('nightmodeapp') == '1'){
		jQuery('#nightmodeapp').attr('checked',true);
		jQuery('body').addClass('nightmode');	
	}
	if(localStorage.getItem('hdimageapp') != null && localStorage.getItem('hdimageapp') == '1'){
		jQuery('#hdimageapp').attr('checked',true);
	}
	localStorage.removeItem("booked");
	var bokmark='0';
	newsspeach=function(){
		jQuery('.activenews a.speakthis').click(function(){
			
			var sptext=jQuery(this).attr('data');
			var $tis=jQuery(this);
			if(jQuery(this).hasClass('activespeach'))
			{
				responsiveVoice.cancel();
				jQuery(this).removeClass('activespeach');
			}
			else
			{
				responsiveVoice.speak(sptext, "UK English Female",{onstart: function(){}, onend: function(){jQuery($tis).removeClass('activespeach');}});
				jQuery(this).addClass('activespeach');
			}
			return false;
		});
		jQuery('.activenews .source a').click(function(){
			var hrf=jQuery(this).attr('href');
			window.location='iframe.html?url='+hrf;
			
			//var ref = window.open(hrf, '_blank');
			//ref.close();
			return false;
		});
	},
	savetobookmark=function(){
			jQuery('.newsection.activenews a.bookmarks').click(function(){
				var $this=jQuery(this);
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
					var nws=jQuery('.newsection.activenews').html();
					nws='<div class="newsection" news-id="'+id+'">'+nws+'</div>';
					localStorage.setItem('bookmarked_news_'+id, nws);
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
					jQuery('.activenews footer .source').append('<span class="msgnotification">Bookmark removed</span>');
					localStorage.removeItem('bookmarked_news_'+id);
					
				}
				localStorage.setItem('bookmarked', bookmarked);
				
				setTimeout(function(){
					jQuery('.newsection footer .source span.msgnotification').remove();
				},700);
			});
		},
		likenews=function(device_id){
			var device_id=jQuery('#device_id').val();
			jQuery('.newsection.activenews a.likethis').click(function(){
			    //alert(device_id);						   
				var $this=jQuery(this);
				var url2=siteurl+'/api/like.php';
				var id=jQuery(this).attr('coords');
				var totallikes=jQuery(this).attr('data-like');
				if(!jQuery(this).hasClass('liked')){
					jQuery(this).addClass('liked');
					totallikes=parseInt(totallikes)+1;
				}else{
					jQuery(this).removeClass('liked');
					totallikes=parseInt(totallikes)-1;
				}
				var likes=' Like';
				if(parseInt(totallikes)>0){
					likes=totallikes+' Like';
					if(parseInt(totallikes)>1){
						likes=totallikes+' Likes';
					}
				}
				//alert(totallikes);
				jQuery($this).html('<img src="images/like.png"> '+likes);
				jQuery(this).attr('data-like',totallikes);
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
						
						/*var likes=' Like';
						if(parseInt(res['total_like'][0]['count'])>0){
							likes=res['total_like'][0]['count']+' Like';
							if(parseInt(res['total_like'][0]['count'])>1){
								likes=res['total_like'][0]['count']+' Likes';
							}
						}*/
						
						//jQuery($this).html('<img src="images/like.png"> '+likes);
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
						jQuery('.latestnews:first').addClass('firstload');
						jQuery('.firstload').removeClass('latestnews');
						jQuery('.firstload').addClass('activenews');
						jQuery('.latestnews').removeClass('activenews');
						jQuery('.newsection').removeClass('latestnews');
						
						var th=jQuery('.activenews');
						swipnews(th);
						jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/221.png"></a>');
						loadagainnews();
						localStorage.removeItem('unreadednews_'+jQuery('.allnews .activenews').attr('news-id'));
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
		swipnews=function(th,device_id){
			var device_id=jQuery('#device_id').val();
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
						localStorage.removeItem('unreadednews_'+jQuery(this).attr('news-id'));
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
								localStorage.removeItem('unreadednews_'+lastnewsid2);
								var bookmarked2=bokmark.split(',');
								var index=bookmarked2.indexOf(lastnewsid2);
								if(parseInt(index)<0)
								{
									savetobookmark();
									likenews(device_id);
									sharenews();
									newsspeach();
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
											jQuery('.latestnews:first').addClass('firstload');
											jQuery('.firstload').removeClass('latestnews');
											jQuery('.firstload').addClass('activenews');
											jQuery('.latestnews').removeClass('activenews');
											jQuery('.newsection').removeClass('latestnews');
											newsspeach();
										}
										else
										{
											jQuery('.newsection').removeClass('activenews');
											jQuery('.allnews .newsection:first').addClass('activenews');
										}
										jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/221.png"></a>');
										loadagainnews();
										localStorage.removeItem('unreadednews_'+jQuery('.allnews .activenews').attr('news-id'));
									});
								});
							});
							
						}
						
						
						
					}
					else if(direction=='down'){
						if(jQuery(this).prev('div').hasClass('newsection'))
						{
							jQuery(this).prev('div').addClass('activenews');
							jQuery(this).slideDown('slow',function(){
								jQuery('.newsection').removeAttr('style');
								jQuery(this).removeClass('activenews');
								th=jQuery('.activenews');
								swipnews(th);
							}).delay(1500);
							
							
						}
						var lastnewsid=jQuery('.allnews .newsection:first').attr('news-id');
						var lastnewsid2=jQuery('.allnews .activenews').attr('news-id');
						if(lastnewsid==lastnewsid2){
							jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews"><img src="images/221.png"></a>');
							loadagainnews();
						}
					}
					localStorage.removeItem('unreadednews_'+jQuery('.allnews .activenews').attr('news-id'));
					jQuery('.activenews .new_detail_section, .activenews .new_des_content').click(function(){
						jQuery("header").toggle();
					});
					
				}
				
			});
		},
		latestnews=function(cid,page,device_id,location){
			var allnewsids =localStorage.getItem('allnewsids');
			var device_id=jQuery('#device_id').val();
			var lurl=siteurl+'/api/latest.php';
			var loadedlatestnews =localStorage.getItem('loadedlatestnews_'+cid);
			if(loadedlatestnews==null){
				loadedlatestnews=0;	
			}
			jQuery.ajax({ 
			 type: 'POST',  
			 url: lurl,  
			 dataType: 'json',  
			 data: {cid:cid,location:location,device_id:device_id,cid_array:loadedlatestnews},  
			 crossDomain: true,  
			 beforeSend: function() {
			 },		
			 complete: function() {
				
				jQuery('body .preloader').remove();
				jQuery('body .bodyoverlay').remove();
				page=parseInt(page)+1;
				setTimeout(function(){
				 latestnews(cid,page,device_id,location);
				},5000);
				
				
			 },
			 success: function(res) {  
				if(typeof res['news']!='undefined')
				{
					var html2='';
					jQuery(res['news']).each(function(i){
						var html='';
						var img='null';
						html+='<div class="newsection latestnews" news-id="'+res['news'][i]['id']+'"><div class="container"><div class="new_detail_section">';
						if(res['news'][i]['video']!='')
						{
							html+='<div class="new_video"><video loop autoplay width="100%" height="100%" src="'+res['news'][i]['video']+'" type="video/mp4"></video></div>';
						}
						else if(res['news'][i]['image']!='')
						{
							html+='<div class="new_video"><img src="'+res['news'][i]['image']+'"/></div>';
							img=res['news'][i]['image'];
						}
						else
						{
							html+='<div class="new_video"><img src="images/aaa.png"/></div>';
						}
						
						var mystring=res['news'][i]['summary'];
						mystring = mystring.replace(/["']/g, "");
						var mytitle=res['news'][i]['title'];
						mytitle = mytitle.replace(/["']/g, "")+'. ';
						var liked='';
						if(res['news'][i]['like_status']){
							liked=' liked';
						}
						
						bookmark = localStorage.getItem('bookmarked');
						var bookmcls='';
						if(bookmark!=null){
							var bookmark2=bookmark.split(',');
							var index=bookmark2.indexOf(res['news'][i]['id']);
							if(parseInt(index)>=0)
							{
								bookmcls=' bookedmarked';
							}
						}
						
						var likes=' Like';
						var totallike=0;
						if(parseInt(res['news'][i]['news_like'])>0){
							likes=res['news'][i]['news_like']+' Like';
							if(parseInt(res['news'][i]['news_like'])>1){
								likes=res['news'][i]['news_like']+' Likes';
								
							}
							totallike=res['news'][i]['news_like'];
						}
						
						html+='</div><div class="news_description"><div class="news_des_section"><div class="new_heading"><a href="javascript:;" class="bookmarks'+bookmcls+'" coords="'+res['news'][i]['id']+'">'+res['news'][i]['title']+'</a></div><div class="volume_box"><a href="javascript:;" class="speakthis" data="'+mytitle+mystring+'"> <img src="images/volume.png"/> Listen </a></div></div><div class="new_des_content">'+res['news'][i]['summary']+'<div class="shortby"><strong>short</strong> <span>by Synopsis Team</span></div></div></div></div><footer class="afterlogin"><div class="footer_section"><div class="likebox"><ul><li><a class="likethis'+liked+'" href="javascript:;" coords="'+res['news'][i]['id']+'" data-like="'+totallike+'"><img src="images/like.png"/>'+likes+'</a></li><li><a href="javascript:;" class="sharenews" data-title="'+res['news'][i]['title']+'" data-url="'+res['news'][i]['share_url']+'" data-img="'+img+'" data-text="'+mystring+'"><img src="images/share.png"/> Share</a></li></ul></div><hr><div class="ftr_logo"><img src="images/footerlogo.png"/></div><div class="source">more at <a href="'+res['news'][i]['news_url']+'">'+res['news'][i]['news_source']+'</a></div></div></footer><div class="clearfix"></div></div>';
						res['news'][i]['readed']=0;
						//savenews(res['news'][i]);
						if(loadedlatestnews!=null){
							loadedlatestnews =loadedlatestnews+','+res['news'][i]['id'];
						}
						else
						{
							loadedlatestnews =0;
						}
						localStorage.setItem('loadedlatestnews_'+cid,loadedlatestnews);
						if(allnewsids!=null){
							if(allnewsids!=0){
								var allnewsids2=allnewsids.split(',');
								if(allnewsids2.indexOf(res['news'][i]['id'])<0){
									allnewsids =allnewsids+','+res['news'][i]['id'];
									localStorage.setItem('unreadednews_'+res['news'][i]['id'],html);
								}
							}
							else
							{
								allnewsids =allnewsids+','+res['news'][i]['id'];
							}
						}
						else
						{
							allnewsids =0;
						}
						localStorage.setItem('allnewsids',allnewsids);
						html2=html2+html;
					});
					jQuery('.allnews').prepend(html2);
					var oldhtml=localStorage.getItem('news_'+cid+'_'+page);
					if(oldhtml!=null){
						localStorage.setItem('news_'+cid+'_'+page,html2+oldhtml);
					}
					if(!jQuery('.newsection').hasClass('activenews'))
					{
						jQuery('.newsection:first').addClass('activenews');
					}
					
					var lastnewsid=jQuery('.allnews .latestnews:last').next('.newsection').attr('news-id');
					var lastnewsid2=jQuery('.allnews .activenews').next('.newsection').attr('news-id');
					var totalnews=jQuery('.allnews .latestnews').size();
					if(lastnewsid!=lastnewsid2){
						jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews">'+totalnews+' New <img src="images/toparrow.png"></a>');
						loadagainnews();
					}
					else
					{
						jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews">'+totalnews+' New <img src="images/221.png"></a>');
						loadagainnews();
					}
					jQuery('a.gototopnews').click(function(){
						jQuery("html, body").animate({ scrollTop: 0 }, 1000,function(){
							jQuery('.allnews .latestnews:last').next('.newsection').addClass('activenews');
							jQuery('.newsection').removeClass('activenews');
							jQuery('.header_right_news').html('<a href="javascript:;" class="loadnewnews">'+totalnews+' New <img src="images/221.png"></a>');
							loadagainnews();
						});
					});
					
					if(page==1){
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
						jQuery('.activenews .new_detail_section, .activenews .new_des_content').click(function(){
							jQuery("header").toggle();
						});
						savetobookmark();
						likenews(device_id);
						sharenews();
					}
					
				}
				else
				{
					//
				}
				
			 },  
			 error: function(response, d, a){
				
			 } 
		   });
		   
		}
		
});
function getcountrycode(){
	var requestUrl = "http://ip-api.com/json";
	jQuery.ajax({
	  url: requestUrl,
	  type: 'GET',
	  success: function(json)
	  {
		  var countrycode=json.countryCode;
		  localStorage.setItem('countrycode',countrycode);
		
	  },
	  error: function(err)
	  {
		  
	  }
	});
}
if(localStorage.getItem('countrycode')==null){
	getcountrycode();
}