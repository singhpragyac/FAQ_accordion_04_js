function open_close_answer_old(image_obj, ans_id) {
    //console.log(image_obj.getAttribute('data-status'));
    if(image_obj.getAttribute('data-status') == "open") {
        // console.log("Do close");
        image_obj.src = "images/icon-plus.svg";
        image_obj.setAttribute('data-status', 'close');
        document.getElementById(ans_id).style.display = "none";
    } else if(image_obj.getAttribute('data-status') == "close") {
        //console.log("Do open");
        for (let x = 1; x <= 4; x++) {
            //console.log("ans"+x);
            document.getElementById("qst"+x).src = "images/icon-plus.svg";
            document.getElementById("qst"+x).setAttribute('data-status', 'close');
            document.getElementById("ans"+x).style.display = "none";
        }
        image_obj.src = "images/icon-minus.svg";
        image_obj.setAttribute('data-status', 'open');
        document.getElementById(ans_id).style.display = "block";
    }
}

const qst_status = { qst1: false, qst2: false, qst3: false, qst4: false, };

function open_close_answer_old1(image_obj, qst_id) {
    //console.log(qst_status.qst1);
    //console.log(qst_status[Object.keys(qst_status)[0]]);
    for (let x in qst_status) {
        if(qst_id == x) {
            if(qst_status[x] == false) {
                qst_status[x] = true;
                document.getElementById("qst"+x[3]).src = "images/icon-minus.svg";
                document.getElementById("ans"+x[3]).style.display = "block";
                //console.log(x + " open");
            } else if(qst_status[x] == true) {
                qst_status[x] = false;
                document.getElementById("qst"+x[3]).src = "images/icon-plus.svg";
                document.getElementById("ans"+x[3]).style.display = "none";
                //console.log(x + " close");
            }
        } else {
            //console.log(x + " close");
            qst_status[x] = false;
            document.getElementById("qst"+x[3]).src = "images/icon-plus.svg";
            document.getElementById("ans"+x[3]).style.display = "none";
        }
    };
}

function open_close_answer(image_obj, qst_id) {
    for (let x in qst_status) {
        if(qst_id == x && qst_status[x] == false) {
            qst_status[x] = true;
            document.getElementById("qst"+x[3]).src = "images/icon-minus.svg";
            document.getElementById("ans"+x[3]).style.display = "block";
        } else {
            qst_status[x] = false;
            document.getElementById("qst"+x[3]).src = "images/icon-plus.svg";
            document.getElementById("ans"+x[3]).style.display = "none";
        }
    };
}