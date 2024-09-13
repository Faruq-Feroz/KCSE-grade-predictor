let mathinput = document.getElementById("mathinput");
let submit = document.getElementById("mathsubmit");
let mathresult = document.getElementById("mathresult");

    submit.onclick = function() {
        let mathValue = Number(mathinput.value);

       if(mathValue>101){
        mathresult.textContent = `N/A`;
       }
       else if(mathValue >=80 && mathValue <=100){
        mathresult.textContent = `A`
       }
       else if(mathValue >=75 && mathValue <=77){
        mathresult.textContent = `A-`
       }
       else if(mathValue >=70 && mathValue <=75){
        mathresult.textContent = `B+`
       }
       else if(mathValue >=65 && mathValue <=69){
        mathresult.textContent = `B`
       }
       else if(mathValue >=60 && mathValue <=64){
        mathresult.textContent = `B-`
       }
       else if(mathValue >=55 && mathValue <=59){
        mathresult.textContent = `C+`
       }
       else if(mathValue >=50 && mathValue <=54){
        mathresult.textContent = `C`
       }
       else if(mathValue >=45 && mathValue <=49){
        mathresult.textContent = `C-`
       }
       else if(mathValue >=40 && mathValue <=44){
        mathresult.textContent = `D+`
       }
       else if(mathValue >=35 && mathValue <=139){
        mathresult.textContent = `D`
       }
       else if(mathValue >=30 && mathValue <=34){
        mathresult.textContent = `D-`
       }
       else if(mathValue >=0 && mathValue <=29){
        mathresult.textContent = `E`
       }
       else{
        mathresult.textContent = `N/A`
       }
    };


let englishinput = document.getElementById("englishinput");
let englishsubmit = document.getElementById("englishsubmit");
let englishresult = document.getElementById("englishresult");

    englishsubmit.onclick = function() {
        let englishValue = Number(englishinput.value);

        if(englishValue>101){
            englishresult.textContent = `N/A`;
           }
       else if(englishValue >=80 && englishValue <=100){
        englishresult.textContent = `A`
       }
       else if(englishValue >=75 && englishValue <=77){
        englishresult.textContent = `A-`
       }
       else if(englishValue >=70 && englishValue <=75){
        englishresult.textContent = `B+`
       }
       else if(englishValue >=65 && englishValue <=69){
        englishresult.textContent = `B`
       }
       else if(englishValue >=60 && englishValue <=64){
        englishresult.textContent = `B-`
       }
       else if(englishValue >=55 && englishValue <=59){
        englishresult.textContent = `C+`
       }
       else if(englishValue >=50 && englishValue <=54){
        englishresult.textContent = `C`
       }
       else if(englishValue >=45 && englishValue <=49){
        englishresult.textContent = `C-`
       }
       else if(englishValue >=40 && englishValue <=44){
        englishresult.textContent = `D+`
       }
       else if(englishValue >=35 && englishValue <=139){
        englishresult.textContent = `D`
       }
       else if(englishValue >=30 && englishValue <=34){
        englishresult.textContent = `D-`
       }
       else if(englishValue >=0 && englishValue <=29){
        englishresult.textContent = `E`
       }
       else{
        englishresult.textContent = `N/A`
       }
    };
let swahiliinput = document.getElementById("swahiliinput");
let swahilisubmit = document.getElementById("swahilisubmit");
let swahiliresult = document.getElementById("swahiliresult");

    swahilisubmit.onclick = function() {
        let swahiliValue = Number(swahiliinput.value);

        if(swahiliValue>101){
            swahiliresult.textContent = `N/A`;
           }
       else if(swahiliValue >=80 && swahiliValue <=100){
        swahiliresult.textContent = `A`
       }
       else if(swahiliValue >=75 && swahiliValue <=77){
        swahiliresult.textContent = `A-`
       }
       else if(swahiliValue >=70 && swahiliValue <=75){
        swahiliresult.textContent = `B+`
       }
       else if(swahiliValue >=65 && swahiliValue <=69){
        swahiliresult.textContent = `B`
       }
       else if(swahiliValue >=60 && swahiliValue <=64){
        swahiliresult.textContent = `B-`
       }
       else if(swahiliValue >=55 && swahiliValue <=59){
        swahiliresult.textContent = `C+`
       }
       else if(swahiliValue >=50 && swahiliValue <=54){
        swahiliresult.textContent = `C`
       }
       else if(swahiliValue >=45 && swahiliValue <=49){
        swahiliresult.textContent = `C-`
       }
       else if(swahiliValue >=40 && swahiliValue <=44){
        swahiliresult.textContent = `D+`
       }
       else if(swahiliValue >=35 && swahiliValue <=139){
        swahiliresult.textContent = `D`
       }
       else if(swahiliValue >=30 && swahiliValue <=34){
        swahiliresult.textContent = `D-`
       }
       else if(swahiliValue >=0 && swahiliValue <=29){
        swahiliresult.textContent = `E`
       }
       else{
        swahiliresult.textContent = `N/A`
       }
    };
