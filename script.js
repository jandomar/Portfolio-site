let avatar = document.getElementById('avatar');
avatar.addEventListener('click', rotate);
function rotate() {
  if (avatar.style.transform) {
    avatar.style.removeProperty('transform');
  } else {
  avatar.style.transform = 'rotate3d(0, 1, 0, 1080deg)';
}
}

/*
let projects = document.querySelector('.projects-nav');
let projectsBar = document.querySelector('.projects-bar')
projects.addEventListener('mouseover', function() {
  projectsBar.style.visibility = 'visible';
});



projectsBar.addEventListener('mouseout', function() {
  projectsBar.style.visibility = 'hidden';
})
*/