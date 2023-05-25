
let allContainer = document.querySelectorAll('.allContainer');
let buttoncontainer = document.querySelectorAll('.buttoncontainer .buttonDiv');
let buttoncontainerPara = document.querySelectorAll('.buttoncontainer p');
let totalpagesc = document.querySelector('#totalpages').innerHTML;
let form1     = document.querySelector('.form1');
let form2     = document.querySelector('.form2');
let form1pageselect     = document.querySelector('#form1pageselect');
let form2pageselect     = document.querySelector('#form2pageselect');
let form1pageinput     = document.querySelector('#form1pageinput');
let form2pageinput     = document.querySelector('#form2pageinput');
let templateid = document.querySelector('#Ttemplate').innerText;


//-- hide all div
for(let i=0; i< allContainer.length; i++){
  allContainer[i].style.display = "none";
}
//---button color
for(let i=0; i< buttoncontainer.length; i++){
  buttoncontainer[i].style.backgroundColor = "green";
  buttoncontainerPara[i].style.display = "none";
}

let id1 = document.querySelector('#p1');
let id2 = document.querySelector('#p2');
let id3 = document.querySelector('#p3');
let id4 = document.querySelector('#p4');
let id5 = document.querySelector('#p5');
let id6 = document.querySelector('#p6');
let id7 = document.querySelector('#p7');
let id8 = document.querySelector('#p8');
let id9 = document.querySelector('#p9');
let id10 = document.querySelector('#p10');
let id11 = document.querySelector('#p11');
let id12 = document.querySelector('#p12');
let id13 = document.querySelector('#p13');
let id14 = document.querySelector('#p14');
let id15 = document.querySelector('#p15');
let id16 = document.querySelector('#p16');
let id17 = document.querySelector('#p17');
let id18 = document.querySelector('#p18');
let id19 = document.querySelector('#p19');
let id20 = document.querySelector('#p20');
let id21 = document.querySelector('#p21');
let id22 = document.querySelector('#p22');
let id23 = document.querySelector('#p23');
let id24 = document.querySelector('#p24');
let id25 = document.querySelector('#p25');
let id26 = document.querySelector('#p26');
let id27 = document.querySelector('#p27');
let id28 = document.querySelector('#p28');
let id29 = document.querySelector('#p29');
let id30 = document.querySelector('#p30');
let id31 = document.querySelector('#p31');
let id32 = document.querySelector('#p32');
let id33 = document.querySelector('#p33');
let id34 = document.querySelector('#p34');
let id35 = document.querySelector('#p35');
let id36 = document.querySelector('#p36');
let id37 = document.querySelector('#p37');
let id38 = document.querySelector('#p38');
let id39 = document.querySelector('#p39');
let id40 = document.querySelector('#p40');
let id41 = document.querySelector('#p41');
let id42 = document.querySelector('#p42');
let id43 = document.querySelector('#p43');
let id44 = document.querySelector('#p44');
let id45 = document.querySelector('#p45');
let id46 = document.querySelector('#p46');
let id47 = document.querySelector('#p47');
let id48 = document.querySelector('#p48');
let id49 = document.querySelector('#p49');
let id50 = document.querySelector('#p50');
let id51 = document.querySelector('#p51');
let id52 = document.querySelector('#p52');
let id53 = document.querySelector('#p53');
let id54 = document.querySelector('#p54');
let id55 = document.querySelector('#p55');
let id56 = document.querySelector('#p56');
let id57 = document.querySelector('#p57');
let id58 = document.querySelector('#p58');
let id59 = document.querySelector('#p59');
let id60 = document.querySelector('#p60');
let id61 = document.querySelector('#p61');

// if minimum 1 story upload check 
if(totalpagesc * 1 > 0){} 
//---- if firs div exist or not
if(id1){
  id1.style.display = "block";
}else{ 
    form1.style.display = "block";
    form1pageinput.value = "1";
    form1pageselect.innerHTML = "1";
}
//---- left green button click function

