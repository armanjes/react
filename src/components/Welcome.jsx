const Welcome = ({name}) => {
  return (
    <div>Hello, {name}!</div>
  )
}
export default Welcome

/*
✅ What is component?
Component is the reuseable part of UI that returns JSX(JavaScript XML).
There are two types of components: 
1. Class Component (Old)
1. Functional Component (Modern)

✅ What is props?
Props stand for properties. Props helps us to pass data from parent to child. We can pass any data type through prop. Props are read-only (they cannot be modified inside the child component).
*/