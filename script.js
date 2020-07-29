let c = 0;

function display(val) {
    let y;

    let x = document.getElementById("history").textContent.length;
y = document.getElementById("result").textContent.length;

    let s = document.getElementById("history").textContent;
    //document.getElementById("history").textContent="";
    let a = s.substring(s.length - 1, s.length);
      if(y>16&&x===0) 
        {
          alert("You have daded maximum number of digit. Delete digit to add new digit or operator");
          document.getElementById("result").textContent+="";
        }
        
  else  if (x <= 30) {
        if (val === "÷" || val === "-" || val === "+" || val === "×") {
            if (a === "=") {
                document.getElementById("history").textContent = document.getElementById("result").textContent;
                document.getElementById("history").textContent += val;

            } else if (!(a == "÷" || a == "+" || a == "-" || a == "×")) {
              let cc=0;
                for (i = 0; i < x; i++) {
                if (s[i] === "÷" || s[i] === "-" || s[i] === "+" || s[i] === "×") {
                    cc = 1;
                    break;
                }
            }
                if (cc === 0){
                document.getElementById("history").textContent = document.getElementById("result").textContent;
                document.getElementById("history").textContent += val;
              }
                else document.getElementById("history").textContent += val;

            }


        }
  
     else {
          if(a==="=") document.getElementById("history").textContent="";
          else{
            c=0;
          for (i = 0; i < x; i++) {
                if (s[i] === "÷" || s[i] === "-" || s[i] === "+" || s[i] === "×") {
                    c = 1;
                    break;
                }
            }
                if (c === 1)
                  document.getElementById("history").textContent += val;
          }
        }

            if (!(val == "÷" || val == "+" || val == "-" || val == "×" || val == "="))
            {
              if(a==="="){
                document.getElementById("result").textContent="";
                document.getElementById("result").textContent += val;
              }
              else if(a === "÷" || a === "+" || a === "-" || a === "×"){
                 document.getElementById("result").textContent="";               
                 document.getElementById("result").textContent+=val;               

              }
              else
                 document.getElementById("result").textContent += val;               
            }

            else {
                let c = 0;
                document.getElementById("result").textContent="";
                let s = document.getElementById("history").textContent;
                for (i = s.length - 2; i >= 0; i--) {
                    if (s[i] === "÷" || s[i] === "-" || s[i] === "+" || s[i] === "×") {
                        c = i;
                        s = s.substring(c + 1, s.length - 1);
                        document.getElementById("result").textContent = "";
                        document.getElementById("result").textContent = s;
                        break;
               
                    }
                }



            }
        }
       

    }
  

    function result() {
        document.getElementById("result").textContent = "";
        let a = document.getElementById('history').textContent;
        a = a.replace(/÷/g, "/");
        a = a.replace(/×/g, "*");
       // a = a.replace(/√/g, "Math.sqrt(val)");
        let y = eval(a);
        document.getElementById("result").textContent = y;
        document.getElementById("history").textContent += "=";
    }

    function ac() {
        document.getElementById("result").textContent = "";
        document.getElementById("history").textContent = "";
    }

    function ce() {
        let s = document.getElementById("history").textContent;
        s = s.substring(s.length - 1, s.length);
        if (s === "=") document.getElementById("history").textContent = "";
        else {
            let b = document.getElementById("result").textContent;
            b = b.substring(0, b.length - 1);
            document.getElementById("result").textContent = b;
        }
    }