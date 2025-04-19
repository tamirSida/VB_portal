# Version Bravo Portal

A simple portal interface for Google Drive and Google Classroom resources, organized by cohorts and staff folders.

## Features
- Mac-style folder interface for navigation
- Cohort folders (#1 through #4) with subfolders for participants, staff, and classroom
- Staff folder with 5 configurable subfolders
- Responsive design that works on desktop and mobile

## Getting Started

1. Open `index.html` in your web browser to view the portal
2. Replace the placeholder logo in `media/logo.png` with your actual logo
3. Edit the folder URLs in `script.js` to point to your Google Drive/Classroom resources

## Customization

### Adding/Changing Folders
To modify the available folders, edit the `folderData` object in `script.js`.

### Styling
The appearance is controlled by `styles.css`. The color scheme uses CSS variables defined at the top of the file:

```css
:root {
    --primary: #0a2463; /* Deep navy blue */
    --secondary: #023020; /* Dark military green */
    --accent: #d9b310; /* Gold accent */
    /* other colors... */
}
```

## File Structure
- `index.html` - Main HTML file
- `styles.css` - CSS styling
- `script.js` - JavaScript for folder interactions
- `media/` - Directory for images and other media

## Notes
- This is a vanilla JavaScript implementation with no dependencies
- Placeholder URLs are used for demonstration purposes and should be replaced with actual resource links 