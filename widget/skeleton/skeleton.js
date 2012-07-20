define(["core/DashboardWidget"], function(DashboardWidget) {

    var skeleton = new DashboardWidget();

    skeleton.postLoad = function() {
        //$("#stepsTaken-widget .flx-body").empty();
        //if (typeof(this.digest.cachedData["fitbit-activity_summary"])!="undefined" &&
            //typeof(this.digest.cachedData["fitbit-activity_summary"][0])!="undefined") {
            //for (var i=0; i<this.digest.cachedData["fitbit-activity_summary"].length; i++) {
                //if (this.digest.cachedData["fitbit-activity_summary"][i].steps>0) {
                    //measures++;
                    //averageSteps+=this.digest.cachedData["fitbit-activity_summary"][i].steps;
                //}
            //}
       //  }
        var params = {"manifest" : this.manifest,

            "settings" : this.settings,
            "color" : color
            };

	var simple_loop = new Array();
	simple_loop[0] = 'one';
	simple_loop[1] = 'two';
	params.simple_loop = simple_loop;

            this.template.render(params);

    };


    return StepsTaken;
})
