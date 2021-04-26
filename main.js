var name_of_student_array= [];

function submit(){
    var display_student_array= [];
    
    for (var x=1; x <= 4; x++){
        var name_of_student= document.getElementById("name_of_the_student_"+ x).value;
        console.log(name_of_student);
name_of_student_array.push(name_of_student);
    }
    console.log(name_of_student_array);

    var length_of_name_array= name_of_student_array.length;

    console.log(length_of_name_array);

    for (var y=0; y <length_of_name_array; y++){
        display_student_array.push("<h4> NAME - "+ name_of_student_array[y]+ "</h4>");
        console.log(display_student_array);

    }
    console.log(display_student_array);
    document.getElementById ("display_name_with_commas").innerHTML= display_student_array;

    var remove_commas= display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
name_of_student_array.sort();
console.log(name_of_student_array);

var sorting= [];
var length_sort= name_of_student_array.length;
console.log(length_sort);
for(var t=0; t <length_sort; t++ ){
    sorting.push("<h4> NAME - "+ name_of_student_array[t]+ "</h4>");
    console.log(sorting);

}
var remove_commas= sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML= remove_commas;
}