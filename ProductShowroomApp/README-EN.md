<style>
    img{
        width:320px;
        height:180px
    }
</style>

# Product Showroom App

## Technologies has been used

- Axios
- Redux
- Redux-Toolkit
- React Router
- Ant Design

## Steps has been made

- Packages were installed before starting the project.

- Redux is used as state management. Redux Toolkit was used to write more efficient and effective code on Redux.

- Initially, Ant Design was used as the CSS framework instead of Material UI.

- The useState and useEffect hooks on React are explained.

- Pages determined (Pages such as ProductList , Profile , ProductDetail)

- Components on the pages were determined (components such as Header, ProductCard, NameFilter, CategoryFilter)

- Since we are not connected to a back-end application on the project, adding and removing the products to favorites, provided that they are saved on the client-side (localStorage).

- Filtered products by category and name.

- The application is designed to have a responsive design for most devices.

## Preview

In this project, the aim is to create a project with Redux, one of the generally known state managements, instead of dealing with concepts such as prop-drilling, as state management will become more difficult as our projects taught on React in the seventh week become complex. The purpose of our project is to list the fake product data received through the Fake Store API, to access this data through any component, to be able to filter and to perform manipulations.
In the first video, we downloaded our packages that we need to use on the project. Redux was used as the current version. We used Redux Toolkit to write more effective and performance code and I explained hooks such as useSelector , useDispatch.
In the second video, I explained how to list the data we received through the API, the design of our components and how the pagination processes are provided on React. In the third video, we added the option to add favorites on the products and created an environment for this, and we temporarily saved our favorite products on the client-side as we could not communicate with any back-end application. One of the uses of the Redux Toolkit is if you change any of its elements (push, pop operations in arrays or the property you have changed on the object) instead of a complete change in variables such as array , object in our states on Redux, we take all the elements of such variables with the spread operator and create a new variable. We should assign as
You can check out how should objects and arrays used at useReducer hooks by clicking [objects](#using-useReducer-on-objects) and [arrays](#using-useReducer-on-arrays) In the fourth video, which is the last video of our application, I explained the importance of useCallback and useMemo hooks, the filtering system on our products, and the use of components in Ant Design on the application. It's been a long and fun video series for me. If I plan to make a video series by determining our roadmap beforehand while making an application like this in the future, I can of course shorten the video durations. To watch the videos, you can click on the Youtube thumbnail images and go to the Youtube videos. If you like the videos, don't forget to subscribe to the channel and hit the like button.

It has been deployed to https://sahinmaral-productshowroom.netlify.app.

<a href="https://www.youtube.com/watch?v=0Jv01sym-D8"><img src="./thumbnail-1.jpg"/></a>
<a href="https://www.youtube.com/watch?v=zkRP8GVCSgw"><img src="./thumbnail-2.jpg"/></a>
<a href="https://www.youtube.com/watch?v=ub1fxYsia0U"><img src="./thumbnail-3.jpg"/></a>
<a href="https://www.youtube.com/watch?v=v4JfzUKVCDE"><img src="./thumbnail-4.jpg"/></a>

### Using useReducer on objects

    function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
        // 🚩 Avoid this method when changing properties on your objects in State
        state.age = state.age + 1;
        return state;
        }


    function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
        // ✅ Instead, recreate your object with the spread operator. In this way, your object's reference number in memory will change and React will detect this state change.
        return {
            ...state,
            age: state.age + 1
        };
        }

### Using useReducer on arrays

    function tasksReducer(tasks, action) {
        switch (action.type)    {
                case 'added': {
                // 🚩 The reference number does not change, as the entire location of the array in memory does not change during the process of adding or removing variables into the array.
                tasks.push({
                    id: action.id,
                    text: action.text,
                    done: false
                })
                return state
            }
        }
    }

    function tasksReducer(tasks, action) {
        switch (action.type)    {
                case 'added': {
                // ✅ Instead, we split the array with the spread operator and add all its values ​​together with the object to be added into a new array.
                return [...tasks, {
                    id: action.id,
                    text: action.text,
                    done: false
                }];
            }
        }
    }

