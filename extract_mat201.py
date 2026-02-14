import PyPDF2
import sys

pdf_path = "MAT 201 CBE 2019(1).pdf"

with open(pdf_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    with open('maths/pdf_extracted.txt', 'w', encoding='utf-8') as out:
        out.write(f"Total pages: {len(reader.pages)}\n\n")
        
        for i, page in enumerate(reader.pages[:5]):  # First 5 pages only
            out.write(f"=== PAGE {i+1} ===\n")
            text = page.extract_text()
            out.write(text)
            out.write("\n" + "="*50 + "\n\n")

print("Extraction complete. Check maths/pdf_extracted.txt")
