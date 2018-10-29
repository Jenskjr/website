

$(document).ready(function(){

	const home_position = $("body").offset().top;
	const projects_position = $('#projects').offset().top;
	const cv_position = $("#cv").offset().top;	

	//Scroll css functionality
	$(window).scroll(function() {
		if ($(window).scrollTop() >= (projects_position-200) ) {
			$("a.current").removeClass("current");
		 	$("#projectsButton").addClass("current");
		}
		
		
		if ($(window).scrollTop() >= (cv_position-100) ) {
			$("a.current").removeClass("current");
		 	$("#cvButton").addClass("current");
		}	

		if ($(window).scrollTop() < (home_position+50) ) {
			$("a.current").removeClass("current");
		 	$("#homeButton").addClass("current");
		}
	});

	//Text content	
	//Hero
	$("#hero_tagline").text("Frontend-udvikling");
	$("#hero_headline").text("Jens Kjær");

	//Projects
	$("#project_mapApp_header").text("Map-app eksampel");
	$("#project_mapApp_subheader").text("React native projekt");
	$("#project_mapApp_description").text("Mobil app til iPhone. Du kan teste app'en ved at installere Expo app, klikke på linket her og scanne QR-koden.");

	$("#project_webshop_header").text("Webshop eksempel");
	$("#project_webshop_subheader").text("React & Redux projekt");
	$("#project_webshop_description").text("Webshop som henter vareinformationer fra PunkAPI Beer Shop.");

	$("#project_todo_header").text("To-do liste app");
	$("#project_todo_subheader").text("React projekt");
	$("#project_todo_description").text("Task manager hvormed man kan liste og sortere sine to-do opgaver.");

	$("#project_liverpool_stats_api_header").text("API eksempel");
	$("#project_liverpool_stats_api_subheader").text("MySQL & PHP projekt");
	$("#project_liverpool_stats_api_description").text("Et Api eksempel, som udstiller Liverpool FC's Premier League resultater.");
	$("#project_liverpool_stats_api_link").text("Link");
	$(".projects_github").text("Github");

	//CV
	$("#cv_name").text("Jens Kjær");
	$("#cv_tagline").text("Frontend udvikler");
	$("#cv_phone").text("61 65 47 76");
	
	$("#cv_programing_headline").text("Programmering");
	$("#cv_programing").text("JavaScript, React, Redux, PHP, SQL, HTML, CSS");

	$("#cv_course_headline").text("Kurser");
	$("#cv_course_1").text("Front-end med React og Redux");

	$("#cv_language_headline").text("Sprog");
	$("#cv_language").text("Dansk, tysk og engelsk");	
	
	$("#cv_education_headline").text("Uddannelse");
	$("#cv_education_1").text("Cand.it i it, kommunikation og organisation");
	$("#cv_education_2").text("HA almen");
	
	$("#cv_job_headline").text("Erhvervserfaring");
	$("#cv_job_experience_1").text("Implementeringskonsulent");
	$("#cv_job_experience_2").text("Forretningskonsulent");

	//Footer
	$("#footer_name").text("Jens Kjær");
	$("#footer_street").text("Henrik Rungs Gade 5");
	$("#footer_city").text("2200 København N");
	$("#footer_linkedin").text("www.linkedin.com");
	$("#footer_copyright").text("");
	$("#footer-tagline").text("Frontend-udvikling");
	$("#footer_url").text("Jenskjr.dk");
});