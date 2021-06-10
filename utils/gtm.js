/* eslint-disable */

/**
 * @global dataLayer can be filled info and send to Google Tag Manager.
*/

if(typeof window !== "undefined"){
  window.dataLayer = window.dataLayer || [];
}



/**
 * @function pushEvent - Sendout data ,needs three params:
 * @param {string} eventAction
 * @param {string} eventCategory
 * @param {string} eventLabel
 */
const pushEvent = (eventAction, eventCategory, eventLabel) => {
  if(typeof window !== "undefined"){
    window.dataLayer.push({ event: "GAEvent", eventAction, eventCategory, eventLabel });
  }
};

/**
 * At first listen page, second get variable buried`s value,then sendout data
 * @variable {string} buried - comes from the clicked html tag.
 * @param {Array} buriedValArr - at least 3 params
 * Usage: set property at html tags. <div data-buried="'action','category','label'"></div>
 */
export const addGtmListener = () => {

  if(typeof document !== "undefined"){
    document.addEventListener(
      "click",
      function(e) {
        const { buried } = e.target.dataset;
        if (!buried) return;
        const buriedArr = buried.split(",");
        pushEvent(...buriedArr);
      },
      true,
    );
  }
 
};

/**
 * Export event to use it in the method.
 * Usage:  pushEvent('action','category','label')
 */
export default pushEvent;
