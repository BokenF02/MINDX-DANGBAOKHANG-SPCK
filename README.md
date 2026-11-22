# Khang Football ⚽

Website thương mại điện tử mini về đồ bóng đá: giày, áo, bóng và phụ kiện dành cho người chơi sân cỏ. Toàn bộ giao diện được xây dựng bằng **HTML, CSS và JavaScript thuần** (không dùng framework, không build step).

> 🔗 Repository: [BokenF02/MINDX-DANGBAOKHANG-SPCK](https://github.com/BokenF02/MINDX-DANGBAOKHANG-SPCK)

---

## Giới thiệu

**Khang Football** là đồ án môn học mô phỏng một cửa hàng bán đồ bóng đá trực tuyến, lấy cảm hứng từ các shop giày đá bóng hiện đại. Website gồm đầy đủ các trang của một cửa hàng: trang chủ, danh mục sản phẩm theo **thương hiệu** (Nike, Adidas, Puma, Mizuno), theo **loại sân** (tự nhiên, nhân tạo, trong nhà), trang **chi tiết sản phẩm**, **giỏ hàng**, **tin tức bóng đá**, **trợ giúp / FAQ**, trang **đăng nhập – đăng ký** và một **mini game quiz** kiến thức bóng đá.

Dữ liệu sản phẩm hiện được viết trực tiếp trong HTML (dữ liệu tĩnh), chưa kết nối cơ sở dữ liệu hay backend.

---

## Tính năng chính

### 🛍️ Cửa hàng

- **Trang chủ** (`index.html`): banner carousel tự chạy, hero giới thiệu, khối "Sản phẩm nổi bật" (4 sản phẩm), khối "Thương hiệu nổi bật", lưới danh mục "Bạn đang tìm?" và form đăng ký nhận ưu đãi.
- **Trang thương hiệu**: `nike.html`, `addidas.html`, `puma.html`, `mizuno.html` — mỗi trang liệt kê giày của thương hiệu đó.
- **Trang loại giày**: `nhantao.html` (sân nhân tạo), `tunhien.html` (sân tự nhiên), `trongnha.html` (futsal / trong nhà).
- **Phụ kiện** (`different.html`): bóng thi đấu, vớ, găng tay, balo…
- **Chi tiết sản phẩm** (`product-detail.html`): ảnh lớn, thông tin (chất liệu, đế giày, loại sân, màu), giá, chọn size, nút "Thêm vào giỏ" và "Mua ngay".
- **Giỏ hàng** (`cart.html`):
  - Danh sách sản phẩm với nút tăng/giảm số lượng và nút xoá
  - Tính tiền tự động: **Tạm tính + Phí vận chuyển − Giảm giá = Tổng cộng**
  - Chọn phương thức vận chuyển (thay đổi phí ship)
  - Nhập mã giảm giá — mã mẫu: **`KHANG10`** (giảm 10% tạm tính)
  - Định dạng tiền theo kiểu Việt Nam (`1.100.000đ`)

### 📰 Nội dung

- **Tin tức bóng đá** (`news/home.html`): banner, "Kết quả nổi bật", "Bản tin bóng đá", "Khoảnh khắc đáng nhớ".
- **Kết quả World Cup 2026** (`news/total-result.html`): bảng kết quả và 8 trận đấu cuối cùng.
- **Trợ giúp** (`help.html`): ô tìm kiếm câu hỏi, 4 nhóm chủ đề (Mua hàng, Giao hàng, Đổi trả, Tài khoản), danh sách FAQ lọc được theo từ khoá + danh mục, bảng quy đổi size giày và khối liên hệ hỗ trợ.

### 🎮 Trò chơi

- `games/start.html` → `games/rule.html` → `games/quiz.html` → `games/result.html`
- Quiz gồm **10 câu hỏi** về bóng đá, **30 giây mỗi câu**, thanh thời gian đổi màu theo thời gian còn lại (xanh → vàng → đỏ), xáo trộn thứ tự câu hỏi và đáp án mỗi lượt chơi. Hết câu tự chuyển sang trang kết quả, hiển thị số câu đúng, số câu sai, tổng điểm và tổng thời gian.

### 🎨 Giao diện

- **Dark mode**: nút chuyển Sáng/Tối trên navbar, lựa chọn được ghi nhớ bằng `localStorage`.
- **Navbar / Footer / Bộ lọc dùng chung**: nạp động bằng `fetch()` từ thư mục `components/`, tránh lặp code ở 13 trang HTML.
- **Tự đánh dấu menu đang active** dựa trên tên file đang mở.
- **Panel bộ lọc 6 nhóm**: Thương hiệu, Giá, Size, Loại sân, Vị trí, Phong cách (dạng panel trượt, có checkbox).
- **Nút thả tim** trên thẻ sản phẩm (đổi icon rỗng ↔ đặc khi click).
- **Responsive** theo Bootstrap 5: navbar thu gọn thành hamburger trên mobile.
- **Trang đăng nhập / đăng ký** (`lg-su.html`): chuyển đổi mượt giữa 2 form bằng hiệu ứng trượt.

---

## Công nghệ sử dụng

| Thành phần | Chi tiết |
|---|---|
| Ngôn ngữ | HTML5, CSS3, JavaScript (ES5/ES6, không framework) |
| CSS Framework | [Bootstrap 5.3.7](https://getbootstrap.com/) (qua CDN) |
| Icon | [Font Awesome 7](https://fontawesome.com/) (qua CDN) |
| Font | Google Fonts — **Be Vietnam Pro** |
| Lưu trữ phía client | `localStorage` (dark mode, điểm quiz) |
| Công cụ | VS Code + Live Server / Python `http.server` |

---

## Cấu trúc thư mục

```text
DANG_BAO_KHANG_SPCKMX/
├── index.html              # Trang chủ
├── different.html          # Phụ kiện ra sân
├── product-detail.html     # Chi tiết sản phẩm
├── cart.html               # Giỏ hàng
├── help.html               # Trợ giúp / FAQ
├── lg-su.html              # Đăng nhập - Đăng ký
├── nike.html               # Giày Nike
├── addidas.html            # Giày Adidas
├── puma.html               # Giày Puma
├── mizuno.html             # Giày Mizuno
├── nhantao.html            # Giày sân nhân tạo
├── tunhien.html            # Giày sân tự nhiên
├── trongnha.html           # Giày futsal / trong nhà
│
├── components/             # Thành phần dùng chung (nạp bằng fetch)
│   ├── navbar.html
│   ├── filter.html
│   └── footer.html
│
├── CSS/                    # Stylesheet cho từng trang
│   ├── style.css           # Style chung + trang chủ
│   ├── product.css
│   ├── cart.css
│   ├── help.css
│   ├── lg-su.css
│   ├── trademark.css
│   ├── news-home.css
│   ├── news-total-result.css
│   ├── quiz.css
│   ├── start.css
│   ├── rule.css
│   └── result.css
│
├── JS/                     # Xử lý logic
│   ├── components.js       # Nạp navbar / filter / footer, highlight menu
│   ├── script.js           # Bộ lọc, dark mode, nút thả tim
│   ├── cart.js             # Tính tiền, số lượng, mã giảm giá
│   ├── help.js             # Tìm kiếm & lọc FAQ
│   ├── lg-su.js            # Chuyển form đăng nhập / đăng ký
│   ├── quiz.js             # Logic game quiz
│   └── result.js           # Hiển thị kết quả quiz
│
├── games/                  # Mini game
│   ├── start.html
│   ├── rule.html
│   ├── quiz.html
│   └── result.html
│
├── news/                   # Trang tin tức
│   ├── home.html
│   └── total-result.html
│
└── images/                 # Hình ảnh
    ├── banner/             # Banner thương hiệu
    ├── shoesss/            # Ảnh giày, áo, phụ kiện
    ├── news/               # Ảnh cho trang tin tức
    ├── nike/  adidas/  puma/  mizuno/   # Ảnh theo hãng
    ├── nhan tao/  tu nhien/  fustal/    # Ảnh theo loại sân
    ├── Phukien/  hotprd/  flags/        # Phụ kiện, sản phẩm hot, cờ
    └── logo.png, sigma.jpg, ball.jpg, sub.jpg ...
```

---

## Cách chạy project

### Cách 1 — Dùng local server (khuyến nghị)

Navbar, footer và bộ lọc được nạp bằng `fetch()`, nên **mở trực tiếp file `index.html` (giao thức `file://`) sẽ không hiển thị được** các thành phần này. Hãy chạy qua HTTP:

```bash
# Python 3 (có sẵn trên hầu hết máy)
python -m http.server 5500
```

Sau đó mở: <http://localhost:5500/index.html>

Hoặc dùng Node.js:

```bash
npx serve .
```

### Cách 2 — VS Code Live Server

1. Cài extension **Live Server**
2. Chuột phải vào `index.html` → **Open with Live Server**

Không cần `npm install`, không cần build — project chạy trực tiếp trên trình duyệt.

---

## Danh sách trang

| Trang | Đường dẫn | Mô tả |
|---|---|---|
| Trang chủ | `/index.html` | Banner, sản phẩm nổi bật, thương hiệu, danh mục |
| Phụ kiện | `/different.html` | Bóng, vớ, găng tay, balo |
| Chi tiết sản phẩm | `/product-detail.html` | Nike Mercurial Vapor 16 Elite FG |
| Giỏ hàng | `/cart.html` | Quản lý giỏ, mã giảm giá, tổng tiền |
| Thương hiệu | `/nike.html`, `/addidas.html`, `/puma.html`, `/mizuno.html` | Sản phẩm theo hãng |
| Loại giày | `/nhantao.html`, `/tunhien.html`, `/trongnha.html` | Sản phẩm theo mặt sân |
| Tin tức | `/news/home.html` | Tin tức, kết quả, khoảnh khắc |
| Kết quả World Cup | `/news/total-result.html` | Bảng kết quả giải đấu |
| Trợ giúp | `/help.html` | FAQ, tìm kiếm, bảng size |
| Đăng nhập / Đăng ký | `/lg-su.html` | Form đăng nhập và đăng ký |
| Mini game | `/games/start.html` | Bắt đầu → luật chơi → quiz → kết quả |

---

## Dữ liệu lưu ở đâu?

| Dữ liệu | Nơi lưu | Ghi chú |
|---|---|---|
| Giao diện Sáng/Tối | `localStorage["theme"]` | Giữ nguyên khi tải lại trang |
| Điểm quiz | `localStorage["quizScore"]`, `["quizWrong"]`, `["quizTime"]` | Ghi khi kết thúc quiz, đọc ở `games/result.html` |
| Giỏ hàng | HTML tĩnh trong `cart.html` | Thay đổi chỉ tồn tại trong phiên, tải lại trang sẽ về mặc định |
| Sản phẩm | HTML tĩnh từng trang | Chưa có API / cơ sở dữ liệu |

---

## Hạn chế hiện tại

Đây là đồ án front-end thuần, các phần sau **chưa có xử lý thật**:

- **Chưa có backend**: không có đăng nhập thật, không có thanh toán, không lưu đơn hàng.
- **Ô tìm kiếm trên navbar** chưa gắn xử lý tìm kiếm.
- **Panel bộ lọc** mới dựng giao diện (checkbox, panel trượt), chưa lọc sản phẩm thật.
- **Giỏ hàng** dùng dữ liệu mẫu cố định, chưa đồng bộ với nút "Thêm vào giỏ" ở trang chi tiết.
- **Trang chi tiết sản phẩm** hiện là một sản phẩm mẫu; tham số `?id=...` trên link chưa được đọc để đổi nội dung.
- **Form đăng ký nhận ưu đãi** ở trang chủ chưa gửi dữ liệu đi đâu.

---

## Tác giả

**Đặng Bảo Khang**

- 📧 Email: dangbaokhang57@gmail.com
- 📞 Điện thoại: 0907 427 169
- 🎓 Đồ án môn học — MINDX

---

## Ghi chú

- Toàn bộ hình ảnh trong `images/` được dùng cho mục đích học tập.
- Project không dùng `node_modules`, không cần biên dịch — chỉ cần mở bằng local server là chạy.
- © 2026 Khang Football
