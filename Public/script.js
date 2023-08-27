function analyzeSymptom() {
    const symptom = document.getElementById('symptom-input').value;
    
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symptom: symptom })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('analyzer-result').innerText = data.analysis;
    })
    .catch(error => {
        console.error('Error analyzing symptom:', error);
    });
}
