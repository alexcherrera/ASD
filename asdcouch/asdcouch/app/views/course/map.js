function (doc) {
	if(doc._id.substr(0,8) === "program") {
		emit(doc._id);
	}
};