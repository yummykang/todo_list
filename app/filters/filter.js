/**
 * Created by Administrator on 2017/5/15.
 */
app.filter("num2boolean", function () {
   return function (input) {
       if(input == 1) {
           return true;
       } else {
           return false;
       }
   };
});
