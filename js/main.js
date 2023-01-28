let gender=prompt("Enter the gender");
let marital=prompt("enter marital status 'yes' or 'no'");
if (gender=="female"){
    document.write("work only in urban areas");
}
else if (gender=="male"){
    var age=parseInt(prompt("enter the age"));
    if (age>=20 && age <40){
        document.write("work anywhere");
    }
    else if (age>=40 && age<=60){
        document.write("only work in urban areas");
    }
    else{
        document.write("write");
    }
}