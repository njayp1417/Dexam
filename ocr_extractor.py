"""
OCR Question Extractor Tool
Extracts questions from images and PDFs, then formats them for the exam system
"""

import pytesseract
from pdf2image import convert_from_path
from PIL import Image
import os
import json
import re

class QuestionExtractor:
    def __init__(self):
        # Set tesseract path (update this based on your installation)
        # pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
        pass
    
    def extract_from_image(self, image_path):
        """Extract text from a single image"""
        try:
            img = Image.open(image_path)
            text = pytesseract.image_to_string(img)
            return text
        except Exception as e:
            print(f"Error processing {image_path}: {e}")
            return ""
    
    def extract_from_pdf(self, pdf_path):
        """Extract text from PDF (converts to images first)"""
        try:
            # Convert PDF to images
            images = convert_from_path(pdf_path)
            
            all_text = []
            for i, image in enumerate(images):
                print(f"Processing page {i+1}...")
                text = pytesseract.image_to_string(image)
                all_text.append(text)
            
            return "\n\n".join(all_text)
        except Exception as e:
            print(f"Error processing PDF {pdf_path}: {e}")
            return ""
    
    def parse_questions(self, raw_text):
        """
        Parse raw OCR text into structured questions
        This is a basic parser - you may need to customize based on your format
        """
        questions = []
        
        # Split by question numbers (1., 2., etc.)
        question_blocks = re.split(r'\n\s*\d+[\.\)]\s*', raw_text)
        
        for block in question_blocks[1:]:  # Skip first empty split
            lines = block.strip().split('\n')
            if len(lines) < 5:  # Need at least question + 4 options
                continue
            
            question_text = lines[0].strip()
            options = []
            correct_answer = None
            
            # Extract options (A, B, C, D or a, b, c, d)
            for line in lines[1:]:
                line = line.strip()
                if re.match(r'^[A-Da-d][\.\)]\s*', line):
                    option_text = re.sub(r'^[A-Da-d][\.\)]\s*', '', line)
                    options.append(option_text)
            
            if len(options) >= 4:
                questions.append({
                    'question': question_text,
                    'options': options[:4],  # Take first 4 options
                    'correct': 0,  # You'll need to manually set this
                    'topic': 'General'  # You'll need to manually set this
                })
        
        return questions
    
    def save_to_js(self, questions, output_file, course_code):
        """Save questions to JavaScript format"""
        js_content = f"const {course_code}_QUESTIONS = [\n"
        
        for q in questions:
            js_content += "    {\n"
            js_content += f"        question: \"{q['question']}\",\n"
            js_content += f"        options: {json.dumps(q['options'])},\n"
            js_content += f"        correct: {q['correct']},\n"
            js_content += f"        topic: \"{q['topic']}\"\n"
            js_content += "    },\n"
        
        js_content += "];\n\n"
        js_content += "if (typeof module !== 'undefined' && module.exports) {\n"
        js_content += f"    module.exports = {course_code}_QUESTIONS;\n"
        js_content += "}\n"
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"Saved {len(questions)} questions to {output_file}")
    
    def process_folder(self, folder_path, course_code):
        """Process all images and PDFs in a folder"""
        all_text = []
        
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                print(f"Processing image: {filename}")
                text = self.extract_from_image(file_path)
                all_text.append(text)
            
            elif filename.lower().endswith('.pdf'):
                print(f"Processing PDF: {filename}")
                text = self.extract_from_pdf(file_path)
                all_text.append(text)
        
        combined_text = "\n\n=== NEW FILE ===\n\n".join(all_text)
        
        # Save raw extracted text
        with open(f'{course_code}_raw_text.txt', 'w', encoding='utf-8') as f:
            f.write(combined_text)
        
        print(f"\nRaw text saved to {course_code}_raw_text.txt")
        print("Review and clean the text, then run parse_questions()")
        
        return combined_text


# Usage Example
if __name__ == "__main__":
    extractor = QuestionExtractor()
    
    # Example 1: Extract from a folder of images/PDFs
    # raw_text = extractor.process_folder('path/to/questions/folder', 'CSC261')
    
    # Example 2: Extract from single image
    # text = extractor.extract_from_image('question_image.jpg')
    
    # Example 3: Extract from PDF
    # text = extractor.extract_from_pdf('past_questions.pdf')
    
    # Example 4: Parse and save questions
    # questions = extractor.parse_questions(raw_text)
    # extractor.save_to_js(questions, 'CSC261_QUESTIONS_DATABASE.js', 'CSC261')
    
    print("OCR Question Extractor Ready!")
    print("\nInstallation required:")
    print("pip install pytesseract pdf2image pillow")
    print("Also install Tesseract OCR: https://github.com/tesseract-ocr/tesseract")
