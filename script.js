const GIST_URL = 'https://gist.githubusercontent.com/LeoLakshman/2da0383115823f0c3f0395678899d666/raw/d771fb4249a66078a2ea00eda39d3809d2a231c0/studentData.json';

let studentData;

fetch(GIST_URL)
    .then(res => res.json())
    .then(data => {
        studentData = data;
        console.log("Student Data Loaded:", studentData);

        new Globe(document.getElementById('globeViz'))
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .htmlElementsData(studentData)
            .htmlLat('latitude')
            .htmlLng('longitude')
            .htmlElement(d => {
                const button = document.createElement('button');
                button.textContent = `${d.city} (${d.studentCount} TTU Students)`;
                button.style.color = d.studentCount > 0 ? 'red' : 'orange';
                button.style.fontSize = '16px';
                button.style.background = 'rgba(0, 0, 0, 0.7)';
                button.style.padding = '8px 12px';
                button.style.borderRadius = '5px';
                button.style.border = 'none';
                button.style.cursor = 'pointer';
                button.style.whiteSpace = 'nowrap';

                button.addEventListener('click', () => {
                    localStorage.setItem('cityName', d.city); // Store city name
                    window.location.href = 'details.html';
                });

                return button;
            });
    });
