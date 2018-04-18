# Video Website
This is a Video Website made by Ayoub Khan
# [anime.js](http://animejs.com) ![](http://img.badgesize.io/juliangarnier/anime/v2.0/anime.min.js.svg?style=flat&color=18FF92)

<img src="http://animejs.com/documentation/assets/img/readme/animejs-logo.gif" width="100%" />

>*Anime* `(/ˈæn.ə.meɪ/)` is a lightweight JavaScript animation library. It works with any CSS Properties, individual CSS transforms, SVG or any DOM attributes, and JavaScript Objects.

⚠️ **Migrating from v1.x ? Make sure to read the [changelog](https://github.com/juliangarnier/anime/releases/tag/v2.0.0)** ⚠️

### Main features
# License
This theme has a MIT License
# hotmenu

A responsive, full-screen jQuery menu.

## Usage

Include `hotmenu.jquery.js` and `hotmenu.css` in your project...

```
<script type="text/javascript" src="hotmenu.jquery.min.js"></script>
<link rel="stylesheet" href="hotmenu.min.css">`
```

...add a toggle...

`<button class='hm-toggle'>Click me</button>`

...and then:

`$(function() { $('nav').hotMenu(); });`

## Options

`toggleSelector`  
The selector for element that should trigger the menu to open. Default: '.hm-toggle'

`mediaQuery`  
Media query string at which hotmenu should be active. Default: null

### Example with options

```
$('nav').hotMenu({ 
  toggleSelector: '.hm-toggle', 
  mediaQuery: '(max-width: 600px)' 
});
```

hotmenu takes care of basic styling, but most of it's up to you. You're responsible for creating the toggle that opens the menu. The default class that hotmenu looks for is `hm-toggle`.
```html
<svg width="128" height="128" viewBox="0 0 128 128">
  <polygon points="64 68.73508918222262 8.574 99.9935923731656 63.35810017508558 67.62284396863708 64 3.993592373165592 64.64189982491442 67.62284396863708 119.426 99.9935923731656"></polygon>
</svg>
```
➜ [Timeline examples](http://animejs.com/documentation/#basicTimeline)

## Easing functions

The `easing` parameter can accept either a string or a custom Bézier curve coordinates (array).

| Types | Examples | Infos
| --- | --- | ---
| String | `'easeOutExpo'` | Built in function names
| `Array` | [.91,-0.54,.29,1.56] | Custom Bézier curve coordinates ([x1, y1, x2, y2])

### anime.random(x, y)

Generate a random number between two numbers.

```javascript
anime.random(10, 40); // Will return a random number between 10 and 40
```

====

[MIT License](LICENSE.md). © 2017 [Julian Garnier](http://juliangarnier.com).

Thanks to [Animate Plus](https://github.com/bendc/animateplus) and [Velocity](https://github.com/julianshapiro/velocity) that inspired `anime.js` API, [BezierEasing](https://github.com/gre/bezier-easing) and [jQuery UI](https://jqueryui.com/) for the easing system. [Tim Branyen](https://github.com/tbranyen) For the Promise implementation.
