
import argparse
import glob
import os
import json
import re
from uuid import uuid4
from docx import Document

def read_docx(file_path: str) -> list:
    doc = Document(file_path)
    all_text = [para.text for para in doc.paragraphs]
    full_text = "\n".join(all_text)
    # Extract the section between "WORDS/PHRASES" and "CORRECTIONS"
    start_index = full_text.find('WORDS/PHRASES')
    end_index = full_text.find('\n\n', start_index) or full_text.find('CORRECTIONS')

    if start_index == -1:
        print("DEBUG - 'WORDS/PHRASES' not found in:", file_path)
        return []
    
    if end_index == -1:
        extracted_section = full_text[start_index:]
    else:
        extracted_section = full_text[start_index:end_index]
    
    lines = extracted_section.split('\n')[1:]  # Skip the "WORDS/PHRASES" line
    
    return lines

# def filter_lines_with_special_chars(lines: list) -> list:
#     special_chars = [":", ",", "/"]
#     return [line for line in lines if any(char in line for char in special_chars)]


def doc_converter(docx_folder) -> None:
    result_data = {}
    lines = []
    for file in glob.glob(os.path.join(docx_folder, 'Ozge*.docx')):
        doc_lines = read_docx(file)
        # print('lines', lines)
        # filtered_lines = filter_lines_with_special_chars(lines)  # No need to join the lines
        result_data['id'] = str(uuid4())
        result_data['lines'] = split_by_special_chars(doc_lines)
        lines.append(result_data)
        
    # Convert the data to JSON format
    json_data = json.dumps(lines, indent=4)
    # print('json',word_lists)
    return json_data

def split_by_special_chars(lines: list) -> list:
    return [word for line in lines for word in re.split(r'(?<!\w)[^a-zA-Z0-9\s\']|[^a-zA-Z0-9\s\'](?!\w)|/', line) if word]
#   
    # list = []
    # for line in lines:
    #     for word in re.split(r'(?<!\w)[^a-zA-Z0-9\s\']|[^a-zA-Z0-9\s\'](?!\w)|/', line):
    #         if word:
    #             list.append(word)
    # return list
#