const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Menyunu bağla" : "Menyunu aç");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menyunu aç");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("inquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const product = document.getElementById("product").value.trim();
  if (!name || !phone || !product) {
    alert("Zəhmət olmasa bütün xanaları doldurun.");
    return;
  }

  // Buradakı nümunə nömrəni öz şirkətinizin WhatsApp nömrəsi ilə əvəz edin.
  // Format: ölkə kodu ilə, + və boşluq olmadan. Məsələn: 994501234567
  const whatsappNumber = "994705550343";
  const message = `Salam, CHINEBRIDGE. Məhsul sorğusu göndərmək istəyirəm.\n\nAd: ${name}\nƏlaqə: ${phone}\nMəhsul və tələblər: ${product}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
