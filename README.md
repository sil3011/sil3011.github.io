---
layout: default
title: Jane Doe — Creative Director
---

# Jane Doe
## Creative Director & Brand Strategist

[LinkedIn](https://linkedin.com/in/yourprofile) &nbsp;/&nbsp; [Email](mailto:your.email@example.com) &nbsp;/&nbsp; [Instagram](https://instagram.com/yourhandle)

---

### About
Creative Director with over **0000+ years of experience** building iconic brand identities, leading multidisciplinary design teams, and driving global creative campaigns across digital, print, and experiential mediums. Focused on minimalist design, powerful storytelling, and human-centric brand growth.

---

### Selected Projects

{% for project in site.data.projects %}
* <div class="project-title"><a href="{{ project.url }}" target="_blank">{{ project.title }}</a> &nbsp;({{ project.year }})</div>
  <div class="project-meta">{{ project.type }}</div>
  <div class="project-desc">{{ project.description }}</div>
{% endfor %}

---

### Experience

<div class="experience-item">
  <span class="experience-role">Global Creative Director &mdash; Studio Vanguard</span>
  <span class="experience-date">2021 – Present</span>
</div>
<div class="experience-item">
  <span class="experience-role">Senior Art Director &mdash; Apex Creative Agency</span>
  <span class="experience-date">2017 – 2021</span>
</div>
<div class="experience-item">
  <span class="experience-role">Senior Designer &mdash; Studio Mono</span>
  <span class="experience-date">2014 – 2017</span>
</div>

<div class="footer">
  © 2026 Jane Doe. All rights reserved.
</div>