let chemiinput = document.getElementById("cheminput");
let chemsubmit = document.getElementById("chemsubmit");
let chemresult = document.getElementById("chemresult");

    chemsubmit.onclick = function() {
        let chemValue = Number(cheminput.value);

        if(chemValue>101){
            chemresult.textContent = `N/A`;
           }
       else if(chemValue >=80 && chemValue <=100){
        chemresult.textContent = `A`
       }
       else if(chemValue >=75 && chemValue <=77){
        chemresult.textContent = `A-`
       }
       else if(chemValue >=70 && chemValue <=75){
        chemresult.textContent = `B+`
       }
       else if(chemValue >=65 && chemValue <=69){
        chemresult.textContent = `B`
       }
       else if(chemValue >=60 && chemValue <=64){
        chemresult.textContent = `B-`
       }
       else if(chemValue >=55 && chemValue <=59){
        chemresult.textContent = `C+`
       }
       else if(chemValue >=50 && swahiliValue <=54){
        swahiliresult.textContent = `C`
       }
       else if(chemValue >=45 && chemValue <=49){
        swahiliresult.textContent = `C-`
       }
       else if(chemValue >=40 && chemValue <=44){
        chemresult.textContent = `D+`
       }
       else if(chemValue >=35 && chemValue <=139){
        chemresult.textContent = `D`
       }
       else if(chemValue >=30 && chemValue <=34){
        chemresult.textContent = `D-`
       }
       else if(chemValue >=0 && chemValue <=29){
        chemresult.textContent = `E`
       }
       else{
        chemresult.textContent = `N/A`
       }
    };
let bioinput = document.getElementById("bioinput");
let biosubmit = document.getElementById("biosubmit");
let bioresult = document.getElementById("bioresult");

    biosubmit.onclick = function() {
        let bioValue = Number(bioinput.value);

        if(bioValue>101){
            bioresult.textContent = `N/A`;
           }
       else if(bioValue >=80 && bioValue <=100){
        bioresult.textContent = `A`
       }
       else if(bioValue >=75 && bioValue <=77){
        bioresult.textContent = `A-`
       }
       else if(bioValue >=70 && bioValue <=75){
        bioresult.textContent = `B+`
       }
       else if(bioValue >=65 && bioValue <=69){
        bioresult.textContent = `B`
       }
       else if(bioValue >=60 && bioValue <=64){
        bioresult.textContent = `B-`
       }
       else if(bioValue >=55 && bioValue <=59){
        bioresult.textContent = `C+`
       }
       else if(bioValue >=50 && bioValue <=54){
        bioresult.textContent = `C`
       }
       else if(bioValue >=45 && bioValue <=49){
        bioresult.textContent = `C-`
       }
       else if(bioValue >=40 && bioValue <=44){
        bioresult.textContent = `D+`
       }
       else if(bioValue >=35 && bioValue <=139){
        bioresult.textContent = `D`
       }
       else if(bioValue >=30 && bioValue <=34){
        bioresult.textContent = `D-`
       }
       else if(bioValue >=0 && bioValue <=29){
        bioresult.textContent = `E`
       }
       else{
        bioresult.textContent = `N/A`
       }
    };
let histoinput = document.getElementById("histoinput");
let histosubmit = document.getElementById("histosubmit");
let historesult = document.getElementById("historesult");

    histosubmit.onclick = function() {
        let histoValue = Number(histoinput.value);

        if(histoValue>101){
            historesult.textContent = `N/A`;
           }
       else if(histoValue >=80 && histoValue <=100){
        historesult.textContent = `A`
       }
       else if(histoValue >=75 && histoValue <=77){
        historesult.textContent = `A-`
       }
       else if(histoValue >=70 && histoValue <=75){
        historesult.textContent = `B+`
       }
       else if(histoValue >=65 && histoValue <=69){
        historesult.textContent = `B`
       }
       else if(histoValue >=60 && histoValue <=64){
        historesult.textContent = `B-`
       }
       else if(histoValue >=55 && histoValue <=59){
        historesult.textContent = `C+`
       }
       else if(histoValue >=50 && histoValue <=54){
        historesult.textContent = `C`
       }
       else if(histoValue >=45 && histoValue <=49){
        historesult.textContent = `C-`
       }
       else if(histoValue >=40 && histoValue <=44){
        historesult.textContent = `D+`
       }
       else if(histoValue >=35 && histoValue <=139){
        historesult.textContent = `D`
       }
       else if(histoValue >=30 && histoValue <=34){
        historesult.textContent = `D-`
       }
       else if(histoValue >=0 && histoValue <=29){
        historesult.textContent = `E`
       }
       else{
        historesult.textContent = `N/A`
       }
    };
let bstinput = document.getElementById("bstinput");
let bstsubmit = document.getElementById("bstsubmit");
let bstresult = document.getElementById("bstresult");

    bstsubmit.onclick = function() {
        let bstValue = Number(bstinput.value);

        if(bstValue>101){
            bstresult.textContent = `N/A`;
           }
       else if(bstValue >=80 && bstValue <=100){
        bstresult.textContent = `A`
       }
       else if(bstValue >=75 && bstValue <=77){
        bstresult.textContent = `A-`
       }
       else if(bstValue >=70 && bstValue <=75){
        bstresult.textContent = `B+`
       }
       else if(bstValue >=65 && bstValue <=69){
        bstresult.textContent = `B`
       }
       else if(bstValue >=60 && bstValue <=64){
        bstresult.textContent = `B-`
       }
       else if(bstValue >=55 && bstValue <=59){
        bstresult.textContent = `C+`
       }
       else if(bstValue >=50 && bstValue <=54){
        bstresult.textContent = `C`
       }
       else if(histoValue >=45 && bstValue <=49){
        bstresult.textContent = `C-`
       }
       else if(histoValue >=40 && bstValue <=44){
        bstresult.textContent = `D+`
       }
       else if(histoValue >=35 && bstValue <=139){
        bstresult.textContent = `D`
       }
       else if(bstValue >=30 && bstValue <=34){
        bstresult.textContent = `D-`
       }
       else if(bstValue >=0 && bstValue <=29){
        bstresult.textContent = `E`
       }
       else{
        bstresult.textContent = `N/A`
       }
    };

// I will calculate the results using grades eg 12=A