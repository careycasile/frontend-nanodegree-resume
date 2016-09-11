var data = '%data%';

//"For loop" functions for each display method appending information to the DOM.
var bioLoop = function (bioInfo) {
    var formattedSkills = [];
    for (var x = 0; x < bioInfo.length; x++) {
        formattedSkills[x] = HTMLskills.replace(data, bio.skills[x]);
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
        $('#education').append(HTMLschoolStart);
        formattedSchoolName[x] = HTMLschoolName.replace(data, schoolInfo[x].name);
        formattedSchoolDegree[x] = HTMLschoolDegree.replace(data, schoolInfo[x].degree);
        formattedSchoolDates[x] = HTMLschoolDates.replace(data, schoolInfo[x].dates);
        formattedSchoolLocation[x] = HTMLschoolLocation.replace(data, schoolInfo[x].location);
        formattedSchoolMajor[x] = HTMLschoolMajor.replace(data, schoolInfo[x].majors);
        $('.education-entry:first').append(formattedSchoolName[x] + formattedSchoolDegree[x], formattedSchoolLocation[x], formattedSchoolDates[x],
            formattedSchoolMajor[x], '<hr>');
    }
};

var onlineLoop = function (onlineInfo) {
    var formattedOnlineTitle = [];
    var formattedOnlineSchool = [];
    var formattedOnlineDates = [];
    var formattedOnlineUrl = [];
    for (var x = 0; x < onlineInfo.length; x++) {
        formattedOnlineTitle[x] = HTMLonlineTitle.replace(data, onlineInfo[x].title);
        formattedOnlineSchool[x] = HTMLonlineSchool.replace(data, onlineInfo[x].school);
        formattedOnlineDates[x] = HTMLonlineDates.replace(data, onlineInfo[x].dates);
        formattedOnlineUrl[x] = HTMLonlineURL.replace(data, onlineInfo[x].url);
        $('.education-entry:last').append(formattedOnlineTitle[x] + formattedOnlineSchool[x], formattedOnlineDates[x], formattedOnlineUrl[x], '<hr>');
    }
};

var workLoop = function (workInfo) {
    var formattedEmployer = [];
    var formattedWorkTitle = [];
    var formattedWorkDates = [];
    var formattedWorkLocation = [];
    var formattedWorkDescription = [];
    for (var x = 0; x < workInfo.length; x++) {
        $('#workExperience').append(HTMLworkStart);
        formattedEmployer[x] = HTMLworkEmployer.replace(data, workInfo[x].employer);
        formattedWorkTitle[x] = HTMLworkTitle.replace(data, workInfo[x].title);
        formattedWorkDates[x] = HTMLworkDates.replace(data, workInfo[x].dates);
        formattedWorkLocation[x] = HTMLworkLocation.replace(data, workInfo[x].location);
        formattedWorkDescription[x] = HTMLworkDescription.replace(data, workInfo[x].description);
        $('.work-entry:last').append(formattedEmployer[x] + formattedWorkTitle[x], formattedWorkDates[x], formattedWorkLocation[x],
            formattedWorkDescription[x], '<hr>');
    }
};

var projectLoop = function (projectInfo) {
    var formattedProjectTitle = [];
    var formattedProjectDates = [];
    var formattedProjectDescription = [];
    for (var x = 0; x < projectInfo.length; x++) {
        $('#projects').append(HTMLprojectStart);
        formattedProjectTitle[x] = HTMLprojectTitle.replace(data, projectInfo[x].title);
        formattedProjectDates[x] = HTMLprojectDates.replace(data, projectInfo[x].dates);
        formattedProjectDescription[x] = HTMLprojectDescription.replace(data, projectInfo[x].description);
        $('.project-entry:last').append(formattedProjectTitle[x], formattedProjectDates[x], formattedProjectDescription[x]);
        var formattedProjectImage = [];
        for (var y = 0; y < projectInfo[x].images.length; y++) {
            formattedProjectImage[y] = HTMLprojectImage.replace(data, projectInfo[x].images[y]);
            $('.project-entry:last').append(formattedProjectImage[y]);
        };
        $('.project-entry:last').append('<hr>');

    }
};

//Variables are declared below with objects for bio, education, work and projects.
var bio = {
    'name': 'Carey Casile',
    'role': 'Developer',
    'contacts': {
        'mobile': '(412) 327-5608',
        'email': 'carey.casile@gmail.com',
        'github': 'https://github.com/careycasile',
        'twitter': 'https://twitter.com/carey_casile',
    },
    'location': 'Pittsburgh, PA',
    'welcomeMessage': 'About Me',
    'skills': ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    'biopic': 'images/headshot.jpg',
    'display': function () {
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace(data, bio.location);
        var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $(HTMLskillsStart).insertAfter('#topContacts');
        bioLoop(bio.skills);
        $('#header').prepend(formattedName, formattedRole, formattedBiopic, formattedWelcome, formattedLocation);
        $('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter);
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
    }, {
        'name': 'University of Pittsburgh',
        'location': 'Pittsburgh, PA',
        'degree': 'Bachelors',
        'majors': ['Communications'],
        'dates': '09-01-2004 to 08-01-2007',
        'url': 'http://www.pitt.edu/'
    }],
    'onlineCourses': [{
        'title': 'Front End Web Developer',
        'school': 'Udacity',
        'dates': '06-01-2016 to in progress',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }],
    'display': function () {
        schoolLoop(education.schools);
        $('.education-entry:last').append(HTMLonlineClasses);
        onlineLoop(education.onlineCourses);
    }
};

var work = {
    'jobs': [{
        'employer': 'PNC Bank',
        'title': 'Account Executive',
        'location': 'Pittsburgh, PA',
        'dates': '08-01-2009 to in progress',
        'description': 'Assisted small businesses with the ability to accept credit cards.'
    }, {
        'employer': 'Walt Disney World',
        'title': 'Entertainment Manger',
        'location': 'Orlando, FL',
        'dates': '01-01-2008 to 02-01-2009',
        'description': 'Managed two full time equity actors.'
    }],
    'display': function () {
        workLoop(work.jobs);
    }
};

var projects = {
    projects: [{
        'title': 'Portfolio Project',
        'dates': '07-01-2016 to 09-01-2016',
        'description': 'A responsive portfolio using HTML and CSS',
        'images': ['images/project1.gif', 'images/project1.gif', 'images/project1.gif']
    }, {
        'title': 'Resume Project',
        'dates': '09-01-2016 to in progress',
        'description': 'A resume powered with JavaScript and jQuery',
        'images': ['images/project2.gif', 'images/project2.gif']
    }],
    'display': function () {
        projectLoop(projects.projects);
    }
};

//Functions and mapDiv are called below displaying the objects contents for bio, education, work and projects.
bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);