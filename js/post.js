var idPost = "";
var jPost = document.querySelectorAll(".post-index-button");
let functionPage = document.querySelector(".function-fixed");
var url = document.querySelector("#url");
jPost.forEach(item => {
    item.addEventListener('click',(e) => {
        let id = item.getAttribute("data-id");
        idPost = id;
        functionPage.classList.add("function-open");
        url.value = "http://localhost/post/view.jsp?id="+id;
        //alert(id);
        console.log(idPost);

    });
});
// close function page
function closeFunction(){
    if(functionPage)
    {
        
        functionPage.classList.remove("function-open");
    }
}
if(functionPage)
{
    functionPage.addEventListener('click',(e) => {
        if(e.target.classList.contains("function-fixed") || e.target.classList.contains("btn-huy"))
        {
            closeFunction();
        }
    });
}
// function report
function reportPost(){
    alert("Bạn đã report Post " + idPost);
    closeFunction();
} 
// function go to post
function gotoPost(){
    window.location.href = "index.html?post="+idPost;
}
// function copy link
function copyLink() {
    /* Get the text field */
    var copyText = url;
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    appearPopup();
    closeFunction();
}
function appearPopup(){
    var pop = document.querySelector(".pop-up");
    pop.classList.add("pop-up-open");
    setTimeout(function(){
        closePopup();
    },3000);
}
// function close pop up
function closePopup(){
    var pop = document.querySelector(".pop-up");
    pop.classList.remove("pop-up-open");
}