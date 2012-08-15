function (doc) {
	if(doc._id.substr(0, 9) === "schedules") {
		emit(doc._id.substr(9), {
			"Major": doc.major,
			"Course Name": doc.cName,
			"Course Section": doc.cSection,
			"Topic and Section": doc.topicAndSec,
			"Today's Date": doc.todaysDate,
			"Due Date": doc.dueDate,
			"Number of Weeks": doc.numOfWeeks,
			"Is the Class Online or OnCampus": doc.classOptView,
			"Number of Credits": doc.numOfCredits,
			"Teacher Name": doc.teachName,
			"Teacher Email": doc.teachEmail,
			"Teacher Phone Number": doc.teachPhone,
			"Turn In Option": doc.option,
			"Note Section": doc.note
		});
	}
};