# TestJavan

1. Langkah awal tentu saja

```
npm install
```

2. DB Create (saya menggunakan package postgres, jadi pastikan postgres sudah terinstall di lokal) menggunakan sequelize

```
npx sequelize db:create
```

3. DB Migrate

```
npx sequelize db:migrate
```

4. Setelah itu

```
npm run start
```

5. Untuk dummy data, bisa insert sendiri menggunakan sql query yang disediakan di folder sql

5. Selanjutnya tinggal hit endpoint REST API yang sudah disediakan, bisa menggunakan postman atau aplikasi sejenis.

Sebelumnya, saya mendefinisikan skema yang disediakan ke dalam 3 table 'user' yaitu Parent, Children dan GrandChildren dan 1 table Assets sehingga REST API nya akan berhubungan dengan table-table ini tergantung data apa yang ingin ditampilkan, diubah, ditambah ataupun dihapus dari database.

Daftar REST API yang tersedia:

```
GET /parent/:parentId
```
Menampilkan semua data yang berkaitan dengan parent berdasarkan parentId

```
GET /parent/assets/:id
```
Menampilkan asset dan total harga berdasarkan id orang yang termasuk dalam kategori 'parent' dalam hal ini adalah Bani dalam contoh.

```
POST /parent
```
Menambahkan orang ke dalam table parent

```
PUT /parent/:id
```
Mengubah data parent berdasarkan id

```
DELETE /parent/:id
```
Menghapus data parent berdasarkan id

```
GET /children/assets/:id
```
Menampilkan asset dan total harga berdasarkan id orang yang termasuk dalam kategori 'Child'

```
POST /children
```
Menambahkan orang ke dalam table Children

```
PUT /children/:id
```
Mengubah data children berdasarkan id

```
DELETE /:id
```
Menghapus data children

```
GET /grandchildren/assets/:id
```
Menampilkan asset dan total harga berdasarkan id orang yang termasuk dalam kategori 'GrandChildren'

```
POST /grandchildren
```
Menambahkan orang ke dalam table GrandChildren

```
PUT /grandchildren/:id
```
Mengubah data grandchildren berdasarkan id

```
DELETE /:grandchildren/:id
```
Menghapus data grandchildren berdasarkan id

```
GET /assets
```
Menampilkan semua asset beserta pemiliknya yang berada dalam kategori Parent, Child atau GrandChild

```
POST /assets
```
Menambahkan asset ke orang tertentu dalam keluarga

```
PUT /assets/:id
```
Mengubah data asset orang tertentu dalam keluarga berdasarkan id assetnya

```
DELETE /assets/:id
```
Menghapus aset tertentu berdasarkan id


