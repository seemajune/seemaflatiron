(function() {
  var content = document.getElementsByClassName('content')[0];
  var aboutSection = document.getElementsByClassName('about')[0];
  var contactSection = document.getElementsByClassName('contact')[0];
  var expSection = document.getElementsByClassName('experience')[0];
  var exp = document.getElementById('experience');
  var contact = document.getElementById('contact');
  var about = document.getElementById('about');

  var sections = [aboutSection, contactSection, expSection];

  var onTransitionEnded = function() {
    content.removeEventListener("transitionend", onTransitionEnded);
    showContentSection();
  };

  var activeSection;

  function showContentSection() {
    console.log(activeSection);
    activeAndDeactivate(activeSection);
    content.style.visibility = 'visible';
    content.classList.add('full');
  }

  function hideContentSection() { 
    content.style.visibility = 'hidden';
    content.classList.remove('full');
  }

  function hideContentIfVisible() {
    if (content.style.visibility === 'visible') {
      content.addEventListener("transitionend", onTransitionEnded);
      hideContentSection();
    }
    else {
      showContentSection();
    }
  }

  function activeAndDeactivate() {
    sections.forEach(function(section){
      if (section === activeSection) {
        section.classList.add('active');
        section.classList.remove('inactive');
      } else {
        section.classList.remove('active');
        section.classList.add('inactive');
      }
    });
  }

  about.addEventListener('click', function(){
    if (activeSection !== aboutSection) {
      activeSection =  aboutSection;
      hideContentIfVisible();
    }
  });

  contact.addEventListener('click', function(){
    if (activeSection !== contactSection) {
      activeSection = contactSection;
      hideContentIfVisible();
    }
  });

  exp.addEventListener('click', function(){
    if (activeSection !== expSection) {
      activeSection = expSection;
      hideContentIfVisible();
    }
  });

})();
