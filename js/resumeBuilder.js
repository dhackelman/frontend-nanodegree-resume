/* Add Google Map */ 
$('#mapDiv').append(googleMap);
/* Warning Ribbon */
$('.notice-close').on('click', function (event) {
    $('.notice-warning').remove();
});

var bio = {
	'name':'Drew Hackelman', 
	'role':'FWD Student', 
	'contacts':{
		'mobile':'(281) 908-8458', 
		'email':'drew.hackelman@gmail.com', 
		'github':'dhackelman',
		'twitter':'@hackelmanarchy',
		'location':'New Orleans, LA'
	},
	'welcomeMessage':'Warning: FEND Learning in Progress!', 
	'skills':[
	'Javascript', 'CSS', 'Riding Bikes'], 
	'biopic':'https://yt3.ggpht.com/-k4FiyhESvJQ/AAAAAAAAAAI/AAAAAAAAAAA/rewfOJjvJ8Q/s900-c-k-no/photo.jpg',
	display: function(){
		var formattedRole=HTMLheaderRole.replace('%data%', bio.role);
	var formattedName=HTMLheaderName.replace('%data%', bio.name);
	var formattedbioPic=HTMLbioPic.replace('%data', bio.biopic);
	var formattedWelcomeMessage=HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').prepend(formattedName)
		.prepend(formattedRole).css('color', '#FFFFFC')
		.append(formattedbioPic)
		.append(formattedWelcomeMessage);
	var formattedmobile=HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedemail=HTMLemail.replace('%data%', bio.contacts.email);
	var formattedgithub=HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedlocation=HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedtwitter=HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#topContacts').append(formattedgithub)
		.append(formattedmobile)
		.append(formattedemail)
		.append(formattedlocation)
		.append(formattedtwitter);
	$('#footerContacts').append(formattedemail)
		.append(formattedmobile)
		.append(formattedgithub)
		.append(formattedlocation)
		.append(formattedtwitter);

	if (bio.skills.length > 0) {
	    $('#header').append(HTMLskillsStart);
	    var formattedSkill=HTMLskills.replace('%data%', bio.skills[0]);
	    var formattedSkill=HTMLskills.replace('%data%', bio.skills[1]);
	    var formattedSkill=HTMLskills.replace('%data%', bio.skills[2]);
	    $('#skills').append(formattedSkill)
	    	.append(formattedSkill)
	    	.append(formattedSkill);
		}
	}
};

bio.display();




var work={
	'jobs':[
	{
		'employer':'JDCS',
		'title':'K-4 Math Interventionist',   
		'location':'New Orleans, LA', 
		'dates':'2010-2012',
		'description':'Worked with Tier2 and Tier3 students to remediate core mathematical skills.'
	}, 
	{
		'employer':'KIPP: Explore',
		'title':'3rd GradeTeacher',   
		'location':'Houston, TX', 
		'dates':'2012-2013',
		'description':'Member of the founding 3rd Grade team. Worked to create long-term curriculum in mathematics for 3rd Grade team. Created and implemented strong character education curriculum and behavior system.'
	}, 
	{
		'employer':'PWCS',
		'title':'4th Grade Math Teacher',   
		'location':'New Orleans, LA', 
		'dates':'2013-2016',
		'description':'Designed and implemented Common-Core aligned mathematics curriculum for PWCS. Designed CCSS aligned assignments, performance tasks, and assessments for Firstline Schools CMO.'
	}
	], 
	display: function(){
		for (var job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer + formattedTitle;
		var formattedWorkLocation=HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDates=HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedDescription=HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedEmployerTitle)
			.append(formattedWorkLocation)
			.append(formattedDates)
			.append(formattedDescription);
		}
	}
	
};


work.display();

var projects={
	'projects' : [
	{
		title : '#1', 
		dates : 'now', 
		description : 'hard', 
		images : ['http://placehold.it/140x100']
	}, 
	{
		title : '#2', 
		dates : 'now', 
		description : 'hard', 
		images : ['http://placehold.it/140x100']
	}, 
	{
		title : '#3', 
		dates : 'now', 
		description : 'hard', 
		images : ['http://placehold.it/140x100']
	}
	], 
	display: function() {
		for (var project in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			var insertImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);
			$('.project-entry:last').append(formattedProjectTitle)
				.append(formattedDates)
				.append(formattedDescription)
				.append(insertImage);
			}
	}	
};


projects.display();

var education={
	'schools': [
	{
	 'name':'UNC-Chapel Hill', 
	 'dates':'2006-2010', 
	 'Location':'Chapel Hill, NC',
	 'degree':'BA',
	 'major':'Comparative Literature and Political Science', 
	 'URL':'http://www.unc.edu/'
	}
	], 
	'onlineCourses':[
	{
		'title':'Front-End Web Development Nanodegree', 
		'school':'Udacity', 
		'dates': 2016, 
		'url':'www.udacity.com'
	}, 
	{
		'title':'Intro to JS', 
		'school':'Udacity', 
		'dates': 2015, 
		'url':'www.udacity.com'
	}
	], 
	display: function() {
		for (var school in education.schools) {
		  $('#education').append(HTMLschoolStart);
		  var formattedschoolName=HTMLschoolName.replace('%data%', education.schools[school].name);
		  var formattedschoolDegree=HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		  var formattedNameDegree=formattedschoolName + formattedschoolDegree;
		  var formattedschoolDates=HTMLschoolDates.replace('%data%', education.schools[school].dates);
		  var formattedschoolMajor=HTMLschoolMajor.replace('%data%', education.schools[school].major);
		  $('.education-entry:last').append(formattedNameDegree)
		  	.append(formattedschoolDates)
		  	.append(formattedschoolMajor);
		}

		$('.education-entry').append(HTMLonlineClasses);
		 for (var onlineCourse in education.onlineCourses) {
		  var formattedonlineTitle=HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
		  var formattedonlineSchool=HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
		  var formattedTitleSchool=formattedonlineTitle + formattedonlineSchool;
		  var formattedonlineDates=HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
		  var formattedonlineURL=HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
		  $('.education-entry').append(formattedTitleSchool)
		  	.append(formattedonlineDates)
		  	.append(formattedonlineURL);
			}
	}

};


education.display();


