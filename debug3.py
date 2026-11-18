with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# The exact text to find (with HTML entity & and en-dash \u2013)
old_text = "                At Samsung R&D Institute India, Bangalore (Jan\u2013Jul 2026) I worked in the\n                Platform Intelligence team on an AI data-generation system: an MLLM-powered\n                quality-check pipeline that scored synthetic training samples by fusing OCR\n                text, image features, vision-language and zero-shot CLIP embeddings into a\n                custom out-of-distribution score.\n              </p>"

print("Looking for:")
for i, c in enumerate(old_text[:100]):
    print(f"  {i}: {repr(c)} (ord={ord(c)})")

idx = content.find('Samsung R')
exact = content[idx:idx+350]
print("\nFound in file:")
for i, c in enumerate(exact[:100]):
    print(f"  {i}: {repr(c)} (ord={ord(c)})")