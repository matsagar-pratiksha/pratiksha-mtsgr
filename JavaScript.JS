function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
  
    const resume = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
  
    document.getElementById('resume').innerHTML = resume;
  }