# Star Rating

Welcome to the **Star Rating** project! This project was a challenge aimed at creating an interactive and visually appealing star rating system using React. Below, you'll find a detailed overview of the component's features and the tasks completed to meet the challenge requirements.

## Features

- **Customizable Number of Stars**: Allows customization of the number of stars displayed.
- **Hover Selection**: Users can select a rating by hovering over the stars.
- **Dynamic Message**: Displays a corresponding message when a rating is selected.
- **Accurate Hover State**: Highlights the correct number of stars based on the hover state, even after a rating is selected.

## Getting Started

To integrate the Star Rating component into your React project, follow these steps:

1. **Installation**:
   Install the component using your preferred package manager.

   ```bash
   npm install star-rating-component
   # or
   yarn add star-rating-component
   ```

2. **Usage**:
   Import the component and use it in your application.

   ```jsx
   import StarRating from 'star-list';

   const App = () => (
   	<div>
   		<h1>Rate our service</h1>
   		<StarRating count={5} />
   	</div>
   );

   export default App;
   ```

3. **Customization**:
   Customize the number of stars displayed by passing the `count` prop.
   ```jsx
   <StarRating count={10} />
   ```

### Props

- **count** (number): The total number of stars to be displayed. Default is 5.

## Conclusion

The Star Rating component is a powerful and flexible tool for adding interactive star ratings to your application. It is designed to be customizable, responsive, and easy to integrate, providing a great user experience.

We hope you find this component useful and easy to integrate into your projects. If you have any questions or feedback, please don't hesitate to reach out.

Happy coding! ⭐
