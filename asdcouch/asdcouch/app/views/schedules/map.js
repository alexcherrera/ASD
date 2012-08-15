function (doc) {
	if(doc._id.substr(0, 9) === "schedules") {
		emit(doc._id.substr(9), {
			"major": doc.major,
			"cName": doc.cName,
			"cSection": doc.cSection,
			"topicAndSec": doc.topicAndSec,
			"todaysDate": doc.todaysDate,
			"dueDate": doc.dueDate,
			"numOfWeeks": doc.numOfWeeks,
			"classOptView": doc.classOptView,
			"numOfCredits": doc.numOfCredits,
			"teachName": doc.teachName,
			"teachEmail": doc.teachEmail,
			"teachPhone": doc.teachPhone,
			"option": doc.option,
			"note": doc.note
		});
	}
};