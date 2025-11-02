# Page Transition Animations Guide

## What's Been Added

I've implemented smooth fade animations between your pages using Framer Motion. Here's what you now have:

### ✨ Features Added

1. **Smooth Page Transitions**: Pages now fade in/out with a subtle slide effect when navigating
2. **Multiple Animation Types**: The PageTransition component supports different animation styles
3. **Staggered Product Grid**: Products on the Products page animate in with a staggered effect
4. **Optimized Performance**: Uses AnimatePresence for proper cleanup and smooth transitions

### 🎯 How It Works

- **Home → Products**: Clean fade out of home page, fade in of products page
- **Products → Home**: Same smooth fade transition in reverse
- **Product Grid**: Individual product cards fade in with a stagger effect
- **Navigation**: Navbar transitions are now smoother (500ms duration)
- **Style**: Pure fade animations without any movement - clean and subtle

### 🎨 Customization Options

You can easily customize the animations by modifying the `PageTransition` component:

```tsx
// Different animation types
<PageTransition type="fade">     // Default: pure fade in/out
<PageTransition type="slide">    // Horizontal slide effect
<PageTransition type="scale">    // Scale in/out effect
```

### ⚙️ Animation Settings

Current settings in `PageTransition.tsx`:
- **Duration**: 0.5 seconds
- **Easing**: easeInOut
- **Type**: Fade with vertical movement

To adjust timing, edit the `pageTransition` object:
```tsx
const pageTransition = {
  type: "tween" as const,
  ease: "easeInOut",        // Try: "easeIn", "easeOut", "anticipate"
  duration: 0.5,            // Adjust speed (0.3 = faster, 0.8 = slower)
};
```

### 🚀 Performance Notes

- Animations use GPU acceleration via transform properties
- `AnimatePresence` ensures proper cleanup between route changes
- Stagger animations only trigger on initial load, not on category filtering

The animations are subtle and professional - they enhance the user experience without being distracting or slow.