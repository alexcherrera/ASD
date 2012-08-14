$('#home').on('pageinit', function(){
    //JSON Data Pull
    $('#json').on('click', function (){
        //$('#showJSON').empty();
        //$('#showJson').empty();
        $.ajax({
            "url": "college-app/schedules1",
            //type: "GET",
            dataType: "json",
            success: function(data){
                console.log(data);
                /*for(var i = 0, s = schedules.schedules.length; i < s; i++){
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
                }*/
            }
        });
        //return false;
    });
});