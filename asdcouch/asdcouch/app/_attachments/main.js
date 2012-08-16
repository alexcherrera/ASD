$('#home').on('pageinit', function(){
    //JSON Data Pull
    $('#json').on('click', function (){
        //$('#showJSON').empty();
        //$('#showJson').empty();
        $.ajax({
            url: "js/json.json",
            type: "GET",
            dataType: "json",
            success: function(schedules){
                console.log(schedules);
                for(var i = 0, s = schedules.schedules.length; i < s; i++){
                    var show = schedules.schedules[i];
                    $('' + 
                        '<ul data-role="listview" class="showJson">' + 
                            '<li>' + show.major + '</li>' + 
                            '<li>' + show.cName + '</li>' +
                            '<li>' + show.cSection + '</li>' +
                            '<li>' + show.topicAndSec + '</li>' +
                            '<li>' + show.todaysDate + '</li>' +
                            '<li>' + show.dueDate + '</li>' +
                            '<li>' + show.numOfWeeks + '</li>' +
                            '<li>' + show.classOptView + '</li>' +
                            '<li>' + show.numOfCredits + '</li>' +
                            '<li>' + show.teachName + '</li>' +
                            '<li>' + show.teachEmail + '</li>' +
                            '<li>' + show.teachPhone + '</li>' +
                            '<li>' + show.option + '</li>' +
                            '<li>' + show.note + '</li>' + '<br/>' +
                        '</ul>'
                        ).appendTo('#showJSON');
                }
            },
        });
        //return false;
    });
    //XML Data Pull
    $('#xml').on('click', function (){
        $('#showXML').empty();
        $('#showXml').empty();
        $.ajax({
            url: "xhr/xml.xml",
            type: "GET",
            dataType: "xml",
            success: function(xml){
                //console.log(xml);
                $(xml).find('schedules').each(function(){
                    var getId = $(this).attr('id');
                    //var xmlData = $.parseXML(xml);
                    //var infoXML = $( xmlData );
                    //console.log(infoXML);
                    //$(xml).find('schedules').each(function(){
                    /*var holdAll = [];
                    var xmlInfo = $(this);*/
                    var getMajor = $(this).find('major').text();
                    var getcName = $(this).find('cName').text();
                    var getcSection = $(this).find('cSection').text();
                    var gettopicAndSec = $(this).find('topicAndSec').text();
                    var gettodaysDate = $(this).find('todaysDate').text();
                    var getdueDate = $(this).find('dueDate').text();
                    var getnumOfWeeks = $(this).find('numOfWeeks').text();
                    var getclassOptView = $(this).find('classOptView').text();
                    var getnumOfCredits = $(this).find('numOfCredits').text();
                    var getteachName = $(this).find('teachName').text();
                    var getteachEmail = $(this).find('teachEmail').text();
                    var getteachPhone = $(this).find('teachPhone').text();
                    var getoption = $(this).find('option').text();
                    var getnote = $(this).find('note').text();
                   /* holdAll.push(getMajor);
                    holdAll.push(getcName);
                    holdAll.push(getcSection);
                    holdAll.push(gettopicAndSec);
                    holdAll.push(gettodaysDate);
                    holdAll.push(getdueDate);
                    holdAll.push(getnumOfWeeks);
                    holdAll.push(getclassOptView);
                    holdAll.push(getnumOfCredits);
                    holdAll.push(getteachName);
                    holdAll.push(getteachEmail);
                    holdAll.push(getteachPhone);
                    holdAll.push(getoption);
                    holdAll.push(getnote);

                    for(var i = 0, x = holdAll.length; i < x; i++){
                        var holdValue = holdAll[i];*/
                    
                      /* // var getId = $(this).attr('id');*/
                       $('<div class="xmlapp"' + getId + '></div>' +
                    
                                '<p>' + getMajor + '</p>' + 
                                '<p>' + getcName + '</p>' +
                                '<p>' + getcSection + '</p>' +
                                '<p>' + gettopicAndSec + '</p>' +
                                '<p>' + gettodaysDate + '</p>' +
                                '<p>' + getdueDate + '</p>' +
                                '<p>' + getnumOfWeeks + '</p>' +
                                '<p>' + getclassOptView + '</p>' +
                                '<p>' + getnumOfCredits + '</p>' +
                                '<p>' + getteachName + '</p>' +
                                '<p>' + getteachEmail + '</p>' +
                                '<p>' + getteachPhone + '</p>' +
                                '<p>' + getoption + '</p>' +
                                '<p>' + getnote + '</p>' + '<br/>' 
                            
                        ).appendTo('#xmlapp');
                        //console.log();
                });
            } //},
            //error: function(){
               // console.log(courseInfo);
            //}
        });
        //return false;
    });
    console.log("hello home2");
    $('#csv').on('click', function (){
        //$('#showJSON').empty();
        //$('#showJson').empty();
        $.ajax({
            url: "xhr/csv.csv",
            type: "GET",
            dataType: "text",
            success: function(result){
                console.log("showNow");
                var row = result.split('\n');
                for(var i = 0, l = row.length; i < l; i++){
                    var info = row[i];
                    var data = info.split(',');
                    var dataShow = 
                        $('<li>' + 
                                'Major Choice:' + data[0] +
                                'Course Name:' + data[1] +
                                'Course Section:' + data[2] +
                                'Topic and Section:' + data[3] +
                                'Todays Date:' + data[4] +
                                'Due Date:' + data[5] +
                                'Number of Weeks:' + data[6] +
                                'Is the Class Online or OnCampus:' + data[7] +
                                'Number of Credits:' + data[8] +
                                'Teacher Name:' + data[9] +
                                'Teacher Email:' + data[10] +
                                'Teacher Phone Number:' + data[11] +
                                'Turn In Option:' + data[12] +
                                'Note Section:' + data[13] 
                        ).appendTo('#csvapp');
                }
            },
        });
        //return false;
    });
	$('#loadServer').on('click', function(){
		console.log("Now");
		$.ajax({
			"url": '/college-app/_all_docs?include_docs=true&start_key="schedules1"&end_key="schedules6"',
			"dataType": "json",
			"success": function (data) {
				console.log(data);
				$.each(data.rows, function(index, schedule){
					console.log(schedule);
					var major = schedule.doc.major;
					var cName = schedule.doc.cName;
					var cSection = schedule.doc.cSection;
					var topicAndSec = schedule.doc.topicAndSec;
					var todaysDate = schedule.doc.todaysDate;
					var dueDate = schedule.doc.dueDate;
					var numOfWeeks = schedule.doc.numOfWeeks;
					var classOptView = schedule.doc.classOptView;
					var numOfCredits = schedule.doc.numOfCredits;
					var teachName = schedule.doc.teachName;
					var teachEmail = schedule.doc.teachEmail;
					var teachPhone = schedule.doc.teachPhone;
					var option = schedule.doc.option;
					var note = schedule.doc.note;
					$('#schedulesCouchList').append(
						$('<li>').append(
							$('<a>').append("href", "#")
								.text(major)
						)
					);
				});
				//Once added all items, need to have JQM to refresh the page to update any new styles/changes.
				$('#schedulesList').listview('refresh');
			}
		});
	});
});