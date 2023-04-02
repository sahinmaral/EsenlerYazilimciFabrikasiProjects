
# Crypto Currency App - TR 

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
 1. Repository üzerinde backend ve client klasörü olarak ikiye ayrılmaktadır. Sizin kendi React uygulamanız olduğu için client klasörünün içindekileri silip kendi React uygulamanızdaki dosyaları buraya koyabilirsiniz. 
 2. backend klasörüne terminal üzerinden gelip ***npm i*** komutu ile bağımlılıkları (dependencies) indiriniz.
 3. https://coinmarketcap.com/ üzerinden üye olup kendinize bir API anahtarı alın ve backend uygulaması üzerinde .env dosyası oluşturarak içerisinde API anahtarınızı bir değişkende tutunuz. Örn. CRYPTOCURRENCY_API_KEY=***API-ANAHTARINIZ***
 4. Terminal üzerinden ***npm run start*** komutu ile çalıştırınız.
 5. Artık localhost domaini üzerinden 3005 portunda GET isteği yollarsanız https://coinmarketcap.com/ üzerinden yolladığımı API isteğinden cevapları React uygulamanızda kullanabilirsiniz. Eğer araştırırsanız https://www.cyclic.sh/ sitesi üzerinden bedava olarak bu basit API uygulamasını deploy edebilirsiniz ve canlıda iken kullanabilirsiniz. 

## Birinci video
Proje üzerinde her zamanki gibi state management olarak Redux kullandık ve Redux-Toolkit ile daha basit , okunabilir bir kod yazmamızı sağlıyor. CSS framework olarak Ant Design kullandık ve component lar olarak sık kullandığımız Table , Alert , Grid yapısı , Spin , Input , Button vs. gibi component ları kullandık ve bunları detaylı olarak anlattım. Back-end uygulamasını bilmeseniz dahi bazı terimler ve işleyiş yapısı hakkında birinci videoda anlattığım için sizlerin ileriki zamanlarda yararlı olacağını düşünüyorum. Birinci videoda bunlardan ayrı olarak bir de bağımlılıklarımızı yükledik ve birinci videoya son vermiş olduk.

## İkinci video
İkinci vıdeoda Redux konfigürasyonlarımızı yaptık , backend uygulaması üzerinden API isteğinin cevabına göre render edilmesini istediğim component ları ayarladık (Spinner , Alert ve görüntülenmesini istediğim component larım) , API isteğinden gelen verilerimizi Ant Design üzerindeki Table component aracılığıyla görsel olarak görüntülenmesini sağladık.

## Üçüncü video
Üçüncü videoda sayfamız üzerinde yavaş yavaş stillendirme işlemleri yaptık , kripto para birimlerinin isimlerine göre filtreme işlemini yaptık , bu filtreleme işlemini yaptığımız sırada useRef hook unu kullandık , para birimlerinin 24 saatlık kar yüzdelerine göre stillendirme yaptık.

## Dördüncü video
Dördüncü videomuzda ise üçüncü videomuzun sonunda anlatacağım Context API ın ne olduğunu ve React uygulamarımızda bunu nasıl oluşturacağımızı , projelerimizde neden Context API kullandığımızı anlattım ve Context API kullanmamızın amacından biri olan tema değiştirme işlemlerini Ant Design üzerinde sağlamış olduğu ConfigProvider component sayesinde hallettik.