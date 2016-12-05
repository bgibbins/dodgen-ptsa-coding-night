/**
 * Created by briangibbins on 12/3/16.
 */
function myClassRoom(id) {
    // data = JSON.parse(loadStudents(id));
    data = loadStudents(id);
    switch (id) {
        case 1:
            period = "Spanish";
            break;
        case 2:
            period = "Physical Science";
            break;
        case 3:
            period = "Georgia Studies";
            break;
        default:
            period = "Free Period";
            break;
    }
    document.getElementById(["period"]).innerHTML = period;
    for (var i in data.students) {
        document.getElementById(data.students[i].desk).innerHTML = data.students[i].first + "<br>" + data.students[i].last;
        console.log(data.students[i].first + " " + data.students[i].last + " - " + data.students[i].desk);
    }
}

/**
 * This would likely come from a server or a local database
 * and is included here for demonstration purposes.
 * Names are fictitious and any resemblence to real persons is
 * coincidence.
 *
 * @param id
 * @returns {{students: *[]}|string}
 */
function loadStudents(id) {
    switch (id) {
        case 1:
            var data={"students":[
                {
                    "desk": "desk1",
                    "first": "Ansley",
                    "last": "Davis",
                    "gender": "f"
                },
                {
                    "desk": "desk2",
                    "first": "Mark",
                    "last": "Miller",
                    "gender": "m"
                },
                {
                    "desk": "desk3",
                    "first": "Michael",
                    "last": "Wilson",
                    "gender": "m"
                },
                {
                    "desk": "desk4",
                    "first": "Max",
                    "last": "Moore",
                    "gender": "m"
                },
                {
                    "desk": "desk5",
                    "first": "Logan",
                    "last": "Taylor",
                    "gender": "f"
                },
                {
                    "desk": "desk6",
                    "first": "Angelica",
                    "last": "Anderson",
                    "gender": "f"
                },
                {
                    "desk": "desk7",
                    "first": "Alexander",
                    "last": "Thomas",
                    "gender": "m"
                },
                {
                    "desk": "desk8",
                    "first": "Elizabeth",
                    "last": "Jackson",
                    "gender": "f"
                },
                {
                    "desk": "desk9",
                    "first": "Gabriella",
                    "last": "White",
                    "gender": "f"
                },
                {
                    "desk": "desk10",
                    "first": "Jacob",
                    "last": "Harris",
                    "gender": "m"
                },
                {
                    "desk": "desk11",
                    "first": "Isabelle",
                    "last": "Martin",
                    "gender": "f"
                },
                {
                    "desk": "desk12",
                    "first": "Layla",
                    "last": "Thompson",
                    "gender": "f"
                }
            ]};
            break;
         case 2:
             var data={"students":[
                 {
                     "desk": "desk1",
                     "first": "Charlotte",
                     "last": "Clark",
                     "gender": "f"
                 },
                 {
                     "desk": "desk2",
                     "first": "Megan",
                     "last": "Hall",
                     "gender": "f"
                 },
                 {
                     "desk": "desk3",
                     "first": "Madeline",
                     "last": "Allen",
                     "gender": "f"
                 },
                 {
                     "desk": "desk4",
                     "first": "Mackenzie",
                     "last": "King",
                     "gender": "f"
                 },
                 {
                     "desk": "desk5",
                     "first": "Olivia",
                     "last": "Hill",
                     "gender": "f"
                 },
                 {
                     "desk": "desk6",
                     "first": "Kevin",
                     "last": "Turner",
                     "gender": "m"
                 },
                 {
                     "desk": "desk7",
                     "first": "John",
                     "last": "Phillips",
                     "gender": "m"
                 },
                 {
                     "desk": "desk8",
                     "first": "Aaron",
                     "last": "Parker",
                     "gender": "m"
                 },
                 {
                     "desk": "desk9",
                     "first": "Alex",
                     "last": "Evans",
                     "gender": "m"
                 },
                 {
                     "desk": "desk10",
                     "first": "Abigail",
                     "last": "Edwards",
                     "gender": "f"
                 },
                 {
                     "desk": "desk11",
                     "first": "Andrea",
                     "last": "Collins",
                     "gender": "f"
                 },
                 {
                     "desk": "desk12",
                     "first": "Daniel",
                     "last": "Stewart",
                     "gender": "m"
                 }
             ]};
             break;
         case 3:
             var data={"students":[
                 {
                     "desk": "desk1",
                     "first": "Lucas",
                     "last": "Cox",
                     "gender": "m"
                 },
                 {
                     "desk": "desk2",
                     "first": "MJ",
                     "last": "Gray",
                     "gender": "m"
                 },
                 {
                     "desk": "desk3",
                     "first": "Cassidy",
                     "last": "James",
                     "gender": "f"
                 },
                 {
                     "desk": "desk4",
                     "first": "Marcus",
                     "last": "Watson",
                     "gender": "m"
                 },
                 {
                     "desk": "desk5",
                     "first": "Martha",
                     "last": "Long",
                     "gender": "f"
                 },
                 {
                     "desk": "desk6",
                     "first": "Tyler",
                     "last": "Patterson",
                     "gender": "m"
                 },
                 {
                     "desk": "desk7",
                     "first": "Rachel",
                     "last": "Hughes",
                     "gender": "f"
                 },
                 {
                     "desk": "desk8",
                     "first": "Sydney",
                     "last": "Foster",
                     "gender": "f"
                 },
                 {
                     "desk": "desk9",
                     "first": "Patrick",
                     "last": "Wells",
                     "gender": "m"
                 },
                 {
                     "desk": "desk10",
                     "first": "Nivia",
                     "last": "Hamilton",
                     "gender": "f"
                 },
                 {
                     "desk": "desk11",
                     "first": "Jaden",
                     "last": "Eliis",
                     "gender": "m"
                 },
                 {
                     "desk": "desk12",
                     "first": "Carter",
                     "last": "Harris",
                     "gender": "m"
                 }
             ]};
             break;
    }
    return data;
}