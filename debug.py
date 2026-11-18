with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the exact position
idx = content.find('Samsung R')
print('Found at index:', idx)
print('Context:')
print(repr(content[idx:idx+350]))