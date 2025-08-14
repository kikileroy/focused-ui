# Focused UI

Focused UI is a design philosophy centered around attention through selective visibility and opacity control. The core principle is simple: one element commands attention, the others fade to the background.

I believe there should be a clear hierarchy of focus in any view. In this design system one element holds primary status at 100% opacity, while all other "focusable" elements exist at reduced opacity. This creates an intentional attention flow that guides user interaction without overwhelming the interface.

## Technical Implementation

The system works through three key technical implementations:

1. **Primary Focus State** - One element designated as .primary maintains full opacity
2. **Hover-Driven Transitions** - Mouse interaction transfers primary status between elements  
3. **Default Return** - When cursor leaves interactive areas, focus returns to a predetermined default element

The beauty of this system is its simplicity. The entire focus mechanism is achieved with two CSS classes and a small JavaScript function:
                    
                    <pre><code>/* Focused UI */
.focusable {
    opacity: 0.2;
    transition: opacity 1s ease-out;
}

.focusable.primary {
    opacity: 1;
}</code></pre>

The JavaScript implementation is equally straightforward, handling focus transitions through mouse events (but could be extended to eye movements in AR settings):
                    
                    <pre><code>document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('.focusable');
    const defaultPrimary = document.querySelector('.content-article');
    
    function setPrimary(element) {
        focusableElements.forEach(el => el.classList.remove('primary'));
        element.classList.add('primary');
    }
    
    focusableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            setPrimary(this);
        });
        
        element.addEventListener('mouseleave', function() {
            setPrimary(defaultPrimary);
        });
    });
});</code></pre>
                    
## Media-Rich Applications

For media-rich experiences, the philosophy extends to having no primary element at all. Video backgrounds, images, or AR environments can exist without competing focus points, allowing the immersive content to command full attention.

## Design Philosophy Impact

This approach fundamentally changes how we think about information hierarchy. Instead of static layouts competing for attention, we create dynamic focus systems that reveal complexity only when needed. Elements exist in the DOM but remain visually de-emphasized until interaction demands their prominence.

The result is interfaces that feel both minimal and feature-rich - hiding complexity in plain sight through opacity, not through traditional show/hide patterns.