let leftfx = (m)=>{
  buttoncolorControle();
  for(let i=0; i< allContainer.length; i++){
    allContainer[i].style.display = "none";
  }

//==============================================================

if(templateid == 21){ // template 21 left function start
  if(m == 1){
if(id3){
  id3.style.display = "block";
}else{ 
  form1.style.display = "block";
  form1pageinput.value = "3";
  form1pageselect.innerHTML = "3";
} }  

  if(m == 2){ 
    if(id5){
      id5.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "5";
        form1pageselect.innerHTML = "5";
       document.querySelector('.form1 .btn-left p').style.display = "block";
    }
   }
  if(m == 3){
    if(id7){
      id7.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "7";
        form1pageselect.innerHTML = "7";
        document.querySelector('.form1 .btn-left p').style.display = "block";
        document.querySelector('.form1 .btn-right p').style.display = "block";
    }
  }
  if(m == 4){
    if(id9){
      id9.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "9";
        form1pageselect.innerHTML = "9";
        document.querySelector('.form1 .btn-left p').style.display = "block";
        document.querySelector('.form1 .btn-right p').style.display = "block";       
    }
  }
  if(m == 5){
    if(id11){
      id11.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "11";
        form2pageselect.innerHTML = "11";
    }
  }
  if(m == 6){
    if(id13){
      id13.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "13";
        form2pageselect.innerHTML = "13";
    }
  }
  if(m == 7){
    if(id15){
      id15.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "15";
        form2pageselect.innerHTML = "15";
    }
  }
  if(m == 8){
    if(id17){
      id17.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "17";
        form2pageselect.innerHTML = "17";
    }
  }
  if(m == 9){
    if(id19){
      id19.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "19";
        form2pageselect.innerHTML = "19";
    }
  }
  if(m == 10){
    if(id21){
      id21.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "21";
        form2pageselect.innerHTML = "21";
    }
  }  
 }// end 21 template 
 
 //=============================================================

if(templateid == 61){ // template 61 left function start
    if(m == 1){
  if(id3){
    id3.style.display = "block";
  }else{ 
    form1.style.display = "block";
    form1pageinput.value = "3";
    form1pageselect.innerHTML = "3";
  } }  
  
    if(m == 2){ 
      if(id5){
        id5.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "5";
          form1pageselect.innerHTML = "5";
        document.querySelector('.form1 .btn-right p').style.display = "block";
      }
     }
    if(m == 3){
      if(id7){
        id7.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "7";
          form1pageselect.innerHTML = "7";
          document.querySelector('.form1 .btn-left p').style.display = "block";
      }
    }
    if(m == 4){
      if(id9){
        id9.style.display = "block";
      }else{ 
        form2.style.display = "block";
        form2pageinput.value = "9";
        form2pageselect.innerHTML = "9";
     }
    }
    if(m == 5){
      if(id11){
        id11.style.display = "block";
      }else{ 
        form1.style.display = "block";
        form1pageinput.value = "11";
        form1pageselect.innerHTML = "11";
        document.querySelector('.form1 .btn-left p').style.display = "block";
      
      }
    }
    if(m == 6){
      if(id13){
        id13.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "13";
          form2pageselect.innerHTML = "13";
      }
    }
    if(m == 7){
      if(id15){
        id15.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "15";
          form2pageselect.innerHTML = "15";
      }
    }
    if(m == 8){
      if(id17){
        id17.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "17";
          form1pageselect.innerHTML = "17";
          document.querySelector('.form1 .btn-left p').style.display = "block";
          document.querySelector('.form1 .btn-right p').style.display = "block";
      
      }
    }

    if(m == 11){
        if(id19){
          id19.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "19";
            form2pageselect.innerHTML = "19";
    
        }
      }
      if(m == 12){
        if(id21){
          id21.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "21";
            form1pageselect.innerHTML = "21";
            document.querySelector('.form1 .btn-left p').style.display = "block";
        
        }
      }
      
      if(m == 14){
        if(id23){
          id23.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "23";
            form2pageselect.innerHTML = "23";   
        }
      }

      if(m == 17){
        if(id25){
          id25.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "25";
            form2pageselect.innerHTML = "25";   
        }
      }
      if(m == 18){
        if(id27){
          id27.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "27";
            form2pageselect.innerHTML = "27";                   
        }
      }
      if(m == 21){
        if(id29){
          id29.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "29";
            form2pageselect.innerHTML = "29";                   
        }
      }
      if(m == 22){
        if(id31){
          id31.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "31";
            form1pageselect.innerHTML = "31"; 
            document.querySelector('.form1 .btn-left p').style.display = "block";
                                      
        }
      }
      if(m == 26){
        if(id33){
          id33.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "33";
            form2pageselect.innerHTML = "33"; 
                                     
        }
      }
      if(m == 28){
        if(id35){
          id35.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "35";
            form2pageselect.innerHTML = "35"; 
                                     
        }
      }
      if(m == 31){
        if(id37){
          id37.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "37";
            form2pageselect.innerHTML = "37"; 
                                     
        }
      }
      if(m == 34){
        if(id39){
          id39.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "39";
            form1pageselect.innerHTML = "39"; 
            document.querySelector('.form1 .btn-left p').style.display = "block";
        }
      }
      if(m == 36){
        if(id41){
          id41.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "41";
            form1pageselect.innerHTML = "41"; 
            document.querySelector('.form1 .btn-left p').style.display = "block";                                 
        }
      }
      if(m == 39){
        if(id43){
          id43.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "43";
          form2pageselect.innerHTML = "43"; 
          }
      }
      if(m == 41){
        if(id45){
          id45.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "45";
          form2pageselect.innerHTML = "45"; 
          }
      }
      if(m == 42){
        if(id47){
          id47.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "47";
          form2pageselect.innerHTML = "47"; 
          }
      }
      if(m == 44){
        if(id49){
          id49.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "49";
          form2pageselect.innerHTML = "49"; 
          }
      }
      if(m == 46){
        if(id51){
          id51.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "51";
          form2pageselect.innerHTML = "51"; 
          }
      }
      if(m == 48){
        if(id53){
          id53.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "53";
          form2pageselect.innerHTML = "53"; 
          }
      }
      if(m == 50){
        if(id55){
          id55.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "55";
          form2pageselect.innerHTML = "55"; 
          }
      }
      if(m == 52){
        if(id57){
          id57.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "57";
            form1pageselect.innerHTML = "57"; 
            document.querySelector('.form1 .btn-left p').style.display = "block";
            document.querySelector('.form1 .btn-right p').style.display = "block"; }
      }

      if(m == 55){
        if(id59){
          id59.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "59";
          form2pageselect.innerHTML = "59"; 
          }
      }
      if(m == 57){
        if(id61){
          id61.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "61";
          form2pageselect.innerHTML = "61"; 
          }
      }
   }// end 61 template 
 
if(templateid == 41){ // template 41 left function start
    if(m == 1){
  if(id3){
    id3.style.display = "block";
  }else{ 
    form1.style.display = "block";
    form1pageinput.value = "3";
    form1pageselect.innerHTML = "3";
  } }  
  
    if(m == 2){ 
      if(id5){
        id5.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "5";
          form1pageselect.innerHTML = "5";
        document.querySelector('.form1 .btn-right p').style.display = "block";
      }
     }
    if(m == 3){
      if(id7){
        id7.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "7";
          form1pageselect.innerHTML = "7";
          document.querySelector('.form1 .btn-left p').style.display = "block";
        //  document.querySelector('.form1 .btn-right p').style.display = "block";
      }
    }
    if(m == 4){
      if(id9){
        id9.style.display = "block";
      }else{ 
        form2.style.display = "block";
        form2pageinput.value = "9";
        form2pageselect.innerHTML = "9";
     }
    }
    if(m == 5){
      if(id11){
        id11.style.display = "block";
      }else{ 
        form1.style.display = "block";
        form1pageinput.value = "11";
        form1pageselect.innerHTML = "11";
        document.querySelector('.form1 .btn-left p').style.display = "block";
       // document.querySelector('.form1 .btn-right p').style.display = "block";
    
      }
    }
    if(m == 6){
      if(id13){
        id13.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "13";
          form2pageselect.innerHTML = "13";
      }
    }
    if(m == 7){
      if(id15){
        id15.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "15";
          form2pageselect.innerHTML = "15";
      }
    }
    if(m == 8){
      if(id17){
        id17.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "17";
          form1pageselect.innerHTML = "17";
          document.querySelector('.form1 .btn-left p').style.display = "block";
          document.querySelector('.form1 .btn-right p').style.display = "block";
      
      }
    }

    if(m == 11){
        if(id19){
          id19.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "19";
            form2pageselect.innerHTML = "19";
    
        }
      }
      if(m == 12){
        if(id21){
          id21.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "21";
            form1pageselect.innerHTML = "21";
            document.querySelector('.form1 .btn-left p').style.display = "block";
        
        }
      }
      
      if(m == 14){
        if(id23){
          id23.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "23";
            form2pageselect.innerHTML = "23";   
        }
      }

      if(m == 17){
        if(id25){
          id25.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "25";
            form2pageselect.innerHTML = "25";   
        }
      }
      if(m == 18){
        if(id27){
          id27.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "27";
            form2pageselect.innerHTML = "27";                   
        }
      }
      if(m == 21){
        if(id29){
          id29.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "29";
            form2pageselect.innerHTML = "29";                   
        }
      }
      if(m == 22){
        if(id31){
          id31.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "31";
            form1pageselect.innerHTML = "31"; 
            document.querySelector('.form1 .btn-left p').style.display = "block";
                                      
        }
      }
      if(m == 26){
        if(id33){
          id33.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "33";
            form2pageselect.innerHTML = "33"; 
                                     
        }
      }
      if(m == 28){
        if(id35){
          id35.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "35";
            form2pageselect.innerHTML = "35"; 
                                     
        }
      }
      if(m == 31){
        if(id37){
          id37.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "37";
            form2pageselect.innerHTML = "37"; 
                                     
        }
      }
      if(m == 34){
        if(id39){
          id39.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "39";
            form2pageselect.innerHTML = "39"; 
                                     
        }
      }
      if(m == 36){
        if(id41){
          id41.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "41";
            form2pageselect.innerHTML = "41"; 
                                     
        }
      }
   
   }// end 41 template 

}//end left clickable function


