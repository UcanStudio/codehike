# node-post-request

make a post request in Node.js

# grow-textarea

a text area, fixed to the bottom of the page, that grows as the user types more lines (max 10 lines)

# fix-regex

can you fix this so it works with the last section

```
const sectionRegex = /(^#+ .+)([\s\S]+?)(?=^#+ .+|\n\n)/gm;
const sections = [];
let match;
while ((match = sectionRegex.exec(promptMarkdown)) !== null) {
  const role = match[1];
  const content = match[2];
  sections.push({ role, content });
}
console.log(sections);
```

# first-day-pandas

Extracting the first day of month of a datetime type column in pandas

# swift-assign-self

What is the rationale for allowing to assign a new struct value to self in Swift?

# c-same-function

Why does declaring the same function both with and without parameters not cause compilation errors in C?

# off-topic

hello

# react-three-dots

A react component that three dots bouncing with a little delay between each other (to simulate that we are waiting for someone to write)

# java-object-class

What's the difference between a class and an object in Java?

# react-set-state

Why this doesn't work?

```
const [counter, setCounter] = React.useState(0);

const onClick = () => {
  setCounter((i) => i++);
};
```

# tailwind-selector

In tailwind + react, apply some style only when a parent has a class. Something like hover:text-lg but instead of hover I want it to be applied when a parent has the className foo.