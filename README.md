bootstrap-panelLoading
======================

A simple jQuery plugin to create a bootstrap themed loading modal over the top of a selected element.

## Author

[Guy Marriott] (http://github.com/ScopeyNZ)

## Usage

Select an element with jQuery selectors and use the `panelLoading` method.

	$('div').panelLoading();
	
Disable the loading panel by calling the `panelLoading` method again:

	$('div').panelLoading();

Settings are defined on initialization (showing defaults):

	$('div').panelLoading({
		setLoading: 		null,
		color: 				'#fff',
		opacity: 			'0.8',
		text:				'Loading...',
		textClass:			'text-info',
		loaderClass:		'progress-striped active',
		loaderWidth:		'100%',
		fadeDuration:		500,
		fromTop:			false,
	});
	
Description of settings:

- setLoading - Set to true or false to force the panel to load/stop loading
- color - The colour of the overlay.
- opacity - The opacity of the overlay.
- text - The text to appear above the loading bar. Can be set to null to remove the text all together
- textClass - Any classes to be applied to the text above the loading bar.
- loaderWidth - The width of the loading bar
- fadeDuration - The time in milliseconds it will take for the loading panel/overlay to appear and disappear.
- fromTop - A distance, in pixels, for the information panel to appear from the top of the loading element. Useful for whole page loads (`$('body').panelLoading();`).

## Copyright and license:

Copyright (C) 2013 bootstrap-panelLoading

Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.