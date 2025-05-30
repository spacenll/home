# استخدم صورة PHP الرسمية
FROM php:8.2-cli

# انسخ كل ملفات المشروع إلى داخل الحاوية
COPY . /var/www/html/

# عيّن مجلد العمل
WORKDIR /var/www/html

# افتح البورت 8080
EXPOSE 8080

# شغّل السيرفر المدمج في PHP
CMD ["php", "-S", "0.0.0.0:8080", "-t", "."]
