function showResumeForm() {
    document.getElementById('introPage').style.display = 'none';
    document.getElementById('resumeFormPage').style.display = 'block';
}

function previewResume() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const schooling = document.getElementById('schooling').value;
    const higherEducation = document.getElementById('higherEducation').value;
    const graduation = document.getElementById('graduation').value;
    const achievements = document.getElementById('achievements').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;

    const previewContent = `
        <h1>${name}</h1>
        <h2>${title}</h2>
        <p>${phone} | ${email} | ${location}</p>
        <p>${linkedin}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p><strong>Schooling:</strong> ${schooling}</p>
        <p><strong>Higher Education:</strong> ${higherEducation}</p>
        <p><strong>Graduation:</strong> ${graduation}</p>
        <h3>Key Achievements</h3>
        <p>${achievements}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Languages</h3>
        <p>${languages}</p>
    `;

    document.getElementById('previewContent').innerHTML = previewContent;
    document.getElementById('resumePreview').style.right = '0';
}

function closePreview() {
    document.getElementById('resumePreview').style.right = '-100%';
}

function downloadResumeAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const schooling = document.getElementById('schooling').value;
    const higherEducation = document.getElementById('higherEducation').value;
    const graduation = document.getElementById('graduation').value;
    const achievements = document.getElementById('achievements').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;

    doc.setFontSize(22);
    doc.text(name, 20, 20);
    doc.setFontSize(16);
    doc.text(title, 20, 30);
    doc.setFontSize(12);
    doc.text(`${phone} | ${email} | ${location}`, 20, 40);
    doc.text(linkedin, 20, 50);
    doc.setFontSize(18);
    doc.text('Summary', 20, 60);
    doc.setFontSize(12);
    doc.text(summary, 20, 70);
    doc.setFontSize(18);
    doc.text('Experience', 20, 80);
    doc.setFontSize(12);
    doc.text(experience, 20, 90);
    doc.setFontSize(18);
    doc.text('Education', 20, 100);
    doc.setFontSize(12);
    doc.text(`Schooling: ${schooling}`, 20, 110);
    doc.text(`Higher Education: ${higherEducation}`, 20, 120);
    doc.text(`Graduation: ${graduation}`, 20, 130);
    doc.setFontSize(18);
    doc.text('Key Achievements', 20, 140);
    doc.setFontSize(12);
    doc.text(achievements, 20, 150);
    doc.setFontSize(18);
    doc.text('Skills', 20, 160);
    doc.setFontSize(12);
    doc.text(skills, 20, 170);
    doc.setFontSize(18);
    doc.text('Languages', 20, 180);
    doc.setFontSize(12);
    doc.text(languages, 20, 190);

    doc.save('resume.pdf');
}
