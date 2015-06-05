var mobileSelect = angular.module('mh.mobile.selectLink', []);

var overlay = $('<div class="mh-ms-overlay-background">');


/*
 * resize the popup
 */
var resizeMobileSelect = function(overlayContent) {
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();

	overlay.height(viewportHeight);
	overlay.width(viewportWidth);

	var top = viewportHeight / 2;
	var marginTop = -overlayContent.height() / 2;

	overlayContent.css({ "top":  top + "px", "margin-top": marginTop + "px" });
};



/*
 * functions of the directive
 */
var mhMobileSelectController = function($scope, $element, $attrs) {
	

  $scope.msselect = function(item) {
		$scope.mslist.selected = item.id;
	};
};


mobileSelect.directive('mhMobileSelectLink', function() {
	return {
    restrict: 'A',
    scope: {
    	mslist: '='
    },
    templateUrl: 'mobile-select-link.html',
    controller: mhMobileSelectController,
    compile: function(element, attrs, transclude) {
        var msOverlay = element.find(".mh-ms-overlay-content");
    	// link function
    	$(window).resize(function() {
    		resizeMobileSelect(msOverlay);
    	});


    	return {
        pre: function preLink(scope, element, attrs, controller) { 
        	$("body").append(overlay);

          
        },
        post: function postLink(scope, element, attrs, controller) { 
        	// add list items to the overlay
        	
        	var msSelected = element.find(".mh-ms-selected");
            msOverlay.css({
                "position": "fixed",
            });



        	// open the overlay
        	msSelected.on("click", function() {
      			overlay.css({ "display": "block" });
                msOverlay.css({ "display": "block" });
        		resizeMobileSelect(msOverlay);
        	});     

        	
        	msOverlay.on("click", function() {
      			closeOverlay();
        	});	

        	overlay.on("click", function() {
        		closeOverlay();
        	});

            // close the overlay
        	var closeOverlay = function() {
        		overlay.css({ "display": "none" });
        		msOverlay.css({ "display": "none" });
			}

      	  
	      }
    	}
		}
	};
});