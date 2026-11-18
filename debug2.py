with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# The exact text to find (with HTML entity &)
old_text = """                At Samsung R&D Institute India, Bangalore (Jan–Jul 2026) I worked in the
                Platform Intelligence team on an AI data-generation system: an MLLM-powered
                quality-check pipeline that scored synthetic training samples by fusing OCR
                text, image features, vision-language and zero-shot CLIP embeddings into a
                custom out-of-distribution score.
              </p>"""

new_text = """                At Samsung R&D Institute India, Bangalore (Jan–Jul 2026) I worked in the
                Platform Intelligence team on an AI data-generation system: an MLLM-powered
                quality-check pipeline that scored synthetic training samples by fusing OCR
                text, image features, vision-language and zero-shot CLIP embeddings into a
                custom out-of-distribution score — replacing manual review with calibrated
                statistical thresholds from clean data alone.
              </p>"""

if old_text in content:
    content = content.replace(old_text, new_text)
    with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: Samsung paragraph updated')
else:
    print('FAILED: Could not find exact match')
    # Show what we have
    idx = content.find('Samsung R')
    if idx >= 0:
        print('Found at index:', idx)
        # Get the exact bytes
        exact = content[idx:idx+350]
        print('Exact bytes:')
        for i, c in enumerate(exact):
            print(f'  {i}: {repr(c)} (ord={ord(c)})')