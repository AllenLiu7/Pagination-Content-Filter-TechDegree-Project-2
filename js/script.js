/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Add variables that store DOM elements you will need to reference and/or manipulate
const studentItems = document.getElementsByClassName("student-item cf");

// Create a function to hide all of the items in the list excpet for the ten you want to show
const showPage = (page, list) => {
  for (let i=0; i<list.length; i+=1) {
    if (i >= page*10-10 && i < page*10) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
}

//Create and append the pagination links
const appendPageLinks = (list) => {
  //remove previous pagination
  if ($('div').hasClass('pagination'))  {
    $('.pagination').remove();
  }
  // How many pages for the list
  let pageNum = Math.ceil(list.length/10);
  //create the link section
  $('.page').append('<div class="pagination"></div>');
  $('.pagination').append('<ul></ul>');

  // append links to list
  for (let i=1; i<=pageNum; i+=1) {
    $('.pagination ul').append('<li><a href="#">' + i +'</a>');
  }
  // add event listener to a tag
  $(".pagination").on("click", "a", function(event){
    showPage(parseInt($( this ).text()), list);
    // remove class then add new class to a
    $('a').each(function(){
      $('a').removeClass()
    });
    this.className = "active";
  });
}

showPage(1, studentItems)
appendPageLinks(studentItems);
