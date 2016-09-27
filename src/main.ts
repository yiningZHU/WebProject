function print(a: number)
{
    for(var i: number = 1;i <= a ;i++)
    {
           var test : string = "";
           for(var k: number = 1;k <= a-i;k++)
           {
               var space : string = " ";
               test = test + space;
           }

           for(var x: number = 1;x <= i*2-1;x++)
           {
               var star : string = "*";
               test = test + star;
           }
           
           console.log(test);
    }
}

   
window.onload = function()
{
    print(4);
}
