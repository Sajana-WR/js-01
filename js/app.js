let student = [
    {
        name : "kamal",
        age : 25,
        isStudent : true,
        marks : [
            {
                subject:"Maths",
                marks:80
            },
            {
                subject:"Bio",
                marks:75
            }
        ]

    },
    {
        name : "sajana",
        age : 20,
        isStudent : true,
        marks : [
            {
                subject:"It",
                marks:100

            },
            {
                subject: "Maths",
                marks:90
            }
        ]
    }


]

console.log(student[1].marks[0].marks)