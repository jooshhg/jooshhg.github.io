/**
 * Javascript for index
 */

window.onload = () => {

	let menu = document.querySelector('ul');
	let menuLink = document.querySelector('#hamburger');


	/**
	 * Toggle menu
	 */
	function toggleMenu(e) {

		menu.classList.toggle('active');
		e.preventDefault();

	}


	menuLink.addEventListener('click', toggleMenu);

}