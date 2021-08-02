var names_array=[]
function submit(){
    name1=document.getElementById("friend_1").value;
    name2=document.getElementById("friend_2").value;
    name3=document.getElementById("friend_3").value;
    name4=document.getElementById("friend_4").value;
    names_array.push(name1);
    names_array.push(name2);
    names_array.push(name3);
    names_array.push(name4);
    console.log(names_array)
    document.getElementById("display_name").innerHTML=names_array
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    names_array.sort()
    console.log(names_array)
    document.getElementById("display_name").innerHTML=names_array
}