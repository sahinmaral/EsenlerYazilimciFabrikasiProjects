<style>
    img{
        width:320px;
        height:180px
    }
</style>

# Product Showroom App

## Kullanılan teknolojiler

- Axios
- Redux
- Redux-Toolkit
- React Router
- Ant Design

## Yapılan aşamalar

- Projeye başlanmadan önce paketlerin kurulumu yapıldı.

- State management olarak Redux kullanıldı. Redux üzerinde daha performanslı ve efektif kod yazabilmek için Redux Toolkit kullanıldı.

- Başlangıçta CSS framework olarak Material UI yerine ileriki zamanlarda Ant Design kullanıldı.

- React üzerindeki yer alan useState ve useEffect hook ları anlatıldı.

- Sayfalar belirlendi (ProductList , Profile , ProductDetail gibi sayfalar)

- Sayfalar üzerindeki component lar belirlendi (Header, ProductCard , NameFilter , CategoryFilter gibi component lar)

- Ürünler üzerinde proje üzerinde bir back-end uygulamayla bağlantılı olmadığımız için client-side üzerinde kaydetmek koşuluyla (localStorage) favorilere ekleme - çıkarma işlemleri yapıldı.

- Ürünler üzerinde kategori ve isme göre filtreleme yapıldı.

- Uygulama , çoğu cihazlar için responsive tasarıma sahip olacak şekilde tasarlandı.

## Ön izleme

Bu projemizde amaç , yedinci haftada React üzerinde öğretilen projelerimiz kompleks leştiği sürece state management zorlaşacağı için bu yönetimleri prop-drilling gibi kavramlarla halletmek yerine genel bilinen state management lardan biri olan Redux ile bir proje oluşturmaktır. Projemizdeki amaç , Fake Store API üzerinden alınan sahte ürün verilerini listelemek , bu verilere herhangi bir component üzerinden ulaşabilmek , filtrelebilmek ve manipülasyonlar yapabilmektir.
Birinci videoda proje üzerinde kullanmamız gereken paketlerimizi indirdik. Redux , güncel versiyon olarak kullanıldı. Daha efektif ve performanslı bir kod yazabilmek için Redux Toolkit kullandık ve useSelector , useDispatch gibi hook ları anlattım.
İkinci videoda API üzerinden aldığımız verileri listelemek , component larımızın tasarımı ve sayfalama işlemlerinin React üzerinde nasıl sağlandığını anlattım. Üçüncü videoda ürünler üzerinde favori ekleme seçeneği ekleyip bunun için ortam oluşturduk ve favori ürünlerimizi herhangi bir back-end uygulaması ile iletişime geçemediğimiz için client-side üzerinde geçici olarak kaydettik. Redux Toolkit in kullanımlarından biri ise Redux üzerinde state lerimizde array , object gibi değişkenlerde tamamıyla bir değişiklik yerine herhangi bir öğesini değiştirmeniz halinde (array lerde push , pop işlemleri veya object üzerinde değiştirmiş olduğunuz property) bu gibi değişkenleri spread operatör ile bütün öğelerini alıp yeni bir değişken olarak atamamız gerekir.
[Objelerde](#objelerde-usereducer-kullanımı) ve [dizilerde](#dizilerde-usereducer-kullanımı) nasıl yapılması gerektiğini linklere tıklayarak inceleyebilirsiniz. Uygulamamızın son videosu olan dördüncü videosunda useCallback ve useMemo hook unun önemini , ürünlerimiz üzerinde filtreleme sistemini ve uygulama üzerinde Ant Design içerisinde yer alan component ların kullanımını anlatmış oldum. Benim için uzun ve eğlenceli bir video serisi oldu. İleriki zamanlarda bunun gibi bir uygulama yaparken önceden yol haritamızı belirleyerek bir video seriyi yapmayı planlarsam video sürelerini tabii ki de kısaltabilirim. Videoları izleyebilmek için Youtube thumbnail resimlerine tıklayıp Youtube videolarına gidebilirsiniz. Eğer videoları beğendiyseniz kanala abone olmayı ve beğen tuşuna basmayı unutmayın.

https://sahinmaral-productshowroom.netlify.app sitesine deploy edilmiştir.

<a href="https://www.youtube.com/watch?v=0Jv01sym-D8"><img src="./thumbnail-1.jpg"/></a>
<a href="https://www.youtube.com/watch?v=zkRP8GVCSgw"><img src="./thumbnail-2.jpg"/></a>
<a href="https://www.youtube.com/watch?v=ub1fxYsia0U"><img src="./thumbnail-3.jpg"/></a>
<a href="https://www.youtube.com/watch?v=v4JfzUKVCDE"><img src="./thumbnail-4.jpg"/></a>

### Objelerde useReducer kullanımı

    function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
        // 🚩 State içerisindeki objelerinizde property lerini değiştirirken bu yöntemden kaçının
        state.age = state.age + 1;
        return state;
        }

    function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
        // ✅ Bunun yerine spread operatörü ile yeniden objenizi oluşturun. Bu sayede objenizin bellekteki referans numarası değişecektir ve React bu state değişimini algılayacaktır.
        return {
            ...state,
            age: state.age + 1
        };
        }

### Dizilerde useReducer kullanımı

    function tasksReducer(tasks, action) {
        switch (action.type)    {
                case 'added': {
                // 🚩 Dizinin içerisine değişken ekleme veya çıkartma işlemlerinde dizinin tamamıyla bellekteki yeri değişmediği için referans numarası da değişmiyor.
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
                // ✅ Bunun yerine yine spread operatörü ile diziyi parçalayarak bütün değerlerini yeni bir dizi içerisine eklenecek olan objeyle birlikte ekliyoruz.
                return [...tasks, {
                    id: action.id,
                    text: action.text,
                    done: false
                }];
            }
        }
    }

