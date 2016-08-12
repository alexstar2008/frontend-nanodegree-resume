var work ={
  "job":[{
    "do":"front-end developer",
    "employer":"wet",
    "date":"2016",
    "location":"Kiev",
    "description":"My first experience and my first money"
    },{
      "do":"back-end developer",
      "employer":"reflat",
      "date":"2016",
      "location":"Kiev",
      "description":"Webpage for my uncle"
    }
  ]
};

var bio = {
  "name":"alex",
  "years":19,
  "status":"student",
  "contacts":{
    "city":"Kiev",
    "houseNumber":22
  },
   "skills":["programming","writing"]
};
// var education ={
//   "school":{
//     name:"148",
//     years:11
//   },
//   "univercity":{
//     name:"KPI",
//     city:"Kiev",
//     years:4
//   }
// };

//iterate all work
function displayWork(){
  for(jb in work.job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.job[jb].do);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.job[jb].employer);
    var formattedDate = HTMLworkDates.replace("%data%",work.job[jb].date);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.job[jb].location);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.job[jb].description);
      var formattedEmployerTitle = formattedEmployer +formattedTitle +
        formattedDate +formattedLocation+formattedDescription;
     $(".work-entry:last").append(formattedEmployerTitle);
  }
}
displayWork();

//internationalizeButton
$("#main").append(internationalizeButton);
function inName(nameAll){
  var nameArray = nameAll.split(" ");
  var name = nameArray[0].toLowerCase();
  var capital = name.slice(0,1);
  var name = name.replace(capital,capital.toUpperCase());
  var surname = nameArray[1].toUpperCase();
  return (name + " " + surname);
};


var projects ={
  "projects":
  [{
    "title":"wet",
    "dates":"2016",
    "description":"My first project"
    },{
      "title":"reflat",
      "dates":"2016",
      "description":"My second project"
    }

  ]
};


projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    //--title
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    //--dates
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    //--description
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    //--images
    if(projects.projects[project].images.length>0){
      for(img  in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%".projects.projects[project].images[img]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();
