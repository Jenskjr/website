$(window).resize(function() {

});	

$(document).ready(function(){

	const home_position = $("body").offset().top;
	const projects_position = $('#projects').offset().top-100;
	const cv_position = $("#cv").offset().top+50;	

	$("#homeButton").on({
    	click: function(){
        $('html, body').animate({
            scrollTop: home_position}, 1000);
		} 
	});

	$("#projectsButton").on({
    	click: function(){    
    	$('html, body').animate({
                    scrollTop: projects_position}, 1000);
		} 
	});

	$("#cvButton").on({
    	click: function(){
        $('html, body').animate({
                    scrollTop: cv_position}, 1000);
		} 
	});

	//Scroll css functionality

	$(window).scroll(function() {
		if ($(window).scrollTop() < (home_position+100) ) {
			$("a.current").removeClass("current");
		 	$("#homeButton").addClass("current");
		}
		if ($(window).scrollTop() >= (projects_position-50) ) {
			$("a.current").removeClass("current");
		 	$("#projectsButton").addClass("current");
		}
		if ($(window).scrollTop() >= (cv_position-50) ) {
			$("a.current").removeClass("current");
		 	$("#cvButton").addClass("current");
		}
	});

	//Text content	
	//Hero
	$("#hero_tagline").text("Front-end udvikling");
	$("#hero_headline").text("Jens Kjær");

	//Projects
	$("#section_header_1").text("Portefolio");

	$("#projects_category_header_1").text("Webshop eksempel");
	$("#projects_category_header_2").text("To-do app");
	$("#projects_category_header_3").text("Liverpool stats API");

	$("#projects_category_subheader_1").text("React & Redux project");
	$("#projects_category_subheader_2").text("React project");
	$("#projects_category_subheader_3").text("MySQL & PHP project");

	$(".projects_github").text("Github");

	//CV
	$("#section_header_2").text("CV");

	$("#cv_name").text("Jens Kjær");
	$("#cv_tagline").text("Front-end udvikler med forretningsforståelse");
	$("#cv_phone").text("61 65 47 76");
	
	$("#cv_programing_headline").text("Programmering");
	$("#cv_programing").text("JavaScript, PHP, SQL, HTML, CSS");

	$("#cv_course_headline").text("Kurser");
	$("#cv_course_1").text("Front-end med React og Redux");
	$("#cv_course_2").text("Journalistikens grundtrin");

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
	$("#footer-tagline").text("Front-end udvikling");
	$("#footer_url").text("Jenskjr.dk");
});