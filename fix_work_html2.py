with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the exact position
idx = content.find('work-filters')
end_idx = content.find('</ol>', idx) + 5
actual = content[idx:end_idx]
print("Actual text from file:")
print(repr(actual))

new_actual = actual.replace(
    '''          <article class="featured" id="work-featured" aria-live="polite"></article>
          <ol class="work-list" id="work-list"></ol>''',
    '''          <div class="work-grid" id="work-grid"></div>'''
)

content = content.replace(actual, new_actual)
with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('SUCCESS: Work section HTML updated')