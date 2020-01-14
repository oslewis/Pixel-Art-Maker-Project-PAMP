// Select color input
const color = document.getElementById( 'colorPicker' );

// Selecting ID's turning them to easily accessible variables.
const gridHeight = document.getElementById( 'inputHeight' );
const gridWidth = document.getElementById( 'inputWidth' );
const pixelCanvas = document.getElementById( 'pixelCanvas' );
const sizePicker = document.getElementById( 'sizePicker' );

// event listener that calls makeGrid() through clicking on submit.
document.addEventListener( 'submit', function() {
	event.preventDefault();
	const width = gridWidth.value;
	const height = gridHeight.value;
	pixelCanvas.innerHTML = "";
	makeGrid( height, width );
} );

// makeGrid function creates a grid according to user input.
function makeGrid( height, width ) {
	for ( w = 1; w <= width; ++w ) {
		const row = document.createElement( 'tr' );
		for ( h = 1; h <= height; ++h ) {
			const cell = document.createElement( 'td' );
			row.appendChild( cell );
			cell.addEventListener( 'click', function( event ) {
				let colorPick = color.value;
				event.target.style.backgroundColor = colorPick;
			} )
		};
		pixelCanvas.appendChild( row );
	};
};
