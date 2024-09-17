$(document).ready(function(){

	var urls = {
		"facebook" :{
			"baseurl" : "https://www.facebook.com/sharer/sharer.php",
			"parameters" : [
				{ name: "u", value: "https://agentless.us/" }
			]
		},
		"twitter" :{
			"baseurl" : "http://twitter.com/share",
			"parameters": [
				{ "name": "url", "value": "https://agentless.us" },
				{ "name": "text", "value": "Simplify your home buying journey with AI-powered tools! Generate offer letters, purchase agreements, and analyze inspection reports seamlessly with Agentless." },
				{ "name": "hashtags", "value": "HomeBuying,RealEstate,AI,OfferLetter,PurchaseAgreement,HomeInspection" },
				{ "name": "via", "value": "agentless_" }
			]
		},
		"linkedin": {
				"baseurl": "http://www.linkedin.com/shareArticle",
				"parameters": [
					{ "name": "url", "value": "https://agentless.us" },
					{ "name": "title", "value": "Simplify Your Home Buying Journey with Agentless" },
					{ "name": "summary", "value": "Use AI-powered tools to generate offer letters, purchase agreements, and analyze home inspection reports with ease." },
					{ "name": "source", "value": "agentless.us" }
				]
			},
		"email" :{
			"baseurl" : "mailto:",
			"parameters": [
				{ "name": "subject", "value": "Simplify Your Home Buying Process with AI-powered Tools" },
				{ "name": "body", "value": "Check out Agentless, an AI-driven platform that helps home buyers with Offer Letter and Purchase Agreement generation, and Home Inspection Report analysis. Visit: https://agentless.us" }
			]
		},
		"instagram" :{
			"baseurl" : "",
			"parameters" : []
		}
	};

	$(".share-btn").on("click",function(e){
		e.preventDefault();

		var target = $(this).data("target");

		var url = urls[target].baseurl+"?"+decodeURIComponent($.param(urls[target].parameters, true));

		if(target == "email"){
			window.location = url;
		}else if(target == "instagram"){
			window.alert("no instagram sharer");
		}else{
			var sharepopup = window.open(url, "pop", "width=600, height=400, scrollbars=no");
		}
	    
	});

});