with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Now update the PRISM paragraph
idx = content.find('As a PG researcher in the PRISM group')
end_idx = content.find('</p>', idx) + 4
actual = content[idx:end_idx]
print("PRISM paragraph:")
print(repr(actual))

new_actual = """              <p>
                As a PG researcher in the PRISM group under Dr. Sobhan Kanti Dhara, I
                designed GeoStatNet (IEEE SPACE 2026, accepted) and GFCR-Net (IEEE GRSL,
                early access) for small, oriented ship detection in degraded maritime scenes,
                and co-authored SAPNet, TSRNet and <em>CSPNet</em> for thermal tiny-human detection.
              </p>"""

content = content.replace(actual, new_actual)

# Now update the "Before that" paragraph
idx = content.find('Before that: gigapixel pathology')
end_idx = content.find('</p>', idx) + 4
actual = content[idx:end_idx]
print("\nBefore that paragraph:")
print(repr(actual))

new_actual = """              <p>
                Earlier work spans gigapixel whole-slide pathology pipelines (Upwork),
                real-time PCB defect detection with YOLOv7 (MNIT Jaipur), a TensorFlow
                recommender system (Navodita Infotech), conversational fashion GenAI
                (Flipkart Grid 5.0 finalist), and a FaceNet-based attendance system.
              </p>"""

content = content.replace(actual, new_actual)

# Now add a new paragraph after the "Before that" paragraph
# Find the closing </p> of the "Before that" paragraph and add new content after it
idx = content.find('Earlier work spans gigapixel')
end_idx = content.find('</p>', idx) + 4
actual = content[idx:end_idx]

new_content = actual + """              <p>
                I also build developer tools: EdgePilot AI Studio (local-first Streamlit +
                OpenVINO workbench), Priorscope (evidence-verified research novelty checker),
                Hearthforge (coding agent with review gates), and a RAG query engine for
                tabular data.
              </p>"""

content = content.replace(actual, new_content)

# Update the Focus fact
content = content.replace(
    '<dd>Detection, segmentation, multimodal AI</dd>',
    '<dd>Detection, segmentation, MLLM, edge AI</dd>'
)

with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('SUCCESS: All profile updates applied')