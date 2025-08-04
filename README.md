# VideoTube — Backend

**VideoTube** is a backend project that combines the functionality of both YouTube and Twitter, allowing users to upload videos, post text updates, like, comment, and follow others. This repository focuses on the backend, providing an API to power a video-sharing and social media platform.

## Features:
- **User Authentication** (JWT-based login & registration)
- **Video Uploads & Streaming** (Using Multer or cloud storage)
- **Social Interactions** (Like, comment, and follow users)
- **User Profiles & Timelines**

## Tech Stack:
- **Node.js / Express.js** for building APIs
- **MongoDB** for database management
- **JWT** for secure authentication
- **Multer / Cloud Storage** for video uploads

## Setup Instructions:
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/video-tube-backend.git
    cd video-tube-backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file with the necessary environment variables (e.g., database URI, JWT secret).
4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints:
- **POST /register**: Register a new user
- **POST /login**: Login with credentials
- **POST /upload**: Upload a video (requires authentication)
- **POST /post**: Post a text update
- **POST /like**: Like a video or post
- **POST /follow**: Follow another user

## Contributing:
Feel free to fork and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License:
Distributed under the MIT License. See `LICENSE` for more information.