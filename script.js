function showForm(type) {
    if (type === 'sgpa') {
        document.getElementById('sgpaForm').classList.add('active');
        document.getElementById('cgpaForm').classList.remove('active');
    } else {
        document.getElementById('cgpaForm').classList.add('active');
        document.getElementById('sgpaForm').classList.remove('active');
    }
}

function marks(y) {
    if (y < 40) return 0;
    else if (y >= 40 && y < 45) return 4;
    else if (y >= 45 && y < 50) return 5;
    else if (y >= 50 && y < 60) return 6;
    else if (y >= 60 && y < 70) return 7;
    else if (y >= 70 && y < 80) return 8;
    else if (y >= 80 && y < 90) return 9;
    else return 10;
}

function calculateSGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= 8; i++) { // Adjust this loop according to the number of subjects
        const subjectCredits = parseFloat(document.getElementById(`subject${i}-credits`).value);
        const subjectMarks = parseFloat(document.getElementById(`subject${i}-marks`).value);
        if (!isNaN(subjectCredits) && !isNaN(subjectMarks)) {
            const gradePoints = marks(subjectMarks);
            totalGradePoints += subjectCredits * gradePoints;
            totalCredits += subjectCredits;
        }
    }

    const sgpa = totalGradePoints / totalCredits;

    const modal = document.getElementById("modal");
    const sgpaResult = document.getElementById("sgpaResult");
    sgpaResult.innerHTML = sgpa.toFixed(2);
    modal.style.display = "block";
}

function calculateCGPA() {
    let totalSGPA = 0;
    let numberOfSemesters = 0;

    for (let i = 1; i <= 8; i++) { // Adjust this loop according to the number of semesters
        const sgpa = parseFloat(document.getElementById(`sem${i}-sgpa`).value);
        if (!isNaN(sgpa)) {
            totalSGPA += sgpa;
            numberOfSemesters++;
        }
    }

    if (numberOfSemesters > 0) {
        const cgpa = totalSGPA / numberOfSemesters;

        const modal2 = document.getElementById("modal2");
        const cgpaResult = document.getElementById("cgpaResult");
        cgpaResult.innerHTML = cgpa.toFixed(2);
        modal2.style.display = "block";
    } else {
        console.log("No SGPA values entered");
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function closeModal2() {
    const modal2 = document.getElementById("modal2");
    modal2.style.display = "none";
}
