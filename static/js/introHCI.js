
function initializePage() {
  $("#buttontop").click(function(e) {
    $('.jumbotron h1').text("Javascript has take control");
        $("#buttontop").text("Please wait...");
        $("#buttontop").toggleCla("active");
  })};

$(document).ready(function() {
   initializePage();
});

$("a.thumbnail").click(projectClick);


function projectClick(e) { 
    
    e.preventDefault();
    var containingProject = $(this).closest("a.thumbnail");
var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<div class='project-description'><p>Description of the project.</p></div>");
    }
}



