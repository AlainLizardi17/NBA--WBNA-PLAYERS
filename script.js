$("button").click(function() {
    var lbs = $(".lbs").val();
    var gender = $(".gender").val();
if(lbs < 175 && gender=== "Male" ){
$(".message").text("Spud Webb");
}
else if(lbs > 175 && gender=== "Male" ){
$(".message").text("Lebron James");
}
else if(lbs < 175 && gender==="Female" ){
$(".message").text("Alana Beard");
}
else if(lbs > 175 && gender==="Female" ){
$(".message").text("Natalie Achonwa");
}
});
