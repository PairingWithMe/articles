# Hello World

This is the first article

![banner](banner.jpeg)

```jsx
export default function MarkdownCode(props) {
  return (
    <Code>
      <SyntaxHighlighter
        showLineNumbers
        children={props.children}
        style={darcula}
        language={props.language}
        PreTag="div"
        {...props}
      />
    </Code>
  );
}
```

Thank you!

Come back soon