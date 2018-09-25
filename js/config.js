/*
██████   █████  ████████  █████
██   ██ ██   ██    ██    ██   ██
██   ██ ███████    ██    ███████
██   ██ ██   ██    ██    ██   ██
██████  ██   ██    ██    ██   ██
*/

var data = new Object();

data.heading = {
  loop: false,
  showSection: true,
  content: {
    name: "Marcos Jones",
    subtitle: "Frontend developer",
    email: 'webmaster@grandmamail.com',
    linkedIn: '',
    phone: ''
  }
};

data.objective = {
  loop: false,
  showSection: true,
  content: {
    descriptionsList:  [
      "this is desc 1",
      "this is desc 2",
    ]
  }
};

data.education = {
  loop: false,
  showSection: true,
  content: {
    educationList: [
      {
        school: "Uintah High School",
        city: "Vernal, UT",
        degree: "",
        gradDate: "",
        gpa: "3.5",
        honors: true,
        deansList:"" // number of semesters
      },
      {
        school: "Utah State Universty",
        city: "Logan, UT",
        degree: "Computer Scence",
        gradDate: "2024",
        gpa: "3.5",
        honors: false,
        deansList:"" // number of semesters
      },
    ]
  }
};

data.projects = {
  loop: true,
  showSection: true,
  content: {
    projectsList: [
      {
        projInfo: {
          projName: "project name",
          position: "position",
          startEnd: "2016-2018",
          location: "kentucky"
        },
        descriptions: [
          "did a thing with people for that one company"
        ]
      },
    ]
  }
};

data.leadership = {
  loop: true,
  showSection: true,
  content: {
    leadershipsList: [
      {
        organizationInfo: {
          organizationName: "org name",
          position: "position 1",
          startEnd: "2015-2017",
          location: "madagascar"
        },
        descriptions: [
          "this is a description"
        ]
      },
    ]
  }
};

data.work = {
  loop: true,
  showSection: true,
  content: {
    jobsList: [
      {
        jobInfo: {
          title: "job1",
          company: "comp1",
          startEnd: "2015-2017",
          location: "New Zealand"
        },
        descriptions: [
          "job 1 description"
        ]
      },
      {
        jobInfo: {
          title: "job2",
          company: "comp2",
          startEnd: "2017-2018",
          location: "Israel"
        },
        descriptions: [
          "job 2 description"
        ]
      },
    ]
  }
};

data.skills = {
  loop: true,
  showSection: true,
  skillsList: [
    {
      skillLevel: "moderate",
      descriptions: [
        "carpentry"
      ]
    },
    {
      skillLevel: "advanced",
      descriptions: [
        "programming"
      ]
    }
  ]
};

data.awards = {
  loop: true,
  showSection: true,
  content: {
    awardsList: [
      {
        awardName: "most sarcastic",
        time: "january",
        descriptions: {
          description: "\"oh wow. thank you, SO much.\""
        }
      },
      {
        awardName: "most helpful",
        time: "March",
        descriptions: {
          description: "hi!"
        }
      },
    ]
  }
};

data.references = {
  loop: true,
  showSection: true,
  content: {
    referencesList: [
      {
        name: "Johnny McQuacc",
        position: "right there",
        company: "Pepsi Cola",
        phone: "435 603 6882",
        email: "webmaster@mail.com",
        address: "uuuuh no thank you"
      },
      {
        name: "Miranda Kinsey",
        position: "Captain",
        company: "Ships Co",
        phone: "920 578 9256",
        email: "cap@ships.com",
        address: "104 port, Monterey Bay"
      },
    ]
  }
};

/*
 ██████  ██████  ███    ██ ███████ ██  ██████
██      ██    ██ ████   ██ ██      ██ ██
██      ██    ██ ██ ██  ██ █████   ██ ██   ███
██      ██    ██ ██  ██ ██ ██      ██ ██    ██
 ██████  ██████  ██   ████ ██      ██  ██████
*/

//TODO: add config targeting each section,
//: so as to hide/show individual ones

var config = {
  // chronological: 'chrono'
  // functional   : 'funct'
  organizeBy: "chrono",

  //write as comma-separated strings:
  //heading, objective, education, projects,
  //leadership, work, skills, awards, references
  hideSections: {}
}

//begin processing everything together.

/*
██       ██████   ██████  ██  ██████
██      ██    ██ ██       ██ ██
██      ██    ██ ██   ███ ██ ██
██      ██    ██ ██    ██ ██ ██
███████  ██████   ██████  ██  ██████
*/

$(document).ready(function() {
  //Retrieve the template data from the HTML .
  var source = $('#resume-template').html();

  //compile the template engine
  var template = Handlebars.compile(source);

  //attach variables to compiled source
  var output = template(data);

  //add to body
  $(document.body).append(output);

});
