---
title: Styling Reference
description: This post is useful to see how different markdown elements look like when styled.
author: 'luxmiyu'
tags: ['meta']
date: '2025-07-15'
image: /blog/styling.jpg
large: false
published: true
---

This blog post is here for testing purposes. It serves as a preview for all of the different
Markdown elements and how they're styled. Whether it's headers, lists, code blocks, blockquotes,
images, or inline formatting, this page is meant to demonstrate how each component will appear
within the blog’s design system. It acts as a visual reference for consistency across posts, helping
ensure that the typography, spacing, and overall presentation remain clean and readable. This file
is especially useful during theme development or when tweaking the CSS, making it easier to spot
unintended changes or styling regressions.

---

## Blockquotes

<blockquote class="gray">
  <strong>📄 Note</strong>
  <p>Useful information that users should know, even when skimming content.</p>
</blockquote>
<blockquote class="blue">
  <strong>ℹ️ Tip</strong>
  <p>Helpful advice for doing things better or more easily.</p>
</blockquote>
<blockquote class="green">
  <strong>✅ Important</strong>
  <p>Key information users need to know to achieve their goal.</p>
</blockquote>
<blockquote class="red">
  <strong>🚨 Warning</strong>
  <p>Urgent info that needs immediate user attention to avoid problems.</p>
</blockquote>
<blockquote class="yellow">
  <strong>⚠️ Caution</strong>
  <p>Advises about risks or negative outcomes of certain actions.</p>
</blockquote>

And this is what a regular blockquote looks like:

> Bunch of stuff you can put in here, like a table!
> 
> | ID  | Name   | Surname  | Role        | Status   |
> |-----|--------|----------|-------------|----------|
> | 001 | Alice  | Smith    | Developer   | Active   |
> | 002 | Bob    | Jones    | Designer    | Inactive |
> | 003 | Carol  | Lee      | Project Mgr | Active   |
> | 004 | Dan    | Brown    | QA Tester   | Pending  |
>
> Or maybe a code block?
> 
> ```java
> public class HelloWorld {
>     public static void main(String[] args) {
>         System.out.println("Hello, world!");
>     }
> }
> ```

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

A simple table:

| Student A | Student B |
| --------- | --------- |
| Alice     | Bob       |
| Carol     | Dan       |

With different alignments:

| No Align | Right Align | Center Align | Left Align |
| -------- | ----------: | :----------: | :--------- |
| Cell A1  | Cell B1     | Cell C1      | Cell D1    |
| Cell A2  | Cell B2     | Cell C2      | Cell D2    |
| Cell A3  | Cell B3     | Cell C3      | Cell D3    |
| Cell A4  | Cell B4     | Cell C4      | Cell D4    |

With in-line code:

| Language   | Code                           |
| ---------- | ------------------------------ |
| Python     | `print('hello, world!')`       |
| JavaScript | `console.log('hello, world!')` |
| Go         | `fmt.Println("hello, world!")` |

With images:

| Column A | Column B |
| -------- | -------- |
| ![Generic](/blog/generic.jpg "Generic") | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis risus eget metus ultricies, eget egestas lectus luctus. Sed sed enim sit amet dui efficitur blandit. Quisque vitae convallis erat. Aenean ullamcorper erat nec commodo sollicitudin. |
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis risus eget metus ultricies, eget egestas lectus luctus. Sed sed enim sit amet dui efficitur blandit. Quisque vitae convallis erat. Aenean ullamcorper erat nec commodo sollicitudin. | ![Generic](/blog/generic.jpg "Generic") |

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
