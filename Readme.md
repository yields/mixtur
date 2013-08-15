
# mixtur(e)

inline css with html.

## Installation

```bash
npm install mixtur
```

## Example

```css
p {
  color: red;
  font-size: 16px;
}
```

```html
<p></p>
```

```html
<p style="color: red; font-size: 16px;"></p>
```

## [LearnBoost/juice](https://github.com/LearnBoost/juice)

this lib uses [MatthewMueller/cheerio](https://github.com/MatthewMueller/cheerio) instead of jsdom, which means whatever html structure
you pass, you will get the same back, for example `juice(<p></p>)` will return
`<html><body><p></p></body></html>`, this lib will return `<p></p>`.

Use juice if you care about `!important`, or complex stylesheets, this lib is for simple stylesheets with simple html.

## License

MIT
