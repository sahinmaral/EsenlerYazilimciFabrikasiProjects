<style>
	.main-header{
		color:orange;
	}

	#eng-doc , #react-conf{
		margin-top:500px;
	}

</style>

# Headings

- [Türkçe Dökümantasyon](#tr-doc)
- [English Documentation](#eng-doc)
- [React Configuration](#react-conf)

## <div id="tr-doc" class="main-header">TR - Crypto Currency App</div>

Kullanılan teknolojiler ve paketler

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

Bu projenin back-end kısmı https://sahinmaral-cryptocurrencybackend.cyclic.app/ sitesinde yayınlanmıştır.
Bu projenin front-end kısmı https://sahinmaral-cryptocurrency.netlify.app/ sitesinde yayınlanmıştır.

Bu projemizdeki amaç , sekizinci hafta öğrendiğimiz functional component yapısı ve sık kullanılan hook ları kullanarak yapılan kripto para birimlerini takip edebildiğimiz ve filtrelemesini yapabildiğimiz bir uygulama yapabilmektir. Uygulamamız üzerinde API isteği göndereceğimiz sağlayıcı direkt olarak client-side üzerinden HTTP isteğini yasakladığı için (CORS politikasından dolayı) kendimiz çok basit olarak bir back-end uygulaması oluşturduk. Bu isteği sizlerin kullanabilmesi için :

1.  Repository üzerinde backend ve client klasörü olarak ikiye ayrılmaktadır. Sizin kendi React uygulamanız olduğu için client klasörünün içindekileri silip kendi React uygulamanızdaki dosyaları buraya koyabilirsiniz.
2.  backend klasörüne terminal üzerinden gelip **_npm i_** komutu ile bağımlılıkları (dependencies) indiriniz.
3.  https://coinmarketcap.com/ üzerinden üye olup kendinize bir API anahtarı alın ve backend uygulaması üzerinde .env dosyası oluşturarak içerisinde API anahtarınızı bir değişkende tutunuz. Örn. CRYPTOCURRENCY_API_KEY=**_API-ANAHTARINIZ_**
4.  Terminal üzerinden **_npm run start_** komutu ile çalıştırınız.
5.  Artık localhost domaini üzerinden 3005 portunda GET isteği yollarsanız https://coinmarketcap.com/ üzerinden yolladığımı API isteğinden cevapları React uygulamanızda kullanabilirsiniz. Eğer araştırırsanız https://www.cyclic.sh/ sitesi üzerinden bedava olarak bu basit API uygulamasını deploy edebilirsiniz ve canlıda iken kullanabilirsiniz.

### Birinci video

Proje üzerinde her zamanki gibi state management olarak Redux kullandık ve Redux-Toolkit ile daha basit , okunabilir bir kod yazmamızı sağlıyor. CSS framework olarak Ant Design kullandık ve component lar olarak sık kullandığımız Table , Alert , Grid yapısı , Spin , Input , Button vs. gibi component ları kullandık ve bunları detaylı olarak anlattım. Back-end uygulamasını bilmeseniz dahi bazı terimler ve işleyiş yapısı hakkında birinci videoda anlattığım için sizlerin ileriki zamanlarda yararlı olacağını düşünüyorum. Birinci videoda bunlardan ayrı olarak bir de bağımlılıklarımızı yükledik ve birinci videoya son vermiş olduk.

### İkinci video

İkinci vıdeoda Redux konfigürasyonlarımızı yaptık , backend uygulaması üzerinden API isteğinin cevabına göre render edilmesini istediğim component ları ayarladık (Spinner , Alert ve görüntülenmesini istediğim component larım) , API isteğinden gelen verilerimizi Ant Design üzerindeki Table component aracılığıyla görsel olarak görüntülenmesini sağladık.

### Üçüncü video

Üçüncü videoda sayfamız üzerinde yavaş yavaş stillendirme işlemleri yaptık , kripto para birimlerinin isimlerine göre filtreme işlemini yaptık , bu filtreleme işlemini yaptığımız sırada useRef hook unu kullandık , para birimlerinin 24 saatlık kar yüzdelerine göre stillendirme yaptık.

### Dördüncü video

Dördüncü videomuzda ise üçüncü videomuzun sonunda anlatacağım Context API ın ne olduğunu ve React uygulamarımızda bunu nasıl oluşturacağımızı , projelerimizde neden Context API kullandığımızı anlattım ve Context API kullanmamızın amacından biri olan tema değiştirme işlemlerini Ant Design üzerinde sağlamış olduğu ConfigProvider component sayesinde hallettik.

## <div id="eng-doc" class="main-header">ENG - Crypto Currency App</div>

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

1.  Repository is divided into two as backend and client folder. Since you have your own React application, you can delete the contents of the client folder and put the files in your own React application here.
2.  Go to the backend folder on the terminal and download the dependencies with the **_npm i_** command.
3.  Sign up on https://coinmarketcap.com/ and get yourself an API key and create an .env file on the backend application and keep your API key in a variable. eg. CRYPTOCURRENCY_API_KEY=**_Your API-KEY_**
4.  Run the **_npm run start_** command from the terminal.
5.  Now, if you send a GET request on port 3005 over the localhost domain, you can use the answers from the API request I sent via https://coinmarketcap.com/ in your React application. If you search, you can deploy this simple API application for free on https://www.cyclic.sh/ and use it while it is live.

### Birinci video

We used Redux as state management on the project as usual, and Redux-Toolkit allows us to write simpler, readable code. We used Ant Design as CSS framework and as components we use Table , Alert , Grid structure , Spin , Input , Button etc. We used components such as and I explained them in detail. Even if you don't know the back-end application, I think it will be useful for you in the future, as I explained some terms and its working structure in the first video. In the first video, we also uploaded our dependencies and ended the first video.

### İkinci video

In the second video, we made our Redux configurations, we set the components that I wanted to be rendered according to the response of the API request through the backend application (Spinner, Alert and the components I wanted to be displayed), we provided the data from the API request to be displayed visually through the Table component on Ant Design.

### Üçüncü video

In the third video, we slowly styled our page, filtered according to the names of cryptocurrencies, while we were doing this filtering, we used the useRef hook, we styled according to the 24-hour profit percentages of the currencies.

### Dördüncü video

In our fourth video, I explained what the Context API is, which I will explain at the end of our third video, how to create it in our React applications, why we use Context API in our projects, and we handled the theme changing processes, which is one of the purposes of using Context API, thanks to the ConfigProvider component it provides on Ant Design.

## <div id="react-conf" class="main-header">Getting Started with Create React App</div>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
