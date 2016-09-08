//For loop functions for each display method.
var bioLoop = function (bioInfo) {
	var formattedSkills = [];
	for (var x = 0; x < bioInfo.length; x++) {
		formattedSkills[x] = HTMLskills.replace("%data%", bio.skills[x]);
		$('#skills').append(formattedSkills[x]);
	}
};

var schoolLoop = function (schoolInfo) {
	var formattedSchoolName = [];
	var formattedSchoolDegree = [];
	var formattedSchoolDates = [];
	var formattedSchoolLocation = [];
	var formattedSchoolMajor = [];
	for (var x = 0; x < schoolInfo.length; x++) {
			formattedSchoolName[x] = HTMLschoolName.replace('%data%', schoolInfo[x].name);
			formattedSchoolDegree[x] = HTMLschoolDegree.replace('%data%', schoolInfo[x].degree);
			formattedSchoolDates[x] = HTMLschoolDates.replace('%data%', schoolInfo[x].dates);
			formattedSchoolLocation[x] = HTMLschoolLocation.replace('%data%', schoolInfo[x].location);
			formattedSchoolMajor[x] = HTMLschoolMajor.replace('%data%', schoolInfo[x].majors);
			$('.education-entry').append(formattedSchoolName[x], formattedSchoolDegree[x], formattedSchoolMajor[x], formattedSchoolLocation[x], formattedSchoolDates[x]);
	}
};

var onlineLoop = function (onlineInfo) {
var formattedOnlineTitle = [];
	var formattedOnlineSchool = [];
	var formattedOnlineDates = [];
	var formattedOnlineUrl = [];
	for (var x = 0; x < onlineInfo.length; x++) {
		formattedOnlineTitle[x] = HTMLonlineTitle.replace('%data%', onlineInfo[x].title);
		formattedOnlineSchool[x] = HTMLonlineSchool.replace('%data%', onlineInfo[x].school);
		formattedOnlineDates[x] = HTMLonlineDates.replace('%data%', onlineInfo[x].dates);
		formattedOnlineUrl[x] = HTMLonlineURL.replace('%data%', onlineInfo[x].url);
		$('.education-entry').append(formattedOnlineTitle[x]);
		$('.education-entry').append(formattedOnlineSchool[x]);
		$('.education-entry').append(formattedOnlineDates[x]);
		$('.education-entry').append(formattedOnlineUrl[x]);
	}
};

//Variables are declared below with objects for bio, education, work and projects.
var bio = {
	'name' : 'Carey Casile',
    'role' : 'Developer',
    'contacts' : {
	    'mobile': '(412) 327-5608',
	    'email': 'carey.casile@gmail.com' ,
	    'github': 'https://github.com/careycasile',
	    'twitter': 'https://twitter.com/carey_casile',
    	},
    'location': 'Pittsburgh, PA',       
    'welcomeMessage': 'About Me',
    'skills': ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    'biopic': 'images/headshot.jpg',
    'display': function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.location);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$(HTMLskillsStart).insertAfter('#topContacts');
		bioLoop(bio.skills);
		$('#header').prepend(formattedName, formattedRole, formattedBiopic, formattedWelcome, formattedLocation);
		$('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter);
	}
};

var education = {
	'schools': [{
		'name': 'Clarion University of Pennsylvania',
		'location': 'Clarion, PA',
		'degree': 'Masters',
		'majors': ['MBA'],
		'dates': '01-01-2013 to 12-01-2016',
		'url': 'http://www.clarion.edu/' 
		},
		{
		'name': 'University of Pittsburgh',
		'location': 'Pittsburgh, PA',
		'degree': 'Bachelors',
		'majors': ['Communications'],
		'dates': '09-01-2004 to 08-01-2007',
		'url': 'http://www.pitt.edu/' }],
	'onlineCourses': [{
		'title': 'Front End Web Developer',
		'school': 'Udacity',
		'dates': '06-01-2016 to in progress',
		'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}],
	'display': function () {
		$('#education').append(HTMLschoolStart);
		schoolLoop(education.schools);
		$('.education-entry').append(HTMLonlineClasses);
		onlineLoop(education.onlineCourses);
	}
};

var work = {
	jobs: [{
		'employer': 'PNC Bank',
		'title': 'Account Executive', 
		'location': 'Pittsburgh, PA',
		'dates': '08-01-2009 to in progress', 
		'description': 'Assisted small businesses with the ability to accept credit cards.' 
		},
		{
		'employer': 'Walt Disney World',
		'title': 'Entertainment Manger', 
		'location': 'Orlando, FL',
		'dates': '01-01-2008 to 02-01-2009', 
		'description': 'Managed two full time equity actors.' 
		}],
	'display': function () {

	}
};

var projects = {
	projects: [{
		'title': 'Portfolio Project', 
		'dates': '07-01-2016 to 09-01-2016', 
		'description': 'A responsive portfolio using HTML and CSS',
		'images': 'images/project1.jpg'},
		{
		'title': 'Resume Project', 
		'dates': '09-01-2016 to in progress', 
		'description': 'A resume powered with JavaScript and jQuery',
		'images': 'images/project2.jpg'
		}],
	'display': function () {

	}
};


//Functions are called below displaying the objects contents for bio, education, work and projects.
bio.display();
education.display();