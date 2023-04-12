import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-[80vh]'>
           <div className='header flex flex-col mb-10'>
                <h1 className='text-center'>Blogs</h1>
                <p className='mute block'>Frequently asked Questions</p>
            </div>
            <div className="blog border-2 border-orange-400 rounded-xl p-5 bg-orange-200 mb-5">
                <h2>When context API should be used?</h2>
                <p className='p-3 bg-slate-200 rounded-xl mt-2'>Context API in React should be used in scenarios where you need to share data or state between multiple components that are not directly related in the component tree. It provides a way to pass data from a parent component down to multiple levels of child components without having to pass the data through props at each level. Context API is particularly useful in situations where the data or state needs to be accessed by many components, and passing props down the component tree would result in prop drilling, making the code harder to manage and maintain. </p>
            </div>
            <div className="blog border-2 border-orange-400 rounded-xl p-5 bg-orange-200 mb-5">
                <h2>What is a custom hook?</h2>
                <p className='p-3 bg-slate-200 rounded-xl mt-2'>A custom hook in React is a reusable function that encapsulates specific functionality and can be used in multiple components to promote code reuse and separation of concerns. Custom hooks follow a naming convention of using the "use" prefix, and they can manage state, handle side effects, or encapsulate other functionality. Custom hooks are a powerful tool for abstracting away complex logic, reducing code duplication, and making components more modular and maintainable in React applications.</p>
            </div>
            <div className="blog border-2 border-orange-400 rounded-xl p-5 bg-orange-200 mb-5">
                <h2>What is useRef?</h2>
                <p className='p-3 bg-slate-200 rounded-xl mt-2'>'useRef' is a React hook that provides a way to create and access mutable references that persist across re-renders of a functional component. It allows you to store and retrieve values that won't trigger re-renders when they change, making it useful for managing stateful data that doesn't need to be part of the component's rendering logic. It can also be used to access and manipulate DOM elements directly, or to store and retrieve previous values for comparison or other purposes.</p>
            </div>
            <div className="blog border-2 border-orange-400 rounded-xl p-5 bg-orange-200 mb-5">
                <h2>What is useMemo?</h2>
                <p className='p-3 bg-slate-200 rounded-xl mt-2'>'useMemo' is a React hook that allows you to memoize the result of a computation or a function call, so that it's only recomputed when its dependencies change. It helps optimize performance by preventing unnecessary recomputations of expensive calculations or expensive function calls, especially in cases where the computation or function call is involved in the rendering process of a component. useMemo can be used to memoize values or results that are expensive to compute, such as complex data transformations, and ensure that they are only recomputed when needed, avoiding unnecessary performance overhead.</p>
            </div>
        </div>
    );
};

export default Blog;