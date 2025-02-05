Frontend Setup  
in directory frontend run commands
npm install
npm run dev
(configure .env in frontend folder if needed.)

Backend Setup
in directory backend run commands
composer i
(create .env based on .env.example)
php artisan key:generate
(configure db in .env)
php artisan migrate
php artisan serve