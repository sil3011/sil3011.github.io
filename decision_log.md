# Decision Log

Date: 2026-10-08

## Decision

We chose Option 3: client-side image handling in the browser using a fixed thumbnail box with CSS `object-fit: cover`.

This approach is the best fit for the current project because the project thumbnails are driven by external CRM URLs rather than images stored in the repository. The browser can load the remote image directly and crop it to a consistent card thumbnail without requiring a separate image-processing build step or a third-party transformation service.

## Why this decision

- The thumbnail source is external and may be a `.webp`, `.jpg`, `.png`, or similar image format.
- We do not want to store or duplicate the CRM image in the repo.
- We need a compact, consistent thumbnail that feels embedded in the project card.
- The browser-based method keeps the setup lightweight and avoids extra infrastructure.

## Other options considered

### Option 1: Third-party transformation service (for example Cloudinary)

Pros:
- Very fast and reliable image resizing/cropping on the fly.
- Easy to generate multiple variants for different layouts.
- Works well with external image URLs.

Cons:
- Requires a hosted service and account configuration.
- Adds another dependency outside the repo.
- Unnecessary for this small static site unless we need heavier image optimization later.

### Option 2: GitHub Actions build pipeline to download, resize, and save local thumbnails

Pros:
- Gives full control over size and crop.
- Produces local optimized assets that are easy to cache and serve.
- Good for a larger content pipeline.

Cons:
- More moving parts and maintenance.
- Requires image-fetching logic, dependency management, and CI automation.
- More complexity than needed for a simple portfolio page.

### Option 3: Browser-side image sizing and cropping via CSS

Pros:
- No repo storage or build step required.
- Supports `.webp` and standard image formats directly.
- Keeps the implementation simple and easy to maintain.
- Produces the small embedded thumbnail effect directly in the project card.

Cons:
- The final crop is controlled by CSS rather than a server-side transformation pipeline.
- If a remote source blocks cross-origin requests or is unavailable, the fallback handling is needed.

## Implementation notes

The project card now uses a fixed thumbnail frame and applies `object-fit: cover` so the image fills the box while cropping any excess content. The client-side script adds a safe fallback for broken image URLs and preserves compatibility with remote images from the CRM.

This gives us the expected portfolio-card behavior while keeping the repo simple and the setup flexible.
