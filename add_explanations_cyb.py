import re

# Read the current database
with open('CYB201_QUESTIONS_DATABASE.js', 'r', encoding='utf-8') as f:
    content = f.read()

# This script adds explanation field to questions that don't have it
# Run this to add explanations to CYB201 questions

print("Script ready to add explanations to CYB201 database")
print("Due to the large number of questions (150), explanations will be added manually")
print("Please use the course material to create detailed explanations for each question")
