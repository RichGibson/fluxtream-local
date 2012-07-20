define(["core/DashboardWidget"], function(DashboardWidget) {

    var RichTest = new DashboardWidget();

    RichTest.postLoad = function() {
        $("#rich_test-widget .flx-body").empty();
        var color = "rgb(0,0,0)";
        var params = {"manifest" : this.manifest,
	    "settings" : this.settings,
            "test_value" : 'test',
	};
	var tweets = new Array();


        if (typeof(this.digest.cachedData["twitter-tweet"])!="undefined" &&
            typeof(this.digest.cachedData["twitter-tweet"][0])!="undefined") {
            for (var i=0; i<this.digest.cachedData["twitter-tweet"].length; i++) {
		tweets.push(  this.digest.cachedData["twitter-tweet"][i] );
            }
       }
	params.tweets = tweets;
	params.tweet_cnt = tweets.length;

        $("#rich_test-widget .flx-body").append(
            this.template.render(params)
        );
    };

        //var steps = 0, averageSteps = 0, measures = 0;
        //if (typeof(this.digest.cachedData["twitter-tweet"])!="undefined" &&
            //typeof(this.digest.cachedData["twitter-tweet"][0])!="undefined") {
            //for (var i=0; i<this.digest.cachedData["twitter-tweet"].length; i++) {
             //   if (this.digest.cachedData["twitter-tweet"][i].description>0) {
              //      measures++;
               //     averageSteps+=this.digest.cachedData["fitbit-activity_summary"][i].steps;
                //}
            //}
            //f (averageSteps>0) {
              //  averageSteps/=measures;
               // steps = this.addCommas(Math.round((averageSteps)*1)/1);
            //}
        //}

    return RichTest;
})
