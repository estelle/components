    function loadHandler(e) {
      var content = document.querySelector('link[rel="import"]').import;
      doIt();/*var el = document.querySelectorAll('.name-tag');
      var template = content.getElementById('nameTagTemplate');
      for(var i = 0; i < el.length; i++) {
        var shadow = el[i].createShadowRoot();
        var clone = document.importNode(template.content, true);
        shadow.appendChild(clone);
      }*/

      var nameTag = Object.create(HTMLElement.prototype);

nameTag.createdCallback = function() {
   var template = document.getElementById('nameTagTemplate').content;
   var clone = template.cloneNode(true);
   var root = this.createShadowRoot();
   root.appendChild(clone);
 };

document.registerElement('name-tag', {
  prototype: nameTag
});
    }
    function errorHandler(e) {
      console.log('Error loading import: ' + e.target.href);
    }


function doIt() {
    var importDoc = document.currentScript.ownerDocument; // importee

    // Define and register <shadow-element>
    // that uses Shadow DOM and a template.
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
      // get template in import
      var template = importDoc.querySelector('#nameTagTemplate');

      // import template into
      var clone = document.importNode(template.content, true);

      var root = this.createShadowRoot();
      root.appendChild(clone);
    };

    document.registerElement('name-tag', {prototype: proto});
  }

