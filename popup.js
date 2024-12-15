document.getElementById('send-button').addEventListener('click', async () => {
    const input = document.getElementById('chat-input').value;
    const output = document.getElementById('chat-output');
    if (!input.trim()) return;
  
    output.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    document.getElementById('chat-input').value = '';
  
    try {
      const response = await fetch('https://gemini.api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer AIzaSyBP-zJDw2nzcNOCqBsAdIpo-M_6MSl3TxM'
        },
        body: JSON.stringify({
          prompt: input,
          temperature: 0.7,
          max_tokens: 150
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data && data.choices) {
        const reply = data.choices[0].text.trim();
        output.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
      } else {
        output.innerHTML += '<p><strong>Bot:</strong> Something went wrong.</p>';
      }
    } catch (error) {
      output.innerHTML += `<p><strong>Bot:</strong> Error: ${error.message}</p>`;
      console.error('Error fetching data:', error);
    }
  });
  