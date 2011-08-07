

var MobileQuestions = (function() {
	// main module
 	var MobileQuestions = {
 	
		loadForm : function() {
			$.ajax({
				url: 'forms/form1.json',
				success: function( data ) {
					var questions = data['questions'];
					var answerId;
					var thisQuestion;
					
					// form title
					$('#title').append('<h1>' + data['formName'] + '</h1>');
					
					// questions
					for (i=0;i<questions.length;i++)
					{
						thisQuestion = questions[i];
						MobileQuestions.createQuestion(thisQuestion);
//                            $('#questions').append(function(index,html){
//                                    return MobileQuestionsUtils.createQuestion(thisQuestion);
//                                });
					}
				},
				error: function(data) {
					alert('Error Status: ' + data["statusText"]);
				}
			});
		},
		
		createQuestion : function(question) {
            $('#freeText').clone().attr('id', 'question_'+question['id']).appendTo('#questions');
//			var questionHtml = '<p/>' + question["question"];
//			if (question["answerType"] === "ENUM")
//			{
//				answerId = "answer_"+i;
//				questionHtml += "<input id='"+answerId+"'></div>";
//			}
//			return questionHtml;
		}
		
 	}

	return MobileQuestions;

})();

var MobileQuestionsUtils = MobileQuestions;

$(document).ready(function() {
    $('#templates').hide();
	MobileQuestionsUtils.loadForm();
});

