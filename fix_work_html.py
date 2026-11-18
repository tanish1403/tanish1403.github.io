with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_text = '''          <div class="filters" id="work-filters" role="group" aria-label="Filter work by area">
            <button class="chip is-active" type="button" data-filter="All">All <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="CV & Detection">Vision <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="Medical Imaging">Medical <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="GenAI & NLP">Generative <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="Tools & Systems">Systems <span class="chip-n"></span></button>
          </div>

          <article class="featured" id="work-featured" aria-live="polite"></article>
          <ol class="work-list" id="work-list"></ol>'''

new_text = '''          <div class="filters" id="work-filters" role="group" aria-label="Filter work by area">
            <button class="chip is-active" type="button" data-filter="All">All <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="CV & Detection">Vision <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="Medical Imaging">Medical <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="GenAI & NLP">Generative <span class="chip-n"></span></button>
            <button class="chip" type="button" data-filter="Tools & Systems">Systems <span class="chip-n"></span></button>
          </div>

          <div class="work-grid" id="work-grid"></div>'''

if old_text in content:
    content = content.replace(old_text, new_text)
    with open(r'C:\Users\tanis\OneDrive\Desktop\port\index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: Work section HTML updated')
else:
    print('FAILED: Could not find exact match')