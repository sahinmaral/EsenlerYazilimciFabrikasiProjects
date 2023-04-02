
# Crypto Currency App - ENG 

Technologies and packages that has been used
 - Back-end
	 - express
	 - cors
	 - axios
	 - dotenv
 - Front-end
	 - axios
	 - @reduxjs/toolkit
	 - react-redux
	 - antd
	 - @iconify/react

This project's back-end side has been deployed at https://sahinmaral-cryptocurrencybackend.cyclic.app/ 
This project's front-end side has been deployed at https://sahinmaral-cryptocurrency.netlify.app/

The purpose of this project is to make an application where we can track and filter cryptocurrencies using the functional component structure and frequently used hooks that we learned in the eighth week. Since the provider to whom we will send API request on our application directly prohibits HTTP requests over the client-side (due to the CORS policy), we created a very simple back-end application ourselves. In order for you to use this request:
 1. Repository is divided into two as backend and client folder. Since you have your own React application, you can delete the contents of the client folder and put the files in your own React application here.
 2. Go to the backend folder on the terminal and download the dependencies with the ***npm i*** command.
 3. Sign up on https://coinmarketcap.com/ and get yourself an API key and create an .env file on the backend application and keep your API key in a variable. eg. CRYPTOCURRENCY_API_KEY=***Your API-KEY***
 4. Run the ***npm run start*** command from the terminal.
 5. Now, if you send a GET request on port 3005 over the localhost domain, you can use the answers from the API request I sent via https://coinmarketcap.com/ in your React application. If you search, you can deploy this simple API application for free on https://www.cyclic.sh/ and use it while it is live.

## Birinci video
We used Redux as state management on the project as usual, and Redux-Toolkit allows us to write simpler, readable code. We used Ant Design as CSS framework and as components we use Table , Alert , Grid structure , Spin , Input , Button etc. We used components such as and I explained them in detail. Even if you don't know the back-end application, I think it will be useful for you in the future, as I explained some terms and its working structure in the first video. In the first video, we also uploaded our dependencies and ended the first video.

## İkinci video
In the second video, we made our Redux configurations, we set the components that I wanted to be rendered according to the response of the API request through the backend application (Spinner, Alert and the components I wanted to be displayed), we provided the data from the API request to be displayed visually through the Table component on Ant Design.

## Üçüncü video
In the third video, we slowly styled our page, filtered according to the names of cryptocurrencies, while we were doing this filtering, we used the useRef hook, we styled according to the 24-hour profit percentages of the currencies.

## Dördüncü video
In our fourth video, I explained what the Context API is, which I will explain at the end of our third video, how to create it in our React applications, why we use Context API in our projects, and we handled the theme changing processes, which is one of the purposes of using Context API, thanks to the ConfigProvider component it provides on Ant Design.