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

Sebelumnya, saya mendefinisikan skema yang disediakan ke dalam 3 table 'user' yaitu Parent, Children dan GrandChildren dan 1 table Assets sehingga REST API nya akan berhubungan dengan table-table ini tergantung data apa yang ingin diubah, ditambah ataupun dihapus dari database.

Daftar REST API yang tersedia:

a. 

