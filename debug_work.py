with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the exact position
idx = content.find('work-filters')
actual = content[idx:idx+500]
print("Actual text from file:")
print(repr(actual))