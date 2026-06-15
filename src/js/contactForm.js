// ─── EmailJS config ────────────────────────────────────────────────────────
// 1. Crea cuenta gratuita en https://www.emailjs.com
// 2. Conecta tu Gmail en Email Services → Add Service → Gmail
// 3. Crea una plantilla en Email Templates con las variables indicadas abajo
// 4. Sustituye los tres valores de abajo con los tuyos
const EMAILJS_SERVICE_ID = "service_RTM"; // ej. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_RTM"; // ej. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "OavcVwZoNmiJ3syxB"; // ej. "aBcDeFgHiJkLmNoP"
// ───────────────────────────────────────────────────────────────────────────

// Variables que debes usar en tu plantilla de EmailJS:
// {{from_name}}    → Nombre completo del cliente
// {{telefono}}     → Teléfono
// {{reply_to}}     → Email del cliente (también como Reply-To)
// {{origen}}       → Dirección de origen
// {{destino}}      → Dirección de destino
// {{descripcion}}  → Descripción de la mudanza
// {{fecha}}        → Fecha aproximada
// {{pagina}}       → Página desde donde se envió

function loadEmailJS() {
  return new Promise((resolve, reject) => {
    if (window.emailjs) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function showMessage(form, type, text) {
  form.querySelectorAll(".form-msg").forEach((el) => el.remove());
  const div = document.createElement("div");
  div.className = [
    "form-msg p-4 rounded-lg text-sm font-medium border",
    type === "success"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-red-50 text-red-700 border-red-200",
  ].join(" ");
  div.textContent = text;
  form.appendChild(div);
  div.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function handleSubmit(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Enviando…";

    const data = Object.fromEntries(new FormData(form));

    const templateParams = {
      from_name: `${data.nombre ?? ""} ${data.apellidos ?? ""}`.trim(),
      telefono: data.telefono || "—",
      reply_to: data.email || "—",
      origen: data.origen || "—",
      destino: data.destino || "—",
      descripcion: data.descripcion || "—",
      fecha: data.fecha || "—",
      pagina: window.location.pathname,
    };

    try {
      await loadEmailJS();
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );
      showMessage(
        form,
        "success",
        "¡Solicitud enviada! Te contactaremos en menos de 24 horas.",
      );
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      showMessage(
        form,
        "error",
        "Error al enviar el mensaje. Por favor, llámanos al +34 601 608 597.",
      );
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
}

export function initContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach(handleSubmit);
}
