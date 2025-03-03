const studentDetailsDiv = document.getElementById('studentDetails');
const cityName = localStorage.getItem('cityName');

fetch('https://gist.githubusercontent.com/LeoLakshman/2da0383115823f0c3f0395678899d666/raw/d771fb4249a66078a2ea00eda39d3809d2a231c0/studentData.json')
.then(res => res.json())
.then(studentData =>{
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
});
