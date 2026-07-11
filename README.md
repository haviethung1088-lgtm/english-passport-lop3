# Hộ chiếu Hành trình Tiếng Anh — Lớp 3

Webapp học từ vựng tiếng Anh cho học sinh tiểu học lớp 3, bám theo cấu trúc sách Global Success (Starter + 20 Unit + 4 Review), có thêm phần Mở rộng/Nâng cao cho mỗi Unit.

## Tính năng
- Học từ vựng qua flashcard lật, phát âm bằng Web Speech API
- Luyện tập trắc nghiệm cơ bản và nâng cao
- Đọc hiểu ngắn + mẹo ngữ pháp cho mỗi Unit
- Bản đồ hành trình theo 4 chủ đề, tích sao theo tiến độ
- Lưu tiến độ trên trình duyệt (localStorage), không cần tài khoản/server

## Chạy thử local
Mở trực tiếp `index.html` bằng trình duyệt, hoặc dùng:
```
python3 -m http.server 8000
```
rồi truy cập `http://localhost:8000`

## Công nghệ
Vanilla HTML/CSS/JS, không cần build, không phụ thuộc thư viện ngoài (trừ Google Fonts qua CDN).

## Deploy
Deploy tĩnh qua GitHub Pages hoặc Netlify — không cần backend.
