$(document).on('pageinit', function(){
	console.log("Now");
	$.ajax({
		"url": "_view/schedules",
		"dataType": "json",
		"success": function (data) {
			console.log(data);
			$.each(data.rows, function(index, schedule){
				console.log(value);
				var major = schedule.value.major;
				var cName = schedule.value.cName;
				var cSection = schedule.value.cSection;
				var topicAndSec = schedule.value.topicAndSec;
				var todaysDate = schedule.value.todaysDate;
				var dueDate = schedule.value.dueDate;
				var numOfWeeks = schedule.value.numOfWeeks;
				var classOptView = schedule.value.classOptView;
				var numOfCredits = schedule.value.numOfCredits;
				var teachName = schedule.value.teachName;
				var teachEmail = schedule.value.teachEmail;
				var teachPhone = schedule.value.teachPhone;
				var option = schedule.value.option;
				var note = schedule.value.note;
			});
		}
	});
});