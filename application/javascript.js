/**
 * Created by Brian Gibbins on 12/3/16
 * loads classroom data from button press
 */
function myClassRoom(id) {
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
            period = "Dodgen Middle School";
            break;
    }
    document.getElementById(["period"]).innerHTML = period;
    data = loadStudents(id);
    for (var i in data.students) {
        document.getElementById(data.students[i].desk).innerHTML = data.students[i].first + "<br>" + data.students[i].last;
        /**
         * I left this comment in for demonstration purposes
         * See if you can add the student grade to the console log,
         * then add it to the desk with the name
         */
        console.log(data.students[i].first + " " + data.students[i].last + " - " + data.students[i].desk);
    }
}

/**
 * This would likely come from a server or a local database
 * and is included here for demonstration purposes.
 * Names are fictitious and any resemblance to real persons is
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
                    "grade": "A"
                },
                {
                    "desk": "desk2",
                    "first": "Mark",
                    "last": "Miller",
                    "grade": "B+"
                },
                {
                    "desk": "desk3",
                    "first": "Michael",
                    "last": "Wilson",
                    "grade": "C+"
                },
                {
                    "desk": "desk4",
                    "first": "Max",
                    "last": "Moore",
                    "grade": "A-"
                },
                {
                    "desk": "desk5",
                    "first": "Logan",
                    "last": "Taylor",
                    "grade": "A-"
                },
                {
                    "desk": "desk6",
                    "first": "Angelica",
                    "last": "Anderson",
                    "grade": "B-"
                },
                {
                    "desk": "desk7",
                    "first": "Alexander",
                    "last": "Thomas",
                    "grade": "B"
                },
                {
                    "desk": "desk8",
                    "first": "Elizabeth",
                    "last": "Jackson",
                    "grade": "A"
                },
                {
                    "desk": "desk9",
                    "first": "Gabriella",
                    "last": "White",
                    "grade": "B-"
                },
                {
                    "desk": "desk10",
                    "first": "Jacob",
                    "last": "Harris",
                    "grade": "A"
                },
                {
                    "desk": "desk11",
                    "first": "Isabelle",
                    "last": "Martin",
                    "grade": "B"
                },
                {
                    "desk": "desk12",
                    "first": "Layla",
                    "last": "Thompson",
                    "grade": "C"
                }
            ]};
            break;
         case 2:
             var data={"students":[
                 {
                     "desk": "desk1",
                     "first": "Charlotte",
                     "last": "Clark",
                     "grade": "A"
                 },
                 {
                     "desk": "desk2",
                     "first": "Megan",
                     "last": "Hall",
                     "grade": "B"
                 },
                 {
                     "desk": "desk3",
                     "first": "Madeline",
                     "last": "Allen",
                     "grade": "C"
                 },
                 {
                     "desk": "desk4",
                     "first": "Mackenzie",
                     "last": "King",
                     "grade": "A"
                 },
                 {
                     "desk": "desk5",
                     "first": "Olivia",
                     "last": "Hill",
                     "grade": "A"
                 },
                 {
                     "desk": "desk6",
                     "first": "Kevin",
                     "last": "Turner",
                     "grade": "C"
                 },
                 {
                     "desk": "desk7",
                     "first": "John",
                     "last": "Phillips",
                     "grade": "A"
                 },
                 {
                     "desk": "desk8",
                     "first": "Aaron",
                     "last": "Parker",
                     "grade": "A"
                 },
                 {
                     "desk": "desk9",
                     "first": "Alex",
                     "last": "Evans",
                     "grade": "A"
                 },
                 {
                     "desk": "desk10",
                     "first": "Abigail",
                     "last": "Edwards",
                     "grade": "B"
                 },
                 {
                     "desk": "desk11",
                     "first": "Andrea",
                     "last": "Collins",
                     "grade": "B+"
                 },
                 {
                     "desk": "desk12",
                     "first": "Daniel",
                     "last": "Stewart",
                     "grade": "A-"
                 }
             ]};
             break;
         case 3:
             var data={"students":[
                 {
                     "desk": "desk1",
                     "first": "Lucas",
                     "last": "Fox",
                     "grade": "A"
                 },
                 {
                     "desk": "desk2",
                     "first": "MJ",
                     "last": "Gray",
                     "grade": "B"
                 },
                 {
                     "desk": "desk3",
                     "first": "Cassidy",
                     "last": "James",
                     "grade": "A"
                 },
                 {
                     "desk": "desk4",
                     "first": "Marcus",
                     "last": "Watson",
                     "grade": "B"
                 },
                 {
                     "desk": "desk5",
                     "first": "Martha",
                     "last": "Long",
                     "grade": "B"
                 },
                 {
                     "desk": "desk6",
                     "first": "Tyler",
                     "last": "Patterson",
                     "grade": "B-"
                 },
                 {
                     "desk": "desk7",
                     "first": "Rachel",
                     "last": "Hughes",
                     "grade": "B"
                 },
                 {
                     "desk": "desk8",
                     "first": "Sydney",
                     "last": "Foster",
                     "grade": "A"
                 },
                 {
                     "desk": "desk9",
                     "first": "Patrick",
                     "last": "Wells",
                     "grade": "B"
                 },
                 {
                     "desk": "desk10",
                     "first": "Nivia",
                     "last": "Hamilton",
                     "grade": "C"
                 },
                 {
                     "desk": "desk11",
                     "first": "Jaden",
                     "last": "Eliis",
                     "grade": "B"
                 },
                 {
                     "desk": "desk12",
                     "first": "Carter",
                     "last": "Harris",
                     "grade": "B"
                 }
             ]};
             break;
    }
    return data;
}