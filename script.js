function open_close_answer(image_obj, ans_id) {
     //console.log(image_obj.getAttribute('data-status'));
    if(image_obj.getAttribute('data-status') == "open") {
       // console.log("Do close");
        image_obj.src = "images/icon-plus.svg";
        image_obj.setAttribute('data-status', 'close');
        document.getElementById(ans_id).style.display = "none";
    } else if(image_obj.getAttribute('data-status') == "close") {
         //console.log("Do open");
        image_obj.src = "images/icon-minus.svg";
        image_obj.setAttribute('data-status', 'open');
        document.getElementById(ans_id).style.display = "block";
    }
}