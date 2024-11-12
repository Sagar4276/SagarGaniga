var tab_links=document.getElementsByClassName("tab-links");
var tab_contents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
 for (tablink of tab_links){
    tablink.classList.remove("active-link");
 }
 for (tabcontent of tab_contents){
    tabcontent.classList.remove("active-tab");
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(`${tabname}`).classList.add("active-tab");
 console.log(document.getElementById(`${tabname}`))

}

var side_menu=document.getElementById("side-menu");

function openmenu(){
side_menu.style.right="0";
}
function closemenu(){
    side_menu.style.right="-200px";
}