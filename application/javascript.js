/**
 * Created by briangibbins on 12/3/16.
 */
function myClassRoom(id) {
    data = loadStudents(id);
    alert(data);
}


function loadStudents(id) {
    switch (id) {
        case 1:
        data = "Class One";
            break;
         case 2:
        data = "Class Two";
            break;
         case 3:
             var obj = {
                 "Science":[
                     {
                         "studentName":"Albert",
                         "gender":"m"
                     },
                     {
                         "studentName":"green",
                         "gender":"m"
                     },
                     {
                         "studentName":"blue",
                         "gender":"f"
                     },
                     {
                         "studentName":"cyan",
                         "gender":"f"
                     },
                     {
                         "studentName":"magenta",
                         "gender":"m"
                     },
                     {
                         "studentName":"black",
                         "gender":"f"
                     }
                 ]
             };
            var data = JSON.stringify(obj);
            break;
    }
    return data;
}