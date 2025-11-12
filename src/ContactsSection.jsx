import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Normalize and validate phone numbers
  const digitsOnly = (s) => s.replace(/\D/g, "");

  const isValidPhone = (v) => {
    const raw = (v || "").trim();

    // Empty is invalid – handled by validate() if you want it required
    if (!raw) return false;

    const digits = digitsOnly(raw);

    // Ukraine: +380XXXXXXXXX  (12 digits after removing '+')
    if (raw.startsWith("+380")) return digits.length === 12;

    // Ukraine local: 0XXXXXXXXX (10 digits)
    if (raw.startsWith("0")) return digits.length === 10;

    // Generic international: + followed by 10-15 digits
    if (raw.startsWith("+")) return digits.length >= 10 && digits.length <= 15;

    // Fallback: allow 10–15 digits without symbols
    return digits.length >= 10 && digits.length <= 15;
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Введіть ім’я";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Невірний формат email";
    if (formData.phone && !isValidPhone(formData.phone))
      newErrors.phone = "Невірний номер телефону";
    if (!formData.message.trim()) newErrors.message = "Поле обов’язкове";
    return newErrors;
  };

  const handleSubmit = (e) => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <section id="contacts" className="py-20 px-6 md:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Form */}
        <div>
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Контакти</h2>
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-8">
            зв’яжіться з нами для співпраці або консультації
          </p>

          <form
            action="https://formspree.io/f/xayvgxyz" // 🔗 replace with your Formspree endpoint
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8 space-y-4 text-left"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваше ім’я"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Телефон (напр. +380XXXXXXXXX)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                onBlur={() => {
                  // validate this field on blur
                  setErrors((prev) => ({
                    ...prev,
                    phone:
                      formData.phone && !isValidPhone(formData.phone)
                        ? "Невірний номер телефону"
                        : undefined,
                  }));
                }}
                // Browser-level hint (not the main validator, but helps)
                pattern="^(\+380\d{9}|0\d{9}|\+\d{10,15}|\d{10,15})$"
                title="Введіть +380XXXXXXXXX, 0XXXXXXXXX, або міжнародний формат +XXXXXXXXXX"
                className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Service */}
            <select
              name="service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Оберіть послугу</option>
              <option>Ініціативний аудит бізнесу</option>
              <option>Аудит неприбуткового сегменту</option>
              <option>Due diligence</option>
              <option>Інше</option>
            </select>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Ваше повідомлення"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Надіслати
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-2xl p-8 space-y-6  md:mt-[120px] lg:mt-[100px]">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Зв’яжіться з нами напряму
          </h3>

          <div className="space-y-4 text-gray-700 text-lg">
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-6 h-6 text-blue-600" />
              <a
                href="tel:+380XXXXXXXXX"
                className="hover:text-blue-600 transition-colors"
              >
                +380 (XX) XXX-XX-XX
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-blue-600" />
              <a
                href="mailto:info@resource-audit.com"
                className="hover:text-blue-600 transition-colors"
              >
                info@resource-audit.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <MapPinIcon className="w-6 h-6 text-blue-600" />
              <span>Київ, Україна</span>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6 text-gray-500 text-sm">
            Ми відповімо протягом одного робочого дня.
            <br />
            Дякуємо, що обрали{" "}
            <span className="font-semibold text-gray-800">Ресурс-Аудит</span>!
          </div>
        </div>
      </div>
    </section>
  );
}
