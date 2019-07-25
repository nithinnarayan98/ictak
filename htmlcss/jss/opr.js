function gn()
    {
        var x=parseInt(document.getElementById("n1").value);
        var y=parseInt(document.getElementById("n2").value);
        var op=document.getElementById("op").value;
       


        if(op=="add")
        {

        var result=addnumbers(x,y);
            document.getElementById("d").innerHTML=result;
        }
        else if(op=="sub")
        { var result=subnumbers(x,y);
            document.getElementById("d").innerHTML=result; 
        }
        else if(op=="mult")
        {
            var result=multnumbers(x,y);
            document.getElementById("d").innerHTML=result;
        }

       else  
        {
            var result=divnumbers(x,y);
            document.getElementById("d").innerHTML=result;
        }
        function addnumbers(a,b)
        {var c=a+b;
            return c;

        }
        function subnumbers(a,b)
        {
            var c=a-b;
            return c;
        }
        function multnumbers(a,b)
        {
            var c=a*b;
            return c;
        }
        function divnumbers(a,b)
       {
           var c=a/b;
           return c;
       }  
        

    }