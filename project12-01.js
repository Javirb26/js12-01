"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Javier Ballester
      Date: 02/28/2023     

      Filename: project12-01.js
*/

// Run once the page is loaded and ready
$ ( () => {
    $("li.submenu").mouseover(e => {

        // Show method applied to "show" menu content
            $(e.currentTarget).children("ul").show();

           
    }); 

    $("li.submenu").mouseout(e => {

        // Hide method applied to "hide" menu content
            $(e.currentTarget).children("ul").hide();
           
    }); 

});






                                                