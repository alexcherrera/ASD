$('#jsonInfo').on('pageinit', function(){
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
				$('#schedulesList').append(
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