$(document).ready(function() {

var gradeWeightedCP = function (myGrade)
{
	return (61 - myGrade)*(-0.125);
}

var gradeWeightedHonors = function (myGrade)
{
	return ((61 - myGrade)*(-0.125) + 0.5);
}

var gradeWeightedAP = function (myGrade)
{
	return ((61 - myGrade)*(-0.125) + 1.0);
}

var weight = 0;
    var total = 0;
    var count = 0;

var calculate = function () 
{
    for (var k =1; k < 8; k++)
	{
    var stuff = "rad" + k;
	var grade = $(".per" + k).val();
	var type = $('input[name=' + stuff + ']:checked').val();
    type = parseInt(type);
	var weighted = 0;
        
    console.log(stuff + "   " + grade + "   " + type);
    
    if (grade > 100)
	{
		grade = 100;
	}
	
	if (type == 1)
	{ 
		weighted += gradeWeightedCP(grade);
	}
	
	else if (type == 2)
	{ 
		weighted += gradeWeightedHonors(grade);
	}
	
	else
	{
		weighted += gradeWeightedAP(grade);
	}
	
	if (grade < 61)
	{
		weighted = 0;
	}
    
        if ($("#none" + k).is(':checked') == false)
    {console.log(weighted);
    total += weighted;
     count ++; }
        
    }
    console.log(total);
    console.log(count);
    
    console.log(total / count);
    var gpa = (total/count).toFixed(3);
    $('#output').text(gpa);
	count = 0;
	total = 0;
}

$("#calculator").click(function() {
    calculate();});

});
