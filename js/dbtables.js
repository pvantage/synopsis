document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
var db;
function onDeviceReady() {
	//alert('test');
	db = window.openDatabase("synopsis", "1.0", "Synopsis", 2000000);
	db.transaction(populateDB, errorCB, successCB);
}

// Populate the database 
//
function populateDB(tx) {
	 //tx.executeSql('DROP TABLE IF EXISTS USERS');
	 tx.executeSql('CREATE TABLE IF NOT EXISTS NEWS (newid,title,summary,news_url,news_source,published_by,video,image,share_url,post_date,like,readed,bookmark)');
	 tx.executeSql('CREATE TABLE IF NOT EXISTS NEWSCATEGORY (newid,category)');
	 tx.executeSql('CREATE TABLE IF NOT EXISTS NEWSSETTINGS (meta_key,meta_value)');
}

// Transaction error callback
//
function errorCB(tx, err) {
	//alert("Error processing SQL: "+err);
}

// Transaction success callback
//
function successCB() {
   // alert("success!");
}
var requestUrl = "http://ip-api.com/json";

jQuery.ajax({
  url: requestUrl,
  type: 'GET',
  success: function(json)
  {
	db.transaction(function (tx) {
		
		tx.executeSql("SELECT * FROM NEWSSETTINGS where meta_key='countrycode'", [],
		function(tx,results){
			alert(json.countryCode);
			if(typeof results.rows.item(0).meta_value != 'undefined'){
				var sql="UPDATE NEWSSETTINGS SET meta_value='"+json.countryCode+"' WHERE meta_key='countrycode'";
				tx.executeSql(sql,[],function(){},errorCB);
			}
			else
			{
				var sql="INSERT INTO NEWSSETTINGS (meta_key,meta_value) VALUES('countrycode','"+json.countryCode+"')";
				tx.executeSql(sql,[],function(){},errorCB);
			}
		}
		, errorCB);
		
		
	});
  },
  error: function(err)
  {
    //console.log("Request failed, error= " + err);
  }
});