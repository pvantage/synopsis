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
function getcountrycode(tx){
	var requestUrl = "http://ip-api.com/json";
	jQuery.ajax({
	  url: requestUrl,
	  type: 'GET',
	  success: function(json)
	  {
		  var countrycode=json.countryCode;
		  
		  tx.executeSql("SELECT * FROM NEWSSETTINGS", [],
			function(tx,results){
				alert('start');
				if (results.rowsAffected) {
					var sql="UPDATE NEWSSETTINGS SET meta_value='"+countrycode+"' WHERE meta_key='countrycode'";
					tx.executeSql(sql,[],function(){alert('update:'+countrycode);},errorCB);
					//alert(json.countryCode);
				}
				else
				{
					var sql="INSERT INTO NEWSSETTINGS (meta_key,meta_value) VALUES('countrycode','"+countrycode+"')";
					tx.executeSql(sql,[],function(){alert('insert:'+countrycode);},errorCB);
					//alert(json.countryCode);
				}
			}, errorCB);
		
	  },
	  error: function(err)
	  {
		  
	  }
	});
}
//setTimeout(function(){ getcountrycode();					var countrycode=jQuery('#countryCode').val();alert(countrycode);},2000);

function populateDB(tx) {
	// tx.executeSql('DROP TABLE IF EXISTS NEWS');
	 //tx.executeSql('CREATE TABLE IF NOT EXISTS NEWS (newid INTEGER,title TEXT,summary LONGTEXT,news_url TEXT,news_source TEXT,published_by TEXT,video TEXT,image TEXT,share_url TEXT,post_date DATETIME,like INTEGER,readed INTEGER,bookmark INTEGER)');
	 //tx.executeSql('CREATE TABLE IF NOT EXISTS NEWSCATEGORY (newid INTEGER,category TEXT)');
	 tx.executeSql('DROP TABLE IF EXISTS NEWSSETTINGS');
	 tx.executeSql('CREATE TABLE IF NOT EXISTS NEWSSETTINGS (meta_key TEXT,meta_value TEXT)');
	getcountrycode(tx);
	/*setTimeout(function(){
	tx.executeSql("SELECT * FROM NEWSSETTINGS where meta_key='countrycode'", [],
	function(tx,results){
		
		if (results.rowsAffected) {
			var sql="UPDATE NEWSSETTINGS SET meta_value='"+countrycode+"' WHERE meta_key='countrycode'";
			tx.executeSql(sql,[],function(){alert('update:'+countrycode);},errorCB);
			//alert(json.countryCode);
		}
		else
		{
			var sql="INSERT INTO NEWSSETTINGS (meta_key,meta_value) VALUES('countrycode','"+countrycode+"')";
			tx.executeSql(sql,[],function(){alert('insert:'+countrycode);},errorCB);
			//alert(json.countryCode);
		}
	}, errorCB);
	},4000);*/
			
}

// Transaction error callback
//
function errorCB(tx, err) {
	alert("Error processing SQL: "+err.code);
}

// Transaction success callback
//
function successCB() {
   // alert("success!");
}
