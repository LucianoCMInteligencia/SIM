## 🔐 Implementación RGPD/GDPR - Ley de Protección de Datos

Este documento resume la implementación de cumplimiento RGPD en tu proyecto SIM.

---

## ✅ Archivos Creados

### 1. **cookie-consent.js**
- Gestiona el consentimiento de cookies del usuario
- Almacena la decisión en localStorage por 365 días
- Solo habilita analytics si el usuario acepta
- Interfaz amigable y responsive

**Características:**
- Verificación automática de consentimiento previo
- Banner solo muestra una vez
- Botones: Aceptar/Rechazar
- Enlace a política de cookies

### 2. **cookie-consent.css**
- Estilos modernos para el banner
- Animaciones suave (slide up/down)
- Diseño responsive (mobile, tablet, desktop)
- Accesibilidad mejorada

### 3. **politica-cookies.html**
- Página completa de política de cookies
- Explicación clara de tipos de cookies
- Derechos RGPD del usuario
- Enlaces de referencia (aboutcookies.org)
- Contacto para consultas

### 4. **.gitignore**
- Archivo para excluir archivos innecesarios de Git
- Protege información sensible

### 5. **README.md**
- Descripción del proyecto
- Instrucciones de cómo ejecutar
- Información de despliegue

---

## 🔗 Integración en Páginas HTML

El banner está **automáticamente integrado** en todas tus páginas:

✅ `index.html`  
✅ `index_introduccion.html`  
✅ `index_metodologia.html`  
✅ `index_resultados.html`  
✅ `index_conclusiones.html`

Cada página incluye:
```html
<link rel="stylesheet" href="cookie-consent.css">
<script src="cookie-consent.js"></script>
```

---

## 🎯 Características de Cumplimiento RGPD

### ✨ Consentimiento Explícito
- Banner **obligatorio** en la primera visita
- Usuario debe hacer clic en "Aceptar" o "Rechazar"
- No hay consentimiento por defecto (no-consent-by-default)

### 📝 Derechos del Usuario
El usuario tiene derecho a:
- **Acceso**: Ver qué datos tenemos
- **Rectificación**: Corregir datos inexactos
- **Olvido**: Solicitar eliminación de datos
- **Portabilidad**: Recibir datos en formato abierto
- **Oposición**: Rechazar ciertos procesamientos

### 🍪 Gestión de Cookies
La cookie de consentimiento:
- Nombre: `sim-cookie-consent`
- Duración: 365 días
- Valores: `accepted` o `rejected`
- Se almacena en el navegador del usuario

---

## 📋 Próximos Pasos (Opcional)

### 1. Verificar Política de Privacidad
- Actualiza `politica-cookies.html` con tu información específica
- Cambia el email de contacto: `info@proyecto-sim.com` → tu email

### 2. Integrar Google Analytics (si lo deseas)
Edita `cookie-consent.js` línea ~97:
```javascript
// Aquí puedes agregar código de Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'TU_GA_ID');
```

### 3. Agregar Más Información Legal
- Crea `terminos-servicio.html`
- Crea `privacidad.html`
- Enlázalas desde el footer

### 4. Footer Actualizado
Considera agregar en el footer:
```html
<a href="politica-cookies.html">🍪 Política de Cookies</a>
<a href="privacidad.html">🔐 Privacidad</a>
```

---

## 🧪 Prueba Local

1. **Abre cualquier página en tu navegador**
2. **Verás el banner de cookies** en la parte inferior
3. **Haz clic en "Aceptar"** o "Rechazar"
4. **Recarga la página**: El banner no aparecerá (consentimiento recordado)
5. **Abre DevTools (F12)** → Application → Cookies → Verifica `sim-cookie-consent`

---

## 🚀 Deploy en Vercel

Cuando subes a GitHub/Vercel:
1. Todos los archivos se incluyen automáticamente
2. Vercel detecta que es un sitio estático
3. El banner funcionará igual en producción

---

## 📞 Soporte RGPD

**Contacto para solicitudes de datos:**
- Email: `info@proyecto-sim.com` (actualiza esto)
- Tiempo de respuesta: Legal está dentro de 30 días

**Ley aplicable:**
- 🇪🇺 RGPD (Reglamento General de Protección de Datos)
- 🇪🇸 LORG (Ley Orgánica de Protección de Datos Personales)

---

## ✨ Resumen

Tu sitio web ahora es **RGPD compliant** ✅

- ✅ Banner de consentimiento automático
- ✅ Política de cookies clara
- ✅ Respeto a preferencias del usuario
- ✅ Almacenamiento seguro de consentimiento
- ✅ Información legal accesible
- ✅ Responsive en todos los dispositivos

**El usuario siempre está en control de sus datos.**

---

*Última actualización: 30 de marzo de 2026*
