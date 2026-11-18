with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# The exact text to find (with HTML entity & and en-dash \u2013)
old_text = "                At Samsung R&D Institute India, Bangalore (Jan\u2013Jul 2026) I worked in the\n                Platform Intelligence team on an AI data-generation system: an MLLM-powered\n                quality-check pipeline that scored synthetic training samples by fusing OCR\n                text, image features, vision-language and zero-shot CLIP embeddings into a\n                custom out-of-distribution score.\n              </p>"

new_text = "                At Samsung R&D Institute India, Bangalore (Jan\u2013Jul 2026) I worked in the\n                Platform Intelligence team on an AI data-generation system: an MLLM-powered\n                quality-check pipeline that scored synthetic training samples by fusing OCR\n                text, image features, vision-language and zero-shot CLIP embeddings into a\n                custom out-of-distribution score \u2014 replacing manual review with calibrated\n                statistical thresholds from clean data alone.\n              </p>"

if old_text in content:
    content = content.replace(old_text, new_text)
    with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: Samsung paragraph updated')
else:
    print('FAILED: Could not find exact match')