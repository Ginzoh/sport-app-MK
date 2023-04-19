# Layout and Styles Documentation
The layout of the application is designed to provide a clear and easy-to-navigate interface for users. It consists of a top navigation bar, a left sidebar navigation, and a main content area that displays various charts and statistics.

## Top Navigation Bar
The top navigation bar spans the full width of the viewport and features a black background with white text. It contains the application logo on the left and navigation links on the right. The ``NavBar.css`` file controls the styling for this section.

## Left Sidebar Navigation
The left sidebar navigation is a vertical column located on the left side of the viewport. It is designed to provide quick access to different sections of the application. The left sidebar contains icons representing various activities, such as weightlifting, cycling, and swimming. The ``LeftBar.css`` file controls the styling for this section.

## Main Content Area
The main content area occupies the remaining space on the viewport to the right of the left sidebar navigation. It displays various charts and statistics in a clear and organized manner, making it easy for users to understand and analyze the data. The main content area is divided into sections, each containing different types of charts or statistics. The layout and styling for this section are controlled by the ``App.css`` and ``StatsDisplay.css`` files.

## Charts and Statistics
The main content area includes various charts, such as bar, line, and radar charts, as well as statistics displays. Each chart is contained within its own container with appropriate spacing and styling to ensure a clean and organized appearance. The ``App.css`` file contains specific styles for these charts and their containers.

## Responsive Design
The application's layout is designed to be responsive, with adjustments made for smaller screen sizes. A media query in the ``index.css`` file handles these responsive styles, such as adjusting the padding and sizing of the main content area and its components, as well as changing the layout of the statistics display section for better usability on smaller devices.

### Global Styles
The ``index.css`` file contains global styles and typography settings. It sets the font family, text rendering properties, and some default styles for anchor tags and buttons.