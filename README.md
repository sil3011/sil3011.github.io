---
layout: default
title: Silvia Sola — Art Director & Creative Leader
---

# Silvia Sola
## Art Director & Creative Leader

[LinkedIn](https://www.linkedin.com/in/silviasola)

---

### About
Creative Director with over xyz+ years of experience building iconic brand identities, leading multidisciplinary design teams, and driving global creative campaigns across digital, print, and experiential design.

---

### Selected Projects

{% for project in site.data.projects %}
* <div class="project-title"><a href="{{ project.url }}" target="_blank">{{ project.title }}</a> &nbsp;({{ project.year }})</div>
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
