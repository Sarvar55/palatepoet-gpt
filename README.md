# PalatePoet GPT

PalatePoet GPT, kullanıcıların yemek pişirme deneyimini dijitalleştirerek kişiselleştirilmiş tarifler oluşturmalarına ve yönetmelerine olanak tanıyan tam kapsamlı (full-stack) bir web uygulamasıdır. Bu proje, kullanıcıların mutfaktaki yaratıcılığını desteklemek ve sağlıklı beslenme hedeflerine ulaşmalarını kolaylaştırmak amacıyla geliştirilmiştir.

## Biz Hangi Sorunu Çözüyoruz?

Modern dünyada insanlar sağlıklı ve lezzetli yemek tariflerine ulaşmakta zorluk çekmiyorlar, ancak **kişiselleştirilmiş** ve **eldeki imkanlara uygun** bir deneyim bulmak hala büyük bir sorun. PalatePoet GPT, kullanıcının mutfağındaki mevcut malzemeleri, ayırabileceği süreyi ve tercih ettiği öğünü temel alarak akıllı çözümler sunar:
- **Eldeki Malzemelerle Tarif:** "Mutfakta ne var?" sorusuna yanıt vererek, israfı önler ve eldeki malzemelere uygun tarifler üretir.
- **Zaman Yönetimi:** Kullanıcının o anki zaman kısıtına göre (hızlı bir atıştırmalık veya detaylı bir akşam yemeği) en uygun yemek seçeneklerini sunar.
- **Öğün Bazlı Planlama:** Sabah, öğle veya akşam; o an hangi öğün yapılacaksa ona özel AI destekli öneriler geliştirir.
- **Kişiselleştirilmiş Arşiv:** Beğenilen tarifleri ve besin değerlerini (makroları) düzenli bir yapıda saklamayı sağlar.

## Tech Stack

Projemiz, modern yazılım prensiplerine sadık kalınarak katmanlı bir mimari (Layered Architecture) ile inşa edilmiştir.

### Back-End (Java & Spring Boot)
- **Spring Boot 3 & Java 21:** Uygulamanın çekirdek framework'ü.
- **MyBatis:** SQL sorguları üzerinde tam kontrol sağlamak ve veri tabanı işlemlerini optimize etmek için kullanıldı.
- **Liquibase:** Veri tabanı şeması üzerindeki değişiklikleri (migrations) yönetmek ve versiyonlamak için kullanıldı. Bu sayede tüm ortamlarda (dev, test, prod) veri tabanı tutarlılığı sağlanır.
- **PostgreSQL:** İlişkisel veri tabanı olarak tercih edildi.
- **Spring Security & JWT:** Kullanıcı yetkilendirme ve güvenli session yönetimi için.
- **Lombok:** Boilerplate kodları azaltarak okunabilirliği artırmak için.
- **Swagger/OpenAPI:** API dokümantasyonu ve test edilebilirliği için.

### Front-End (Next.js & TypeScript)
- **Next.js:** Hızlı, SEO dostu ve modern bir kullanıcı deneyimi sunmak için.
- **TypeScript:** Tip güvenliği sağlayarak hataları geliştirme aşamasında yakalamak için.
- **Tailwind CSS:** Hızlı ve özelleştirilebilir bir UI tasarımı için.

## Mimari Yaklaşımlar ve Nedenleri

### 1. Tutarlılık İçin Özel Response Modelleri
Tüm API yanıtlarında standart bir yapı sağlamak amacıyla `BaseResponse` modelini tasarladık. Bu yaklaşım:
- Ön yüz (front-end) geliştirmesinde hata yönetimini standartlaştırır.
- Başarılı ve başarısız tüm senaryolarda istemciye neyin döndüğünü net bir şekilde bildirir (`meta` objesi ile).

### 2. Cache Mekanizması
Performansı artırmak ve veri tutarlılığını sağlamak için Cache yapısı entegre edildi:
- **DB Sorgu Optimizasyonu:** Sık erişilen ancak nadir değişen verilerin veri tabanından tekrar tekrar çekilmesini önler.
- **Blacklisting:** Güvenlik katmanında, geçersiz kılınmış (revoked) token'ları tutarak sistemin güvenliğini API seviyesinde korur.

### 3. Katmanlı Mimari (Separation of Concerns)
Kod bazımız Controller, Service ve Repository katmanlarına ayrılmıştır. Bu sayede:
- İş mantığı (Business Logic) sadece servis katmanında toplanır.
- Kodun test edilebilirliği artar.
- Yeni özellikler eklemek projenin genel yapısını bozmadan mümkün hale gelir.

## Başlangıç

Projeyi yerelinizde çalıştırmak için `front_end` ve `back_end` klasörlerindeki README dosyalarını inceleyebilirsiniz.
