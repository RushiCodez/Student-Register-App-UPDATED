Name_of_the_student_array = [];

function submit()
{
var name_1 = document.getElementById("Name_of_the_student_1").value ;
var name_2 = document.getElementById("Name_of_the_student_2").value ;
var name_3 = document.getElementById("Name_of_the_student_3").value ;
var name_4 = document.getElementById("Name_of_the_student_4").value ;

Name_of_the_student_array.push(name_1);
Name_of_the_student_array.push(name_2);
Name_of_the_student_array.push(name_3);
Name_of_the_student_array.push(name_4);
 
console.log(Name_of_the_student_array);

document.getElementById("Display_name").innerHTML = Name_of_the_student_array;
document.getElementById("Submit_button").style.display ="none";
document.getElementById("Sort_button").style.display ="inline-block";



}

function sort()

{
    Name_of_the_student_array.sort();
    console.log(Name_of_the_student_array);
    document.getElementById("Display_name").innerHTML= Name_of_the_student_array;






}










