const studentDetailsDiv = document.getElementById('studentDetails');
const cityStudents = JSON.parse(localStorage.getItem('cityStudents'));

if (cityStudents && cityStudents.length > 0) {
    let detailsHTML = `<h2>Students from ${cityStudents[0].city}</h2>`;
    cityStudents.forEach(student => {
        detailsHTML += `<p>Major: ${student.major || 'N/A'}</p>`;
        detailsHTML += `<p>Details: ${student.otherDetails || 'N/A'}</p>`;
    });
    studentDetailsDiv.innerHTML = detailsHTML;
} else {
    studentDetailsDiv.innerHTML = `<p>No student details available.</p>`;
}
