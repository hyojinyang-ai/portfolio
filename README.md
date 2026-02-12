# Hyojin Yang - UX Designer Portfolio

A minimal and clean portfolio website showcasing UX design work and case studies.

## Features

- **Minimal Design**: Clean, modern interface with plenty of white space
- **Interactive Case Study**: Expandable/collapsible detailed case study from King
- **Smooth Animations**: Fade-in effects, parallax scrolling, and smooth transitions
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript
- **Accessible**: Semantic HTML and keyboard navigation support

## Getting Started

### Option 1: Open Locally
Simply open `index.html` in your web browser.

### Option 2: Use a Local Server
For the best experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Customization

### Update Personal Information

1. **Email Address**: Update the mailto link in the Contact section (line ~455 in index.html):
   ```html
   <a href="mailto:your.email@example.com" class="contact-button">Email Me</a>
   ```

2. **LinkedIn**: Update the LinkedIn link (line ~456 in index.html):
   ```html
   <a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-button secondary">LinkedIn</a>
   ```

3. **About Section**: Modify the about text in the About section (lines ~430-440)

### Customize Colors

The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #FF6B35;    /* Orange accent color */
    --text-dark: #1a1a1a;        /* Main text color */
    --text-gray: #666;           /* Secondary text color */
    --text-light: #999;          /* Light text color */
    --bg-light: #fafafa;         /* Light background */
    --bg-white: #ffffff;         /* White background */
    --border-color: #e5e5e5;     /* Border color */
}
```

### Add More Case Studies

To add additional case studies, duplicate the `.case-study-card` section in `index.html` and update the content.

### Add Images

To add images to your case studies:

1. Create an `images` folder in the portfolio directory
2. Add your images to this folder
3. Insert images in HTML using:
   ```html
   <img src="images/your-image.jpg" alt="Description" style="width: 100%; border-radius: 12px; margin: 24px 0;">
   ```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Breakdown

### Interactive Elements
- **Expandable Case Study**: Click "Read Full Case Study" to reveal detailed content
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Hover Effects**: Interactive hover states on cards and buttons
- **Animated Statistics**: Numbers animate when scrolled into view
- **Parallax Hero**: Subtle parallax effect on hero section

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Lazy Loading**: Images use lazy loading (add `data-src` attribute)
3. **Minimize HTTP Requests**: All CSS and JS are in single files
4. **Use CDN Fonts**: Google Fonts loaded from CDN

## Keyboard Shortcuts

- `ESC`: Collapse expanded case study
- `Tab`: Navigate through interactive elements

## Future Enhancements

Consider adding:
- [ ] Dark mode toggle
- [ ] More case studies
- [ ] Project images and screenshots
- [ ] Blog section
- [ ] Contact form
- [ ] Analytics integration
- [ ] SEO optimization

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- Icons: Unicode emojis for maximum compatibility

## License

This portfolio template is free to use and customize for personal use.

---

Built with ❤️ by Hyojin Yang
