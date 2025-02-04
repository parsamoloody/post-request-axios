import fs from "fs";
import axios from "axios";

const imageBuffer = fs.readFileSync('./files/1.png');

axios.post('http://localhost:1621', {
      sheetId: "example_id",
      file: imageBuffer,
})
.then(response => {
  console.log('Image sent successfully:', response.data);
})      
.catch(error => {
  console.error('Error sending image:', error);
});