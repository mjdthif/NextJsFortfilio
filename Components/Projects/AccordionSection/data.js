const questions = [
  {
    id: 1,
    title: 'What are the features of React?',
    info:
      'JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
  },
  {
    id: 2,
    title: 'What is JSX?',
    info:
    'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.'  },
  {
    id: 3,
    title: 'Can web browsers read JSX directly? ',
    info:"Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel." 
   },
  {
    id: 4,
    title: 'What is the virtual DOM?',
    info:
"DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects."  },
  {
    id: 5,
    title: 'How do you create a React app?',
    info:
'Install NodeJS on the computer because we need npm to install the React library. Npm is the node package manager that contains many JavaScript libraries, including React.'  
},
]
export default questions
