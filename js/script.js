// namespace app
const app = {}

// namespace element
app.aboutEl = document.querySelector('.aboutButton')
app.skillsEl = document.querySelector('.skillsButton')
app.projectsEl = document.querySelector('.projectsButton')
app.contactEl = document.querySelector('.contactButton')
app.mainContentEls = document.querySelectorAll('main .wrapper')

// namespace functions
app.navigateToAbout = (event) => {
	console.log(event);
	// hide current meta page, and display the page that was navigated to, by toggling aria-hidden and custom outOfSight classes

}
app.navigateTo = (event, goTo) => {
	// hide current meta page, and display the page that was navigated to, by toggling aria-hidden and custom outOfSight classes
	app.mainContentEls.forEach((element) => {
		if (element.classList.contains(goTo))
		{
			element.classList.remove('aria-hidden', 'outOfSight')
			element.classList.add('intoSight')
			element.scrollIntoView({behavior: 'smooth'});
		} else {
			if (!element.classList.contains('outOfSight'))
			{
				element.classList.add('outOfSight')
			}
			if (!element.classList.contains('aria-hidden'))
			{
				element.classList.add('aria-hidden')
			}
			if (element.classList.contains('intoSight'))
			{
				element.classList.remove('intoSight')
			}
		}
	})
}

// app initialization
app.init = function() {
	app.aboutEl.classList.add('currentButton')
	app.aboutEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'aboutContent')
		app.aboutEl.classList.add('currentButton')
		app.skillsEl.classList.remove('currentButton')
		app.projectsEl.classList.remove('currentButton')
		app.contactEl.classList.remove('currentButton')
	})
	app.skillsEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'skillsContent')
		app.skillsEl.classList.add('currentButton')
		app.aboutEl.classList.remove('currentButton')
		app.projectsEl.classList.remove('currentButton')
		app.contactEl.classList.remove('currentButton')
	})
	app.projectsEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'projectsContent')
		app.projectsEl.classList.add('currentButton')
		app.skillsEl.classList.remove('currentButton')
		app.aboutEl.classList.remove('currentButton')
		app.contactEl.classList.remove('currentButton')
	})
	app.contactEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'contactContent')
		app.contactEl.classList.add('currentButton')
		app.skillsEl.classList.remove('currentButton')
		app.projectsEl.classList.remove('currentButton')
		app.aboutEl.classList.remove('currentButton')
	})
}

//document ready
document.addEventListener('DOMContentLoaded', () => {
	app.init()
})