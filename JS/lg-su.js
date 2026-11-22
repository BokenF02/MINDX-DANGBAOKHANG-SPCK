// ==========================
// LOGIN / REGISTER (lg-su.html)
// Chuyển đổi giữa 2 form: Đăng nhập ↔ Đăng ký
// ==========================

// Container bao quanh cả 2 form login + register
const container = document.getElementById("container");

// Nút chuyển sang form Đăng ký
const registerBtn = document.getElementById("register");

// Nút chuyển sang form Đăng nhập
const loginBtn = document.getElementById("login");

// Bấm "Đăng ký" → slide panel sang phải hiển thị form register
// CSS: .container.active { transform: translateX(8%); }
registerBtn.addEventListener("click", function () {
    container.classList.add("active");
});

// Bấm "Đăng nhập" → slide panel về trái hiển thị form login
loginBtn.addEventListener("click", function () {
    container.classList.remove("active");
});

// =================================
// DÙNG CHUNG
// =================================

// Đọc danh sách tài khoản đã lưu (chưa có thì trả về mảng rỗng)
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Hiện thông báo dưới form: type = "error" | "success"
function showMsg(el, text, type) {
  el.textContent = text;
  el.className = "form-msg " + type;
}

// Kiểm tra email đúng định dạng: abc@xyz.com
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// =================================
// NHIỆM VỤ 9.4 — ĐĂNG KÝ
// =================================

var registerForm = document.getElementById("registerForm");
var registerMsg  = document.getElementById("registerMsg");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault(); // chặn form tải lại trang

  var name     = document.getElementById("registerName").value.trim();
  var email    = document.getElementById("registerEmail").value.trim().toLowerCase();
  var password = document.getElementById("registerPassword").value;
  var confirm  = document.getElementById("registerConfirm").value;

  // --- VALIDATE ---
  if (name.length < 2) {
    return showMsg(registerMsg, "Vui lòng nhập họ tên (ít nhất 2 ký tự).", "error");
  }
  if (!isValidEmail(email)) {
    return showMsg(registerMsg, "Email không hợp lệ (ví dụ: ten@gmail.com).", "error");
  }
  if (password.length < 6) {
    return showMsg(registerMsg, "Mật khẩu phải có ít nhất 6 ký tự.", "error");
  }
  if (password !== confirm) {
    return showMsg(registerMsg, "Mật khẩu nhập lại không khớp.", "error");
  }

  // --- KIỂM TRA EMAIL ĐÃ TỒN TẠI ---
  var users = getUsers();

  if (users.some(function (u) { return u.email === email; })) {
    return showMsg(registerMsg, "Email này đã được đăng ký.", "error");
  }

  // --- LƯU VÀO LOCAL STORAGE ---
  users.push({ name: name, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  showMsg(registerMsg, "Đăng ký thành công! Mời bạn đăng nhập.", "success");
  registerForm.reset();

  // Tự chuyển sang form đăng nhập sau 1.2 giây
  setTimeout(function () { container.classList.remove("active"); }, 1200);
});


// =================================
// NHIỆM VỤ 9.5 — ĐĂNG NHẬP
// =================================

var loginForm = document.getElementById("loginForm");
var loginMsg  = document.getElementById("loginMsg");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var email    = document.getElementById("loginEmail").value.trim().toLowerCase();
  var password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    return showMsg(loginMsg, "Vui lòng nhập email và mật khẩu.", "error");
  }

  // Tìm tài khoản khớp cả email và mật khẩu
  var user = getUsers().find(function (u) {
    return u.email === email && u.password === password;
  });

  if (!user) {
    return showMsg(loginMsg, "Email hoặc mật khẩu không đúng.", "error");
  }

  // Lưu người đang đăng nhập (không lưu mật khẩu)
  localStorage.setItem("currentUser", JSON.stringify({ name: user.name, email: user.email }));

  showMsg(loginMsg, "Đăng nhập thành công! Đang chuyển trang...", "success");

  setTimeout(function () { window.location.href = "index.html"; }, 800);
});