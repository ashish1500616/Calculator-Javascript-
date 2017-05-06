console.log("workin");

var data = "";
var stack = [];
var t;
t = -1;

function pop() {
    --t;
}

function tope() {
    return stack[t];
}

function push(val) {
    t++;
    arr[t] = val;
}

function concatTo(val) {
    data = data + val;
}

function addTO(val) {
    $("#log").append(val);

}

function gB(button) {
    var x = button.id;
    switch (x) {
        case '0':
            {
                console.log("0 detected");
                addTO(x);
                concatTo(x);
                break;
            }
        case '1':
            {
                console.log("1 detected");
                addTO(x);
                concatTo(x);
                break;
            }
        case '2':
            {
                console.log("2 detected");
                addTO(x);
                concatTo(x);

                break;
            }
        case '3':
            {
                console.log("3 detected");
                addTO(x);
                concatTo(x);

                break;
            }
        case '4':
            {
                console.log("4 detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '5':
            {
                console.log("5 detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '6':
            {
                console.log("6 detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '7':
            {
                console.log("7 detected");
                addTO(x);
                concatTo(x);
                break;
            }
        case '8':
            {
                console.log("8 detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '9':
            {
                console.log("9 detected");

                addTO(x);
                concatTo(x);

                break;
            }
            //operator cases handling
        case '+':
            {
                console.log("+ detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '/':
            {
                console.log("÷ detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '-':
            {
                console.log("- detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '*':
            {
                console.log("x detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '.':
            {
                console.log(". detected");

                addTO(x);
                concatTo(x);

                break;
            }
        case '=':
            {
                console.log("= detected");

                addTO(x);

                console.log(data);
                var result=eval(data);
                addTO(result);
               // console.log("3*3");
               // console.log(parseInt('10')+parseInt('20'));
              
                break;
            }
        case 'ac':
            {
                console.log("ac detected");
                $('#log').empty();

                data = "";
                break;
                
            }
        case '%':
            {
                addTO(x);
                concatTo(x);

                break;
            }
        default:
            return false;
    }
}

function evaluate(val)
{
    var len =val.length;
    console.log(len);
    var index=0,start=0;
    for(index in val)
    {
        var li=0;
        if(val[index]=== '+' || val[index]=== '-' || val[index]=== '*' || val[index]=== '×' || val[index]=== '÷')
        {
                li=index-1;
        }

        start=index+1;
    }
	
}

//});
