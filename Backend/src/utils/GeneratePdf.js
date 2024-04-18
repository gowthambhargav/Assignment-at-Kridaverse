import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path'



const PdfGenerater = (keys, values, FileName) => {
  const file = path.resolve(`./public/temp/${FileName}.pdf`);
  if (!fs.existsSync(file)) {
    // Create a new PDF document
    const doc = new PDFDocument();

    // Pipe the PDF content to a writable stream (e.g., a file)
    const outputStream = fs.createWriteStream(file);
    doc.pipe(outputStream);

    // Define your table data
    const tableData = [keys].concat(values.map((value, i) => [keys[i], value]));

    // Set up the table layout
    const table = {
      headers: tableData.shift(), // Extract headers from data
      rows: tableData,
    };

    // Function to draw the table
    function drawTable(doc, table) {
      const initialY = doc.y; // Save initial Y position for future reference
      const cellWidth = doc.page.width / table.headers.length;
      const cellHeight = 20;
      const margin = 5; // Add a margin

      // Draw headers
      table.headers.forEach((header, i) => {
        doc.rect(cellWidth * i, initialY, cellWidth, cellHeight).stroke()
          .text(header, cellWidth * i + margin, initialY + margin, { width: cellWidth - 2 * margin, align: 'center' });
      });

      // Draw rows
      table.rows.forEach((row, i) => {
        row.forEach((cell, j) => {
          doc.rect(cellWidth * j, initialY + cellHeight * (i + 1), cellWidth, cellHeight).stroke()
            .text(cell.toString(), cellWidth * j + margin, initialY + cellHeight * (i + 1) + margin, { width: cellWidth - 2 * margin, align: 'center' });
        });
      });

      doc.end();
    }

    drawTable(doc, table);
  }
}
export default PdfGenerater