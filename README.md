# NK ERP — İlaç Satış ve Şirket Yönetim Otomasyonu

Bu repo "NK ERP" projesinin kaynak kodlarını içerir. Proje, eğitim ve portföy amaçlı olarak ilaç satış ve pazarlama pazarına yönelik örnek bir kurumsal yönetim sistemidir.

Amaç
- Şirket içi iş süreçlerini tek bir sistemde toplamak
- Departmanlar arası iletişimi sağlamak
- Stok, sipariş ve satış yönetimini dijitalleştirmek
- Raporlama ve performans analizi sunmak

Ana Modüller
- Giriş Sistemi (kullanıcı, rol, güvenlik)
- Kontrol Paneli (dashboard)
- Şirket içi mesajlaşma
- Ürün Yönetimi (ilaç, parti, son kullanma)
- Sipariş Yönetimi
- Stok / Depo Yönetimi
- Satış / Raporlama
- Personel / Görev Yönetimi
- Duyuru ve Bildirim Sistemi

Hızlı Başlangıç (frontend prototip)
1. Bu repoyu klonlayın:
   git clone https://github.com/aktasberilela-cyber/NK-ERP.git
2. Basit önizleme için frontend dosyasını açın:
   open frontend/index.html (veya tarayıcı ile açın)

Backend & Geliştirme
- Henüz tam bir backend kurulumu yok. Önerilen başlangıç: Node.js + Express + PostgreSQL veya Django + PostgreSQL.
- Sonraki adımlar: authentication, API (REST/GraphQL), veritabanı modelleri, role-based access control.

İleride yapılacaklar
- Tam bir frontend uygulaması (React / Vue / Next.js)
- Backend API ve veritabanı entegrasyonu
- Dockerfile ve docker-compose
- Unit / integration testleri
- CI/CD pipeline (GitHub Actions)

Gönderilen tasarım
- Repo içinde frontend/prototype olarak bir HTML/CSS prototip eklendi. Bu, gönderdiğiniz görsel tasarıma göre hazırlanmış statik bir demo ekranıdır.

Katkıda bulunma
- Issue açarak hangi modüllere öncelik verilmesini istediğinizi yazın.

License: MIT
