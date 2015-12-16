/*Internationalize Button */
$('#header').prepend(internationalizeButton);
/* Add Google Map */ 
$('#mapDiv').append(googleMap);
/* Warning Ribbon */
$('.notice-close').on('click', function (event) {
    $('.notice-warning').remove();
});

var bio = {
	"name":"Drew Hackelman", 
	"role":"FWD Student", 
	"Contacts":{
		"Mobile":"(281) 908-8458", 
		"Email":"drew.hackelman@gmail.com", 
		"Github":"dhackelman",
		"Location":"New Orleans, LA"
	},
	"bioPic":"https://yt3.ggpht.com/-k4FiyhESvJQ/AAAAAAAAAAI/AAAAAAAAAAA/rewfOJjvJ8Q/s900-c-k-no/photo.jpg",
	"WelcomeMessage":"FEWD to the rescue!", 
	"skills":[
	"Javascript", "CSS", "Riding Bikes"]
};


bio.display = function(){

	var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole).css("color", "#FFFFFC");
	var formattedName=HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedbioPic=HTMLbioPic.replace("%data", bio.bioPic);
	$("#header").append(formattedbioPic);
	var formattedWelcomeMessage=HTMLwelcomeMsg.replace('%data%', bio.WelcomeMessage);
	$('#header').append(formattedWelcomeMessage);
	var formattedmobile=HTMLmobile.replace('%data%', bio.Contacts.Mobile);
	$('#topContacts').append(formattedmobile);
	var formattedemail=HTMLemail.replace('%data%', bio.Contacts.Email);
	$('#topContacts').append(formattedemail);
	var formattedgithub=HTMLgithub.replace('%data%', bio.Contacts.Github);
	$('#topContacts').append(formattedgithub);
	var formattedlocation=HTMLlocation.replace('%data%', bio.Contacts.Location);
	$('#topContacts').append(formattedlocation);
	$('#footerContacts').append(formattedemail);
	$('#footerContacts').append(formattedmobile);
	$('#footerContacts').append(formattedgithub);
	$('#footerContacts').append(formattedlocation);
};

bio.display();

function inName(name){
	var name=bio.name.split(" ");
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

var work={
	"jobs":[
	{
		"Title":"K-4 Math Interventionist", 
		"Employer":"JDCS",  
		"Location":"New Orleans, LA", 
		"Dates":"2010-2012",
		"Description":"Worked with Tier2 and Tier3 students to remediate core mathematical skills."
	}, 
	{
		"Title":"3rd GradeTeacher", 
		"Employer":"KIPP: Explore",  
		"Location":"Houston, TX", 
		"Dates":"2012-2013",
		"Description":"Member of the founding 3rd Grade team. Worked to create long-term curriculum in mathematics for 3rd Grade team. Created and implemented strong character education curriculum and behavior system."
	}, 
	{
		"Title":"4th Grade Math Teacher", 
		"Employer":"PWCS",  
		"Location":"New Orleans, LA", 
		"Dates":"2013-2016",
		"Description":"Designed and implemented Common-Core aligned mathematics curriculum for PWCS. Designed CCSS aligned assignments, performance tasks, and assessments for Firstline Schools CMO."
	}
	]
};

function displaywork(){
	for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
	var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].Title);
	var formattedEmployerTitle=formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedWorkLocation=HTMLworkLocation.replace("%data%", work.jobs[job].Location);
	$(".work-entry:last").append(formattedWorkLocation);
	var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].Dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].Description);
	$(".work-entry:last").append(formattedDescription);
	}
}

displaywork();

var projects={
	"projects" : [
	{
		title : "#1", 
		dates : "now", 
		description : "hard", 
		images : "URL"
	}, 
	{
		title : "#2", 
		dates : "now", 
		description : "hard", 
		images : "URL"
	}, 
	{
		title : "#3", 
		dates : "now", 
		description : "hard", 
		images : "URL"
	}
	]
};

projects.display=function () {
	for (var project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$('.project-entry:last').append(formattedProjectTitle);
		var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
};

projects.display();

var education={
	"schools": [
	{
	 "name":"UNC-Chapel Hill", 
	 "dates":"2006-2010", 
	 "Location":"Chapel Hill, NC",
	 "degree":"BA",
	 "major":"Comparative Literature and Political Science", 
	 "URL":"http://www.unc.edu/"
	}
	], 
	"onlineCourses":[
	{
		"title":"Front-End Web Development Nanodegree", 
		"school":"Udacity", 
		"dates":"2015-2016", 
		"url":"www.udacity.com"
	}, 
	{
		"title":"Intro to JS", 
		"school":"Udacity", 
		"dates":"2015", 
		"url":"www.udacity.com"
	}
	]
};


function displayEducation() {
for (var school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var formattedschoolName=HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedschoolDegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedNameDegree=formattedschoolName + formattedschoolDegree;
  
  $(".education-entry:last").append(formattedNameDegree);
  var formattedschoolDates=HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedschoolDates);
  var formattedschoolMajor=HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedschoolMajor);
	}
$(".education-entry").append(HTMLonlineClasses);
 for (var onlineCourse in education.onlineCourses) {
  var formattedonlineTitle=HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
  var formattedonlineSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
  var formattedTitleSchool=formattedonlineTitle + formattedonlineSchool;
  $(".education-entry").append(formattedTitleSchool);
  var formattedonlineDates=HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
  $(".education-entry").append(formattedonlineDates);
  var formattedonlineURL=HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
  $(".education-entry").append(formattedonlineURL);
	}
}
displayEducation();


