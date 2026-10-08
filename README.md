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

### Experience

{% for exp in site.data.experience %}
<div class="experience-item">
  <div>
    <span class="experience-role">{{ exp.role }}</span> 
    <span class="experience-company">&mdash; {{ exp.company }}</span>
    <div class="experience-meta">{{ exp.location }}</div>
  </div>
  <span class="experience-date">{{ exp.period }}</span>
</div>
{% endfor %}

<div class="footer">
  © 2026 Jane Doe. All rights reserved.
</div>