///=============================================================

//---- right green button click function
let rightfx = (m)=>{
  buttoncolorControle();
  for(let i=0; i< allContainer.length; i++){
    allContainer[i].style.display = "none";
  }
//====================================================
  if(templateid == 21){ // start 21 template
  if(m == 1){
  if(id2){
    id2.style.display = "block";
  }else{ 
    form1.style.display = "block";
    form1pageinput.value = "2";
    form1pageselect.innerHTML = "2";
  }
}  
  if(m == 2){
  
    if(id4){
      id4.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "4";
        form1pageselect.innerHTML = "4";
    }
  }  
  if(m == 3){
  if(id6){
    id6.style.display = "block";
  }else{ 
      form1.style.display = "block";
      form1pageinput.value = "6";
      form1pageselect.innerHTML = "6";
      document.querySelector('.form1 .btn-left p').style.display = "block";
      document.querySelector('.form1 .btn-right p').style.display = "block";
  }
}  
  if(m == 4){
    if(id8){
      id8.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "8";
        form1pageselect.innerHTML = "8";
        document.querySelector('.form1 .btn-left p').style.display = "block";
        document.querySelector('.form1 .btn-right p').style.display = "block";
    }
  }   
  if(m == 5){
    if(id10){
      id10.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "10";
        form1pageselect.innerHTML = "10";
        document.querySelector('.form1 .btn-left p').style.display = "block";
        document.querySelector('.form1 .btn-right p').style.display = "block";
    }
  }   
  if(m == 6){
    if(id12){
      id12.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "12";
        form2pageselect.innerHTML = "12";
    }
  }   
  if(m == 7){
    if(id14){
      id14.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "14";
        form2pageselect.innerHTML = "14";
    }
}   
  if(m == 8){
    if(id16){
      id16.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "16";
        form2pageselect.innerHTML = "16";
    }
  }  
  if(m == 9){
    if(id18){
      id18.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "18";
        form2pageselect.innerHTML = "18";
    }
  }   
  if(m == 10){
    if(id20){
      id20.style.display = "block";
    }else{ 
        form2.style.display = "block";
        form2pageinput.value = "20";
        form2pageselect.innerHTML = "20";
    }
  }
}//end 21 template

//===============================================================

if(templateid == 41){ // start 41 template
    if(m == 1){
    if(id2){
      id2.style.display = "block";
    }else{ 
      form1.style.display = "block";
      form1pageinput.value = "2";
      form1pageselect.innerHTML = "2";
    }
  }  
    if(m == 2){
    
      if(id4){
        id4.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "4";
          form1pageselect.innerHTML = "4";
          document.querySelector('.form1 .btn-left p').style.display = "block";
                
      }
    }  
    if(m == 3){
    if(id6){
      id6.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "6";
        form1pageselect.innerHTML = "6";
        document.querySelector('.form1 .btn-left p').style.display = "block";
    }
  }  
    if(m == 4){
      if(id8){
        id8.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "8";
          form1pageselect.innerHTML = "8";
         document.querySelector('.form1 .btn-right p').style.display = "block";
      }
    }   
    if(m == 5){
      if(id10){
        id10.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "10";
          form2pageselect.innerHTML = "10";
     }
    }   
    if(m == 6){
      if(id12){
        id12.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "12";
          form2pageselect.innerHTML = "12";
          document.querySelector('.form1 .btn-right p').style.display = "block";              
      }
    }   
    if(m == 7){
      if(id14){
        id14.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "14";
          form1pageselect.innerHTML = "14";
          document.querySelector('.form1 .btn-left p').style.display = "block";
      }
  }   
    if(m == 8){
      if(id16){
        id16.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "16";
          form2pageselect.innerHTML = "16";
      }
    }  

    if(m == 11){
        if(id18){
          id18.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "18";
            form1pageselect.innerHTML = "18";
            document.querySelector('.form1 .btn-left p').style.display = "block";
        }
    }
    
    if(m == 12){
        if(id20){
          id20.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "20";
            form2pageselect.innerHTML = "20";
       }
    }
    if(m == 14){
        if(id22){
          id22.style.display = "block";
        }else{ 
          form1.style.display = "block";
          form1pageinput.value = "22";
          form1pageselect.innerHTML = "22";
          document.querySelector('.form1 .btn-right p').style.display = "block";
      }
    }
  if(m == 17){
      if(id24){
        id24.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "24";
          form2pageselect.innerHTML = "24";
     }
  }
    if(m == 18){
        if(id26){
          id26.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "26";
            form1pageselect.innerHTML = "26";
            document.querySelector('.form1 .btn-left p').style.display = "block";
            document.querySelector('.form1 .btn-right p').style.display = "block";  }
    }
    if(m == 21){
        if(id28){
          id28.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "28";
            form1pageselect.innerHTML = "28";
            document.querySelector('.form1 .btn-left p').style.display = "block";
        }
    }
    if(m == 22){
        if(id30){
          id30.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "30";
            form2pageselect.innerHTML = "30";
        }
    }
    if(m == 26){
        if(id32){
          id32.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "32";
            form2pageselect.innerHTML = "32";
        }
    }
    if(m == 28){
        if(id34){
          id34.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "34";
            form1pageselect.innerHTML = "34";
            document.querySelector('.form1 .btn-left p').style.display = "block";
            document.querySelector('.form1 .btn-right p').style.display = "block";
           }
    }
    if(m == 31){
        if(id36){
          id36.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "36";
            form1pageselect.innerHTML = "36";
            document.querySelector('.form1 .btn-left p').style.display = "block";
            document.querySelector('.form1 .btn-right p').style.display = "block";
           }
    }
    if(m == 34){
        if(id38){
          id38.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "38";
            form2pageselect.innerHTML = "38";
        }
    }
    if(m == 36){
        if(id40){
          id40.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "40";
            form2pageselect.innerHTML = "40";
        }
    }

  }//end 41 template
//===================================================
if(templateid == 61){ // start 61 template
    if(m == 1){
    if(id2){
      id2.style.display = "block";
    }else{ 
      form1.style.display = "block";
      form1pageinput.value = "2";
      form1pageselect.innerHTML = "2";
    }
  }  
    if(m == 2){
    
      if(id4){
        id4.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "4";
          form1pageselect.innerHTML = "4";
          document.querySelector('.form1 .btn-left p').style.display = "block";
                
      }
    }  
    if(m == 3){
    if(id6){
      id6.style.display = "block";
    }else{ 
        form1.style.display = "block";
        form1pageinput.value = "6";
        form1pageselect.innerHTML = "6";
        document.querySelector('.form1 .btn-left p').style.display = "block";
    }
  }  
    if(m == 4){
      if(id8){
        id8.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "8";
          form1pageselect.innerHTML = "8";
         document.querySelector('.form1 .btn-right p').style.display = "block";
      }
    }   
    if(m == 5){
      if(id10){
        id10.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "10";
          form2pageselect.innerHTML = "10";
     }
    }   
    if(m == 6){
      if(id12){
        id12.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "12";
          form2pageselect.innerHTML = "12";
          document.querySelector('.form1 .btn-right p').style.display = "block";              
      }
    }   
    if(m == 7){
      if(id14){
        id14.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "14";
          form1pageselect.innerHTML = "14";
          document.querySelector('.form1 .btn-left p').style.display = "block";
      }
  }   
    if(m == 8){
      if(id16){
        id16.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "16";
          form2pageselect.innerHTML = "16";
      }
    }  

    if(m == 11){
        if(id18){
          id18.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "18";
            form1pageselect.innerHTML = "18";
            document.querySelector('.form1 .btn-left p').style.display = "block";
        }
    }
    if(m == 12){
        if(id20){
          id20.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "20";
          form2pageselect.innerHTML = "20"; }
    }
    if(m == 14){
        if(id22){
          id22.style.display = "block";
        }else{ 
          form1.style.display = "block";
          form1pageinput.value = "22";
          form1pageselect.innerHTML = "22";
          document.querySelector('.form1 .btn-right p').style.display = "block";
       }
      }
       if(m == 17){
        if(id24){
          id24.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "24";
          form2pageselect.innerHTML = "24"; }
    }
       if(m == 18){
        if(id26){
          id26.style.display = "block";
        }else{ 
          form2.style.display = "block";
          form2pageinput.value = "26";
          form2pageselect.innerHTML = "26"; }
    }
    if(m == 21){
        if(id28){
          id28.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "28";
            form1pageselect.innerHTML = "28";
            document.querySelector('.form1 .btn-left p').style.display = "block";
        }
    }
    if(m == 22){
        if(id30){
          id30.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "30";
            form2pageselect.innerHTML = "30";
        }
    }
    if(m == 26){
        if(id32){
          id32.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "32";
            form2pageselect.innerHTML = "32";
        }
    }
    if(m == 28){
        if(id34){
          id34.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "34";
            form1pageselect.innerHTML = "34";
            document.querySelector('.form1 .btn-left p').style.display = "block";
           }
    }
    if(m == 31){
        if(id36){
          id36.style.display = "block";
        }else{ 
            form1.style.display = "block";
            form1pageinput.value = "36";
            form1pageselect.innerHTML = "36";
            document.querySelector('.form1 .btn-left p').style.display = "block";
           }
    }
    if(m == 34){
        if(id38){
          id38.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "38";
            form2pageselect.innerHTML = "38";
        }
    }
    if(m == 36){
        if(id40){
          id40.style.display = "block";
        }else{ 
            form2.style.display = "block";
            form2pageinput.value = "40";
            form2pageselect.innerHTML = "40";
        }
    }
    if(m == 39){
      if(id42){
        id42.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "42";
          form1pageselect.innerHTML = "42";
          document.querySelector('.form1 .btn-left p').style.display = "block";
         }      
  }

 
    if(m == 41){
      if(id44){
        id44.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "44";
          form1pageselect.innerHTML = "44";
          document.querySelector('.form1 .btn-left p').style.display = "block";
         }      
  }
    if(m == 42){
      if(id46){
        id46.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "46";
          form1pageselect.innerHTML = "46";
          document.querySelector('.form1 .btn-left p').style.display = "block";
         }      
  }

    if(m == 44){
      if(id48){
        id48.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "48";
          form1pageselect.innerHTML = "48";
          document.querySelector('.form1 .btn-left p').style.display = "block";
         }
  }
    if(m == 46){
      if(id50){
        id50.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "50";
          form1pageselect.innerHTML = "50";
          document.querySelector('.form1 .btn-right p').style.display = "block";
         }
  }
    if(m == 48){
      if(id52){
        id52.style.display = "block";
      }else{ 
          form1.style.display = "block";
          form1pageinput.value = "52";
          form1pageselect.innerHTML = "52";
          document.querySelector('.form1 .btn-right p').style.display = "block";
         }
  }
    if(m == 50){
      if(id54){
        id54.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "54";
          form2pageselect.innerHTML = "54";
         }
  }
    if(m == 52){
      if(id56){
        id56.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "56";
          form2pageselect.innerHTML = "56";
         }
  }
    if(m == 55){
      if(id58){
        id58.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "58";
          form2pageselect.innerHTML = "58";
         }
  }
    if(m == 57){
      if(id60){
        id60.style.display = "block";
      }else{ 
          form2.style.display = "block";
          form2pageinput.value = "60";
          form2pageselect.innerHTML = "60";
         }
  }
  }//end 61 template
}
//==========================
//== 0 for container and 1 for form
let beginning =(n)=>{
     if(n > 0){
      alert(" Plz Fill up A B C Setion and  save your story !!!! ");
     }else{
      for(let i=0; i< allContainer.length; i++){
        allContainer[i].style.display = "none";
      }
      id1.style.display = "block"; 
     }
}

