# Backend — öneri ve başlangıç

Önerilen teknoloji yığını (başlangıç için):
- Node.js + Express
- PostgreSQL (veri kalıcılığı için)
- Sequelize veya TypeORM (ORM için)
- JWT tabanlı authentication
- Docker + docker-compose (geliştirme ve dağıtım için)

Başlangıç adımları (özet):
1. backend klasöründe node init:
   npm init -y
2. Gerekli paketleri kurun:
   npm i express pg sequelize dotenv
3. Docker kullanacaksanız postgres servisi ekleyin.

Bu repoda şimdilik sadece frontend prototip eklendi. Backend kodlamasına bir sonraki adımda API modelleri, kullanıcı yönetimi ve yetkilendirme ile başlayacağım.
