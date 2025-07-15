---
title: Styling Reference
description: This post is useful to see how different markdown elements look like when styled.
author: 'luxmiyu'
tags: ['meta']
date: '2025-07-01'
image: /blog/styling.jpg
large: true
published: true
---

# Markdown Styling Reference

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis risus eget metus ultricies, eget egestas lectus luctus. Sed sed enim sit amet dui efficitur blandit. Quisque vitae convallis erat. Aenean ullamcorper erat nec commodo sollicitudin. Integer tincidunt leo sit amet volutpat lobortis. Nam scelerisque blandit nisi, id fringilla leo laoreet a. Nam aliquam sem vitae orci euismod gravida.

---

## Alerts

> [!note]
> Useful information that users should know, even when skimming content.

> [!tip]
> Helpful advice for doing things better or more easily.

> [!important]
> Key information users need to know to achieve their goal.

> [!warning]
> Urgent info that needs immediate user attention to avoid problems.

> [!caution]
> Advises about risks or negative outcomes of certain actions.

---

## H2 Heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

### H3 Heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

#### H4 Heading
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

---

## Emphasis

Regular text | _Italic text_ | **Bold text** | __*Bold and italic text*__ | ~~Strikethrough~~

---

## Lists

### Unordered List
- Item 1
  - Subitem 1
    - Sub-subitem
- Item 2  
- Item 3

### Ordered List
1. First item
2. Second item
   1. Nested item
   2. Nested item
3. Third item

---

## Links

[Inline link](https://example.com)  
[Reference link][ref-link]

[ref-link]: https://example.com

---

## Tables

| No Align | Right Align | Center Align | Left Align |
| -------- | ----------: | :----------: | :--------- |
| Cell A1  | Cell B1     | Cell C1      | Cell D1    |
| Cell A2  | Cell B2     | Cell C2      | Cell D2    |
| Cell A3  | Cell B3     | Cell C3      | Cell D3    |
| Cell A4  | Cell B4     | Cell C4      | Cell D4    |

---

## Code

Print stuff to console with `console.log()`, as you can see in the TypeScript code below:

```ts
class Dog {
  constructor(name: string) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

const myDog = new Dog("Fido");
myDog.bark(); // Output: "Fido barks!"
```

---

## Images

![Generic](/blog/generic.jpg "Generic")

<img class="center" src="/blog/generic.jpg" alt="Generic">