//--- path identification
let buttoncolorControle =()=>{

 if(templateid == 21){ // template 21 start     
    if(id11){
      document.querySelector('#p5 .btn-left div').style.backgroundColor = "red";
    }
    if(id12){
      document.querySelector('#p6 .btn-right div').style.backgroundColor = "red";
    }
    if(id13){
      document.querySelector('#p6 .btn-left div').style.backgroundColor = "red";
    }
    if(id14){
      document.querySelector('#p7 .btn-right div').style.backgroundColor = "red";
    }
    if(id15){
      document.querySelector('#p7 .btn-left div').style.backgroundColor = "red";
    }
    if(id16){
      document.querySelector('#p8 .btn-right div').style.backgroundColor = "red";
    }
    if(id17){
      document.querySelector('#p8 .btn-left div').style.backgroundColor = "red";
    }
    if(id18){
      document.querySelector('#p9 .btn-right div').style.backgroundColor = "red";
    }
    if(id19){
      document.querySelector('#p9 .btn-left div').style.backgroundColor = "red";
    }
    if(id20){
      document.querySelector('#p10 .btn-right div').style.backgroundColor = "red";
    }
    if(id21){
      document.querySelector('#p10 .btn-left div').style.backgroundColor = "red";
    }
   //----------- 
    if(id7){
      if(
     document.querySelector('#p7 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p7 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p3 .btn-left div').style.backgroundColor = "red";
   } } 
   
   if(id6){
   if(
     document.querySelector('#p6 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p6 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p3 .btn-right div').style.backgroundColor = "red";
   } } 

      //--------------- page 5 right button  
      if(id10){
      if(
        document.querySelector('#p10 .btn-left div').style.backgroundColor == "red" &&
        document.querySelector('#p10 .btn-right div').style.backgroundColor == "red"
        ){
        document.querySelector('#p5 .btn-right div').style.backgroundColor = "red";
      } } 
           //--------------- page 4
           if(id9){
           if(
            document.querySelector('#p9 .btn-left div').style.backgroundColor == "red" &&
            document.querySelector('#p9 .btn-right div').style.backgroundColor == "red"
            ){
            document.querySelector('#p4 .btn-left div').style.backgroundColor = "red";
          } }
          
          if(id8){
          if(
            document.querySelector('#p8 .btn-left div').style.backgroundColor == "red" &&
            document.querySelector('#p8 .btn-right div').style.backgroundColor == "red"
            ){
            document.querySelector('#p4 .btn-right div').style.backgroundColor = "red";
          } }
             //--------------- page 2
       if(id5){
        if(
        document.querySelector('#p5 .btn-left div').style.backgroundColor == "red" &&
        document.querySelector('#p5 .btn-right div').style.backgroundColor == "red"
        ){
        document.querySelector('#p2 .btn-left div').style.backgroundColor = "red";
      } }
      
    
    if(id4){
      if(
        document.querySelector('#p4 .btn-left div').style.backgroundColor == "red" &&
        document.querySelector('#p4 .btn-right div').style.backgroundColor == "red"
        ){
        document.querySelector('#p2 .btn-right div').style.backgroundColor = "red";
      } }  
         //--------------- page 1
      
    if(id3){
     if(
          document.querySelector('#p3 .btn-left div').style.backgroundColor == "red" &&
          document.querySelector('#p3 .btn-right div').style.backgroundColor == "red"
          ){
          document.querySelector('#p1 .btn-left div').style.backgroundColor = "red";
        } }
        
        if(id2){  
        if(
          document.querySelector('#p2 .btn-left div').style.backgroundColor == "red" &&
          document.querySelector('#p2 .btn-right div').style.backgroundColor == "red"
          ){
          document.querySelector('#p1 .btn-right div').style.backgroundColor = "red";
        }  }
    
    } //--------------- end temolate 21
   //=================================================== 
 if(templateid == 41){ // template 41 start     
    if(id9){
      document.querySelector('#p4 .btn-left div').style.backgroundColor = "red";
    }
    if(id10){
      document.querySelector('#p5 .btn-right div').style.backgroundColor = "red";
    }
    if(id13){
      document.querySelector('#p6 .btn-left div').style.backgroundColor = "red";
    }
    if(id15){
      document.querySelector('#p7 .btn-left div').style.backgroundColor = "red";
    }
    if(id16){
      document.querySelector('#p8 .btn-right div').style.backgroundColor = "red";
    }
    if(id19){
      document.querySelector('#p11 .btn-left div').style.backgroundColor = "red";
    }
    if(id20){
      document.querySelector('#p12 .btn-right div').style.backgroundColor = "red";
    }
    if(id23){
      document.querySelector('#p14 .btn-left div').style.backgroundColor = "red";
    }
    if(id24){
        document.querySelector('#p17 .btn-right div').style.backgroundColor = "red";
      }
   if(id25){
        document.querySelector('#p17 .btn-left div').style.backgroundColor = "red";
      }
   if(id27){
        document.querySelector('#p18 .btn-left div').style.backgroundColor = "red";
      }  
   if(id29){
        document.querySelector('#p21 .btn-left div').style.backgroundColor = "red";
      }  
  if(id30){
        document.querySelector('#p22 .btn-right div').style.backgroundColor = "red";
      }
  if(id32){
        document.querySelector('#p26 .btn-right div').style.backgroundColor = "red";
      }
  if(id33){
        document.querySelector('#p26 .btn-left div').style.backgroundColor = "red";
      }
  if(id35){
        document.querySelector('#p28 .btn-left div').style.backgroundColor = "red";
      }
  if(id37){
        document.querySelector('#p31 .btn-left div').style.backgroundColor = "red";
      }
 if(id38){
        document.querySelector('#p34 .btn-right div').style.backgroundColor = "red";
      }
   if(id39){
        document.querySelector('#p34 .btn-left div').style.backgroundColor = "red";
      }
 if(id40){
        document.querySelector('#p36 .btn-right div').style.backgroundColor = "red";
      }
   if(id41){
        document.querySelector('#p36 .btn-left div').style.backgroundColor = "red";
      }

   //----------- 
    if(id36){
      if(
     document.querySelector('#p36 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p36 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p31 .btn-right div').style.backgroundColor = "red";
   } } 
   
   if(id34){
   if(
     document.querySelector('#p34 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p34 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p28 .btn-right div').style.backgroundColor = "red";
   } } 
   
   if(id31){
   if(
     document.querySelector('#p31 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p31 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p22 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id28){
   if(
     document.querySelector('#p28 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p28 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p21 .btn-right div').style.backgroundColor = "red";
   } } 
   if(id26){
   if(
     document.querySelector('#p26 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p26 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p18 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id22){
   if(
     document.querySelector('#p22 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p22 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p14 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id21){
   if(
     document.querySelector('#p21 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p21 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p12 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id18){
   if(
     document.querySelector('#p18 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p18 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p11 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id17){
   if(
     document.querySelector('#p17 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p17 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p8 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id14){
   if(
     document.querySelector('#p14 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p14 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p7 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id12){
   if(
     document.querySelector('#p12 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p12 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p6 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id11){
   if(
     document.querySelector('#p11 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p11 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p5 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id8){
   if(
     document.querySelector('#p8 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p8 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p4 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id7){
   if(
     document.querySelector('#p7 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p7 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p3 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id6){
   if(
     document.querySelector('#p6 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p6 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p3 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id5){
   if(
     document.querySelector('#p5 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p5 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p2 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id4){
   if(
     document.querySelector('#p4 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p4 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p2 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id3){
   if(
     document.querySelector('#p3 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p3 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p1 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id2){
   if(
     document.querySelector('#p2 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p2 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p1 .btn-right div').style.backgroundColor = "red";
   } } 


    
    } //--------------- end temolate 41
 if(templateid == 61){ // template 61 start     
    if(id9){
      document.querySelector('#p4 .btn-left div').style.backgroundColor = "red";
    }
    if(id10){
      document.querySelector('#p5 .btn-right div').style.backgroundColor = "red";
    }
    if(id13){
      document.querySelector('#p6 .btn-left div').style.backgroundColor = "red";
    }
    if(id15){
      document.querySelector('#p7 .btn-left div').style.backgroundColor = "red";
    }
    if(id16){
      document.querySelector('#p8 .btn-right div').style.backgroundColor = "red";
    }
    if(id19){
      document.querySelector('#p11 .btn-left div').style.backgroundColor = "red";
    }
    if(id20){
      document.querySelector('#p12 .btn-right div').style.backgroundColor = "red";
    }
    if(id23){
      document.querySelector('#p14 .btn-left div').style.backgroundColor = "red";
    }
    if(id24){
        document.querySelector('#p17 .btn-right div').style.backgroundColor = "red";
      }
   if(id25){
        document.querySelector('#p17 .btn-left div').style.backgroundColor = "red";
      }
   if(id27){
        document.querySelector('#p18 .btn-left div').style.backgroundColor = "red";
      }  
   if(id29){
        document.querySelector('#p21 .btn-left div').style.backgroundColor = "red";
      }  
  if(id30){
        document.querySelector('#p22 .btn-right div').style.backgroundColor = "red";
      }
  if(id32){
        document.querySelector('#p26 .btn-right div').style.backgroundColor = "red";
      }
  if(id33){
        document.querySelector('#p26 .btn-left div').style.backgroundColor = "red";
      }
  if(id35){
        document.querySelector('#p28 .btn-left div').style.backgroundColor = "red";
      }
  if(id37){
        document.querySelector('#p31 .btn-left div').style.backgroundColor = "red";
      }
 if(id38){
        document.querySelector('#p34 .btn-right div').style.backgroundColor = "red";
      }
 if(id40){
        document.querySelector('#p36 .btn-right div').style.backgroundColor = "red";
      }
 if(id43){
        document.querySelector('#p39 .btn-left div').style.backgroundColor = "red";
      }
 if(id45){
        document.querySelector('#p41 .btn-left div').style.backgroundColor = "red";
      }
 if(id47){
        document.querySelector('#p42 .btn-left div').style.backgroundColor = "red";
      }
 if(id49){
        document.querySelector('#p44 .btn-left div').style.backgroundColor = "red";
      }
 if(id51){
        document.querySelector('#p46 .btn-left div').style.backgroundColor = "red";
      }
 if(id53){
        document.querySelector('#p48 .btn-left div').style.backgroundColor = "red";
      }
 if(id54){
        document.querySelector('#p50 .btn-right div').style.backgroundColor = "red";
      }
 if(id56){
        document.querySelector('#p52 .btn-right div').style.backgroundColor = "red";
      }
 if(id58){
        document.querySelector('#p55 .btn-right div').style.backgroundColor = "red";
      }
 if(id59){
        document.querySelector('#p55 .btn-left div').style.backgroundColor = "red";
      }
 if(id60){
        document.querySelector('#p57 .btn-right div').style.backgroundColor = "red";
      }
 if(id61){
        document.querySelector('#p57 .btn-left div').style.backgroundColor = "red";
      }

   //----------- 
 if(id57){
    if(
   document.querySelector('#p57 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p57 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p52 .btn-left div').style.backgroundColor = "red";
 } } 
 
 if(id55){
    if(
   document.querySelector('#p55 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p55 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p50 .btn-left div').style.backgroundColor = "red";
 } } 
 
 if(id52){
    if(
   document.querySelector('#p52 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p52 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p48 .btn-right div').style.backgroundColor = "red";
 } } 

 if(id50){
    if(
   document.querySelector('#p50 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p50 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p46 .btn-right div').style.backgroundColor = "red";
 } } 
 
 if(id48){
    if(
   document.querySelector('#p48 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p48 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p44 .btn-right div').style.backgroundColor = "red";
 } } 
 
 
 if(id46){
    if(
   document.querySelector('#p46 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p46 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p42 .btn-right div').style.backgroundColor = "red";
 } } 

 if(id44){
    if(
   document.querySelector('#p44 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p44 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p41 .btn-right div').style.backgroundColor = "red";
 } } 
 
 if(id42){
    if(
   document.querySelector('#p42 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p42 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p39 .btn-right div').style.backgroundColor = "red";
 } } 
 
 
 if(id41){
    if(
   document.querySelector('#p41 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p41 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p36 .btn-left div').style.backgroundColor = "red";
 } } 
 
 if(id39){
    if(
   document.querySelector('#p39 .btn-left div').style.backgroundColor == "red" &&
   document.querySelector('#p39 .btn-right div').style.backgroundColor == "red"
   ){
   document.querySelector('#p34 .btn-left div').style.backgroundColor = "red";
 } } 
 

 //------------------
    if(id36){
      if(
     document.querySelector('#p36 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p36 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p31 .btn-right div').style.backgroundColor = "red";
   } } 
   
   if(id34){
   if(
     document.querySelector('#p34 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p34 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p28 .btn-right div').style.backgroundColor = "red";
   } } 
   
   if(id31){
   if(
     document.querySelector('#p31 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p31 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p22 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id28){
   if(
     document.querySelector('#p28 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p28 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p21 .btn-right div').style.backgroundColor = "red";
   } } 
   if(id26){
   if(
     document.querySelector('#p26 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p26 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p18 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id22){
   if(
     document.querySelector('#p22 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p22 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p14 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id21){
   if(
     document.querySelector('#p21 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p21 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p12 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id18){
   if(
     document.querySelector('#p18 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p18 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p11 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id17){
   if(
     document.querySelector('#p17 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p17 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p8 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id14){
   if(
     document.querySelector('#p14 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p14 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p7 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id12){
   if(
     document.querySelector('#p12 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p12 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p6 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id11){
   if(
     document.querySelector('#p11 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p11 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p5 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id8){
   if(
     document.querySelector('#p8 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p8 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p4 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id7){
   if(
     document.querySelector('#p7 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p7 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p3 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id6){
   if(
     document.querySelector('#p6 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p6 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p3 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id5){
   if(
     document.querySelector('#p5 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p5 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p2 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id4){
   if(
     document.querySelector('#p4 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p4 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p2 .btn-right div').style.backgroundColor = "red";
   } } 

   if(id3){
   if(
     document.querySelector('#p3 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p3 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p1 .btn-left div').style.backgroundColor = "red";
   } } 

   if(id2){
   if(
     document.querySelector('#p2 .btn-left div').style.backgroundColor == "red" &&
     document.querySelector('#p2 .btn-right div').style.backgroundColor == "red"
     ){
     document.querySelector('#p1 .btn-right div').style.backgroundColor = "red";
   } } 


    
    } //--------------- end temolate 61
}

buttoncolorControle();
//--- ending page findout
let endPageFindOut =()=>{
    
if(templateid == 21){ // start 21 template 
    //--page 7
  if(id7){
  document.querySelector('#p7 .btn-left p').style.display = "block";
  document.querySelector('#p7 .btn-right p').style.display = "block";
  }
  //== page 6
  if(id6){
  document.querySelector('#p6 .btn-left p').style.display = "block";
  document.querySelector('#p6 .btn-right p').style.display = "block";
  }
  //-- page 5
  if(id5){
  document.querySelector('#p5 .btn-left p').style.display = "block";
  }
  //== page 8
  if(id8){
  document.querySelector('#p8 .btn-left p').style.display = "block";
  document.querySelector('#p8 .btn-right p').style.display = "block";
  }
  //== page 9
  if(id9){
  document.querySelector('#p9 .btn-left p').style.display = "block";
  document.querySelector('#p9 .btn-right p').style.display = "block";
  }
  //== page 10
  if(id10){
  document.querySelector('#p10 .btn-left p').style.display = "block";
  document.querySelector('#p10 .btn-right p').style.display = "block";
  }
}// -- end 21 template 

if(templateid == 41){ // start 41 template 
   
  if(id36){
  document.querySelector('#p36 .btn-left p').style.display = "block";
  document.querySelector('#p36 .btn-right p').style.display = "block";
  }

  if(id34){
  document.querySelector('#p34 .btn-left p').style.display = "block";
  document.querySelector('#p34 .btn-right p').style.display = "block";
  }
  if(id26){
  document.querySelector('#p26 .btn-left p').style.display = "block";
  document.querySelector('#p26 .btn-right p').style.display = "block";
  }
  if(id17){
  document.querySelector('#p17 .btn-left p').style.display = "block";
  document.querySelector('#p17 .btn-right p').style.display = "block";
  }

  if(id31){
  document.querySelector('#p31 .btn-left p').style.display = "block";
  }
  //== page 8
  if(id28){
  document.querySelector('#p28 .btn-left p').style.display = "block";
 }
  //== page 9
  if(id22){
  document.querySelector('#p22 .btn-right p').style.display = "block";
  }
  //== page 10
  if(id21){
  document.querySelector('#p21 .btn-left p').style.display = "block";
  }
  if(id18){
    document.querySelector('#p18 .btn-left p').style.display = "block";
   }
  if(id14){
    document.querySelector('#p14 .btn-left p').style.display = "block";
    }
if(id12){
   document.querySelector('#p12 .btn-right p').style.display = "block";
        }
 if(id11){
   document.querySelector('#p11 .btn-left p').style.display = "block";
        }
 if(id8){
   document.querySelector('#p8 .btn-right p').style.display = "block";
        }
 if(id7){
   document.querySelector('#p7 .btn-left p').style.display = "block";
        }
 if(id6){
   document.querySelector('#p6 .btn-left p').style.display = "block";
        }
 if(id5){
   document.querySelector('#p5 .btn-right p').style.display = "block";
        }
 if(id4){
   document.querySelector('#p4 .btn-left p').style.display = "block";
        }

}// -- end 41 template 
if(templateid == 61){ // start 61 template 
   
  if(id57){
  document.querySelector('#p57 .btn-left p').style.display = "block";
  document.querySelector('#p57 .btn-right p').style.display = "block";
  }
   
  if(id55){
  document.querySelector('#p55 .btn-left p').style.display = "block";
  document.querySelector('#p55 .btn-right p').style.display = "block";
  }
  if(id26){
  document.querySelector('#p26 .btn-left p').style.display = "block";
  document.querySelector('#p26 .btn-right p').style.display = "block";
  }
  if(id17){
  document.querySelector('#p17 .btn-left p').style.display = "block";
  document.querySelector('#p17 .btn-right p').style.display = "block";
  }

  if(id52){
 // document.querySelector('#p17 .btn-left p').style.display = "block";
  document.querySelector('#p52 .btn-right p').style.display = "block";
  }
  if(id50){
 // document.querySelector('#p17 .btn-left p').style.display = "block";
  document.querySelector('#p50 .btn-right p').style.display = "block";
  }
  if(id48){
  document.querySelector('#p48 .btn-left p').style.display = "block";
 // document.querySelector('#p17 .btn-right p').style.display = "block";
  }
  if(id46){
  document.querySelector('#p46 .btn-left p').style.display = "block";
 // document.querySelector('#p17 .btn-right p').style.display = "block";
  }
  if(id44){
  document.querySelector('#p44 .btn-left p').style.display = "block";
 // document.querySelector('#p17 .btn-right p').style.display = "block";
  }
  if(id42){
  document.querySelector('#p42 .btn-left p').style.display = "block";
 // document.querySelector('#p17 .btn-right p').style.display = "block";
  }
  if(id41){
  document.querySelector('#p41 .btn-left p').style.display = "block";
 // document.querySelector('#p17 .btn-right p').style.display = "block";
  }
  if(id39){
  document.querySelector('#p39 .btn-left p').style.display = "block";
 // document.querySelector('#p17 .btn-right p').style.display = "block";
  }
  if(id36){
 // document.querySelector('#p36 .btn-left p').style.display = "block";
  document.querySelector('#p36 .btn-right p').style.display = "block";
  }
  if(id34){
 // document.querySelector('#p36 .btn-left p').style.display = "block";
  document.querySelector('#p34 .btn-right p').style.display = "block";
  }
  if(id31){
  document.querySelector('#p31 .btn-left p').style.display = "block";
 // document.querySelector('#p31 .btn-right p').style.display = "block";
  }
  if(id28){
  document.querySelector('#p28 .btn-left p').style.display = "block";
 // document.querySelector('#p31 .btn-right p').style.display = "block";
  }
  if(id22){
  // document.querySelector('#p22 .btn-left p').style.display = "block";
  document.querySelector('#p22 .btn-right p').style.display = "block";
  }
  if(id21){
   document.querySelector('#p21 .btn-left p').style.display = "block";
  // document.querySelector('#p31 .btn-right p').style.display = "block";
  }
  if(id18){
   document.querySelector('#p18 .btn-left p').style.display = "block";
  // document.querySelector('#p31 .btn-right p').style.display = "block";
  }
  if(id14){
   document.querySelector('#p14 .btn-left p').style.display = "block";
  // document.querySelector('#p31 .btn-right p').style.display = "block";
  }
  if(id12){
  // document.querySelector('#p12 .btn-left p').style.display = "block";
   document.querySelector('#p12 .btn-right p').style.display = "block";
  }
  if(id11){
   document.querySelector('#p11 .btn-left p').style.display = "block";
   // document.querySelector('#p11 .btn-right p').style.display = "block";
  }
  if(id8){
  // document.querySelector('#p8 .btn-left p').style.display = "block";
    document.querySelector('#p8 .btn-right p').style.display = "block";
  }
  if(id7){
   document.querySelector('#p8 .btn-left p').style.display = "block";
   // document.querySelector('#p7 .btn-right p').style.display = "block";
  }
  if(id6){
   document.querySelector('#p6 .btn-left p').style.display = "block";
   // document.querySelector('#p7 .btn-right p').style.display = "block";
  }
  if(id5){
    // document.querySelector('#p5 .btn-left p').style.display = "block";
    document.querySelector('#p5 .btn-right p').style.display = "block";
  }
  if(id4){
     document.querySelector('#p4 .btn-left p').style.display = "block";
   // document.querySelector('#p5 .btn-right p').style.display = "block";
  }


}

}
endPageFindOut();
