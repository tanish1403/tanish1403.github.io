with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the exact position
idx = content.find('Samsung R')
exact = content[idx:idx+350]

# Now let's build the search string from the actual content
# The file has: Samsung R&D Institute India...
# Let me extract the exact substring
end_idx = content.find('</p>', idx) + 4
actual = content[idx:end_idx]
print("Actual text from file:")
print(repr(actual))

# Now create the replacement
new_actual = actual.replace(
    'custom out-of-distribution score.',
    'custom out-of-distribution score \u2014 replacing manual review with calibrated\n                statistical thresholds from clean data alone.'
)

content = content.replace(actual, new_actual)
with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('SUCCESS: Samsung paragraph updated')