const studentDetailsDiv = document.getElementById('studentDetails');
const cityName = localStorage.getItem('cityName');
const studentData = JSON.parse(localStorage.getItem('studentData'));

const cityStudents = studentData.filter(student => student.city === cityName);

if (cityStudents && cityStudents.length > 0) {
    let detailsHTML = `<h2>Students from ${cityName}</h2>`;
    cityStudents.forEach(student => {
        detailsHTML += `<p>Major: ${student.major || 'N/A'}</p>`;
        detailsHTML += `<p>Details: ${student.otherDetails || 'N/A'}</p>`;
    });
    studentDetailsDiv.innerHTML = detailsHTML;
} else {
    studentDetailsDiv.innerHTML = `<p>No student details available.</p>`;
}
