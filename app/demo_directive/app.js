angular.module("btst", []).
    directive("btstAccordion", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            scope: {},
            template:
                "<div class='accordion' ng-transclude></div>",
            link: function (scope, element, attrs) {

                // give this element a unique id
                var id = element.attr("id");
                if (!id) {
                    id = "btst-acc" + scope.$id;
                    element.attr("id", id);
                }

                // set data-parent on accordion-toggle elements
                var arr = element.find(".accordion-toggle");
                for (var i = 0; i < arr.length; i++) {
                    $(arr[i]).attr("data-parent", "#" + id);
                    $(arr[i]).attr("href", "#" + id + "collapse" + i);
                }
                arr = element.find(".accordion-body");
                $(arr[0]).addClass("in"); // expand first pane
                for (var i = 0; i < arr.length; i++) {
                    $(arr[i]).attr("id", id + "collapse" + i);
                }
            },
            controller: function () {}
        };
    }).
    directive('btstPane', function () {
        return {
            require: "^btstAccordion",
            restrict: "E",
            transclude: true,
            replace: true,
            scope: {
                title: "@",
                category: "=",
                order: "="
            },
            template:
            "<div class='accordion-group' >" +
            "  <div class='accordion-heading'>" +
            "    <a class='accordion-toggle' data-toggle='collapse'> {{category.name}} - </a>" +

            "  </div>" +
            "<div class='accordion-body collapse'>" +
            "  <div class='accordion-inner' ng-transclude></div>" +
            "  </div>" +
            "</div>",
            link: function (scope, element, attrs) {
                scope.$watch("title", function () {
                    // NOTE: this requires jQuery (jQLite won't do html)
                    var hdr = element.find(".accordion-toggle");
                    hdr.html(scope.title);
                });
            }
        };
    })