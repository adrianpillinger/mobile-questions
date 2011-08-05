var MobileQuestions = (function() {
	
	// main module
 	var MobileQuestions = {
 		Util : {
 			loadForm : function() {
				$.ajax({
					url: 'forms/form1.json',
					success: function( data ) {
						var questions = data['questions'];
						var answerId;
						
						// form title
						$('#title').append('<h1>' + data['formName'] + '</h1>');
						
						// questions
						for (i=0;i<questions.length;i++)
						{
							var thisQuestion = questions[i];
							$('#questions').append('<p/>' + thisQuestion["question"]);
							if (thisQuestion["answerType"] === "ENUM")
							{
								answerId = "answer_"+i;
								$('#questions').append("<input id='"+answerId+"'></div>");
								$('#'+answerId).autocomplete({
									source: thisQuestion["values"]
								});
							}
						}
					},
					error: function(data) {
						alert('Error Status: ' + data["statusText"]);
					}
				});
			}
  		}
 	}

	return MobileQuestions;

})();

var MobileQuestionsUtils = MobileQuestions.Util;

$(document).ready(function() {
	MobileQuestionsUtils.loadForm();
});

