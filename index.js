/*
 * Write your JS code in this file.  Don't forget to include your name and
 * @oregonstate.edu email address below.
 *
 * Name:Qi Xu
 * Email:xuq2@oregonstate.edu
 */

 document.getElementById('filter-update-button').addEventListener('click',update);
 document.getElementById('sell-something-button').addEventListener('click', function(){
 	modal.classList.toggle('hidden');
 	back.classList.toggle('hidden');
 });
 document.getElementById("modal-cancel").addEventListener('click', shutdownModal);
 document.getElementById("modal-close").addEventListener('click', shutdownModal);
 document.getElementById('modal-accept').addEventListener('click',create_new);



 var text=document.getElementById('filter-text').value.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
  .toLowerCase();
 var min_price=document.getElementById('filter-min-price').value;
 var max_price=document.getElementById('filter-max-price').value;
 var get_city=document.getElementById('filter-city').value;
 var condition=document.getElementById('filter-condition');
 var modal=document.getElementById("sell-something-modal");
 var back=document.getElementById("modal-backdrop");
 var content=document.getElementById('posts');

// ===============create new=================================
 var text_in = document.getElementById("post-text-input");
 var price_in = document.getElementById("post-price-input");
 var city_in = document.getElementById("post-city-input");
 var img_in = document.getElementById("post-photo-input");
// =========check if empty===========
var check1=document.getElementById("post-text-input");
var check2=document.getElementById("post-photo-input");
var check3=document.getElementById("post-price-input");
var check4=document.getElementById("post-city-input");
// ===========================================
var con1=document.getElementById("post-condition-new");
var con2=document.getElementById("post-condition-excellent");
var con3=document.getElementById("post-condition-good");
var con4=document.getElementById("post-condition-fair");
var con5=document.getElementById("post-condition-poor");

// ==================================
function get_post(){
  var posts=[];
  var inside=document.getElementsByClassName('post');
  for (var i = 0; i < inside.childElementCount; i++) {
    posts.push(inside[i]);//push elements into the post array
  }
  return posts;
}

var input= document.querySelector('.filter-container').getElementsByTagName('input');


var a=5;
function filter_text(){
  var text_content=0;
  text.addEventListener('change',function listerner(event){
    text_content=event.currentTarget.value;
    text_content=text_content.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    console.log(text_content);
    event.stopPropagation();
  });
}

function filter_price(){

}

function filter_city(){
  console.log('city out')
   var city;

 }
function filter_condition(){
  var num_con=5;
  for (var i = 0; i <num_con ; i++) {
    if(condition.children[i+1].checked==true){

      }
    }
  }
 function update(){
   console.log('create new event update');
   // for (var i = 0; i < posts.length; i++) {
   //   document.getElementById("posts").appendChild(posts[i]);
   // }

   filter_city();
   filter_text();
   filter_condition();

 }


 function hide(){
   modal.classList.toggle('hidden');
   back.classList.toggle('hidden');
 }

function shutdownModal(){
  document.getElementById("post-text-input").value = "";
	document.getElementById("post-photo-input").value = "";
	document.getElementById("post-price-input").value = "";
	document.getElementById("post-city-input").value = "";
	document.getElementById("post-condition-new").checked = true;

  hide();
}


function check_empty(){
  if (check1.value == ""|| check2.value == ""|| check3.value == ""|| check4.value == "") {
          return false;
      }
      else{
        return true;
      }
}
function create_new(){
  if(!check_empty()){
    alert("Fill out the all sections!");
  }


  console.log("create new");
  var photocard=document.createElement('div');
  photocard.classList.add('post');
   var conditions;

  if(con1.checked){
    conditions=='new';
  }
  else if(con2.checked){
    conditions=='excellent';
  }
  else if(con3.checked){
    conditions=='good';
  }
  else if(con4.checked){
    conditions=='fair';
  }
  else if(con5.checked){
    conditions=='poor';
  }

  photocard.setAttribute('data-price',price_in);
  photocard.setAttribute('data-city',city_in);
  photocard.setAttribute('data-condition',conditions);


  var card_text=document.createElement('div');
  card_text.classList.add('post-contents');
  photocard.appendChild (card_text);

}
