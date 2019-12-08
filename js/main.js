'use strict';

window.addEventListener('load', (event) => {
  const render = () => {
    display.renderColour('#0ff');
    display.render();
  }

  /***
   * Handles window resizing and the screen canvas display.
   */
  const display = new Display(document.querySelector('canvas'));

  //////////////////////
  /// INITIALIZATION ///
  //////////////////////

  window.addEventListener('resize', display.handleResize);

  display.resize();

});