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
 //============ Upload Preview Media
 $("#filePhoto").on('change', function(){

    $('#previewImage').html('');
      $('#removePhoto').hide();
      var loaded = false;
      if(window.File && window.FileReader && window.FileList && window.Blob) {
       //check empty input filed
          if($(this).val()) {
              var oFReader = new FileReader(), rFilter = /^(?:image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/png|image|video\/mp4|video\/quicktime|audio\/mpeg)$/i;
              if($(this)[0].files.length === 0){return}

              var oFile = $(this)[0].files[0];
              var fsize = $(this)[0].files[0].size; //get file size
              var ftype = $(this)[0].files[0].type; // get file type

              if(!rFilter.test(oFile.type)) {
                  $('#filePhoto').val('');
          swal({
                  title: error_oops,
                  text: formats_available,
                  type: "error",
                  confirmButtonText: ok
                  });
                  return false;
              }

              var allowed_file_size = 2440000;

              if(fsize>allowed_file_size) {
                  $('#filePhoto').val('');
          swal({
                  title: error_oops,
                  text: max_size_id,
                  type: "error",
                  confirmButtonText: ok
                  });
                  return false;
              }

              oFReader.onload = function(e) {

                  var image = new Image();
                  image.src = oFReader.result;

                  image.onload = function() {

                      if(image.width < 20) {
                          $('#filePhoto').val('');
                swal({
                        title: error_oops,
                        text: error_width_min,
                        type: "error",
                        confirmButtonText: ok
                        });
                          return false;
                      }

              if(image.height > image.width) {
                var $imageWidth = 40;
              } else {
                var $imageWidth = 65;
              }

            $('#previewImage').html('<img src="'+e.target.result+'" class="rounded" width="'+$imageWidth+'" />');
              $('#removePhoto').show();
                      var _filname =  oFile.name;
                        var fileName = _filname.substr(0, _filname.lastIndexOf('.'));
                  };// <<--- image.onload
          }
          oFReader.readAsDataURL($(this)[0].files[0]);
          }
      }
  });