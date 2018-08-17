/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Add variables that store DOM elements that will need to reference and/or manipulate
const studentItems = document.getElementsByClassName("student-item cf");


// Create a function to hide all of the items in the list excpet for the ten items to show
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
  $('.pagination').on('click', 'a', function(event){
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


// append input feild and button
$('h2').append('<div class="student-search"></div>');
$('.student-search').append('<input placeholder="Search for students...">');
$('.student-search').append('<button>Search</button>');

// event handler on click
$('button').on('click', function(){
  const search = $('input').val();
  //loop through the list to find the student name that match the input
  for (let i=0; i<studentItems.length; i+=1) {
    if ($('.student-item').eq(i).find('h3').text() === search) {
      //'block' the match one, and hide the ohters
      studentItems[i].style.display = 'block';
    } else {
      studentItems[i].style.display = 'none';
    }
  }
  // if there is no matches, display 'No results'
  if ($("[style='display: block;']").length === 0) {
    $('.student-list').append('<p>No results</p>');
  }
  // pagination based on the result list
  if ($('div').hasClass('pagination'))  {
    $('.pagination').remove();
  }
  appendPageLinks($("[style='display: block;']"))
});

// envent handler on 'keyup', similar to 'click'
$('input').on('keyup', function(){
  const search = $('input').val();
  for (let i=0; i<studentItems.length; i+=1) {
    if ($('.student-item').eq(i).find('h3').text() === search) {
      studentItems[i].style.display = 'block';
    } else {
      studentItems[i].style.display = 'none';
    }
  }
  if ($('div').hasClass('pagination'))  {
    $('.pagination').remove();
  }
  appendPageLinks($("[style='display: block;']"))
});
