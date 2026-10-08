---
layout: default
title: Silvia Sola — Art Director & Creative Leader
---

# Silvia Sola
## Art Director & Creative Leader

[LinkedIn](https://www.linkedin.com/in/silviasola)

---

### About
I am an Architect and creative leader with 18 years in the industry, including 14+ years at DBOX, progressing from Artist to Associate Partner and leading multidisciplinary CGI and branding teams.[...]

---

### Selected Projects

{% for project in site.data.projects %}
* <div class="project-title"><a href="{{ project.url }}" target="_blank">{{ project.title }}</a> &nbsp;({{ project.year }})</div>
  {% if project.thumbnail %}
  <div class="project-thumbnail">
    <img src="{{ project.thumbnail }}" alt="{{ project.title }}" />
  </div>
  {% endif %}
  <div class="project-meta">{{ project.type }}</div>
  <div class="project-desc">{{ project.description }}</div>
{% endfor %}

---

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
