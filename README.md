
### 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It was developed by Facebook for React.

**Key Points:**
- JSX looks like HTML but is actually JavaScript
- It gets transpiled to `React.createElement()` calls
- Makes React code more readable and easier to write

**Example:**
```jsx
// JSX syntax
const element = <h1>Hello, World!</h1>;

// Transpiled to JavaScript
const element = React.createElement('h1', null, 'Hello, World!');
```

**Why JSX is used:**
- **Readability**: More intuitive to write UI components
- **Developer Experience**: Better tooling support and error messages
- **Familiar Syntax**: Similar to HTML, easier for developers to adopt
- **Powerful**: Can embed JavaScript expressions using `{}`

### 2. What is the difference between State and Props?

| **State** | **Props** |
|-----------|-----------|
| **Mutable** - Can be changed within the component | **Immutable** - Cannot be changed by the receiving component |
| **Internal** - Managed within the component | **External** - Passed from parent to child component |
| **Local** - Component's private data | **Shared** - Data flowing down the component tree |
| **Dynamic** - Changes trigger re-renders | **Static** - Component receives them as read-only |

**State Example:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Props Example:**
```jsx
// Parent component
function App() {
  return <Greeting name="John" age={25} />;
}

// Child component
function Greeting({ name, age }) {
  return <h1>Hello {name}, you are {age} years old!</h1>;
}
```

### 3. What is the useState hook, and how does it work?

**useState** is a React Hook that allows functional components to have state variables.

**Syntax:**
```jsx
const [stateVariable, setStateFunction] = useState(initialValue);
```

**How it works:**
1. **Returns an array** with two elements:
   - Current state value
   - Function to update the state
2. **Initial render**: Uses the initial value provided
3. **State updates**: When setter function is called, component re-renders
4. **Preserves state**: Between re-renders, React remembers the state value

**Examples:**

**Simple Counter:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

**Object State:**
```jsx
function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '' });
  
  const updateName = (newName) => {
    setUser(prevUser => ({ ...prevUser, name: newName }));
  };
  
  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
}
```

### 4. How can you share state between components in React?

There are several ways to share state between components:

#### **1. Lifting State Up**
Move state to the closest common parent component.

```jsx
function App() {
  const [sharedData, setSharedData] = useState('');
  
  return (
    <div>
      <ComponentA data={sharedData} setData={setSharedData} />
      <ComponentB data={sharedData} />
    </div>
  );
}

function ComponentA({ data, setData }) {
  return (
    <input 
      value={data}
      onChange={(e) => setData(e.target.value)}
    />
  );
}

function ComponentB({ data }) {
  return <p>Shared data: {data}</p>;
}
```

#### **2. Context API**
For deeply nested components or global state.

```jsx
// Create Context
const DataContext = createContext();

// Provider Component
function App() {
  const [sharedState, setSharedState] = useState('');
  
  return (
    <DataContext.Provider value={{ sharedState, setSharedState }}>
      <ComponentA />
      <ComponentB />
    </DataContext.Provider>
  );
}

// Consumer Components
function ComponentA() {
  const { sharedState, setSharedState } = useContext(DataContext);
  return (
    <input 
      value={sharedState}
      onChange={(e) => setSharedState(e.target.value)}
    />
  );
}
```

#### **3. Custom Hooks**
Create reusable state logic.

```jsx
function useSharedState(initialValue) {
  const [state, setState] = useState(initialValue);
  return [state, setState];
}

// Usage in multiple components
function ComponentA() {
  const [sharedData, setSharedData] = useSharedState('');
  // Component logic
}
```

#### **4. State Management Libraries**
- **Redux**: For complex application state
- **Zustand**: Lightweight alternative
- **Recoil**: Facebook's experimental state management

### 5. How is event handling done in React?

React uses **SyntheticEvents** - a wrapper around native DOM events that provides consistent behavior across browsers.

#### **Key Concepts:**

**1. Event Handler Functions:**
```jsx
function Button() {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    console.log('Button clicked!');
    console.log('Event type:', event.type);
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}
```

**2. Inline Event Handlers:**
```jsx
function Button() {
  return (
    <button onClick={(e) => console.log('Clicked!')}>
      Click Me
    </button>
  );
}
```

**3. Passing Parameters:**
```jsx
function TodoList() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2']);
  
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

**4. Form Handling:**
```jsx
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**5. Common Event Types:**
- `onClick` - Mouse click events
- `onChange` - Input value changes
- `onSubmit` - Form submission
- `onFocus` / `onBlur` - Focus events
- `onMouseOver` / `onMouseOut` - Mouse hover events
- `onKeyDown` / `onKeyUp` - Keyboard events

**Important Notes:**
- Event handlers receive a `SyntheticEvent` object
- Use `event.preventDefault()` to prevent default browser behavior
- Use `event.stopPropagation()` to stop event bubbling
- Event handlers are automatically bound in functional components