# focused-ui-philosophy

A design philosophy demonstration using opacity-based attention management for web interfaces.

## Overview

Focused UI is a design system that manages user attention through selective visibility and opacity control. One element commands attention while others fade to the background, creating an intentional attention flow without overwhelming the interface.

## Key Features

- **Primary Focus State**: One element maintains 100% opacity while others exist at reduced opacity
- **Hover-Driven Transitions**: Mouse interaction transfers primary status between elements  
- **Default Return**: Focus returns to predetermined default when cursor leaves interactive areas
- **Apple-style Navigation**: Glassmorphism effects with smooth hover states
- **Component-based Structure**: Clean HTML5/CSS3/JavaScript implementation

## Demo

- `index.html` - Main article view demonstrating the philosophy
- `index-hero.html` - Hero view with background image and no default primary

## Technical Implementation

The system uses just two CSS classes and minimal JavaScript:

```css
.focusable {
    opacity: 0.2;
    transition: opacity 1s ease-out;
}

.focusable.primary {
    opacity: 1;
}
```

## Philosophy

Instead of static layouts competing for attention, Focused UI creates dynamic focus systems that reveal complexity only when needed. Elements exist in the DOM but remain visually de-emphasized until interaction demands their prominence.

The result is interfaces that feel both minimal and feature-rich - hiding complexity in plain sight through opacity, not through traditional show/hide patterns.