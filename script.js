const GIST_URL = 'studentData.json';

let studentData;

fetch(GIST_URL)
    .then(res => res.json())
    .then(data => {
        studentData = data;
        localStorage.setItem('studentData', JSON.stringify(studentData));
        console.log("Student Data Loaded:", studentData);

        new Globe(document.getElementById('globeViz'))
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
            .htmlElementsData(studentData)
            .htmlLat('latitude')
            .htmlLng('longitude')
            .htmlElement(d => {
                const el = document.createElement('div');
                el.textContent = `${d.city} (${d.studentCount} TTU Students)`;
                el.style.color = d.studentCount > 0 ? 'red' : 'orange';
                el.style.fontSize = '16px';
                el.style.background = 'rgba(0, 0, 0, 0.7)';
                el.style.padding = '8px 12px';
                el.style.borderRadius = '5px';
                el.style.whiteSpace = 'nowrap';
                return el;
            });

        const sidebar = document.getElementById('sidebar');
        studentData.forEach(city => {
            const button = document.createElement('button');
            button.textContent = `${city.city} (${city.studentCount} TTU Students)`;
            button.addEventListener('click', () => {
                localStorage.setItem('cityName', city.city);
                window.location.href = 'details.html';
            });
            sidebar.appendChild(button);
        });
    });
