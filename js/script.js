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
		} else {
			if (!element.classList.contains('outOfSight'))
			{
				element.classList.add('outOfSight')
			}
			if (!element.classList.contains('aria-hidden'))
			{
				element.classList.add('aria-hidden')
			}
		}
	})
}

// app initialization
app.init = function() {
	app.aboutEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'aboutContent')
	})
	app.skillsEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'skillsContent')
	})
	app.projectsEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'projectsContent')
	})
	app.contactEl.addEventListener('click', (event) => {
		app.navigateTo(event, 'contactContent')
	})
}

//document ready
document.addEventListener('DOMContentLoaded', () => {
	app.init()
})