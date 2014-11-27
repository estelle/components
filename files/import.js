    function loadHandler(e) {
      var content = document.querySelector('link[rel="import"]').import;
      var el = document.querySelectorAll('.nameTag');
      var template = content.getElementById('nameTagTemplate');
      for(var i = 0; i < el.length; i++) {
        var shadow = el[i].createShadowRoot();
        var clone = document.importNode(template.content, true);
        shadow.appendChild(clone);
      }
    }
    function errorHandler(e) {
      console.log('Error loading import: ' + e.target.href);
    }