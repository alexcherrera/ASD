function (doc) {
	if(doc._id.substr(0, 9) === "schedules") {
		emit(doc._id);
	}
};